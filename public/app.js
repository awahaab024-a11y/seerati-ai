const PC=`.paper{background:#fff;color:#111;width:100%;max-width:794px;margin:auto;padding:36px 40px;font:13px/1.65 Cairo,Tahoma,Arial,sans-serif;box-sizing:border-box;overflow-wrap:anywhere;min-height:900px}
.paper h1{margin:0;font-size:26px}.paper .sub{font-size:15px;color:#444}.paper .ct{font-size:12px;color:#444;margin:4px 0 10px}
.paper h2{font-size:14px;margin:14px 0 6px;letter-spacing:.04em}.paper p{margin:0}.paper ul{margin:4px 0 8px;padding-inline-start:20px}.paper .dt{float:inline-end;color:#555;font-size:12px}
.t-pro h1,.t-pro .sub,.t-pro .ct{text-align:center}.t-pro h2{border-bottom:1.5px solid #222;padding-bottom:2px}
.t-modern{border-top:8px solid #0f766e}.t-modern h1,.t-modern h2{color:#0f766e}.t-modern h2{border-inline-start:4px solid #0f766e;padding-inline-start:8px}
.t-ats{font-family:Arial,Tahoma,sans-serif}.t-ats h2{font-size:13px;text-transform:uppercase}
.t-compact{font-size:12px;line-height:1.5}.t-compact h1{font-size:22px}.t-compact h2{font-size:12px;background:#eee;padding:2px 6px}`;
$pc=document.getElementById("pc");$pc.textContent=PC;
const $=i=>document.getElementById(i),E=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const T={
home:["الرئيسية","Home"],build:["إنشاء CV","Build CV"],ats:["تحليل ATS","ATS Analyzer"],cl:["رسالة تقديم","Cover Letter"],li:["لينكدإن","LinkedIn"],
hT:["أنشئ سيرتك الذاتية الاحترافية بالذكاء الاصطناعي","Build your professional resume with AI"],
hP:["سيرة ذاتية متوافقة مع أنظمة ATS، ورسالة تقديم، وملخص لينكدإن خلال دقائق.","An ATS-friendly resume, cover letter and LinkedIn summary in minutes."],
go:["أنشئ سيرتك الآن","Create your resume now"],how:["كيف تعمل المنصة","How it works"],
st:[["أدخل بياناتك","أضف الوظيفة المستهدفة والوصف الوظيفي","دع الذكاء الاصطناعي يحلل بياناتك","اختر القالب المناسب","راجع سيرتك وعدّلها","نزّل أو اطبع"],["Enter your details","Add the target job and description","Let AI analyze your data","Pick a template","Review and edit","Download or print"]],
why:["لماذا سيرتي AI؟","Why Seerati AI?"],
wl:[["إنشاء سريع","عربي وإنجليزي","4 قوالب","تحليل ATS إرشادي","رسالة تقديم","ملخص لينكدإن","قابل للتعديل","مناسب للطباعة"],["Fast","Arabic & English","4 templates","Guidance ATS analysis","Cover letter","LinkedIn summary","Fully editable","Print-ready"]],
faq:["الأسئلة الشائعة","FAQ"],
fl:[[["هل الذكاء الاصطناعي يخترع الخبرات؟","لا. يُطلب منه استخدام بياناتك فقط وعدم اختلاق وظائف أو أرقام. راجع النتيجة دائماً."],["هل تضمن المنصة اجتياز ATS؟","لا. التحليل إرشادي ولا يضمن اجتياز أي نظام."],["هل يمكن تعديل السيرة بعد إنشائها؟","نعم، كل قسم قابل للتعديل مع تراجع وإعادة."]],[["Does AI invent experience?","No. It is told to use only your data. Always review the result."],["Does it guarantee passing ATS?","No. The analysis is guidance only."],["Can I edit after generating?","Yes, every section is editable with undo/redo."]]],
s0:["البيانات الشخصية","Personal"],s1:["الخبرات والتعليم","Experience"],s2:["المهارات والمشاريع","Skills"],s3:["الوظيفة المستهدفة","Target job"],
name:["الاسم الكامل","Full name"],title:["المسمى الوظيفي","Job title"],email:["البريد الإلكتروني","Email"],phone:["الهاتف","Phone"],loc:["المدينة / الدولة","Location"],links:["روابط (LinkedIn / Portfolio / GitHub)","Links (LinkedIn / Portfolio / GitHub)"],
summary:["ملخص مهني (اختياري)","Professional summary (optional)"],exp:["الخبرات العملية","Work experience"],edu:["التعليم","Education"],
co:["الشركة","Company"],start:["البداية","Start"],end:["النهاية","End"],desc:["المهام والإنجازات (سطر لكل نقطة)","Responsibilities & achievements (one per line)"],
sch:["المؤسسة","Institution"],deg:["الدرجة / التخصص","Degree / Major"],
skills:["المهارات والأدوات (مفصولة بفاصلة)","Skills & tools (comma separated)"],certs:["الشهادات (سطر لكل شهادة)","Certifications (one per line)"],projects:["المشاريع (سطر لكل مشروع)","Projects (one per line)"],langs:["اللغات (مثال: العربية - أم)","Languages"],
ttl:["المسمى المستهدف","Target job title"],ind:["المجال","Industry"],company:["الشركة المستهدفة","Target company"],jd:["الوصف الوظيفي (Job Description)","Job description"],
add:["+ إضافة","+ Add"],del:["حذف","Remove"],next:["التالي","Next"],back:["السابق","Back"],gen:["✨ أنشئ بالذكاء الاصطناعي","✨ Generate with AI"],skip:["معاينة بدون AI","Preview without AI"],
sum:["الملخص المهني","Summary"],cert:["الشهادات","Certifications"],proj:["المشاريع","Projects"],lg:["اللغات","Languages"],sk:["المهارات","Skills"],
tp:[["كلاسيكي","حديث","ATS بسيط","مدمج"],["Professional","Modern","Minimal ATS","Compact"]],sv:["💾 حفظ نسخة","💾 Save version"],lv:["فتح","Open"],
edit:["التحرير","Edit"],undo:["↶ تراجع","↶ Undo"],redo:["↷ إعادة","↷ Redo"],print:["طباعة / PDF","Print / PDF"],copy:["نسخ","Copy"],dl:["تنزيل","Download"],
imp:["تحسين","Improve"],sht:["اختصار","Shorten"],exd:["توسيع","Expand"],trn:["ترجمة","Translate"],
an:["تحليل الوصف الوظيفي","Analyze job description"],score:["التوافق التقريبي","Approx. compatibility"],mt:["كلمات مطابقة","Matched keywords"],ms:["كلمات ناقصة (أضفها فقط إن كانت لديك فعلاً)","Missing keywords (add only if true)"],sg:["اقتراحات","Suggestions"],
dis:["تحليل إرشادي مبني على النص والوصف الوظيفي، ولا يضمن اجتياز أي نظام ATS محدد.","Guidance based on text and job description; it does not guarantee passing any specific ATS."],
crit:[["الكلمات المفتاحية","مطابقة المسمى","هيكل الأقسام","بيانات التواصل","وضوح الصياغة"],["Keywords","Title match","Sections","Contact info","Readability"]],
emp:["ابدأ بإضافة بياناتك لإنشاء سيرتك الذاتية.","Start by adding your details to create your resume."],start2:["ابدأ الآن","Start now"],
wipe:["حذف بياناتي","Delete my data"],wq:["سيتم حذف كل بياناتك المحفوظة في هذا المتصفح. متابعة؟","All data saved in this browser will be deleted. Continue?"],retry:["إعادة المحاولة","Retry"],close:["إغلاق","Close"],done:["تم تجهيز سيرتك الذاتية ✓","Your resume is ready ✓"],
er:["حدث خطأ أثناء المعالجة. حاول مرة أخرى.","Something went wrong. Please try again."],eq:["تم بلوغ حد الاستخدام مؤقتاً. حاول بعد قليل.","Usage limit reached. Try again shortly."],eg:["ميزة الذكاء الاصطناعي غير متاحة أو لم تُمنح الإذن.","AI is unavailable or permission was not granted."],
val:["أدخل الاسم والبريد وقسماً واحداً على الأقل (خبرة/تعليم/مهارات).","Enter name, email and at least one of experience/education/skills."],
ld:[["جاري تحليل خبراتك...","جاري تحسين الكلمات المفتاحية...","جاري إعداد السيرة الذاتية..."],["Analyzing your experience...","Optimizing keywords...","Preparing your resume..."]],
clg:["أنشئ رسالة التقديم","Generate cover letter"],lig:["أنشئ ملخص لينكدإن","Generate LinkedIn summary"],
lv:[["احترافية","مختصرة","للكلمات المفتاحية"],["Professional","Short","Keyword-rich"]],
priv:["بياناتك تُحفظ في متصفحك فقط، وتُرسل لمزوّد الذكاء الاصطناعي عند التوليد. © سيرتي AI","Your data stays in your browser and is sent to the AI provider only when generating. © Seerati AI"]};
let S={lang:"ar",view:"home",step:0,tpl:"pro",tab:"edit",info:{},summary:"",exp:[{}],edu:[{}],skills:"",certs:"",projects:"",langs:"",target:{},gen:null,cl:"",li:null,versions:[]};
try{Object.assign(S,JSON.parse(localStorage.getItem("seerati")||"{}"))}catch(e){}
if(S.view==="result"&&!S.gen)S.view="build";
const t=k=>T[k][S.lang=="ar"?0:1],save=()=>{try{localStorage.setItem("seerati",JSON.stringify(S))}catch(e){}};
const get=p=>p.split(".").reduce((o,k)=>o==null?o:o[k],S)??"";
function set(p,v){const a=p.split(".");let o=S;a.slice(0,-1).forEach(k=>o=o[k]??(o[k]={}));o[a.pop()]=v}
const L=s=>(s||"").split("\n").map(x=>x.trim()).filter(Boolean),C=s=>(s||"").split(/[\n,،]/).map(x=>x.trim()).filter(Boolean);
const track=(n)=>{const u=(window.SEERATI_CONFIG||{}).analytics;if(!u||!u.enabled||!u.endpoint)return;try{navigator.sendBeacon(u.endpoint,JSON.stringify({e:n,p:location.pathname}))}catch(e){}};
const vers=()=>`<div class="row"><button class="sec sm" data-a="savev">${t("sv")}</button>${S.versions.map(v=>`<span class="chip">${E(v.name)} <button class="sm sec" data-a="loadv" data-v="${v.id}">${t("lv")}</button> <button class="sm sec" data-a="delv" data-v="${v.id}" aria-label="delete">×</button></span>`).join("")}</div>`;
function tsToken(){const k=((window.SEERATI_CONFIG||{}).turnstile||{}).siteKey;if(!k)return Promise.resolve(null);return new Promise((res,rej)=>{const go=()=>{const d=document.createElement("div");d.style.cssText="position:fixed;bottom:8px;inset-inline-end:8px;z-index:50";document.body.appendChild(d);turnstile.render(d,{sitekey:k,callback:x=>{res(x);setTimeout(()=>d.remove(),500)},"error-callback":()=>{d.remove();rej({code:"error"})}})};if(window.turnstile)go();else{const s=document.createElement("script");s.src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";s.async=true;s.onload=go;s.onerror=()=>rej({code:"error"});document.head.appendChild(s)}})}
const toast=m=>{$("tt").textContent=m;setTimeout(()=>$("tt").textContent="",2600)};
const F=(p,k,ml)=>`<label>${t(k)}${ml?`<textarea data-p="${p}">${E(get(p))}</textarea>`:`<input data-p="${p}" value="${E(get(p))}" ${/email|phone|links/.test(p)?'dir="ltr"':""}>`}</label>`;
/* history */
let H=[],hp=-1,ht;const hpush=()=>{const s=JSON.stringify(S.gen);if(H[hp]===s)return;H=H.slice(0,hp+1);H.push(s);hp=H.length-1};
/* resume data */
function rd(){const g=S.gen||{};return{info:S.info,summary:g.summary??S.summary,exp:S.exp.map((x,i)=>({...x,b:L(g.exp?.[i]??x.text)})).filter(x=>x.title||x.co||x.b.length),edu:S.edu.filter(e=>e.school||e.deg),sk:C(g.skills??S.skills),certs:L(S.certs),projects:L(S.projects),langs:L(S.langs)}}
function paper(){const r=rd(),i=r.info,d=S.lang=="ar"?"rtl":"ltr",sec=(k,b)=>b?`<h2>${t(k)}</h2>${b}`:"";
const ul=a=>a.length?`<ul>${a.map(x=>`<li>${E(x.replace(/^[•\-*]\s*/,""))}</li>`).join("")}</ul>`:"";
return`<div class="paper t-${S.tpl}" dir="${d}"><h1>${E(i.name)}</h1><div class="sub">${E(i.title)}</div><div class="ct">${[i.email,i.phone,i.loc,i.links].filter(Boolean).map(x=>`<bdi>${E(x)}</bdi>`).join(" • ")}</div>`+
sec("sum",r.summary&&`<p>${E(r.summary)}</p>`)+sec("exp",r.exp.map(x=>`<div><b>${E(x.title)}</b>${x.co?" — "+E(x.co):""}<span class="dt"><bdi>${E([x.start,x.end].filter(Boolean).join(" – "))}</bdi></span>${ul(x.b)}</div>`).join(""))+
sec("edu",r.edu.map(e=>`<div><b>${E(e.deg)}</b>${e.school?" — "+E(e.school):""}<span class="dt"><bdi>${E([e.start,e.end].filter(Boolean).join(" – "))}</bdi></span></div>`).join(""))+
sec("sk",r.sk.length&&`<p>${r.sk.map(E).join(" • ")}</p>`)+sec("cert",ul(r.certs))+sec("proj",ul(r.projects))+sec("lg",ul(r.langs))+`</div>`}
const plain=()=>{const r=rd();return[r.info.name,r.info.title,r.summary,...r.exp.flatMap(x=>[x.title,x.co,...x.b]),...r.edu.flatMap(e=>[e.deg,e.school]),...r.sk,...r.certs,...r.projects,...r.langs].filter(Boolean).join("\n")};
/* ATS */
function atsCalc(){const r=rd(),tx=plain().toLowerCase(),jd=S.gen?.jd||{},has=k=>tx.includes(k.toLowerCase());
const kws=[...new Set([...(jd.required||[]),...(jd.preferred||[]),...(jd.keywords||[])].map(s=>String(s).trim()).filter(Boolean))],m=kws.filter(has),x=kws.filter(k=>!has(k));
const tw=(S.target.title||jd.title||"").toLowerCase().split(/\s+/).filter(w=>w.length>2),tm=tw.length?tw.filter(w=>tx.includes(w)).length/tw.length:null;
const secs=[r.summary,r.exp.length,r.edu.length,r.sk.length].filter(Boolean).length/4,ct=[r.info.name,r.info.email,r.info.phone].filter(Boolean).length/3;
const bl=r.exp.flatMap(e=>e.b),rdb=bl.length?bl.filter(b=>b.length>=30&&b.length<=220).length/bl.length:0;
const rows=[[kws.length?m.length/kws.length:null,45],[tm,15],[secs,15],[ct,10],[rdb,15]],u=rows.filter(a=>a[0]!=null),w=u.reduce((a,b)=>a+b[1],0);
const sg=[];const ar=S.lang=="ar";
if(!kws.length)sg.push(ar?"أضف الوصف الوظيفي واضغط «تحليل الوصف الوظيفي».":"Add a job description and run the analyzer.");
if(x.length)sg.push((ar?"إن كانت لديك خبرة فعلية، أضف: ":"If true for you, add: ")+x.slice(0,6).join("، "));
if(!/\d/.test(bl.join(" ")))sg.push(ar?"أضف أرقاماً حقيقية للإنجازات إن وُجدت.":"Add real numbers to achievements if you have them.");
if(!r.summary)sg.push(ar?"أضف ملخصاً مهنياً.":"Add a professional summary.");
if(rdb<.7&&bl.length)sg.push(ar?"اجعل كل نقطة بين 30 و220 حرفاً تقريباً.":"Keep each bullet roughly 30–220 characters.");
return{score:Math.round(u.reduce((a,b)=>a+b[0]*b[1],0)/w*100),rows:rows.map(a=>a[0]),m,x,sg}}
/* AI */
async function ai(task,payload){const tk=await tsToken();const r=await fetch(((window.SEERATI_CONFIG||{}).apiUrl)||"/api/ai",{method:"POST",headers:{"Content-Type":"application/json",...(tk?{"X-Turnstile-Token":tk}:{})},body:JSON.stringify({task,lang:S.lang,...payload})});const j=await r.json().catch(()=>({}));if(!r.ok)throw{code:j.code||"error"};return j.result}
const data=()=>JSON.stringify({info:S.info,summary:S.summary,exp:S.exp,edu:S.edu,skills:S.skills,certs:S.certs,projects:S.projects,langs:S.langs,target:S.target});
async function run(fn,msgs){const o=$("ld");o.hidden=false;let i=0;const sh=m=>o.innerHTML=`<div class="box"><div class="spin"></div><p>${E(m)}</p></div>`;sh(msgs[0]);const iv=setInterval(()=>sh(msgs[Math.min(++i,msgs.length-1)]),2600);
try{await fn();clearInterval(iv);o.hidden=true;toast(t("done"))}catch(e){clearInterval(iv);const c=e&&e.code;o.innerHTML=`<div class="box" role="alert"><p>${t(c==="rate_limited"?"eq":(c==="not_granted"||c==="not_configured")?"eg":"er")}</p><button data-a="retry">${t("retry")}</button> <button class="sec" data-a="close">${t("close")}</button></div>`;run.f=()=>run(fn,msgs)}}
/* actions */
const valid=()=>{const i=S.info;if(i.name&&i.email&&(S.exp.some(x=>x.title||x.co)||S.edu.some(e=>e.school)||S.skills))return true;toast(t("val"));return false};
const A={
nav:v=>{S.view=v;render()},
savev:()=>{const{versions,...d}=S;S.versions=[{id:Date.now(),name:(S.info.name||"CV")+" · "+new Date().toLocaleDateString(),data:JSON.stringify(d)},...S.versions].slice(0,10);render();toast("✓")},
loadv:v=>{const x=S.versions.find(a=>String(a.id)===v);if(!x)return;Object.assign(S,JSON.parse(x.data),{view:"result"});H=[];hp=-1;hpush();render()},
delv:v=>{S.versions=S.versions.filter(a=>String(a.id)!==v);render()},
word:()=>{if(!valid())return;const b=new Blob([`<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="utf-8"><title>${E(S.info.name)}</title><style>${PC}</style></head><body>${paper()}</body></html>`],{type:"application/msword"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="resume.doc";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1500)},wipe:()=>{if(!confirm(t("wq")))return;try{localStorage.removeItem("seerati")}catch(e){}location.href="/"},lang:()=>{S.lang=S.lang=="ar"?"en":"ar";render()},step:v=>{S.step=+v;render()},start:()=>{S.view="build";render()},
add:v=>{S[v].push({});render()},rm:v=>{const[l,i]=v.split(":");S[l].splice(+i,1);if(!S[l].length)S[l].push({});render()},
tpl:v=>{S.tpl=v;track("template_selected");render()},tab:v=>{S.tab=v;render()},close:()=>$("ld").hidden=true,retry:()=>run.f(),
gen:()=>{if(!valid())return;run(async()=>{const g=await ai("generate",{data:data()});
g.exp=(g.exp||[]).map(x=>Array.isArray(x)?x.join("\n"):x);track("cv_generated");S.gen=g;H=[];hp=-1;hpush();S.view="result";S.tab="edit";render()},L2("ld"))},
skip:()=>{if(!valid())return;S.gen={};H=[];hp=-1;hpush();S.view="result";render()},
act:async v=>{const[k,p]=v.split("|"),src=get(p)||(p.startsWith("gen.exp.")?get("exp."+p.split(".")[2]+".text"):"");if(!src)return;
run(async()=>{set(p,await ai("rewrite",{kind:k,text:src}));hpush();save();render()},L2("ld"))},
undo:()=>{if(hp>0){S.gen=JSON.parse(H[--hp]);render()}},redo:()=>{if(hp<H.length-1){S.gen=JSON.parse(H[++hp]);render()}},
print:()=>{if(valid()){track("pdf_exported");try{window.print()}catch(e){toast(t("er"))}}},
copy:async()=>{if(!valid())return;try{await navigator.clipboard.writeText(plain());toast("✓")}catch(e){toast(t("er"))}},
cp:async v=>{try{await navigator.clipboard.writeText(get(v));toast("✓")}catch(e){toast(t("er"))}},
dl:()=>{if(!valid())return;const b=new Blob([`<!DOCTYPE html><html dir="${S.lang=="ar"?"rtl":"ltr"}"><head><meta charset="utf-8"><title>${E(S.info.name)}</title><style>${PC}@page{size:A4;margin:12mm}</style></head><body>${paper()}</body></html>`],{type:"text/html"}),a=document.createElement("a");a.href=URL.createObjectURL(b);a.download="resume.html";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1500)},
jd:()=>{if(!S.target.jd)return toast(t("val"));track("ats_analysis_started");run(async()=>{S.gen=S.gen||{};S.gen.jd=await ai("jd",{jd:S.target.jd});hpush();save();render()},L2("ld"))},
clg:()=>run(async()=>{track("cover_letter_generated");S.cl=await ai("cover",{data:data()});render()},L2("ld")),
lig:()=>run(async()=>{track("linkedin_generated");S.li=await ai("linkedin",{data:data()});render()},L2("ld"))};
function L2(k){return T[k][S.lang=="ar"?0:1]}
/* views */
const need=()=>!(S.info.name&&(S.exp.some(x=>x.title||x.co)||S.skills))?`<div class="card" style="text-align:center"><p>${t("emp")}</p><button data-a="start">${t("start2")}</button></div>`:"";
const V={
home:()=>`<section class="hero"><h1>${t("hT")}</h1><p>${t("hP")}</p><button data-a="start">${t("go")}</button></section>
<h2>${t("how")}</h2><div class="g3">${L2("st").map((s,i)=>`<div class="card"><b>${i+1}.</b> ${s}</div>`).join("")}</div>
<div data-ad="incontent"></div><h2>${t("why")}</h2><p>${L2("wl").map(x=>`<span class="chip">${x}</span>`).join("")}</p>
<h2>${t("faq")}</h2><div class="card">${L2("fl").map(q=>`<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join("")}</div>`,
build:()=>{const s=S.step,sp=`<div class="stp">${[0,1,2,3].map(i=>`<span class="${i==s?"on":""}">${i+1}. ${t("s"+i)}</span>`).join("")}</div>`;let b="";
if(s==0)b=`<div class="g2">${F("info.name","name")}${F("info.title","title")}${F("info.email","email")}${F("info.phone","phone")}${F("info.loc","loc")}${F("info.links","links")}</div>${F("summary","summary",1)}`;
if(s==1)b=`<h3>${t("exp")}</h3>`+S.exp.map((x,i)=>`<div class="card"><div class="g2">${F(`exp.${i}.title`,"title")}${F(`exp.${i}.co`,"co")}${F(`exp.${i}.start`,"start")}${F(`exp.${i}.end`,"end")}</div>${F(`exp.${i}.text`,"desc",1)}<button class="sec sm" data-a="rm" data-v="exp:${i}">${t("del")}</button></div>`).join("")+`<button class="sec" data-a="add" data-v="exp">${t("add")}</button><h3>${t("edu")}</h3>`+S.edu.map((x,i)=>`<div class="card"><div class="g2">${F(`edu.${i}.school`,"sch")}${F(`edu.${i}.deg`,"deg")}${F(`edu.${i}.start`,"start")}${F(`edu.${i}.end`,"end")}</div><button class="sec sm" data-a="rm" data-v="edu:${i}">${t("del")}</button></div>`).join("")+`<button class="sec" data-a="add" data-v="edu">${t("add")}</button>`;
if(s==2)b=F("skills","skills",1)+F("certs","certs",1)+F("projects","projects",1)+F("langs","langs",1);
if(s==3)b=`<div class="g2">${F("target.title","ttl")}${F("target.industry","ind")}${F("target.company","company")}</div>${F("target.jd","jd",1)}`;
return`<div class="card">${sp}${b}<div class="row">${s>0?`<button class="sec" data-a="step" data-v="${s-1}">${t("back")}</button>`:""}${s<3?`<button data-a="step" data-v="${s+1}">${t("next")}</button>`:`<button data-a="gen">${t("gen")}</button><button class="sec" data-a="skip">${t("skip")}</button>`}</div></div>`},
result:()=>{const r=rd(),g=S.gen||{};let p="";
if(S.tab=="edit")p=`<label>${t("summary")}<textarea data-p="gen.summary">${E(g.summary??S.summary)}</textarea></label>${act("gen.summary")}`+S.exp.map((x,i)=>x.title||x.co?`<label>${E(x.title)} — ${E(x.co)}<textarea data-p="gen.exp.${i}" style="min-height:110px">${E(g.exp?.[i]??x.text??"")}</textarea></label>${act("gen.exp."+i)}`:"").join("")+`<label>${t("sk")}<textarea data-p="gen.skills">${E(g.skills??S.skills)}</textarea></label>`;
else{const a=atsCalc();p=`<h3>${t("score")}: ${a.score}%</h3><div class="bar" role="img" aria-label="${a.score}%"><i style="width:${a.score}%"></i></div>${a.rows.map((v,i)=>`<div class="note">${L2("crit")[i]}: ${v==null?"—":Math.round(v*100)+"%"}</div>`).join("")}<p class="note">${t("dis")}</p>
<h4>${t("mt")}</h4>${a.m.map(k=>`<span class="chip ok">✓ ${E(k)}</span>`).join("")||"—"}<h4>${t("ms")}</h4>${a.x.map(k=>`<span class="chip no">✗ ${E(k)}</span>`).join("")||"—"}<h4>${t("sg")}</h4><ul>${a.sg.map(s=>`<li>${E(s)}</li>`).join("")}</ul>
<label>${t("jd")}<textarea data-p="target.jd">${E(S.target.jd)}</textarea></label><button data-a="jd">${t("an")}</button>`}
return`<div class="row np">${L2("tp").map((n,i)=>{const k=["pro","modern","ats","compact"][i];return`<button class="${S.tpl==k?"":"sec"}" data-a="tpl" data-v="${k}">${n}</button>`}).join("")}<span style="flex:1"></span><button class="sec" data-a="undo" ${hp>0?"":"disabled"}>${t("undo")}</button><button class="sec" data-a="redo" ${hp<H.length-1?"":"disabled"}>${t("redo")}</button></div>
<div class="card np">${vers()}</div><div class="rs"><div class="card np"><div class="row"><button class="${S.tab=="edit"?"":"sec"}" data-a="tab" data-v="edit">${t("edit")}</button><button class="${S.tab=="ats"?"":"sec"}" data-a="tab" data-v="ats">${t("ats")}</button></div>${p}</div>
<div><div class="pv" id="paper">${paper()}</div><div class="row np"><button data-a="print">${t("print")}</button><button class="sec" data-a="copy">${t("copy")}</button><button class="sec" data-a="dl">${t("dl")}</button><button class="sec" data-a="word">Word</button></div></div></div>`},
cover:()=>need()||`<div class="card">${F("target.company","company")}${F("target.jd","jd",1)}<button data-a="clg">${t("clg")}</button></div>${S.cl?`<div class="card"><textarea data-p="cl" style="min-height:320px">${E(S.cl)}</textarea><button class="sec" data-a="cp" data-v="cl">${t("copy")}</button></div>`:""}`,
li:()=>need()||`<div class="card"><button data-a="lig">${t("lig")}</button></div>${S.li?["pro","short","kw"].map((k,i)=>`<div class="card"><b>${L2("lv")[i]}</b><textarea data-p="li.${k}" style="min-height:140px">${E(S.li[k])}</textarea><button class="sec sm" data-a="cp" data-v="li.${k}">${t("copy")}</button></div>`).join(""):""}`};
V.ats=()=>need()||(S.gen?(S.tab="ats",V.result()):`<div class="card"><p>${t("emp")}</p><button data-a="start">${t("start2")}</button></div>`);
const act=p=>`<div class="row">${["imp","sht","exd","trn"].map(k=>`<button class="sec sm" data-a="act" data-v="${k}|${p}">${t(k)}</button>`).join("")}</div>`;
function render(){const d=S.lang=="ar"?"rtl":"ltr";document.documentElement.dir=d;document.documentElement.lang=S.lang;
const tabs=["home","build","ats","cl","li"],map={home:"home",build:"build",ats:"ats",cl:"cover",li:"li"};
const cur=S.view=="result"?"build":S.view;
$("nv").innerHTML=`<b>${S.lang=="ar"?"سيرتي AI":"Seerati AI"}</b>`+tabs.map(k=>`<button class="${map[k]==cur||(k=="ats"&&cur=="ats")?"on":""}" data-a="nav" data-v="${k=="build"&&S.gen?"result":map[k]}">${t(k)}</button>`).join("")+`<span class="sp2"></span><button data-a="lang" aria-label="Language">${S.lang=="ar"?"EN":"عربي"}</button>`;
$("app").innerHTML=V[S.view]();window.seeratiAds&&seeratiAds.scan($("app"));$("ft").innerHTML=E(t("priv"))+' <br><a href="/cv-maker">CV Maker</a> · <a href="/blog">Blog</a> · <a href="/privacy.html">Privacy</a> · <a href="/terms.html">Terms</a> · <a href="/cookies.html">Cookies</a> · <a href="#" data-consent-open>Ads settings</a> · <button class="sec sm" data-a="wipe">'+E(t("wipe"))+'</button>';save()}
document.addEventListener("click",e=>{const b=e.target.closest("[data-a]");if(b&&A[b.dataset.a])A[b.dataset.a](b.dataset.v)});
document.addEventListener("input",e=>{const p=e.target.dataset&&e.target.dataset.p;if(!p)return;
if(/^gen\.exp\.\d+$/.test(p)){S.gen=S.gen||{};S.gen.exp=S.gen.exp||[]}
const a=p.split(".");if(a[0]=="gen"&&a[1]=="exp"){S.gen.exp[+a[2]]=e.target.value}else set(p,e.target.value);
save();if(S.view=="result"&&a[0]!="target"){$("paper").innerHTML=paper();clearTimeout(ht);ht=setTimeout(hpush,700)}});
if(location.hash.startsWith("#build")){S.view=S.gen?"result":"build";try{const m=decodeURIComponent((location.hash.match(/job=([^&]*)/)||[])[1]||"").slice(0,80);if(m&&!S.target.title)S.target.title=m}catch(e){}}
render();
