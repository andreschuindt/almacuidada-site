const RAW_BASE='https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RELEASE='2.8';

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

const IMPACT_SECTION=`<section class="section impact" id="impacto">
  <div class="container impact-grid">
    <div class="reveal" style="display:flex;align-items:center;justify-content:center;min-height:390px;">
      <img src="/assets/impacto-social-5mais1.svg?v=27" width="700" height="700" alt="Cinco pessoas contribuindo para que uma nova pessoa receba acesso ao cuidado no Projeto INSPIRA" loading="lazy" decoding="async" style="width:min(100%,540px);height:auto;border-radius:34px;box-shadow:0 22px 58px rgba(78,47,82,.10);border:1px solid rgba(137,57,154,.08);">
    </div>
    <div class="reveal">
      <span class="eyebrow">Impacto social</span>
      <h2 class="title sm">Quando uma pessoa cuida de si, outra também pode começar.</h2>
      <p class="lead">A cada <strong>5 acessos pagantes</strong> ao INSPIRA, <strong>uma concessão de acesso é entregue a quem precisa</strong> e não consegue custear a participação.</p>
      <p class="muted">É assim que o cuidado se multiplica: cada grupo de cinco assinaturas ajuda a abrir uma nova possibilidade de acesso para pessoas em contexto de vulnerabilidade emocional.</p>
      <p class="muted">Em parcerias com empresas e organizações, essa lógica também pode ser ampliada por meio de acessos em lote e Planos Sementes.</p>
    </div>
  </div>
</section>`;

const FOUNDER_SECTION=`<section class="section founder-section founder-v28" id="andre">
  <div class="container founder-v28-grid">
    <div class="founder-v28-photo reveal">
      <img src="/assets/andre-schuindt.jpg?v=28" alt="André Schuindt, idealizador e mediador do INSPIRA LIVROTERAPIA" width="470" height="600" loading="lazy" decoding="async">
      <div class="founder-v28-caption">André Schuindt · idealizador e mediador</div>
    </div>
    <article class="founder-v28-card reveal">
      <span class="eyebrow">Quem conduz</span>
      <h3>“Eu criei o INSPIRA porque acredito que algumas leituras chegam até nós como companhia.”</h3>
      <p>Nem todo cuidado começa em uma resposta. Às vezes, começa em uma história que nos ajuda a reconhecer algo que ainda não sabíamos nomear.</p>
      <p>O INSPIRA nasceu da união entre educação, escuta, leitura e cuidado humano. Minha intenção é mediar essa experiência com profundidade, sem transformar desenvolvimento pessoal em pressão por desempenho.</p>
      <p>Quero que cada pessoa encontre aqui um ritmo possível — uma forma de ler, refletir e se perceber com mais presença.</p>
      <div class="founder-v28-intent"><strong>Minha intenção com o INSPIRA:</strong> criar um espaço em que leitura, reflexão e cuidado possam se encontrar de forma simples, humana e possível.</div>
      <div class="founder-v28-signature">
        <div class="signature">André Schuindt</div>
        <div class="signature-role">Fundador da Alma Cuidada e idealizador do INSPIRA LIVROTERAPIA</div>
      </div>
      <div class="credentials">Terapeuta · psicanalista · pedagogo · psicopedagogo · neuropsicopedagogo · instrutor de meditação · quase 10 anos de experiência no cuidado terapêutico.</div>
      <div class="actions founder-cta"><a class="btn btn-ghost" href="#planos" data-event="fundador_planos">Conheça a jornada que eu preparei →</a></div>
    </article>
  </div>
</section>`;

