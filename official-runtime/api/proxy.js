const RAW_BASE='https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RELEASE='2.9-pending';

const PLATFORM_SECTION=`<section class="section platform platform-v29" id="plataforma">
  <div class="container platform-v29-wrap">
    <div class="platform-v29-copy reveal">
      <span class="eyebrow">Por dentro da experiência</span>
      <h2 class="title sm">Veja uma parte do que você encontra dentro do INSPIRA.</h2>
      <p class="lead">Menos promessa abstrata. Mais experiência concreta: uma plataforma organizada para você ler, escutar, assistir, refletir e praticar no seu próprio ritmo.</p>
      <div class="platform-v29-points" aria-label="Recursos disponíveis na plataforma">
        <span>✓ Ambiente de membros com acesso individual</span>
        <span>✓ Trilhas temáticas e conteúdos atualizados</span>
        <span>✓ Meditações, mindfulness e materiais reflexivos</span>
        <span>✓ Literacia familiar e conteúdos para diferentes fases da vida</span>
      </div>
      <div class="actions platform-v29-actions">
        <a class="btn btn-primary" href="#agora" data-event="plataforma_conteudos">Ver formas de viver o INSPIRA</a>
        <a class="btn btn-ghost" href="#planos" data-event="plataforma_planos">Quero participar</a>
      </div>
    </div>

    <figure class="platform-v29-proof reveal">
      <div class="platform-v29-image-frame">
        <img src="/assets/plataforma-conteudos-amostra-v29.webp" width="728" height="499" alt="Amostra real da Plataforma Alma Cuidada com programas em destaque e conteúdos sobre ansiedade, burnout, depressão e TDAH" loading="lazy" decoding="async">
      </div>
      <figcaption>Uma amostra real do ambiente de conteúdos. O catálogo é dinâmico e recebe novas trilhas, programas e materiais ao longo da jornada.</figcaption>
    </figure>
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

const FOUNDER_SECTION=`<section class="section founder-section founder-v29" id="andre">
  <div class="container founder-v29-grid">
    <div class="founder-v29-photo-card reveal">
      <div class="founder-v29-photo-stage">
        <img src="/assets/andre-schuindt.jpg?v=29" alt="André Schuindt, idealizador e mediador do INSPIRA LIVROTERAPIA" width="470" height="460" loading="lazy" decoding="async">
      </div>
      <div class="founder-v29-caption">André Schuindt · idealizador e mediador</div>
    </div>

    <article class="founder-v29-card reveal">
      <span class="eyebrow">Quem conduz</span>
      <h3>“Eu criei o INSPIRA porque acredito que algumas leituras chegam até nós como companhia.”</h3>
      <p>Nem todo cuidado começa em uma resposta. Às vezes, começa em uma história que nos ajuda a reconhecer algo que ainda não sabíamos nomear.</p>
      <p>O INSPIRA nasceu da união entre educação, escuta, leitura e cuidado humano. Minha intenção é mediar essa experiência com profundidade, sem transformar desenvolvimento pessoal em pressão por desempenho.</p>
      <p>Quero que cada pessoa encontre aqui um ritmo possível — uma forma de ler, refletir e se perceber com mais presença.</p>
      <div class="founder-v29-intent"><strong>Minha intenção com o INSPIRA:</strong> criar um espaço em que leitura, reflexão e cuidado possam se encontrar de forma simples, humana e possível.</div>
      <div class="founder-v29-signature">
        <div class="signature">André Schuindt</div>
        <div class="signature-role">Fundador da Alma Cuidada e idealizador do INSPIRA LIVROTERAPIA</div>
      </div>
      <div class="credentials">Terapeuta · psicanalista · pedagogo · psicopedagogo · neuropsicopedagogo · instrutor de meditação · quase 10 anos de experiência no cuidado terapêutico.</div>
      <div class="actions founder-cta"><a class="btn btn-ghost" href="#planos" data-event="fundador_planos">Conheça a jornada que eu preparei →</a></div>
    </article>
  </div>
