const RAW_BASE='https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RELEASE='2.6';

const PLATFORM_SECTION=`<section class="section platform platform-without-gallery" id="plataforma">
  <div class="container platform-grid" style="grid-template-columns:minmax(0,1fr);justify-content:center;max-width:1040px;">
    <div class="platform-copy reveal" style="max-width:900px;margin-inline:auto;width:100%;">
      <span class="eyebrow">Por dentro da experiência</span>
      <h2 class="title sm">Veja o que você realmente encontra.</h2>
      <p class="lead">Menos promessa abstrata. Mais experiência concreta: conteúdos organizados para ler, escutar, assistir e praticar no tempo que você tem.</p>
      <ul style="max-width:820px;">
        <li>Ambiente de membros com acesso individual</li>
        <li>Trilhas temáticas e conteúdos atualizados</li>
        <li>Meditações, mindfulness e materiais reflexivos</li>
        <li>Literacia familiar e conteúdos para diferentes fases da vida</li>
      </ul>
      <div class="actions" style="margin-top:28px">
        <a class="btn btn-primary" href="#agora" data-event="plataforma_conteudos">Ver formas de viver o INSPIRA</a>
        <a class="btn btn-ghost" href="#planos" data-event="plataforma_planos">Quero participar</a>
      </div>
    </div>
  </div>
</section>`;

function contentType(path,upstream){
  if(path==='index.html'||path.endsWith('.html'))return'text/html; charset=utf-8';
  if(path.endsWith('.css'))return'text/css; charset=utf-8';
  if(path.endsWith('.js'))return'application/javascript; charset=utf-8';
  if(path.endsWith('.svg'))return'image/svg+xml';
  if(path.endsWith('.webp'))return'image/webp';
  if(path.endsWith('.jpg')||path.endsWith('.jpeg'))return'image/jpeg';
  if(path.endsWith('.png'))return'image/png';
  if(path.endsWith('.ico'))return'image/x-icon';
  if(path.endsWith('.xml'))return'application/xml; charset=utf-8';
  if(path.endsWith('.txt'))return'text/plain; charset=utf-8';
  return upstream.headers.get('content-type')||'application/octet-stream';
}

function cleanIndex(html){
  // Remove por completo a seção “Da assinatura à experiência, em quatro movimentos”.
  html=html.replace(/<section\b[^>]*\bid=["']como-funciona["'][^>]*>[\s\S]*?<\/section>/gi,'');

  // Substitui toda a seção “Por dentro da experiência”, eliminando o carrossel e a coluna vazia.
  html=html.replace(/<section\b[^>]*\bid=["']plataforma["'][^>]*>[\s\S]*?<\/section>/i,PLATFORM_SECTION);

  // Defesa adicional contra qualquer resíduo do carrossel em versões antigas do HTML.
  html=html.replace(/<div\b[^>]*class=["'][^"']*platform-gallery-card[^"']*["'][^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,'');

  // CTA secundário do HERO aponta para a seção que continua existindo.
  html=html.replace(/href=["']#como-funciona["']\s+data-event=["']hero_como_funciona["']>[^<]*</i,'href="#plataforma" data-event="hero_experiencia">Conhecer a experiência<');
  html=html.replace(/data-event=["']hero_experiencia["']>[^<]*</i,'data-event="hero_experiencia">Conhecer a experiência<');

  // Bypass de cache de recursos da release atual.
  html=html.replace(/href=["']\/inspira-v2-1\.css(?:\?[^"']*)?["']/i,'href="/inspira-v2-1.css?v=26"');
  html=html.replace(/src=["']\/inspira-v2-1\.js(?:\?[^"']*)?["']/i,'src="/inspira-v2-1.js?v=26"');
  html=html.replace('</head>',`  <meta name="inspira-release" content="${RELEASE}">\n</head>`);
  return html;
}

module.exports=async function handler(req,res){
  try{
    let path=String(req.query.path||'').replace(/^\/+/, '');
    if(!path)path='index.html';

    const upstream=await fetch(`${RAW_BASE}/${path}`,{headers:{'User-Agent':'Projeto-INSPIRA-Vercel-Proxy'}});
    if(!upstream.ok){res.status(upstream.status).send('Not found');return;}

    res.setHeader('Content-Type',contentType(path,upstream));
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
    res.setHeader('X-INSPIRA-Release',RELEASE);

    if(path==='index.html'){
      const html=cleanIndex(await upstream.text());
      res.setHeader('Cache-Control','no-store, max-age=0');
      res.status(200).send(html);
      return;
    }

    const buf=Buffer.from(await upstream.arrayBuffer());
    if(/^assets\//.test(path)||/\.(css|js|svg|webp|jpg|jpeg|png|ico)$/i.test(path)){
      res.setHeader('Cache-Control','public, max-age=3600, stale-while-revalidate=86400');
    }else{
      res.setHeader('Cache-Control','public, max-age=0, must-revalidate');
    }
    res.status(200).send(buf);
  }catch(err){
    console.error('INSPIRA proxy error',err);
    res.status(500).send('Internal Server Error');
  }
};
