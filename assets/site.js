const services=["Offshore Maintenance of Topside Structures","Topside & Subsea Inspection","ROV Services","Diving Supplies & Services","SBM & Pipeline Maintenance","Wellhead Refurbishment & Maintenance","Equipment Hire","Scaffolding Services & Safety Training","Civil Construction","Vessel Charter","Planned Maintenance of Production Facilities","Field Maintenance & Major Overhaul","Crude Oil Pumps, Power Generators & Compressors","Import of Automotive Gas Oil (AGO)","Sales & Distribution of AGO","Sales / Supply of Bonny Light Crude Oil","Hydrocarbon Exploration","Drilling & Completion Services","Geophysical Services","Flowline / Pipeline Laying","Sectional Replacement","Instrumentation","Tank Farm Management","Environmental Marine Intervention"];
var _s=document.getElementById('svc');if(_s)_s.innerHTML=services.map((s,i)=>`<div class="svc"><i>${String(i+1).padStart(2,'0')}</i><span>${s.replace(/&/g,'&amp;')}</span></div>`).join('');

const projects=[
["10\" Clough Creek–Tebidaba pipeline: 10 km sectional replacement to 12\"","Dec 2020"],
["Idu 3LS flowline sectional replacement (4\" × 3.25 km, Sch. 80)","Mar 2025"],
["Idu 3SS flowline sectional replacement (4\" × 3.25 km, Sch. 80)","Mar 2025"],
["Idu 10SS sectional replacement and harvested portion","Mar 2025"],
["Idu 10S sectional replacement and harvested portion","Sep 2025"],
["Egbegoro 12 flowline sectional replacement","Sep 2025"],
["Isoko 3LS and Oleh 4LS restoration and procurement","Aug 2025"],
["4\" × 163 m Sch. 80 Obrikom 12T flowline sectional replacement","Oct 2025"],
["4\" × 2.5 km Obrikom 9 flowline sectional replacement","Nov 2025"],
["17.5 km Idu 6ST flowline (6\", Sch. 120) sectional replacement","Nov 2025"],
["17.5 km Idu V flowline (6\", Sch. 120) sectional replacement","Dec 2025"],
["56 km Clough Creek–Tebidaba sectional replacement site inspections","Jun 2026"],
["4\" × 1,500 m Oshie 12SS/LS flowline laying works","2025"],
["4\" × 3.4 km Oshie 8SS/LS flowline laying works","Dec 2025"],
["Idu NAG manifold modification for production through MP header","Feb 2026"]];
var _r=document.getElementById('rows');if(_r)_r.innerHTML=projects.map((p,i)=>`<div class="row"><span class="n">${String(i+1).padStart(2,'0')}</span><span class="d">${p[0]}</span><span class="st">COMPLETED<em>${p[1]}</em></span></div>`).join('');

const shield='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-5"/></svg>';
const creds=[["Corporate Affairs Commission","Certificate of Incorporation · RC 888936"],["Federal Inland Revenue Service","Tax Clearance Certificate"],["Industrial Training Fund","Certificate of Compliance"],["NSITF","ECS Clearance Certificate"],["National Pension Commission","Pension Clearance Certificate"],["Bureau of Public Procurement","Registration Certificate"],["NCDMB","NOGICJQS Registration"],["Work Code & Safety Assurance","Company HSE Manual"]];
var _c=document.getElementById('creds');if(_c)_c.innerHTML=creds.map(c=>`<div class="cred reveal">${shield}<div><b>${c[0].replace(/&/g,'&amp;')}</b><small>${c[1]}</small></div></div>`).join('');

var _y=document.getElementById('yr');if(_y)_y.textContent=new Date().getFullYear();
document.querySelectorAll('nav.main a').forEach(a=>a.addEventListener('click',()=>document.getElementById('nav').classList.remove('open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function animateCount(el){
  const small=el.querySelector('small');
  const suffix=small?small.outerHTML:'';
  const target=parseInt(el.textContent.replace(/\D/g,''),10);
  if(!target)return;
  if(reduceMotion){el.innerHTML=target+suffix;return}
  const dur=1400,start=performance.now();
  function tick(now){
    const p=Math.min((now-start)/dur,1);
    const eased=1-Math.pow(1-p,3);
    el.innerHTML=Math.round(target*eased)+suffix;
    if(p<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll('.strip').forEach(strip=>{
  const nums=strip.querySelectorAll('.s b');
  const stripIO=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){nums.forEach(animateCount);stripIO.unobserve(e.target)}
  }),{threshold:.4});
  stripIO.observe(strip);
});