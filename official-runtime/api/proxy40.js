const UPSTREAM = 'https://projetoinspira-nfm7h9dh8-schuindt.vercel.app';
const RAW_BASE = 'https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RAW_JS = `${RAW_BASE}/inspira-v2-1.js`;
const RELEASE = '4.8';
const PLATFORM_V48 = 'assets/inspira-dashboard-v48.webp';
const PLATFORM_FALLBACK = 'assets/inspira-carousel-sprite-hq.webp';

const DIRECT_ASSETS = new Set([
  'assets/plataforma-dashboard-premium-v38.svg',
  PLATFORM_FALLBACK
]);

function typeFor(path, fallback = 'application/octet-stream') {
  if (path.endsWith('.svg')) return 'image/svg+xml; charset=utf-8';
  if (path.endsWith('.webp')) return 'image/webp';
  if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg';
  if (path.endsWith('.png')) return 'image/png';
  if (path.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (path.endsWith('.css')) return 'text/css; charset=utf-8';
  if (path.endsWith('.html') || path === '') return 'text/html; charset=utf-8';
  return fallback;
}

async function fetchRawAsset(path) {
  const r = await fetch(`${RAW_BASE}/${path}`, {
    headers: { 'User-Agent': 'Projeto-INSPIRA-4.8' }
  });
  if (!r.ok) throw new Error(`Falha ao carregar asset ${path}: ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

module.exports = async function handler(req, res) {
  try {
    const rawPath = String(req.query.path || '').replace(/^\/+/, '');
    const path = rawPath.split('?')[0];
    const isMainJs = path === 'inspira-v2-1.js';
    const isDirectAsset = DIRECT_ASSETS.has(path);

    // 4.8: caminho estável para a prova visual da plataforma.
    // Enquanto o binário novo não estiver no repositório, usa o asset real já validado,
    // evitando 500, imagem quebrada e layout inconsistente.
    if (path === PLATFORM_V48) {
      const image = await fetchRawAsset(PLATFORM_FALLBACK);
      res.status(200);
      res.setHeader('Content-Type', 'image/webp');
      res.setHeader('Content-Length', image.length);
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      res.setHeader('X-Content-Type-Options', 'nosniff');
      res.setHeader('X-INSPIRA-Release', RELEASE);
      return res.send(image);
    }

    const url = isMainJs
      ? RAW_JS
      : isDirectAsset
        ? `${RAW_BASE}/${path}`
        : (path ? `${UPSTREAM}/${path}` : `${UPSTREAM}/`);

    const upstream = await fetch(url, {
      headers: { 'User-Agent': 'Projeto-INSPIRA-4.8' }
    });

    if (!upstream.ok) {
      return res.status(upstream.status).send('Not found');
    }

    const upstreamType = upstream.headers.get('content-type') || 'application/octet-stream';
    res.status(200);
    res.setHeader('Content-Type', typeFor(path, upstreamType));
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-INSPIRA-Release', RELEASE);

    if (isMainJs) {
      let js = await upstream.text();
      js = js
        .replace(/platformImg\.src='\/assets\/(?:inspira-platform-v34\.webp|plataforma-dashboard-premium-v38\.svg|inspira-carousel-sprite-hq\.webp|inspira-dashboard-v42\.webp|inspira-dashboard-v43\.webp|inspira-dashboard-v44\.webp|inspira-dashboard-v45\.webp|inspira-dashboard-v46-300dpi\.jpg|inspira-dashboard-v47\.webp|inspira-dashboard-v48\.webp)\?v=\d+';/, "platformImg.src='/assets/inspira-dashboard-v48.webp?v=48';")
        .replace("const agora=document.getElementById('agora');", "const agora=null; // INSPIRA 4.8: preserva as artes inline")
        .replace(/\?v=(?:34|35|36|37|38|39|40|41|42|43|44|45|46|47)/g, '?v=48')
        .replace(/INSPIRA 3\.5 PENDING/g, 'INSPIRA 4.8')
        .replace(/INSPIRA (?:3\.(?:4|5|6|7|8|9)|4\.(?:0|1|2|3|4|5|6|7))/g, 'INSPIRA 4.8');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.send(js);
    }

    if (upstreamType.includes('text/html')) {
      let html = await upstream.text();
      html = html
        .replace(/\/assets\/(?:inspira-platform-v34\.webp|plataforma-dashboard-v33\.svg|plataforma-dashboard-premium-v38\.svg|inspira-carousel-sprite-hq\.webp|inspira-dashboard-v42\.webp|inspira-dashboard-v43\.webp|inspira-dashboard-v44\.webp|inspira-dashboard-v45\.webp|inspira-dashboard-v46-300dpi\.jpg|inspira-dashboard-v47\.webp|inspira-dashboard-v48\.webp)\?v=\d+/g, '/assets/inspira-dashboard-v48.webp?v=48')
        .replace(/inspira-v2-1\.js\?v=\d+/g, 'inspira-v2-1.js?v=48')
        .replace(/inspira-v2-1\.css\?v=\d+/g, 'inspira-v2-1.css?v=48')
        .replace(/content="(?:3\.\d+|4\.(?:0|1|2|3|4|5|6|7))"/g, 'content="4.8"')
        .replace('<small>Relato da comunidade</small>', '<small>Mariana Alves</small>')
        .replace('<small>Relato da comunidade</small>', '<small>Rafael Costa</small>')
        .replace('<small>Relato da comunidade</small>', '<small>Camila Ribeiro</small>')
        .replace(
          '<h2 class="title">Talvez você não precise mudar tudo. Talvez precise apenas começar por uma página.</h2><p class="lead">Conheça a experiência, escolha o ciclo que combina com o seu momento e caminhe no seu ritmo.</p>',
          '<h2 class="title">“Ser socialmente saudável é ter relações e uma comunidade nas quais você possa se sentir parte”.</h2><p class="lead"><strong>Dra. Kasley Killan</strong></p><p class="lead" style="margin-top:10px;font-weight:800;color:var(--purple3)">Vem pra Comunidade INSPIRA!</p>'
        )
        .replace('<div class="closing">Leitura que acolhe. Conhecimento que transforma. Comunidade que cuida.</div>', '')
        .replace('</head>', `<style>
          .platform-v29-image-frame img,.platform-preview-image,.platform-v31-real{width:100%!important;height:auto!important;max-height:none!important;display:block!important;object-fit:contain!important;object-position:center!important;background:#17151a!important}
          .founder-v29-photo-stage img,.founder-v31-photo img,.founder-section img[alt*="André Schuindt"]{width:100%!important;height:auto!important;max-height:560px!important;object-fit:contain!important;object-position:center center!important;display:block!important}
          .platform-v29-copy,.platform-v31-copy{text-align:center!important}
          .platform-v29-actions,.platform-v31-actions{justify-content:center!important}
          @media (max-width:980px){.founder-v29-grid,.founder-v31-grid{grid-template-columns:1fr!important}.platform-v29-points,.platform-v31-points{grid-template-columns:1fr!important}}
        </style><meta name="inspira-release" content="4.8"></head>`);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store, max-age=0');
      return res.send(html);
    }

    const buf = Buffer.from(await upstream.arrayBuffer());
    res.setHeader('Cache-Control', isDirectAsset
      ? 'public, max-age=31536000, immutable'
      : (upstream.headers.get('cache-control') || 'public, max-age=300'));
    return res.send(buf);
  } catch (error) {
    console.error('INSPIRA 4.8 proxy error', error);
    return res.status(500).send('Internal Server Error');
  }
};
