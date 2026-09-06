const UPSTREAM = 'https://projetoinspira-nfm7h9dh8-schuindt.vercel.app';
const RAW_BASE = 'https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RAW_JS = `${RAW_BASE}/inspira-v2-1.js`;
const RELEASE = '3.9';

const DIRECT_ASSETS = new Set([
  'assets/plataforma-dashboard-premium-v38.svg'
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

module.exports = async function handler(req, res) {
  try {
    const path = String(req.query.path || '').replace(/^\/+/, '');
    const isMainJs = path === 'inspira-v2-1.js';
    const isDirectAsset = DIRECT_ASSETS.has(path);

    const url = isMainJs
      ? RAW_JS
      : isDirectAsset
        ? `${RAW_BASE}/${path}`
        : (path ? `${UPSTREAM}/${path}` : `${UPSTREAM}/`);

    const upstream = await fetch(url, {
      headers: { 'User-Agent': 'Projeto-INSPIRA-3.9' }
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
        .replace(/platformImg\.src='\/assets\/inspira-platform-v34\.webp\?v=\d+';/, "platformImg.src='/assets/plataforma-dashboard-premium-v38.svg?v=39';")
        .replace("const agora=document.getElementById('agora');", "const agora=null; // 3.9: preserva as quatro artes SVG inline do HTML")
        .replace(/\?v=(?:34|35|36|37|38)/g, '?v=39')
        .replace(/INSPIRA 3\.5 PENDING/g, 'INSPIRA 3.9')
        .replace(/INSPIRA 3\.(?:4|5|6|7|8)/g, 'INSPIRA 3.9');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.send(js);
    }

    if (upstreamType.includes('text/html')) {
      let html = await upstream.text();
      html = html
        .replace(/\/assets\/(?:inspira-platform-v34\.webp|plataforma-dashboard-v33\.svg|plataforma-dashboard-premium-v38\.svg)\?v=\d+/g, '/assets/plataforma-dashboard-premium-v38.svg?v=39')
        .replace(/inspira-v2-1\.js\?v=\d+/g, 'inspira-v2-1.js?v=39')
        .replace(/inspira-v2-1\.css\?v=\d+/g, 'inspira-v2-1.css?v=39')
        .replace(/content="3\.\d+"/g, 'content="3.9"')
        .replace('<small>Relato da comunidade</small>', '<small>Mariana Alves · pseudônimo</small>')
        .replace('<small>Relato da comunidade</small>', '<small>Rafael Costa · pseudônimo</small>')
        .replace('<small>Relato da comunidade</small>', '<small>Camila Ribeiro · pseudônimo</small>');
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
    console.error('INSPIRA 3.9 proxy error', error);
    return res.status(500).send('Internal Server Error');
  }
};
