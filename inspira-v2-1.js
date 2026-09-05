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
    if(typeof window.va==='function')window.va('event',{name,data:{destination:el.getAttribute('href')?.startsWith('#')?'internal':'external'}});
  });
})();

/* INSPIRA 3.4 — artes finais da plataforma e da experiência */
(function(){
  const steps=document.getElementById('como-funciona');
  if(steps)steps.remove();

  const heroSecondary=document.querySelector('[data-event="hero_como_funciona"], [data-event="hero_experiencia"]');
  if(heroSecondary){
    heroSecondary.href='#plataforma';
    heroSecondary.dataset.event='hero_experiencia';
    heroSecondary.textContent='Conhecer a experiência';
  }

  const platform=document.getElementById('plataforma');
  if(platform){
    const gallery=platform.querySelector('.platform-gallery-card');
    if(gallery)gallery.remove();
    platform.classList.add('platform-without-gallery');
    const contentButton=platform.querySelector('[data-event="plataforma_conteudos"]');
    if(contentButton){contentButton.href='#agora';contentButton.textContent='Ver formas de viver o INSPIRA';}
    const platformImg=platform.querySelector('.platform-v31-real, .platform-v30-real, figure img');
    if(platformImg){
      platformImg.src='/assets/inspira-platform-v34.webp?v=34';
      platformImg.width=900;
      platformImg.height=675;
      platformImg.alt='Amostra visual em alta qualidade dos programas e conteúdos da Plataforma Alma Cuidada';
      platformImg.style.objectFit='contain';
    }
  }

  const agora=document.getElementById('agora');
  if(agora){
    const replacement=document.createElement('section');
    replacement.className='section experience-showcase';
    replacement.id='agora';
    replacement.innerHTML=`<div class="container experience-head reveal visible"><span class="eyebrow">Conteúdo que ganha forma</span><h2 class="experience-title">Algumas formas de você viver essa experiência INSPIRA.</h2><p class="experience-lead">Cada pessoa pode encontrar uma porta de entrada diferente: pela leitura, pela pausa, pela reflexão ou por uma jornada de cuidado que acompanha o seu ritmo.</p></div><div class="container experience-grid">
      <article class="experience-card reveal visible"><div class="experience-photo"><img src="/assets/inspira-card-leituras-v34.webp?v=34" alt="Cena acolhedora de leitura, livros e imaginação representando leituras que inspiram" width="960" height="720" loading="lazy" decoding="async"></div><div class="experience-body"><span class="experience-number">01</span><h3>Leituras que inspiram</h3><div class="experience-rule"></div><p>Encontre ideias, histórias e provocações que ajudam a olhar para a vida com mais presença, significado e novas possibilidades.</p></div></article>
      <article class="experience-card reveal visible"><div class="experience-photo"><img src="/assets/inspira-card-pausas-v34.webp?v=34" alt="Ambiente sereno de pausa, chá e descanso representando pausas que restauram" width="600" height="450" loading="lazy" decoding="async"></div><div class="experience-body"><span class="experience-number">02</span><h3>Pausas que restauram</h3><div class="experience-rule"></div><p>Práticas simples de respiração, mindfulness e desaceleração para criar pequenos intervalos de cuidado no meio da vida real.</p></div></article>
      <article class="experience-card reveal visible"><div class="experience-photo"><img src="/assets/inspira-card-reflexoes-v34.webp?v=34" alt="Livro, bússola e caminhos se abrindo ao horizonte representando reflexões que ampliam caminhos" width="600" height="450" loading="lazy" decoding="async"></div><div class="experience-body"><span class="experience-number">03</span><h3>Reflexões que ampliam caminhos</h3><div class="experience-rule"></div><p>Conteúdos guiados para reconhecer emoções, ampliar perspectivas e transformar aprendizados em movimentos possíveis no cotidiano.</p></div></article>
      <article class="experience-card reveal visible"><div class="experience-photo"><img src="/assets/inspira-card-jornada-v34.webp?v=34" alt="Caminho iluminado e companhia ao longo da jornada representando cuidado que acompanha você" width="600" height="450" loading="lazy" decoding="async"></div><div class="experience-body"><span class="experience-number">04</span><h3>Uma jornada que acompanha você</h3><div class="experience-rule"></div><p>Curadoria, práticas e comunidade reunidas em um caminho flexível, acolhedor e respeitoso com o tempo que você tem hoje.</p></div></article>
    </div>`;
    agora.replaceWith(replacement);
  }

  const previous=document.getElementById('inspira-v25-cleanup-styles');
  if(previous)previous.remove();
  const style=document.createElement('style');
  style.id='inspira-v34-experience-styles';
  style.textContent=`
#como-funciona{display:none!important}
#plataforma .platform-gallery-card{display:none!important}
#plataforma.platform-without-gallery .platform-grid{grid-template-columns:minmax(0,860px)!important;justify-content:center!important}
#plataforma.platform-without-gallery .platform-copy{max-width:860px;margin-inline:auto}
#plataforma .platform-v31-showcase img,#plataforma .platform-v30-showcase img{width:100%!important;height:auto!important;aspect-ratio:4/3;object-fit:contain!important;background:#121019;border-radius:20px}
#agora.experience-showcase{position:relative;overflow:hidden;padding-top:82px;padding-bottom:78px;background:linear-gradient(180deg,#fbf7f1 0%,#f7efe8 100%)}
#agora.experience-showcase:before{content:"";position:absolute;width:480px;height:480px;border-radius:50%;right:-250px;top:-240px;background:radial-gradient(circle,rgba(37,175,162,.10),transparent 70%);pointer-events:none}
#agora .experience-head{position:relative;z-index:2;max-width:1080px;margin:0 auto;text-align:center}
#agora .experience-head .eyebrow{justify-content:center}
#agora .experience-title{max-width:1000px;margin:18px auto 0;font-family:Georgia,"Times New Roman",serif;font-size:clamp(3rem,5vw,5.1rem);line-height:.98;letter-spacing:-.045em;color:#8F4694}
#agora .experience-lead{max-width:840px;margin:24px auto 0;color:#726676;font-size:clamp(1rem,1.45vw,1.25rem);line-height:1.55}
#agora .experience-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px;margin-top:46px}
#agora .experience-card{overflow:hidden;background:#fffdf9;border:1px solid rgba(137,57,154,.11);border-radius:26px;box-shadow:0 18px 42px rgba(70,42,73,.09);transition:transform .22s ease,box-shadow .22s ease}
#agora .experience-card:hover{transform:translateY(-5px);box-shadow:0 26px 58px rgba(70,42,73,.14)}
#agora .experience-photo{aspect-ratio:4/3;overflow:hidden;background:#efe8e1}
#agora .experience-photo img{display:block;width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .5s ease}
#agora .experience-card:hover .experience-photo img{transform:scale(1.025)}
#agora .experience-body{position:relative;padding:23px 22px 26px;min-height:228px}
#agora .experience-number{display:inline-flex;margin-bottom:10px;color:#25AFA2;font-size:.76rem;font-weight:900;letter-spacing:.12em}
#agora .experience-body h3{margin:0;font-family:Georgia,"Times New Roman",serif;font-size:1.55rem;line-height:1.08;letter-spacing:-.025em;color:#4A2E4C}
#agora .experience-rule{width:30px;height:2px;margin:13px 0 12px;border-radius:3px;background:linear-gradient(90deg,#25AFA2,#5DD457)}
#agora .experience-body p{margin:0;color:#665B68;font-size:.94rem;line-height:1.62}
@media(max-width:1080px){#agora .experience-grid{grid-template-columns:repeat(2,minmax(0,1fr));max-width:860px;margin-left:auto;margin-right:auto}#agora .experience-body{min-height:205px}}
@media(max-width:640px){#agora.experience-showcase{padding-top:58px;padding-bottom:58px}#agora .experience-title{font-size:clamp(2.55rem,11vw,3.85rem)}#agora .experience-lead{font-size:1rem}#agora .experience-grid{grid-template-columns:1fr;gap:18px;margin-top:32px}#agora .experience-card{border-radius:22px}#agora .experience-photo{aspect-ratio:4/3}#agora .experience-body{padding:20px;min-height:0}#agora .experience-body h3{font-size:1.45rem}}
`;
  document.head.appendChild(style);
})();

