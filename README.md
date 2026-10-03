# سيرتي AI — Seerati AI

موقع ثابت (public/) + Cloudflare Pages Functions (functions/) لإخفاء مفتاح الذكاء الاصطناعي.

## التشغيل محلياً
```
npm install
cp .dev.vars.example .dev.vars   # ضع GEMINI_API_KEY
npm run dev
```
## النشر
```
npx wrangler login
npm run deploy
```
لتوليد صفحات SEO بدومينك: `SITE=https://your-domain.com node tools/build-seo.mjs` (المحتوى في tools/content.mjs).

ثم في لوحة Cloudflare → Pages → Settings → Environment variables أضف كـ Secret:
`GEMINI_API_KEY` (و`AI_PROVIDER=gemini`). لتغيير المزوّد: `AI_PROVIDER=claude|openai` مع المفتاح المناسب.

## الحماية
- المفاتيح في الخادم فقط، والـ prompts في الخادم (لا يمكن استخدام النقطة كوسيط مجاني).
- تحديد معدل لكل IP (دقيقة/يوم). للإنتاج: أنشئ KV باسم RATE_KV (انظر wrangler.toml) وفعّل Cloudflare Rate Limiting/Turnstile.
- عيّن `ALLOWED_ORIGIN` لدومينك. CSP صارم للسكربتات (`style-src` يسمح inline لأن الواجهة تستخدمه).

## قبل الإطلاق
استبدل YOUR-DOMAIN في robots.txt وsitemap.xml، وراجع صفحات الخصوصية والشروط قانونياً.

## الإعلانات (AdSense) — معطّلة افتراضياً
1. عدّل `public/config.js`: `enabled:true` و`client:"ca-pub-..."` و`id` لكل مكان (top/incontent/sidebar/bottom)، ويمكن إيقاف أي مكان بـ `on:false`.
2. ولّد الصفحات مع توسيع CSP: `ADS=1 SITE=https://your-domain.com node tools/build-seo.mjs` (بدون ADS=1 تبقى CSP مشددة ولن تُحمَّل الإعلانات).
3. لا تظهر الإعلانات إلا بعد موافقة المستخدم (شريط الموافقة)، ولا تظهر أبداً داخل النموذج أو المعاينة أو نتائج السيرة؛ فقط في الصفحة الرئيسية وصفحات الهبوط والمدونة.
4. إن كان لديك زوار من EEA/UK/سويسرا فـ Google تشترط CMP معتمداً (TCF) وهذا الشريط وحده لا يكفي لهم.

## الاختبارات والتحليلات وحذف البيانات
- `npm test` — 9 اختبارات لنقطة الـ API (التحقق، الحدود، تبديل المزوّد، حقن التعليمات).
- التحليلات معطّلة؛ فعّلها من `public/config.js` (أسماء أحداث مجهولة فقط، دون أي محتوى سيرة) وأضف نقطة الجمع إلى `connect-src` في `_headers`.
- زر «حذف بياناتي» في التذييل يمسح كل ما حُفظ في المتصفح.
- لإضافة مقال: أضفه في `tools/posts.mjs` ثم شغّل `node tools/build-seo.mjs`.

## إضافات أخيرة
- **نسخ متعددة:** زر «حفظ نسخة» في شاشة النتيجة يحفظ حتى 10 نسخ في المتصفح (فتح/حذف) دون فقد السابق.
- **Word:** زر Word ينزّل ملف .doc يفتح في Word مع اتجاه RTL/LTR.
- **قالب رابع:** Compact للسير الطويلة.
- **Turnstile (اختياري):** ضع `siteKey` في `public/config.js` و`TURNSTILE_SECRET` كـ Secret، ثم ولّد الصفحات بـ `TURNSTILE=1 npm run build:seo` لتوسيع CSP.
- **الخطط:** `functions/_lib/plans.js` جاهز لـ Free/Pro/Enterprise (حدود مختلفة لكل خطة). حالياً الجميع Free؛ عند إضافة الدفع اجعل `planFor()` يتحقق من رمز موقّع على الخادم.

## صفحات المهن
`tools/jobs.mjs` يحتوي 8 مهن (مطوّر ويب، أمن سيبراني، محاسب، تمريض، معلم، مبيعات، خدمة عملاء، مصمم). أضف مهنة بنسخ عنصر وتعبئته بمحتوى فريد (لا تنسخ نص مهنة أخرى)، ثم `npm run build:seo`.

## Supabase
للنشر باستخدام Supabase (الخلفية: Edge Function + Postgres) راجع `SUPABASE.md`. الواجهة نفسها تُرفع على استضافة ثابتة (Cloudflare Pages أو Netlify...).
