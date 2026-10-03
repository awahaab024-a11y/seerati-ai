// Worker entry for Workers-with-Static-Assets deploys (e.g. temporary preview accounts).
// Routes /api/ai to the Pages Function handler (functions/api/ai.js) and serves
// everything else from the public/ static assets binding. Keeps the Pages
// project layout (wrangler.toml + functions/) fully intact for production.
import { onRequestPost, onRequest } from "./functions/api/ai.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/ai") {
      if (request.method === "POST") return onRequestPost({ request, env });
      return onRequest(); // 405 method_not_allowed
    }
    return env.ASSETS.fetch(request);
  }
};
