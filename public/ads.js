(()=>{
const C=window.SEERATI_CONFIG||{},A=C.ads||{},K="seerati_consent",en=document.documentElement.lang==="en";
const X=en?{t:"We use advertising cookies only if you agree. Saving your progress in your browser is essential and needs no consent.",a:"Accept",r:"Reject",l:"Details"}:{t:"نستخدم ملفات تعريف الارتباط الإعلانية فقط بعد موافقتك. حفظ تقدمك في متصفحك ضروري ولا يحتاج موافقة.",a:"أوافق",r:"أرفض",l:"التفاصيل"};
const valid=()=>A.enabled&&/^ca-pub-\d+$/.test(A.client||"");
const get=()=>{try{return JSON.parse(localStorage.getItem(K))}catch(e){return null}};
const put=v=>{try{localStorage.setItem(K,JSON.stringify(v))}catch(e){}};
let loaded=false;
function load(){if(loaded)return;loaded=true;const s=document.createElement("script");s.async=true;s.crossOrigin="anonymous";s.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client="+encodeURIComponent(A.client);document.head.appendChild(s)}
function scan(root){
  if(!valid())return;const c=get();if(!c||!c.ads)return;load();
  (root||document).querySelectorAll("[data-ad]").forEach(el=>{
    if(el.dataset.done)return;const sl=(A.slots||{})[el.dataset.ad];
    if(!sl||!sl.on||!/^\d+$/.test(sl.id||""))return;
    if(el.dataset.ad==="sidebar"&&!matchMedia("(min-width:1100px)").matches)return;
    el.dataset.done="1";el.classList.add("on");
    const l=document.createElement("small");l.textContent=en?"Advertisement":"إعلان";
    const i=document.createElement("ins");i.className="adsbygoogle";i.style.display="block";
    i.setAttribute("data-ad-client",A.client);i.setAttribute("data-ad-slot",sl.id);i.setAttribute("data-ad-format","auto");i.setAttribute("data-full-width-responsive","true");
    el.append(l,i);try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}
  });
}
function banner(){
  if(document.getElementById("cb"))return;
  const d=document.createElement("div");d.id="cb";d.setAttribute("role","dialog");d.setAttribute("aria-label",X.t);
  const p=document.createElement("p");p.textContent=X.t+" ";const a=document.createElement("a");a.href="/cookies";a.textContent=X.l;p.append(a);
  const r=document.createElement("div");r.className="row";
  const mk=(t,v)=>{const b=document.createElement("button");b.className="sec";b.textContent=t;b.onclick=()=>{const was=get();put({ads:v,t:Date.now()});d.remove();if(v)scan(document);else if(was&&was.ads)location.reload()};return b};
  r.append(mk(X.r,false),mk(X.a,true));d.append(p,r);document.body.append(d);
}
window.seeratiAds={scan};
document.addEventListener("click",e=>{if(e.target.closest("[data-consent-open]")){e.preventDefault();banner()}});
if(valid()){document.body.classList.add("ads-on");if(get()===null)banner();else scan(document)}
})();
