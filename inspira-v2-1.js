/* Projeto INSPIRA 5.0 — comportamento mínimo, analytics e UTMs */
(function(){
  'use strict';
  const menu=document.getElementById('menu');
  const nav=document.getElementById('navlinks');
  if(menu&&nav){
    menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');menu.textContent=open?'×':'☰';});
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');menu.textContent='☰';}));
  }
  const utmKeys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
  const current=new URLSearchParams(location.search);const stored={};
  try{utmKeys.forEach(k=>{const incoming=current.get(k);if(incoming)sessionStorage.setItem('inspira_'+k,incoming);const value=sessionStorage.getItem('inspira_'+k);if(value)stored[k]=value;});}catch(_){}
  const track=(name,data={})=>{if(typeof window.va==='function')window.va('event',{name,data:{...stored,...data}});};
  document.addEventListener('click',e=>{const el=e.target.closest('[data-event]');if(!el)return;const href=el.getAttribute('href')||'';track(el.dataset.event,{destination:href.startsWith('#')?'internal':'external'});});
  document.querySelectorAll('[data-checkout]').forEach(link=>{link.addEventListener('click',()=>{try{const url=new URL(link.href);Object.entries(stored).forEach(([k,v])=>url.searchParams.set(k,v));link.href=url.toString();}catch(_){}},{capture:true});});
  if('IntersectionObserver' in window){const observed=new Set();const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;const id=entry.target.id;if(id&&!observed.has(id)){observed.add(id);track('section_view',{section:id});}io.unobserve(entry.target);});},{threshold:.3});document.querySelectorAll('main section[id]').forEach(s=>io.observe(s));}
  const mobileCta=document.getElementById('mobileCta');const hero=document.querySelector('.hero');
  const syncMobile=()=>{if(!mobileCta)return;const mobile=matchMedia('(max-width:1000px)').matches;const threshold=hero?Math.max(420,hero.offsetHeight*.72):500;mobileCta.hidden=!(mobile&&scrollY>threshold);};
  syncMobile();addEventListener('scroll',syncMobile,{passive:true});addEventListener('resize',syncMobile,{passive:true});
})();