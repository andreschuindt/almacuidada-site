// A PONTE — links de checkout devem ser incluídos somente após aprovação comercial.
const checkoutLinks = { online: '', presencial: '' };
const instagram = 'https://www.instagram.com/soualmacuidada/';
const header = document.getElementById('header');
const progress = document.getElementById('progress');
const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('site-nav');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if(progress) progress.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + '%';
  if(header) header.classList.toggle('scrolled', window.scrollY > 28);
}
window.addEventListener('scroll',updateScrollUI,{passive:true});
updateScrollUI();
if(toggle && nav){
  toggle.addEventListener('click', function(){
    const opened = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!opened));
    toggle.setAttribute('aria-label', opened ? 'Abrir menu' : 'Fechar menu');
    nav.classList.toggle('is-open', !opened);
  });
  nav.querySelectorAll('a').forEach(function(link){link.addEventListener('click',function(){
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Abrir menu');
  });});
}
if(!reduceMotion && 'IntersectionObserver' in window){
  const observer=new IntersectionObserver(function(entries){
    entries.forEach(function(entry){ if(entry.isIntersecting){
      entry.target.classList.add('is-visible'); observer.unobserve(entry.target);
    }});
  },{rootMargin:'0px 0px -8% 0px',threshold:0.06});
  document.querySelectorAll('[data-reveal]').forEach(function(el){observer.observe(el);});
}else{
  document.querySelectorAll('[data-reveal]').forEach(function(el){el.classList.add('is-visible');});
}
document.querySelectorAll('[data-plan]').forEach(function(link){
  const plan=link.getAttribute('data-plan'); const url=checkoutLinks[plan];
  if(url && url.indexOf('https://') === 0){
    link.href=url;link.textContent='Fazer minha inscrição ↗';link.removeAttribute('target');
  }else{link.href=instagram;}
});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
