// Ads are OFF by default. To enable: set enabled:true, your AdSense client id, and a slot id per placement.
// Analytics: anonymous event names only (never resume content). Point endpoint at your own collector and add it to CSP connect-src.
// Turnstile (bot protection): put your site key here AND set TURNSTILE_SECRET on the server.
// AI endpoint. Default "/api/ai" = Cloudflare Pages Function. For Supabase use: https://<project-ref>.supabase.co/functions/v1/ai
window.SEERATI_CONFIG={apiUrl:"/api/ai",turnstile:{siteKey:""},analytics:{enabled:false,endpoint:""},ads:{enabled:false,client:"",slots:{
  top:{on:true,id:""},        // top banner (landing/blog pages)
  incontent:{on:true,id:""},  // inside content
  sidebar:{on:true,id:""},    // desktop only (>=1100px)
  bottom:{on:true,id:""}      // end of content (mobile-friendly, not fixed)
}}};
