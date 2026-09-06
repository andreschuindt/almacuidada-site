const UPSTREAM = 'https://projetoinspira-nfm7h9dh8-schuindt.vercel.app';
const RAW_BASE = 'https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RAW_JS = `${RAW_BASE}/inspira-v2-1.js`;
const RELEASE = '4.8';
const PLATFORM_V48 = 'assets/inspira-dashboard-v48.webp';
const PLATFORM_B64 = 'assets/inspira-dashboard-v48.b64';

const DIRECT_ASSETS = new Set([
  'assets/plataforma-dashboard-premium-v38.svg',
  'assets/inspira-carousel-sprite-hq.webp'
]);

function typeFor(path, fallback='application/octet-stream') {
  if (path.endsWith('.svg')) return 'image/svg+xml; charset=utf-8';
  if (path.endsWith('.webp')) return 'image/webp';
  if (path.endsWith('.jpg') || path.endsWith('.jpeg')) return 'image/jpeg';
  if (path.endsWith('.png')) return 'image/png';
  if (path.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (path.endsWith('.css')) return 'text/css; charset=utf-8';
  if (path.endsWith('.html') || path === '') return 'text/html; charset=utf-8';
  return fallback;
}

async function buildPlatformImage() {
  const r = await fetch(`${RAW_BASE}/${PLATFORM_B64}`, {
    headers: { 'User-Agent': 'Projeto-INSPIRA-4.8' },
    cache: 'no-store'
  });
  if (!r.ok) throw new Error(`Falha ao carregar ${PLATFORM_B64}: ${r.status}`);
  const b64 = (await r.text()).replace(/\s+/g, '');
  const image = Buffer.from(b64, 'base64');
  const riff = image.subarray(0, 4).toString('ascii');
  const webp = image.subarray(8, 12).toString('ascii');
  if (image.length !== 396586 || riff !== 'RIFF' || webp !== 'WEBP') {
    throw new Error(`Imagem 4.8 inválida: ${image.length} bytes ${riff}/${webp}`);
  }
  return image;
}

module.exports = async function handler(req, res) {
  try {
    const rawPath = String(req.query.path || '').replace(/^\/+/, '');
    const path = rawPath.split('?')[0];
    const isMainJs = path === 'inspira-v2-1.js';
    const isDirectAsset = DIRECT_ASSETS.has(path);

    if (path === PLATFORM_V48) {
      const image = await buildPlatformImage();
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
      res.status(upstream.status).send('Not found');
      return;
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
        .replace("const agora=document.getElementById('agora');", "const agora=null; // 4.8: preserva as quatro artes SVG inline do HTML")
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
        .replace('</head>', '<style>.platform-v29-image-frame img,.platform-preview-image{width:100%!important;height:auto!important;display:block!important;object-fit:contain!important;object-position:center!important;background:transparent!important}</style></head>');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('Cache-Control', 'no-store, max-age=0');
      return res.send(html);
    }

    const buf = Buffer.from(await upstream.arrayBuffer());
    if (isDirectAsset) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', upstream.headers.get('cache-control') || 'public, max-age=300');
    }
    return res.send(buf);
  } catch (error) {
    console.error('INSPIRA 4.8 proxy error', error);
    return res.status(500).send('Internal Server Error');
  }
};
