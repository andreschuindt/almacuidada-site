const UPSTREAM = 'https://projetoinspira-nfm7h9dh8-schuindt.vercel.app';
const RAW_BASE = 'https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RAW_JS = `${RAW_BASE}/inspira-v2-1.js`;
const RELEASE = '4.7';
const PLATFORM_V47 = 'assets/inspira-dashboard-v47.webp';
const PLATFORM_CHUNKS = [
  'assets/platform-v44-00.b64',
  'assets/platform-v44-01.b64',
  'assets/platform-v44-02.b64',
  'assets/platform-v44-03.b64',
  'assets/platform-v44-04.b64',
  'assets/platform-v44-05.b64',
  'assets/platform-v44-06.b64',
  'assets/platform-v44-07.b64'
];

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
  const texts = await Promise.all(PLATFORM_CHUNKS.map(async (name) => {
    const r = await fetch(`${RAW_BASE}/${name}`, {
      headers: { 'User-Agent': 'Projeto-INSPIRA-4.7' },
      cache: 'no-store'
    });
    if (!r.ok) throw new Error(`Falha ao carregar ${name}: ${r.status}`);
    return (await r.text()).replace(/\s+/g, '');
  }));
  const image = Buffer.from(texts.join(''), 'base64');
  const riff = image.subarray(0, 4).toString('ascii');
  const webp = image.subarray(8, 12).toString('ascii');
  if (image.length !== 51000 || riff !== 'RIFF' || webp !== 'WEBP') {
    throw new Error(`Imagem 4.7 inválida: ${image.length} bytes ${riff}/${webp}`);
  }
  return image;
}

module.exports = async function handler(req, res) {
  try {
    const rawPath = String(req.query.path || '').replace(/^\/+/, '');
    const path = rawPath.split('?')[0];
    const isMainJs = path === 'inspira-v2-1.js';
    const isDirectAsset = DIRECT_ASSETS.has(path);

    if (path === PLATFORM_V47) {
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
      headers: { 'User-Agent': 'Projeto-INSPIRA-4.7' }
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
        .replace(/platformImg\.src='\/assets\/(?:inspira-platform-v34\.webp|plataforma-dashboard-premium-v38\.svg|inspira-carousel-sprite-hq\.webp|inspira-dashboard-v42\.webp|inspira-dashboard-v43\.webp|inspira-dashboard-v44\.webp|inspira-dashboard-v45\.webp|inspira-dashboard-v46-300dpi\.jpg|inspira-dashboard-v47\.webp)\?v=\d+';/, "platformImg.src='/assets/inspira-dashboard-v47.webp?v=47';")
        .replace("const agora=document.getElementById('agora');", "const agora=null; // 4.7: preserva as quatro artes SVG inline do HTML")
        .replace(/\?v=(?:34|35|36|37|38|39|40|41|42|43|44|45|46)/g, '?v=47')
        .replace(/INSPIRA 3\.5 PENDING/g, 'INSPIRA 4.7')
        .replace(/INSPIRA (?:3\.(?:4|5|6|7|8|9)|4\.(?:0|1|2|3|4|5|6))/g, 'INSPIRA 4.7');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.send(js);
    }

    if (upstreamType.includes('text/html')) {
      let html = await upstream.text();
      html = html
        .replace(/\/assets\/(?:inspira-platform-v34\.webp|plataforma-dashboard-v33\.svg|plataforma-dashboard-premium-v38\.svg|inspira-carousel-sprite-hq\.webp|inspira-dashboard-v42\.webp|inspira-dashboard-v43\.webp|inspira-dashboard-v44\.webp|inspira-dashboard-v45\.webp|inspira-dashboard-v46-300dpi\.jpg|inspira-dashboard-v47\.webp)\?v=\d+/g, '/assets/inspira-dashboard-v47.webp?v=47')
        .replace(/inspira-v2-1\.js\?v=\d+/g, 'inspira-v2-1.js?v=47')
        .replace(/inspira-v2-1\.css\?v=\d+/g, 'inspira-v2-1.css?v=47')
        .replace(/content="(?:3\.\d+|4\.(?:0|1|2|3|4|5|6))"/g, 'content="4.7"')
        .replace('<small>Relato da comunidade</small>', '<small>Mariana Alves</small>')
        .replace('<small>Relato da comunidade</small>', '<small>Rafael Costa</small>')
        .replace('<small>Relato da comunidade</small>', '<small>Camila Ribeiro</small>')
        .replace(
          '<p class="container proof-note">Os relatos são apresentados sem nota média ou volume de avaliações enquanto esses dados não forem publicados com fonte verificável.</p>',
          '<p class="container proof-note">Os relatos são apresentados sem nota média ou volume de avaliações enquanto esses dados não forem publicados com fonte verificável.</p>'
        )
        .replace(
          '<h2 class="title">Talvez você não precise mudar tudo. Talvez precise apenas começar por uma página.</h2><p class="lead">Conheça a experiência, escolha o ciclo que combina com o seu momento e caminhe no seu ritmo.</p>',
          '<h2 class="title">“Ser socialmente saudável é ter relações e uma comunidade nas quais você possa se sentir parte”.</h2><p class="lead"><strong>Dra. Kasley Killan</strong></p><p class="lead" style="margin-top:10px;font-weight:800;color:var(--purple3)">Vem pra Comunidade INSPIRA!</p>'
        )
        .replace('<div class="closing">Leitura que acolhe. Conhecimento que transforma. Comunidade que cuida.</div>', '');
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
    console.error('INSPIRA 4.7 proxy error', error);
    return res.status(500).send('Internal Server Error');
  }
};