</section>`;

const PENDING_STYLES=`<style id="inspira-pending-v29">
.platform-v29{overflow:hidden;background:linear-gradient(180deg,rgba(255,253,248,.12),rgba(255,248,230,.26))}
.platform-v29-wrap{max-width:1120px;margin-inline:auto;display:grid;gap:42px}
.platform-v29-copy{max-width:920px;margin-inline:auto;text-align:center}
.platform-v29-copy .eyebrow{justify-content:center}
.platform-v29-copy .title{max-width:900px;margin-inline:auto}
.platform-v29-copy .lead{max-width:820px;margin:22px auto 0}
.platform-v29-points{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 16px;max-width:860px;margin:28px auto 0;text-align:left}
.platform-v29-points span{display:flex;align-items:center;min-height:48px;padding:12px 16px;border-radius:16px;background:rgba(255,253,248,.72);border:1px solid rgba(137,57,154,.10);box-shadow:0 8px 22px rgba(83,47,88,.045);font-size:.86rem;color:#625866}
.platform-v29-points span::first-letter{color:var(--green)}
.platform-v29-actions{justify-content:center;margin-top:28px}
.platform-v29-proof{width:min(100%,980px);margin:0 auto;text-align:center}
.platform-v29-image-frame{padding:12px;border-radius:28px;background:rgba(255,253,248,.88);border:1px solid rgba(137,57,154,.12);box-shadow:0 24px 60px rgba(78,45,82,.12)}
.platform-v29-image-frame img{width:100%;height:auto;display:block;border-radius:20px}
.platform-v29-proof figcaption{max-width:760px;margin:15px auto 0;font-size:.78rem;line-height:1.6;color:var(--muted)}

.founder-v29{background:linear-gradient(180deg,rgba(255,248,230,.36),rgba(255,253,248,.10));overflow:hidden}
.founder-v29-grid{display:grid;grid-template-columns:minmax(300px,.78fr) minmax(0,1.22fr);gap:34px;align-items:center;max-width:1120px;margin-inline:auto}
.founder-v29-photo-card,.founder-v29-card{border:1px solid rgba(137,57,154,.12);box-shadow:0 20px 52px rgba(80,45,82,.09);background:rgba(255,253,248,.88);border-radius:30px}
.founder-v29-photo-card{padding:16px;align-self:center}
.founder-v29-photo-stage{display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:23px;background:linear-gradient(180deg,#F7F2EC,#FFFDF8);min-height:0}
.founder-v29-photo-stage img{width:100%;height:auto;max-height:560px;object-fit:contain;object-position:center center;display:block;border-radius:22px}
.founder-v29-caption{margin:14px 8px 2px;padding:10px 14px;border-radius:999px;background:var(--cream);border:1px solid rgba(137,57,154,.12);font-size:.7rem;font-weight:900;color:var(--purple);text-align:center}
.founder-v29-card{padding:40px 42px}
.founder-v29-card h3{font-family:Georgia,"Times New Roman",serif;font-size:clamp(2.2rem,3.7vw,3.75rem);line-height:1.01;letter-spacing:-.038em;margin:13px 0 23px;color:var(--purple3);max-width:760px}
.founder-v29-card p{color:#66555f;font-size:.96rem;line-height:1.72;margin:0 0 14px}
.founder-v29-intent{margin-top:6px;padding:17px 19px;border-radius:18px;background:linear-gradient(90deg,rgba(37,175,162,.08),rgba(93,212,87,.07));border:1px solid rgba(37,175,162,.11);font-size:.83rem;color:#5c4e59;line-height:1.65}
.founder-v29-intent strong{color:var(--teal)}
.founder-v29-signature{display:flex;align-items:flex-end;justify-content:space-between;gap:22px;margin-top:23px;padding-top:18px;border-top:1px solid var(--line)}
.founder-v29-signature .signature{font-family:Georgia,"Times New Roman",serif;font-style:italic;font-size:1.42rem;color:var(--purple)}
.founder-v29-signature .signature-role{font-size:.72rem;color:var(--muted);text-align:right;max-width:330px;line-height:1.45}
.founder-v29-card .credentials{margin-top:14px;font-size:.73rem;color:var(--muted);line-height:1.6}
.founder-v29-card .founder-cta{margin-top:22px}

@media(max-width:980px){
  .platform-v29-points{grid-template-columns:1fr;max-width:720px}
  .founder-v29-grid{grid-template-columns:1fr;max-width:760px;gap:20px}
  .founder-v29-photo-card{max-width:520px;width:100%;justify-self:center}
  .founder-v29-photo-stage img{max-height:none;width:100%;height:auto}
  .founder-v29-card{padding:34px 32px}
  .founder-v29-signature{align-items:flex-start;flex-direction:column}
  .founder-v29-signature .signature-role{text-align:left}
}
@media(max-width:640px){
  .platform-v29-wrap{gap:30px}
  .platform-v29-copy .title{font-size:clamp(2.25rem,11vw,3.15rem)}
  .platform-v29-points span{font-size:.8rem;padding:11px 13px}
  .platform-v29-actions .btn{width:100%}
  .platform-v29-image-frame{padding:7px;border-radius:20px}
  .platform-v29-image-frame img{border-radius:15px}
  .platform-v29-proof figcaption{font-size:.72rem;padding-inline:8px}
  .founder-v29-grid{gap:16px}
  .founder-v29-photo-card,.founder-v29-card{border-radius:24px}
  .founder-v29-photo-card{padding:10px}
  .founder-v29-photo-stage{border-radius:18px}
  .founder-v29-photo-stage img{border-radius:17px}
  .founder-v29-caption{font-size:.65rem;margin-top:10px;padding:9px 11px}
  .founder-v29-card{padding:26px 22px}
  .founder-v29-card h3{font-size:clamp(2rem,10.3vw,2.95rem)}
  .founder-v29-card p{font-size:.94rem}
  .founder-v29-intent{font-size:.8rem;padding:16px}
  .founder-v29-card .founder-cta .btn{width:100%}
}
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
  html=html.replace(/href=["']\/inspira-v2-1\.css(?:\?[^"']*)?["']/i,'href="/inspira-v2-1.css?v=29"');
  html=html.replace(/src=["']\/inspira-v2-1\.js(?:\?[^"']*)?["']/i,'src="/inspira-v2-1.js?v=29"');
  html=html.replace('</head>',`${PENDING_STYLES}\n  <meta name="inspira-release" content="${RELEASE}">\n</head>`);
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