/* INSPIRA 3.5 PENDING — checkout visual inspirado no novo modelo */
(function(){
  const plans=document.getElementById('planos');
  if(!plans)return;
  const grid=plans.querySelector('.pricing-grid');
  if(!grid)return;

  grid.classList.add('pricing-grid-v35');
  grid.innerHTML=`
    <article class="price-v35 price-v35-monthly reveal visible">
      <div class="price-v35-top"><span class="price-v35-name">MENSAL</span><span class="price-v35-pill">Sem fidelização</span></div>
      <p class="price-v35-desc"><em>Ideal para experimentar e viver a dinâmica curatorial da comunidade de forma livre.</em></p>
      <div class="price-v35-value price-v35-value-monthly"><span class="price-v35-kicker">Apenas</span><div class="price-v35-money"><span class="price-v35-currency">R$</span><strong>47</strong><span class="price-v35-period">/mês</span></div></div>
      <ul class="price-v35-benefits">
        <li>Acesso total à plataforma com seu login e senha</li>
        <li>Conteúdos atualizados semanalmente</li>
        <li>Comunidade exclusiva para compartilhar</li>
        <li>Curadoria Terapêutica Especializada</li>
        <li>Encontro online mensal ao vivo e gravado</li>
      </ul>
      <a class="price-v35-button" href="https://payfast.greenn.com.br/redirect/272524" target="_blank" rel="noopener" data-event="checkout_mensal">INICIAR MENSAL</a>
    </article>

    <article class="price-v35 price-v35-semester reveal visible">
      <div class="price-v35-top"><span class="price-v35-name">SEMESTRAL</span><span class="price-v35-pill">Economia de 20%</span></div>
      <p class="price-v35-desc"><em>Uma jornada contínua e aprofundada de 6 meses.<br><strong>O plano mais procurado pela nossa comunidade.</strong></em></p>
      <div class="price-v35-value"><span class="price-v35-kicker">Em até 6x</span><div class="price-v35-money"><span class="price-v35-currency">R$</span><strong>42</strong><sup>,45</sup></div><span class="price-v35-cash">ou R$ 227 à vista</span></div>
      <ul class="price-v35-benefits">
        <li>Acesso total à plataforma com seu login e senha</li>
        <li>Conteúdos atualizados semanalmente</li>
        <li>Comunidade exclusiva para compartilhar</li>
        <li>Curadoria Terapêutica Especializada</li>
        <li>Encontro online mensal ao vivo e gravado</li>
      </ul>
      <a class="price-v35-button" href="https://payfast.greenn.com.br/redirect/272527" target="_blank" rel="noopener" data-event="checkout_semestral">INICIAR SEMESTRAL</a>
    </article>

    <article class="price-v35 price-v35-annual reveal visible">
      <div class="price-v35-ribbon"><span>Melhor escolha</span> ECONOMIA DE R$157,00</div>
      <div class="price-v35-top"><span class="price-v35-name">ANUAL</span><span class="price-v35-pill">Economia de 28%</span></div>
      <p class="price-v35-desc"><em>Para quem assume um compromisso firme com o próprio equilíbrio ao longo do ano.</em></p>
      <div class="price-v35-value"><span class="price-v35-kicker">Em até 12x</span><div class="price-v35-money"><span class="price-v35-currency">R$</span><strong>41</strong><sup>,85</sup></div><span class="price-v35-cash">ou R$ 407 à vista</span></div>
      <ul class="price-v35-benefits">
        <li>Acesso total à plataforma com seu login e senha</li>
        <li>Conteúdos atualizados semanalmente</li>
        <li>Comunidade exclusiva para compartilhar</li>
        <li>Curadoria Terapêutica Especializada</li>
        <li>Encontro online mensal ao vivo e gravado</li>
      </ul>
      <a class="price-v35-button" href="https://payfast.greenn.com.br/redirect/272528" target="_blank" rel="noopener" data-event="checkout_anual">INICIAR ANUAL</a>
    </article>`;

  const style=document.createElement('style');
  style.id='inspira-v35-pricing-styles';
  style.textContent=`
#planos.plans-showcase{background:linear-gradient(180deg,#fff9ed 0%,#f8ead7 100%);overflow:hidden}
#planos .plans-head{max-width:940px}
#planos .pricing-grid-v35{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px;align-items:stretch;margin-top:44px}
#planos .price-v35{position:relative;display:flex;flex-direction:column;min-height:610px;padding:31px 25px 22px;border-radius:24px;border:1px solid rgba(122,42,145,.16);background:linear-gradient(155deg,#7e2197 0%,#8f3f8f 38%,#966b87 68%,#aaa465 100%);box-shadow:0 22px 52px rgba(70,31,76,.16);color:#fff;overflow:visible;isolation:isolate}
#planos .price-v35:before{content:"";position:absolute;inset:0;border-radius:inherit;background:radial-gradient(circle at 18% 12%,rgba(255,255,255,.12),transparent 34%),linear-gradient(180deg,rgba(255,255,255,.04),rgba(0,0,0,.04));pointer-events:none;z-index:-1}
#planos .price-v35-semester{background:linear-gradient(155deg,#7d2196 0%,#8d3b8d 36%,#986f86 70%,#a8a363 100%)}
#planos .price-v35-annual{border:3px solid #64df45;padding:29px 23px 20px;box-shadow:0 24px 58px rgba(70,31,76,.18),0 0 0 1px rgba(100,223,69,.16)}
#planos .price-v35-ribbon{position:absolute;top:-16px;left:50%;transform:translateX(-50%);width:max-content;max-width:88%;padding:9px 17px;border-radius:999px;background:linear-gradient(90deg,#0ba2b6,#58cf5b);color:#fff;font-size:.72rem;font-weight:900;letter-spacing:.01em;box-shadow:0 8px 18px rgba(16,142,126,.25);white-space:nowrap}
#planos .price-v35-ribbon span{text-transform:none;margin-right:4px}
#planos .price-v35-top{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:38px}
#planos .price-v35-name{display:inline-flex;padding:5px 11px 5px 8px;background:linear-gradient(90deg,rgba(255,255,255,.08),rgba(237,202,120,.24));font-size:.8rem;font-weight:1000;letter-spacing:.055em;color:#fff}
#planos .price-v35-pill{display:inline-flex;align-items:center;justify-content:center;padding:7px 11px;border-radius:999px;background:#fffaf2;color:#7a2a91;font-size:.68rem;font-weight:900;white-space:nowrap}
#planos .price-v35-desc{min-height:72px;margin:9px 0 0;color:#fff;font-size:.83rem;line-height:1.34}
#planos .price-v35-desc strong{font-weight:900;color:#fff}
#planos .price-v35-value{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:150px;margin:8px 0 8px;text-align:center}
#planos .price-v35-kicker{font-size:.72rem;font-weight:900;color:#fff;margin-bottom:-1px}
#planos .price-v35-money{display:flex;align-items:flex-start;justify-content:center;line-height:.84;margin-top:2px}
#planos .price-v35-money strong{font-family:Georgia,"Times New Roman",serif;font-size:clamp(4.8rem,6vw,6.7rem);font-weight:800;letter-spacing:-.075em;color:#fff5d9;text-shadow:0 3px 0 rgba(88,31,95,.08)}
#planos .price-v35-currency{font-size:1rem;font-weight:900;margin:18px 7px 0 0;color:#fff}
#planos .price-v35-money sup{font-family:Georgia,"Times New Roman",serif;font-size:1.5rem;font-weight:800;margin:13px 0 0 3px;color:#fff5d9}
#planos .price-v35-period{align-self:center;margin:22px 0 0 7px;font-size:.82rem;font-weight:900;color:#fff}
#planos .price-v35-cash{margin-top:-4px;font-size:.76rem;font-weight:800;color:#fff5df;font-style:italic}
#planos .price-v35-benefits{list-style:none;padding:0;margin:2px 0 23px;display:grid;gap:12px}
#planos .price-v35-benefits li{position:relative;padding-left:24px;color:#fff;font-size:.74rem;font-weight:700;line-height:1.34}
#planos .price-v35-benefits li:before{content:"✓";position:absolute;left:0;top:-1px;width:16px;height:16px;border-radius:50%;display:grid;place-items:center;background:#64df45;color:#fff;font-size:.66rem;font-weight:1000;box-shadow:0 2px 6px rgba(41,168,64,.24)}
#planos .price-v35-button{margin-top:auto;display:flex;align-items:center;justify-content:center;min-height:63px;padding:14px 18px;border-radius:17px;background:linear-gradient(90deg,#0ca3b8 0%,#67da55 100%);border:1px solid rgba(255,255,255,.22);color:#fff9e8;font-family:Georgia,"Times New Roman",serif;font-size:1.05rem;font-weight:800;text-decoration:none;letter-spacing:.01em;box-shadow:0 12px 25px rgba(14,133,121,.20);transition:transform .2s ease,box-shadow .2s ease,filter .2s ease}
#planos .price-v35-button:hover{transform:translateY(-2px);filter:saturate(1.08);box-shadow:0 16px 30px rgba(14,133,121,.28)}
#planos .plans-trust{margin-top:28px}
@media(max-width:1080px){#planos .pricing-grid-v35{grid-template-columns:repeat(2,minmax(0,1fr));max-width:900px;margin-left:auto;margin-right:auto}#planos .price-v35-annual{grid-column:1/-1;max-width:440px;width:100%;justify-self:center}}
@media(max-width:720px){#planos .pricing-grid-v35{grid-template-columns:1fr;gap:24px;max-width:520px}#planos .price-v35-annual{grid-column:auto;max-width:none}#planos .price-v35{min-height:0;padding:27px 20px 20px;border-radius:22px}#planos .price-v35-annual{padding:27px 18px 18px}#planos .price-v35-desc{min-height:0;margin-bottom:8px}#planos .price-v35-value{min-height:138px}#planos .price-v35-money strong{font-size:clamp(4.6rem,22vw,6rem)}#planos .price-v35-ribbon{font-size:.65rem;padding:8px 13px;max-width:92%}#planos .price-v35-button{min-height:58px;font-size:1rem}}
@media(max-width:420px){#planos .price-v35-top{align-items:flex-start}#planos .price-v35-name{font-size:.72rem}#planos .price-v35-pill{font-size:.61rem;padding:6px 9px}#planos .price-v35-ribbon{white-space:normal;text-align:center;line-height:1.15;width:86%}}
`;
  document.head.appendChild(style);
})();
