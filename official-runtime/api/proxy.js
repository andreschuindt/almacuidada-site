const RAW_BASE='https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RELEASE='2.9';

const PLATFORM_SECTION=`<section class="section platform platform-v29" id="plataforma">
  <div class="container platform-v29-inner">
    <div class="platform-v29-copy reveal">
      <span class="eyebrow">Por dentro da experiência</span>
      <h2 class="title sm">Veja uma parte do que você encontra dentro do INSPIRA.</h2>
      <p class="lead">Menos promessa abstrata. Mais experiência concreta: uma plataforma organizada para você ler, escutar, assistir, refletir e praticar no seu próprio ritmo.</p>
      <ul class="platform-v29-list">
        <li>Ambiente de membros com acesso individual</li>
        <li>Trilhas temáticas e conteúdos atualizados</li>
        <li>Meditações, mindfulness e materiais reflexivos</li>
        <li>Literacia familiar e conteúdos para diferentes fases da vida</li>
      </ul>
      <div class="actions platform-v29-actions">
        <a class="btn btn-primary" href="#agora" data-event="plataforma_conteudos">Ver formas de viver o INSPIRA</a>
        <a class="btn btn-ghost" href="#planos" data-event="plataforma_planos">Quero participar</a>
      </div>
    </div>
    <figure class="platform-v29-showcase reveal">
      <div class="inspira-v29-sprite sprite-platform" role="img" aria-label="Amostra real de programas, trilhas e conteúdos disponíveis na Plataforma Alma Cuidada"></div>
      <figcaption>Uma amostra real do ambiente digital. O catálogo é dinâmico e recebe novos conteúdos e atualizações ao longo da jornada.</figcaption>
    </figure>
  </div>
</section>`;