const FOUNDER_STYLES=`<style id="inspira-founder-v28">
.founder-v28{background:linear-gradient(180deg,rgba(255,248,230,.36),rgba(255,253,248,.10));overflow:hidden}
.founder-v28-grid{display:grid;grid-template-columns:minmax(320px,.86fr) minmax(0,1.14fr);gap:30px;align-items:stretch;max-width:1120px;margin-inline:auto}
.founder-v28-photo,.founder-v28-card{border:1px solid rgba(137,57,154,.12);box-shadow:0 20px 52px rgba(80,45,82,.09);background:rgba(255,253,248,.86)}
.founder-v28-photo{position:relative;overflow:hidden;border-radius:30px;min-height:650px}
.founder-v28-photo img{width:100%;height:100%;min-height:650px;object-fit:cover;object-position:50% 42%;display:block}
.founder-v28-caption{position:absolute;left:24px;right:24px;bottom:22px;padding:11px 16px;border-radius:999px;background:rgba(255,253,248,.95);border:1px solid rgba(137,57,154,.14);box-shadow:0 10px 24px rgba(77,45,82,.11);font-size:.72rem;font-weight:900;color:var(--purple);text-align:center}
.founder-v28-card{border-radius:30px;padding:42px 44px;display:flex;flex-direction:column;justify-content:center}
.founder-v28-card h3{font-family:Georgia,"Times New Roman",serif;font-size:clamp(2.35rem,4.15vw,4.35rem);line-height:.99;letter-spacing:-.04em;margin:13px 0 24px;color:var(--purple3);max-width:760px}
.founder-v28-card p{color:#66555f;font-size:.98rem;line-height:1.72;margin:0 0 15px}
.founder-v28-intent{margin-top:6px;padding:18px 20px;border-radius:18px;background:linear-gradient(90deg,rgba(37,175,162,.08),rgba(93,212,87,.07));border:1px solid rgba(37,175,162,.11);font-size:.84rem;color:#5c4e59;line-height:1.65}
.founder-v28-intent strong{color:var(--teal)}
.founder-v28-signature{display:flex;align-items:flex-end;justify-content:space-between;gap:22px;margin-top:24px;padding-top:18px;border-top:1px solid var(--line)}
.founder-v28-signature .signature{font-family:Georgia,"Times New Roman",serif;font-style:italic;font-size:1.42rem;color:var(--purple)}
.founder-v28-signature .signature-role{font-size:.72rem;color:var(--muted);text-align:right;max-width:330px;line-height:1.45}
.founder-v28-card .credentials{margin-top:14px;font-size:.73rem;color:var(--muted);line-height:1.6}
.founder-v28-card .founder-cta{margin-top:22px}
@media(max-width:980px){.founder-v28-grid{grid-template-columns:1fr;max-width:760px;gap:20px}.founder-v28-photo{min-height:0;aspect-ratio:4/5;max-width:520px;width:100%;justify-self:center}.founder-v28-photo img{min-height:0;height:100%;object-position:50% 40%}.founder-v28-card{padding:34px 32px}.founder-v28-signature{align-items:flex-start;flex-direction:column}.founder-v28-signature .signature-role{text-align:left}}
@media(max-width:640px){.founder-v28-grid{gap:16px}.founder-v28-photo{border-radius:24px;aspect-ratio:4/5}.founder-v28-caption{left:16px;right:16px;bottom:16px;font-size:.66rem;padding:9px 12px}.founder-v28-card{padding:26px 22px;border-radius:24px}.founder-v28-card h3{font-size:clamp(2rem,10.6vw,3.1rem)}.founder-v28-card p{font-size:.94rem}.founder-v28-intent{font-size:.8rem;padding:16px}.founder-v28-card .founder-cta .btn{width:100%}}
</style>`;

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
  html=html.replace(/<section\b[^>]*\bid=["']como-funciona["'][^>]*>[\s\S]*?<\/section>/gi,'');
  html=html.replace(/<section\b[^>]*\bid=["']plataforma["'][^>]*>[\s\S]*?<\/section>/i,PLATFORM_SECTION);
  html=html.replace(/<div\b[^>]*class=["'][^"']*platform-gallery-card[^"']*["'][^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,'');
  html=html.replace(/<section\b[^>]*\bid=["']impacto["'][^>]*>[\s\S]*?<\/section>/i,IMPACT_SECTION);
  html=html.replace(/<section\b[^>]*\bid=["']andre["'][^>]*>[\s\S]*?<\/section>/i,FOUNDER_SECTION);
  html=html.replace(/href=["']#como-funciona["']\s+data-event=["']hero_como_funciona["']>[^<]*</i,'href="#plataforma" data-event="hero_experiencia">Conhecer a experiência<');
  html=html.replace(/data-event=["']hero_experiencia["']>[^<]*</i,'data-event="hero_experiencia">Conhecer a experiência<');
  html=html.replace(/href=["']\/inspira-v2-1\.css(?:\?[^"']*)?["']/i,'href="/inspira-v2-1.css?v=28"');
  html=html.replace(/src=["']\/inspira-v2-1\.js(?:\?[^"']*)?["']/i,'src="/inspira-v2-1.js?v=28"');
  html=html.replace('</head>',`${FOUNDER_STYLES}\n  <meta name="inspira-release" content="${RELEASE}">\n</head>`);
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
    if(/^assets\//.test(path)||/\.(css|js|svg|webp|jpg|jpeg|png|ico)$/i.test(path))res.setHeader('Cache-Control','public, max-age=3600, stale-while-revalidate=86400');
    else res.setHeader('Cache-Control','public, max-age=0, must-revalidate');
    res.status(200).send(buf);
  }catch(err){
    console.error('INSPIRA proxy error',err);
    res.status(500).send('Internal Server Error');
  }
};
