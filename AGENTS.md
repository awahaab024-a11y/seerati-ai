# Base44 dev environment notes

Cloudflare Pages app (static frontend + Pages Functions). Runs with wrangler in Docker.

## How to run
`docker compose -f docker-compose.base44.yml up -d` — serves the app on host port 3000.

## How it works
- Service `web`: `node:22` image, repo bind-mounted at `/app`, runs
  `npx wrangler pages dev public --port 3000 --ip 0.0.0.0 --compatibility-date=2025-01-01`
- Wrangler auto-detects the `functions/` directory (Pages Functions), so `/api/ai` works locally.
- Secrets: platform delivers `/run/base44/app.env`; the startup command copies it to `.dev.vars`
  (gitignored) because wrangler reads `.dev.vars` for the Pages Function `env` object — process env
  alone is NOT enough for the AI key.

## Gotchas
- Use the full `node:22` image, NOT `node:22-slim`: workerd does its own TLS and the slim image
  lacks `ca-certificates`, so all outbound HTTPS calls from `/api/ai` fail with
  "TLS peer's certificate is not trusted".
- Edits to `public/` are served immediately (wrangler serves static assets live). No build step.

## Verify
- Site: `curl -s http://localhost:3000/` → 200, Arabic RTL page (سيرتي AI).
- AI: `curl -s -X POST http://localhost:3000/api/ai -H 'Content-Type: application/json' -d '{"task":"jd","jd":"..."}'`
  → 200 with JSON result (needs a real GEMINI_API_KEY; without it returns 503 `not_configured`).
- Tests: `npm test` (9 API tests).