const NOW_SECTION=`<section class="section now now-v29" id="agora">
  <div class="container now-head reveal">
    <span class="eyebrow">Conteúdo que ganha forma</span>
    <h2 class="title sm">Quatro formas de viver a experiência INSPIRA.</h2>
    <p class="lead">Cada conteúdo foi pensado para transformar leitura, presença e cuidado em algo concreto, acessível e possível no seu ritmo.</p>
  </div>
  <div class="container ways-grid ways-v29">
    <article class="way-card reveal">
      <div class="way-photo-v29 inspira-v29-sprite sprite-card-1" role="img" aria-label="Leituras que inspiram: livro aberto com elementos poéticos que simbolizam novas ideias e possibilidades"></div>
      <div class="way-v29-body"><span class="way-v29-num">01</span><h3>Leituras que inspiram</h3><i></i><p>Encontre ideias, histórias e provocações que ajudam a olhar para a vida com mais presença, significado e novas possibilidades.</p></div>
    </article>
    <article class="way-card reveal">
      <div class="way-photo-v29 inspira-v29-sprite sprite-card-2" role="img" aria-label="Pausas que restauram: cena serena de presença, respiração e autocuidado"></div>
      <div class="way-v29-body"><span class="way-v29-num">02</span><h3>Pausas que restauram</h3><i></i><p>Práticas simples de respiração, mindfulness e desaceleração para criar pequenos intervalos de cuidado no meio da vida real.</p></div>
    </article>
    <article class="way-card reveal">
      <div class="way-photo-v29 inspira-v29-sprite sprite-card-3" role="img" aria-label="Reflexões que ampliam caminhos: imagem simbólica de reflexão, novas perspectivas e caminhos possíveis"></div>
      <div class="way-v29-body"><span class="way-v29-num">03</span><h3>Reflexões que ampliam caminhos</h3><i></i><p>Conteúdos guiados para reconhecer emoções, ampliar perspectivas e transformar aprendizados em movimentos possíveis no cotidiano.</p></div>
    </article>
    <article class="way-card reveal">
      <div class="way-photo-v29 inspira-v29-sprite sprite-card-4" role="img" aria-label="Uma jornada que acompanha você: caminho simbólico que conecta leitura, prática, crescimento e comunidade"></div>
      <div class="way-v29-body"><span class="way-v29-num">04</span><h3>Uma jornada que acompanha você</h3><i></i><p>Curadoria, práticas e comunidade reunidas em um caminho flexível, acolhedor e respeitoso com o tempo que você tem hoje.</p></div>
    </article>
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
    <div class="founder-v29-visual reveal">
      <div class="founder-v29-photo inspira-v29-sprite sprite-founder" role="img" aria-label="Retrato completo de André Schuindt, idealizador e mediador do Projeto INSPIRA"></div>
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

const V29_STYLES=`<style id="inspira-v29">
.inspira-v29-sprite{background-image:url('/assets/inspira-v29-sprite.svg?v=29');background-repeat:no-repeat;background-size:100% 600%;background-color:#f8f4ee}
.sprite-card-1{background-position:0 0}
.sprite-card-2{background-position:0 20%}
.sprite-card-3{background-position:0 40%}
.sprite-card-4{background-position:0 60%}
.sprite-platform{background-position:0 80%}
.sprite-founder{background-position:0 100%}
.platform-v29{overflow:hidden}
.platform-v29-inner{max-width:1100px;margin-inline:auto;text-align:center}
.platform-v29-copy{max-width:930px;margin-inline:auto}
.platform-v29-copy .lead{max-width:830px;margin:18px auto 0}
.platform-v29-list{list-style:none;padding:0;margin:30px auto 0;max-width:860px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 16px;text-align:left}
.platform-v29-list li{position:relative;padding:15px 18px 15px 48px;border:1px solid rgba(137,57,154,.10);border-radius:16px;background:rgba(255,253,248,.72);color:#665b66;box-shadow:0 9px 24px rgba(74,46,76,.04)}
.platform-v29-list li:before{content:'✓';position:absolute;left:17px;top:13px;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;background:rgba(93,212,87,.14);color:#43bf55;font-weight:900}
.platform-v29-actions{justify-content:center;margin-top:28px}
.platform-v29-showcase{margin:42px auto 0;max-width:980px;padding:14px;border-radius:28px;background:rgba(255,253,248,.85);border:1px solid rgba(137,57,154,.12);box-shadow:0 24px 60px rgba(76,44,80,.10)}
.platform-v29-showcase .sprite-platform{aspect-ratio:4/3;border-radius:20px}
.platform-v29-showcase figcaption{padding:13px 12px 4px;font-size:.78rem;color:var(--muted);line-height:1.55}
.ways-v29{align-items:stretch}
.ways-v29 .way-card{overflow:hidden;display:flex;flex-direction:column;padding:0;background:rgba(255,253,248,.92);border:1px solid rgba(137,57,154,.10);box-shadow:0 16px 38px rgba(76,44,80,.07)}
.way-photo-v29{aspect-ratio:4/3;width:100%;border-radius:inherit inherit 0 0}
.way-v29-body{padding:22px 20px 24px;display:flex;flex-direction:column;flex:1}
.way-v29-num{font-size:.72rem;font-weight:900;color:var(--teal);letter-spacing:.06em}
.way-v29-body h3{font-family:Georgia,'Times New Roman',serif;font-size:1.34rem;line-height:1.05;color:var(--purple3);margin:8px 0 11px}
.way-v29-body i{display:block;width:30px;height:2px;background:#44c55b;margin:0 0 13px}
.way-v29-body p{font-size:.86rem;line-height:1.65;color:#675d66;margin:0}
.founder-v29{background:linear-gradient(180deg,rgba(255,248,230,.36),rgba(255,253,248,.10));overflow:hidden}
.founder-v29-grid{display:grid;grid-template-columns:minmax(320px,.88fr) minmax(0,1.12fr);gap:30px;align-items:center;max-width:1120px;margin-inline:auto}
.founder-v29-visual,.founder-v29-card{border:1px solid rgba(137,57,154,.12);box-shadow:0 20px 52px rgba(80,45,82,.09);background:rgba(255,253,248,.86);border-radius:30px}
.founder-v29-visual{padding:14px 14px 18px}
.founder-v29-photo{aspect-ratio:4/3;border-radius:20px}
.founder-v29-caption{margin-top:14px;padding:10px 14px;border-radius:999px;background:#fffaf4;border:1px solid rgba(137,57,154,.12);font-size:.72rem;font-weight:900;color:var(--purple);text-align:center}
.founder-v29-card{padding:42px 44px}
.founder-v29-card h3{font-family:Georgia,'Times New Roman',serif;font-size:clamp(2.2rem,3.7vw,3.9rem);line-height:1.01;letter-spacing:-.035em;margin:13px 0 24px;color:var(--purple3)}
.founder-v29-card p{color:#66555f;font-size:.97rem;line-height:1.72;margin:0 0 15px}
.founder-v29-intent{margin-top:6px;padding:18px 20px;border-radius:18px;background:linear-gradient(90deg,rgba(37,175,162,.08),rgba(93,212,87,.07));border:1px solid rgba(37,175,162,.11);font-size:.84rem;color:#5c4e59;line-height:1.65}
.founder-v29-intent strong{color:var(--teal)}
.founder-v29-signature{display:flex;align-items:flex-end;justify-content:space-between;gap:22px;margin-top:24px;padding-top:18px;border-top:1px solid var(--line)}
.founder-v29-signature .signature{font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:1.42rem;color:var(--purple)}
.founder-v29-signature .signature-role{font-size:.72rem;color:var(--muted);text-align:right;max-width:330px;line-height:1.45}
.founder-v29-card .credentials{margin-top:14px;font-size:.73rem;color:var(--muted);line-height:1.6}
.founder-v29-card .founder-cta{margin-top:22px}
@media(max-width:980px){.platform-v29-list{grid-template-columns:1fr}.founder-v29-grid{grid-template-columns:1fr;max-width:760px}.founder-v29-visual{max-width:620px;width:100%;justify-self:center}.founder-v29-card{padding:34px 32px}.founder-v29-signature{align-items:flex-start;flex-direction:column}.founder-v29-signature .signature-role{text-align:left}}
@media(max-width:640px){.platform-v29-actions{flex-direction:column;align-items:stretch}.platform-v29-actions .btn{width:100%}.platform-v29-showcase{padding:8px;border-radius:20px}.platform-v29-showcase .sprite-platform{border-radius:14px}.founder-v29-visual,.founder-v29-card{border-radius:24px}.founder-v29-visual{padding:9px 9px 15px}.founder-v29-photo{border-radius:17px}.founder-v29-card{padding:26px 22px}.founder-v29-card h3{font-size:clamp(2rem,10.4vw,3rem)}.founder-v29-card p{font-size:.94rem}.founder-v29-card .founder-cta .btn{width:100%}}
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
  html=html.replace(/<section\b[^>]*\bid=["']agora["'][^>]*>[\s\S]*?<\/section>/i,NOW_SECTION);
  html=html.replace(/<div\b[^>]*class=["'][^"']*platform-gallery-card[^"']*["'][^>]*>[\s\S]*?<\/div>\s*<\/div>/gi,'');
  html=html.replace(/<section\b[^>]*\bid=["']impacto["'][^>]*>[\s\S]*?<\/section>/i,IMPACT_SECTION);
  html=html.replace(/<section\b[^>]*\bid=["']andre["'][^>]*>[\s\S]*?<\/section>/i,FOUNDER_SECTION);
  html=html.replace(/href=["']#como-funciona["']\s+data-event=["']hero_como_funciona["']>[^<]*</i,'href="#plataforma" data-event="hero_experiencia">Conhecer a experiência<');
  html=html.replace(/data-event=["']hero_experiencia["']>[^<]*</i,'data-event="hero_experiencia">Conhecer a experiência<');
  html=html.replace(/href=["']\/inspira-v2-1\.css(?:\?[^"']*)?["']/i,'href="/inspira-v2-1.css?v=29"');
  html=html.replace(/src=["']\/inspira-v2-1\.js(?:\?[^"']*)?["']/i,'src="/inspira-v2-1.js?v=29"');
  html=html.replace('</head>',`${V29_STYLES}\n  <meta name="inspira-release" content="${RELEASE}">\n</head>`);
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
