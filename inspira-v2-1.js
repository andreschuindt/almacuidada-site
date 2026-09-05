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
    const io=new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}
    }),{threshold:.08});
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
    if(typeof window.va==='function'){
      window.va('event',{name,data:{destination:el.getAttribute('href')?.startsWith('#')?'internal':'external'}});
    }
  });
})();

/* INSPIRA 2.4 — painel estático no lugar do carrossel */
(function(){
  const rev='20260904-production-v24-static-platform';

  const steps=document.getElementById('como-funciona');
  if(steps)steps.remove();

  const heroSecondary=document.querySelector('[data-event="hero_como_funciona"]');
  if(heroSecondary){
    heroSecondary.href='#plataforma';
    heroSecondary.dataset.event='hero_experiencia';
    heroSecondary.textContent='Conhecer a experiência';
  }

  const gallery=document.querySelector('#plataforma .platform-gallery-card');
  if(gallery){
    gallery.setAttribute('aria-label','Visão da experiência e dos conteúdos da plataforma');
    gallery.innerHTML=`
      <div class="platform-gallery-header"><span class="eyebrow">Conteúdos reais da plataforma</span></div>
      <figure class="platform-static-panel">
        <div class="platform-static-frame">
          <img src="/assets/comunidade-inspira-banner-1000.webp?v=${rev}" width="1000" height="575" alt="Comunidade INSPIRA e Plataforma Alma Cuidada — curadoria, comunidade, experiências e conteúdos de livroterapia" loading="lazy" decoding="async">
        </div>
        <figcaption>
          <strong>Uma visão da experiência INSPIRA.</strong>
          <span>Conteúdos, curadoria, práticas e comunidade reunidos em um mesmo ecossistema digital de cuidado.</span>
        </figcaption>
      </figure>`;
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
  style.id='inspira-v24-static-platform-styles';
  style.textContent=`
#plataforma .platform-gallery-card{overflow:hidden}
#plataforma .platform-static-panel{margin:0;display:grid;gap:18px}
#plataforma .platform-static-frame{position:relative;overflow:hidden;border-radius:28px;background:#f7f2ec;border:1px solid rgba(137,57,154,.10);box-shadow:0 22px 52px rgba(74,46,76,.14)}
#plataforma .platform-static-frame:after{content:"";position:absolute;inset:0;pointer-events:none;box-shadow:inset 0 0 0 1px rgba(255,255,255,.34)}
#plataforma .platform-static-frame img{display:block;width:100%;height:auto;object-fit:contain;object-position:center;background:#f7f2ec}
#plataforma .platform-static-panel figcaption{display:grid;gap:6px;text-align:center;padding:0 18px 2px;color:#625764;line-height:1.55}
#plataforma .platform-static-panel figcaption strong{font-family:Georgia,"Times New Roman",serif;color:#4A2E4C;font-size:1.08rem}
#plataforma .platform-static-panel figcaption span{font-size:.94rem}
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
@media(max-width:640px){#plataforma .platform-static-frame{border-radius:22px}#plataforma .platform-static-panel figcaption{padding:0 4px}#agora.experience-showcase{padding-top:58px;padding-bottom:58px}#agora .experience-title{font-size:clamp(2.55rem,11vw,3.85rem)}#agora .experience-lead{font-size:1rem}#agora .experience-grid{grid-template-columns:1fr;gap:18px;margin-top:32px}#agora .experience-card{border-radius:22px}#agora .experience-photo{aspect-ratio:1.16/1}#agora .experience-body{padding:20px;min-height:0}#agora .experience-body h3{font-size:1.45rem}}
`;
  document.head.appendChild(style);
})();
