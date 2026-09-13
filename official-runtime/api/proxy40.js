const RAW_BASE = 'https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RELEASE = '5.0';
const BUILD = '5.0.4';

const ROUTES = new Map([
  ['', 'index.html'],['index.html', 'index.html'],['livroterapia', 'livroterapia.html'],['livroterapia/', 'livroterapia.html'],['comunidade', 'comunidade.html'],['comunidade/', 'comunidade.html'],['empresas', 'empresas.html'],['empresas/', 'empresas.html'],['privacidade', 'privacidade.html'],['privacidade.html', 'privacidade.html'],['termos', 'termos.html'],['termos.html', 'termos.html']
]);
const TEXT_TYPES={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'application/javascript; charset=utf-8',xml:'application/xml; charset=utf-8',txt:'text/plain; charset=utf-8',svg:'image/svg+xml; charset=utf-8',json:'application/json; charset=utf-8'};
const BINARY_TYPES={webp:'image/webp',jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',gif:'image/gif',ico:'image/x-icon',avif:'image/avif'};
const CSP=["default-src 'self'","base-uri 'self'","object-src 'none'","frame-ancestors 'none'","img-src 'self' data:","font-src 'self' data:","style-src 'self' 'unsafe-inline'","script-src 'self'","connect-src 'self'","form-action 'self' https://payfast.greenn.com.br","upgrade-insecure-requests","require-trusted-types-for 'script'","trusted-types default"].join('; ');

const EXPERIENCE_ASSETS = [
  ['inspira-card-leituras-v34.webp','inspira-card-leituras-v501.webp'],
  ['inspira-card-pausas-v34.webp','inspira-card-pausas-v501.webp'],
  ['inspira-card-reflexoes-v34.webp','inspira-card-reflexoes-v501.webp'],
  ['inspira-card-jornada-v34.webp','inspira-card-jornada-v501.webp']
];
const EXPERIENCE_STYLE='<style id="inspira-experience-v504">.experience-card img{width:100%!important;aspect-ratio:280/447!important;height:auto!important;object-fit:cover!important;object-position:center!important}.text-link{color:#0f6a64!important}</style>';
const OLD_OG_TITLE='<meta property="og:title" content="Projeto INSPIRA | Plataforma psicoeducativa e comunidade de livroterapia">';
const NEW_OG_TITLE='<meta property="og:title" content="Projeto INSPIRA | Venha fazer parte deste movimento!">';
const OLD_PHONE_E164='5522981052618';
const NEW_PHONE_E164='5519981370555';
const OLD_PHONE_LOCAL='22981052618';
const NEW_PHONE_LOCAL='19981370555';
const OLD_PHONE_DISPLAY='+55 22 98105-2618';
const NEW_PHONE_DISPLAY='+55 19 98137-0555';

const OPTIMIZED_JS=`/* Projeto INSPIRA 5.0.4 — comportamento enxuto, sem reflow forçado */
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
  document.querySelectorAll('[data-checkout]').forEach(link=>{link.addEventListener('click',()=>{try{const url=new URL(link.href);Object.entries(stored).forEach(([k,v])=>url.searchParams.set(k,v));link.href=url.toString();}catch(_){}},{capture:true});});

  const mobileCta=document.getElementById('mobileCta');
  const hero=document.querySelector('.hero');
  const mobileQuery=matchMedia('(max-width:1000px)');
  if(mobileCta&&hero&&'IntersectionObserver' in window){
    let heroVisible=true;
    const render=()=>{mobileCta.hidden=!mobileQuery.matches||heroVisible;};
    new IntersectionObserver(([entry])=>{heroVisible=entry.isIntersecting;render();},{threshold:0}).observe(hero);
    if(typeof mobileQuery.addEventListener==='function')mobileQuery.addEventListener('change',render);
    render();
  }
})();`;

function safePath(value){const clean=String(value||'').replace(/^\/+/, '').replace(/\/+/g,'/');if(!clean||ROUTES.has(clean))return ROUTES.get(clean)||'index.html';if(clean.includes('..')||clean.includes('\\')||clean.startsWith('api/'))return null;return clean;}
function contentType(path){const ext=path.split('.').pop().toLowerCase();return TEXT_TYPES[ext]||BINARY_TYPES[ext]||'application/octet-stream';}
function isHtml(path){return path.endsWith('.html');}
function setHeaders(res,path,status=200){
  res.statusCode=status;
  res.setHeader('Content-Type',contentType(path));
  res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('X-Frame-Options','DENY');
  res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy','camera=(), microphone=(), geolocation=(), payment=()');
  res.setHeader('Strict-Transport-Security','max-age=63072000; includeSubDomains; preload');
  res.setHeader('Cross-Origin-Opener-Policy','same-origin');
  res.setHeader('Cross-Origin-Resource-Policy','same-origin');
  res.setHeader('Origin-Agent-Cluster','?1');
  res.setHeader('X-Permitted-Cross-Domain-Policies','none');
  res.setHeader('Content-Security-Policy',CSP);
  res.setHeader('X-Inspira-Release',RELEASE);
  res.setHeader('X-Inspira-Build',BUILD);
  if(isHtml(path))res.setHeader('Cache-Control','public, max-age=0, s-maxage=300, stale-while-revalidate=86400');
  else if(/\.(css|js|webp|jpg|jpeg|png|svg|ico|avif)$/.test(path))res.setHeader('Cache-Control','public, max-age=31536000, immutable');
  else res.setHeader('Cache-Control','public, max-age=300, must-revalidate');
}
async function fetchRaw(path){return fetch(`${RAW_BASE}/${path}`,{headers:{'User-Agent':'Projeto-INSPIRA/5.0.4'},redirect:'follow'});}
function updateOfficialContact(text){return text.replaceAll(OLD_PHONE_E164,NEW_PHONE_E164).replaceAll(OLD_PHONE_LOCAL,NEW_PHONE_LOCAL).replaceAll(OLD_PHONE_DISPLAY,NEW_PHONE_DISPLAY);}
function optimizeCss(css){return css.replace('--teal:#167f78','--teal:#0f6a64').replace('linear-gradient(90deg,#0f8f86,#5cbf55)','linear-gradient(90deg,#0f6a64,#347a3b)');}
function updateCommonHtml(html){return html.replaceAll('inspira-v2-1.css?v=500','inspira-v2-1.css?v=504').replaceAll('inspira-v2-1.js?v=500','inspira-v2-1.js?v=504').replaceAll('content="5.0.0"','content="5.0.4"');}
function enhanceHomepage(html,css){
  let out=html;
  for(const [oldName,newName] of EXPERIENCE_ASSETS)out=out.replaceAll(oldName,newName);
  out=out.replaceAll('width="600" height="450"','width="280" height="447"');
  out=out.replace(OLD_OG_TITLE,NEW_OG_TITLE);
  out=out.replace('<script defer src="/_vercel/insights/script.js"></script>','');
  const cssLink='<link rel="stylesheet" href="/inspira-v2-1.css?v=504">';
  if(css)out=out.replace(cssLink,`<style id="inspira-critical-css">${css}</style>`);
  if(!out.includes('inspira-experience-v504'))out=out.replace('</head>',`${EXPERIENCE_STYLE}</head>`);
  return out;
}
module.exports=async function handler(req,res){
  try{
    const url=new URL(req.url,'https://projetoinspira.vercel.app');
    const requested=url.searchParams.get('path')??url.pathname.replace(/^\/api\/proxy40\/?/,'');
    const path=safePath(requested);
    if(!path){setHeaders(res,'not-found.txt',404);return res.end('Not found');}

    if(path==='inspira-v2-1.js'){
      setHeaders(res,path,200);
      res.setHeader('Content-Length',String(Buffer.byteLength(OPTIMIZED_JS)));
      return res.end(OPTIMIZED_JS);
    }

    let upstream,cssUpstream=null;
    if(path==='index.html'){
      [upstream,cssUpstream]=await Promise.all([fetchRaw(path),fetchRaw('inspira-v2-1.css')]);
    }else{
      upstream=await fetchRaw(path);
    }
    if(!upstream.ok){setHeaders(res,'not-found.html',upstream.status===404?404:502);return res.end(upstream.status===404?'<!doctype html><html lang="pt-BR"><meta charset="utf-8"><title>Página não encontrada | INSPIRA</title><body><main><h1>Página não encontrada</h1><p><a href="/">Voltar ao Projeto INSPIRA</a></p></main></body></html>':'Falha temporária ao carregar o conteúdo.');}

    setHeaders(res,path,200);
    const type=contentType(path);
    if(type.startsWith('text/')||type.includes('javascript')||type.includes('xml')||type.includes('json')||type.includes('svg')){
      let text=updateOfficialContact(await upstream.text());
      if(path==='inspira-v2-1.css')text=optimizeCss(text);
      if(isHtml(path))text=updateCommonHtml(text);
      if(path==='index.html'){
        const css=cssUpstream&&cssUpstream.ok?optimizeCss(await cssUpstream.text()):'';
        text=enhanceHomepage(text,css);
      }
      return res.end(text);
    }
    const bytes=Buffer.from(await upstream.arrayBuffer());
    res.setHeader('Content-Length',String(bytes.length));
    return res.end(bytes);
  }catch(error){
    console.error('INSPIRA 5.0.4 runtime error',error);
    setHeaders(res,'error.txt',500);
    return res.end('Erro temporário. Tente novamente em instantes.');
  }
};
// INSPIRA 5.0.4 — PageSpeed, contraste, CSP, COOP e estabilidade de renderização.
