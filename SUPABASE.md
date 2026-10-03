# Publishing Seerati AI with Supabase

**What Supabase does here:** it hosts the backend — the AI Edge Function (keeps your Gemini/Claude/OpenAI key secret) and Postgres for rate limiting.
**What it does not do:** host the website itself. Supabase has no static-site hosting (as far as I know, Storage serves HTML as plain text). Put `public/` on any static host: Cloudflare Pages, Netlify, Vercel, or GitHub Pages.

## 1. Backend (Supabase)
```bash
npm install
npx supabase login
npx supabase link --project-ref <your-project-ref>
npx supabase db push                      # creates rate_limits table + rate_hit() function
npx supabase secrets set AI_PROVIDER=gemini GEMINI_API_KEY=xxxx ALLOWED_ORIGIN=https://your-domain.com
npx supabase functions deploy ai --no-verify-jwt
```
Function URL: `https://<project-ref>.supabase.co/functions/v1/ai`
(`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are injected automatically; never put the service key in the frontend.)

Optional secrets: `RATE_PER_MIN`, `RATE_PER_DAY`, `TURNSTILE_SECRET`, `CLAUDE_MODEL`, `GEMINI_MODEL`, `ANTHROPIC_API_KEY`, `OPENAI_API_KEY`.

## 2. Frontend (any static host)
1. In `public/config.js` set `apiUrl:"https://<project-ref>.supabase.co/functions/v1/ai"`.
2. Build with the API origin allowed in the CSP:
   `API_ORIGIN=https://<project-ref>.supabase.co SITE=https://your-domain.com npm run build:seo`
3. Upload the `public/` folder to your static host (the `_headers` file works on Cloudflare Pages and Netlify; on other hosts copy those headers into the host's config).

## Security notes
- The function is public (`verify_jwt=false`). `ALLOWED_ORIGIN` only stops other websites from calling it in a browser; it is **not** authentication. Real abuse protection = Turnstile (`TURNSTILE_SECRET` + site key in `config.js`, and build with `TURNSTILE=1`) plus the per-IP limits in Postgres.
- Rate limiting fails closed: if the database is unreachable the function returns an error instead of serving unlimited AI calls.
- After editing anything in `functions/_lib/`, run `npm run sync:supabase` (a test fails if the copies drift).
- Before launch, set a spending limit/quota on your AI provider key.

## Later (optional)
Supabase Auth + Postgres with Row Level Security can store users' saved resumes across devices. It is not built yet; today resumes stay in the browser.
