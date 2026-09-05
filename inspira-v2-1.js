(function(){
  const root=document.querySelector('#plataforma .platform-gallery-card');
  if(!root)return;
  const track=root.querySelector('#carouselTrack');
  const dotsWrap=root.querySelector('#carouselDots');
  const prevBtn=root.querySelector('.carousel-arrow.prev');
  const nextBtn=root.querySelector('.carousel-arrow.next');
  const slides=Array.from(track.querySelectorAll('.carousel-slide'));
  let currentIndex=0;
  let autoPlay;
  const maxIndex=slides.length-1;

  function renderDots(){
    dotsWrap.innerHTML='';
    slides.forEach((_,i)=>{
      const dot=document.createElement('button');
      dot.type='button';
      dot.setAttribute('aria-label','Ir para imagem '+(i+1));
      if(i===currentIndex)dot.classList.add('active');
      dot.addEventListener('click',()=>{currentIndex=i;update();restart();});
      dotsWrap.appendChild(dot);
    });
  }
  function update(){
    track.style.transform='translateX(-'+(currentIndex*100)+'%)';
    Array.from(dotsWrap.querySelectorAll('button')).forEach((dot,i)=>dot.classList.toggle('active',i===currentIndex));
    prevBtn.disabled=currentIndex===0;
    nextBtn.disabled=currentIndex===maxIndex;
  }
  function start(){
    if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){clearInterval(autoPlay);return;}
    clearInterval(autoPlay);
    autoPlay=setInterval(()=>{currentIndex=currentIndex<maxIndex?currentIndex+1:0;update();},4800);
  }
  function restart(){start();}
  prevBtn.addEventListener('click',()=>{if(currentIndex>0){currentIndex--;update();restart();}});
  nextBtn.addEventListener('click',()=>{currentIndex=currentIndex<maxIndex?currentIndex+1:0;update();restart();});
  root.addEventListener('mouseenter',()=>clearInterval(autoPlay));
  root.addEventListener('mouseleave',start);
  root.addEventListener('focusin',()=>clearInterval(autoPlay));
  root.addEventListener('focusout',start);
  root.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')prevBtn.click();if(e.key==='ArrowRight')nextBtn.click();});
  let touchX=null;
  root.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;clearInterval(autoPlay);},{passive:true});
  root.addEventListener('touchend',e=>{if(touchX===null)return;const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>42){dx<0?nextBtn.click():prevBtn.click();}touchX=null;start();},{passive:true});
  renderDots();update();start();
})();

(function(){
  const menu=document.getElementById('menu');
  const nav=document.getElementById('navlinks');
  if(menu&&nav){
    menu.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      menu.textContent=open?'×':'☰';
      menu.setAttribute('aria-expanded',open?'true':'false');
      menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('open');
      menu.textContent='☰';
      menu.setAttribute('aria-expanded','false');
      menu.setAttribute('aria-label','Abrir menu');
    }));
  }

  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
  }else if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.08});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  }else{
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
  }

  const mobileCta=document.getElementById('mobileCta');
  const hero=document.querySelector('.hero');
  const syncMobileCta=()=>{
    if(!mobileCta)return;
    const mobile=window.matchMedia('(max-width:980px)').matches;
    const pastHero=hero?window.scrollY>Math.max(420,hero.offsetHeight*.72):window.scrollY>500;
    mobileCta.hidden=!(mobile&&pastHero);
  };
  syncMobileCta();
  window.addEventListener('scroll',syncMobileCta,{passive:true});
  window.addEventListener('resize',syncMobileCta,{passive:true});

  document.addEventListener('click',e=>{
    const el=e.target.closest('[data-event]');
    if(!el)return;
    const name=el.getAttribute('data-event');
    if(typeof window.va==='function')window.va('event',{name,data:{destination:el.getAttribute('href')?.startsWith('#')?'internal':'external'}});
  });
})();

