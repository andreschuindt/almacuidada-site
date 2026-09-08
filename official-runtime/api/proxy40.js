const UPSTREAM = 'https://projetoinspira-nfm7h9dh8-schuindt.vercel.app';
const RAW_BASE = 'https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RAW_JS = `${RAW_BASE}/inspira-v2-1.js`;
const RELEASE = '4.8';
const BUILD = '4.8.10';

const DIRECT_ASSETS = new Set([
  'assets/plataforma-dashboard-premium-v38.svg',
  'assets/inspira-carousel-sprite-hq.webp'
]);

const REMOVED_DASHBOARD_PATHS = new Set([
  'assets/inspira-dashboard-v48-final.webp',
  'assets/inspira-dashboard-v48-fixed.webp',
  'assets/inspira-dashboard-v48.webp'
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

function transformJs(js) {
  return js
    .replace("const agora=document.getElementById('agora');", "const agora=null; // INSPIRA 4.8: preserva as artes inline")
    .replace(/\?v=(?:34|35|36|37|38|39|40|41|42|43|44|45|46|47|48|481|482|483|484|485|486|487|488|489)/g, '?v=490')
    .replace(/INSPIRA 3\.5 PENDING/g, 'INSPIRA 4.8')
    .replace(/INSPIRA (?:3\.(?:4|5|6|7|8|9)|4\.(?:0|1|2|3|4|5|6|7|8|9))/g, 'INSPIRA 4.8');
}

function removePlatformSection(html) {
  return html
    .replace(/<section\b[^>]*\bid=(['"])plataforma\1[^>]*>[\s\S]*?<\/section>/i, '')
    .replace(/<a\s+href=(['"])#plataforma\1[^>]*>\s*Por dentro\s*<\/a>/gi, '')
    .replace(/href=(['"])#plataforma\1/gi, 'href="#planos"');
}

function transformHtml(html) {
  let out = removePlatformSection(html);

  out = out
    .replace('Quatro formas de viver a experiência INSPIRA.', 'Algumas formas de viver a experiência INSPIRA.')
    .replace(/inspira-v2-1\.js\?v=\d+/g, 'inspira-v2-1.js?v=490')
    .replace(/inspira-v2-1\.css\?v=\d+/g, 'inspira-v2-1.css?v=490')
    .replace(/<meta name="inspira-release" content="[^"]*">(?:\s*<meta name="inspira-build" content="[^"]*">)?/g, '')
    .replace('<small>Relato da comunidade</small>', '<small>Mariana Alves</small>')
    .replace('<small>Relato da comunidade</small>', '<small>Rafael Costa</small>')
    .replace('<small>Relato da comunidade</small>', '<small>Camila Ribeiro</small>')
    .replace(
      '<h2 class="title">Talvez você não precise mudar tudo. Talvez precise apenas começar por uma página.</h2><p class="lead">Conheça a experiência, escolha o ciclo que combina com o seu momento e caminhe no seu ritmo.</p>',
      '<h2 class="title">“Ser socialmente saudável é ter relações e uma comunidade nas quais você possa se sentir parte”.</h2><p class="lead"><strong>Dra. Kasley Killan</strong></p><p class="lead" style="margin-top:10px;font-weight:800;color:var(--purple3)">Vem pra Comunidade INSPIRA!</p>'
    )
    .replace('<div class="closing">Leitura que acolhe. Conhecimento que transforma. Comunidade que cuida.</div>', '')
    .replace('</head>', `<style>
      .founder-v29-photo-stage img,.founder-v31-photo img,.founder-section img[alt*="André Schuindt"]{width:100%!important;height:auto!important;max-height:560px!important;object-fit:contain!important;object-position:center center!important;display:block!important}
      @media (max-width:980px){.founder-v29-grid,.founder-v31-grid{grid-template-columns:1fr!important}}
    </style><meta name="inspira-release" content="4.8"><meta name="inspira-build" content="4.8.10"></head>`);

  return out;
}

module.exports = async function handler(req, res) {
  try {
    const rawPath = String((req.query && req.query.path) || '').replace(/^\/+/, '');
    const path = rawPath.split('?')[0];
    const isMainJs = path === 'inspira-v2-1.js';
    const isDirectAsset = DIRECT_ASSETS.has(path);

    if (REMOVED_DASHBOARD_PATHS.has(path)) {
      res.status(404);
      res.setHeader('Cache-Control', 'no-store, max-age=0');
      res.setHeader('X-INSPIRA-Release', RELEASE);
      res.setHeader('X-INSPIRA-Build', BUILD);
      return res.send('Removed');
    }

    const url = isMainJs
      ? RAW_JS
      : isDirectAsset
        ? `${RAW_BASE}/${path}`
        : (path ? `${UPSTREAM}/${path}` : `${UPSTREAM}/`);

    const upstream = await fetch(url, {
      headers: { 'User-Agent': 'Projeto-INSPIRA-4.8.10' },
      redirect: 'follow'
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
    res.setHeader('X-INSPIRA-Build', BUILD);

    if (isMainJs) {
      const js = transformJs(await upstream.text());
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.send(js);
    }

    if (upstreamType.includes('text/html')) {
      const html = transformHtml(await upstream.text());
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
    console.error('INSPIRA 4.8.10 proxy error', error);
    return res.status(500).send('Internal Server Error');
  }
};
