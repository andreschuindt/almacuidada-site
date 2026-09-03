
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
    if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches){clearInterval(autoPlay);return;}
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