/* INSPIRA 2.3 — arte DIARIAMENTE e atualizações aprovadas */
(function(){
  const rev='20260905-production-v23';

  const steps=document.getElementById('como-funciona');
  if(steps)steps.remove();

  const heroSecondary=document.querySelector('[data-event="hero_como_funciona"]');
  if(heroSecondary){
    heroSecondary.href='#plataforma';
    heroSecondary.dataset.event='hero_experiencia';
    heroSecondary.textContent='Conhecer a experiência';
  }

  const firstSlide=document.querySelector('#plataforma #carouselTrack .carousel-slide');
  if(firstSlide){
    firstSlide.innerHTML='<div class="carousel-image carousel-image-direct"><img src="/assets/diariamente-bem-estar-trabalho-carousel-v5.svg?v='+rev+'" alt="Diariamente — Bem-estar no trabalho" width="900" height="1260" loading="eager" decoding="async" fetchpriority="high"></div><h3>Diariamente — bem-estar no trabalho</h3>';
  }

  const agora=document.getElementById('agora');
  if(agora){
    const replacement=document.createElement('section');
    replacement.className='section experience-showcase';
    replacement.id='agora';
    replacement.innerHTML='<div class="container experience-head reveal visible"><span class="eyebrow">Conteúdo que ganha forma</span><h2 class="experience-title">Algumas formas de você viver essa experiência INSPIRA.</h2><p class="experience-lead">Cada pessoa pode encontrar uma porta de entrada diferente: pela leitura, pela pausa, pela reflexão ou por uma jornada de cuidado que acompanha o seu ritmo.</p></div><div class="container experience-grid"><article class="experience-card reveal visible"><div class="experience-photo"><img src="/assets/carrossel-livros-inspiram.webp" alt="Livros e leitura como inspiração para a experiência INSPIRA" width="280" height="280" loading="lazy" decoding="async"></div><div class="experience-body"><span class="experience-number">01</span><h3>Leituras que inspiram</h3><div class="experience-rule"></div><p>Encontre ideias, histórias e provocações que ajudam a olhar para a vida com mais presença, significado e novas possibilidades.</p></div></article><article class="experience-card reveal visible"><div class="experience-photo"><img src="/assets/hero-meditacao.jpg" alt="Prática de pausa e meditação na experiência INSPIRA" width="755" height="604" loading="lazy" decoding="async"></div><div class="experience-body"><span class="experience-number">02</span><h3>Pausas que restauram</h3><div class="experience-rule"></div><p>Práticas simples de respiração, mindfulness e desaceleração para criar pequenos intervalos de cuidado no meio da vida real.</p></div></article><article class="experience-card reveal visible"><div class="experience-photo"><img src="/assets/insights-terapeuticos.jpg" alt="Conteúdo reflexivo e aprendizado guiado no INSPIRA" width="755" height="604" loading="lazy" decoding="async"></div><div class="experience-body"><span class="experience-number">03</span><h3>Reflexões que ampliam caminhos</h3><div class="experience-rule"></div><p>Conteúdos guiados para reconhecer emoções, ampliar perspectivas e transformar aprendizados em movimentos possíveis no cotidiano.</p></div></article><article class="experience-card reveal visible"><div class="experience-photo"><img src="/assets/projeto-inspira-hero-square.webp" alt="Projeto INSPIRA como jornada de leitura, cuidado e comunidade" width="400" height="400" loading="lazy" decoding="async"></div><div class="experience-body"><span class="experience-number">04</span><h3>Uma jornada que acompanha você</h3><div class="experience-rule"></div><p>Curadoria, práticas e comunidade reunidas em um caminho flexível, acolhedor e respeitoso com o tempo que você tem hoje.</p></div></article></div>';
    agora.replaceWith(replacement);
  }

  const style=document.createElement('style');
  style.id='inspira-v23-approved-styles';
  style.textContent=`
#plataforma .carousel-image.carousel-image-direct{width:min(100%,470px)!important;height:auto!important;aspect-ratio:auto!important;background:none!important;background-image:none!important;border:0!important;box-shadow:none!important;overflow:visible!important;display:flex!important;align-items:center;justify-content:center}
#plataforma .carousel-image.carousel-image-direct img{display:block!important;width:100%!important;height:auto!important;aspect-ratio:auto!important;object-fit:contain!important;object-position:center!important;border-radius:26px;box-shadow:0 22px 48px rgba(74,46,76,.17);border:1px solid rgba(137,57,154,.08);background:#f7f2ec}
#agora.experience-showcase{position:relative;overflow:hidden;padding-top:82px;padding-bottom:78px;background:linear-gradient(180deg,#fbf7f1 0%,#f7efe8 100%)}
#agora.experience-showcase:before{content:"";position:absolute;width:480px;height:480px;border-radius:50%;right:-250px;top:-240px;background:radial-gradient(circle,rgba(37,175,162,.10),transparent 70%);pointer-events:none}
#agora .experience-head{position:relative;z-index:2;max-width:1080px;margin:0 auto;text-align:center}
#agora .experience-head .eyebrow{justify-content:center}
#agora .experience-title{max-width:1000px;margin:18px auto 0;font-family:Georgia,"Times New Roman",serif;font-size:clamp(3rem,5vw,5.1rem);line-height:.98;letter-spacing:-.045em;color:#8F4694}
#agora .experience-lead{max-width:840px;margin:24px auto 0;color:#726676;font-size:clamp(1rem,1.45vw,1.25rem);line-height:1.55}
#agora .experience-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:46px}
#agora .experience-card{overflow:hidden;background:#fffdf9;border:1px solid rgba(137,57,154,.11);border-radius:26px;box-shadow:0 18px 42px rgba(70,42,73,.09);transition:transform .22s ease,box-shadow .22s ease}
#agora .experience-card:hover{transform:translateY(-5px);box-shadow:0 26px 58px rgba(70,42,73,.14)}
#agora .experience-photo{aspect-ratio:1/1;overflow:hidden;background:#efe8e1}
#agora .experience-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .5s ease}
#agora .experience-card:hover .experience-photo img{transform:scale(1.025)}
#agora .experience-card:nth-child(2) .experience-photo img{object-position:center 44%}
#agora .experience-card:nth-child(3) .experience-photo img{object-position:center 46%}
#agora .experience-body{position:relative;padding:23px 22px 26px;min-height:228px}
#agora .experience-number{display:inline-flex;margin-bottom:10px;color:#25AFA2;font-size:.76rem;font-weight:900;letter-spacing:.12em}
#agora .experience-body h3{margin:0;font-family:Georgia,"Times New Roman",serif;font-size:1.55rem;line-height:1.08;letter-spacing:-.025em;color:#4A2E4C}
#agora .experience-rule{width:30px;height:2px;margin:13px 0 12px;border-radius:3px;background:linear-gradient(90deg,#25AFA2,#5DD457)}
#agora .experience-body p{margin:0;color:#665B68;font-size:.94rem;line-height:1.62}
@media(max-width:1080px){#agora .experience-grid{grid-template-columns:repeat(2,minmax(0,1fr));max-width:860px;margin-left:auto;margin-right:auto}#agora .experience-body{min-height:205px}}
@media(max-width:640px){#plataforma .carousel-image.carousel-image-direct{width:min(100%,400px)!important}#plataforma .carousel-image.carousel-image-direct img{border-radius:22px}#agora.experience-showcase{padding-top:58px;padding-bottom:58px}#agora .experience-title{font-size:clamp(2.55rem,11vw,3.85rem)}#agora .experience-lead{font-size:1rem}#agora .experience-grid{grid-template-columns:1fr;gap:18px;margin-top:32px}#agora .experience-card{border-radius:22px}#agora .experience-photo{aspect-ratio:1.16/1}#agora .experience-body{padding:20px;min-height:0}#agora .experience-body h3{font-size:1.45rem}}
`;
  document.head.appendChild(style);
})();
