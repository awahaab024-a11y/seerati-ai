import { buildPrompt } from "../_shared/prompts.js";
import { callProvider } from "../_shared/providers.js";
import { parseJson, verifyTurnstile } from "../_shared/guard.js";
import { planFor, limitsFor } from "../_shared/plans.js";

type Env = Record<string, string | undefined>;
type Hit = (env: Env, key: string, max: number, ttl: number) => Promise<boolean>;
const MAX = 40000;

const reply = (o: unknown, status: number, cors: Record<string, string>) =>
  new Response(JSON.stringify(o), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", ...cors },
  });

// Returns true when the key is over its limit. Backed by the rate_hit() Postgres function (service role only).
export async function defaultHit(env: Env, key: string, max: number, ttl: number): Promise<boolean> {
  const k = env.SUPABASE_SERVICE_ROLE_KEY || "";
  const r = await fetch(`${env.SUPABASE_URL}/rest/v1/rpc/rate_hit`, {
    method: "POST",
    headers: { "Content-Type": "application/json", apikey: k, Authorization: `Bearer ${k}` },
    body: JSON.stringify({ p_key: key, p_max: max, p_ttl: ttl }),
    signal: AbortSignal.timeout(8000),
  });
  if (!r.ok) throw new Error("rate_rpc_" + r.status);
  return (await r.json()) === true;
}

export async function handle(req: Request, env: Env, hit: Hit = defaultHit): Promise<Response> {
  const cors = {
    "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Headers": "content-type, x-turnstile-token",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });
  if (req.method !== "POST") return reply({ code: "method_not_allowed" }, 405, cors);
  if (env.ALLOWED_ORIGIN && req.headers.get("Origin") !== env.ALLOWED_ORIGIN) return reply({ code: "forbidden" }, 403, cors);
  if (!(req.headers.get("Content-Type") || "").includes("application/json")) return reply({ code: "bad_request" }, 415, cors);

  const raw = await req.text();
  if (raw.length > MAX) return reply({ code: "too_large" }, 413, cors);
  let body: any;
  try { body = JSON.parse(raw); } catch { return reply({ code: "bad_request" }, 400, cors); }
  if (!body || typeof body !== "object") return reply({ code: "bad_request" }, 400, cors);
  const built = buildPrompt(body);
  if (!built) return reply({ code: "bad_request" }, 400, cors);

  const ip = req.headers.get("cf-connecting-ip") || (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "anon";
  if (!(await verifyTurnstile(env, req.headers.get("X-Turnstile-Token"), ip))) return reply({ code: "forbidden" }, 403, cors);

  try {
    const lim = limitsFor(env, await planFor(req, env));
    const now = Date.now();
    if (await hit(env, `m:${ip}:${Math.floor(now / 6e4)}`, lim.perMin, 120)) return reply({ code: "rate_limited" }, 429, cors);
    if (await hit(env, `d:${ip}:${Math.floor(now / 864e5)}`, lim.perDay, 90000)) return reply({ code: "rate_limited" }, 429, cors);
  } catch (e) {
    console.error("rate_error", (e as Error).message);
    return reply({ code: "error" }, 502, cors); // fail closed
  }

  try {
    const text = await callProvider(env, built.prompt, built.json);
    return reply({ result: built.json ? parseJson(text) : String(text).trim() }, 200, cors);
  } catch (e: any) {
    if (e.code === "not_configured") return reply({ code: "not_configured" }, 503, cors);
    if (e.code === "rate_limited") return reply({ code: "rate_limited" }, 429, cors);
    console.error("ai_error", e.code || "", e.message);
    return reply({ code: "error" }, 502, cors);
  }
}
