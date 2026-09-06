const UPSTREAM = 'https://projetoinspira-nfm7h9dh8-schuindt.vercel.app';
const RAW_BASE = 'https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production';
const RAW_JS = `${RAW_BASE}/inspira-v2-1.js`;
const RELEASE = '3.6';

const DIRECT_ASSETS = new Set([
  'assets/inspira-platform-v34.webp',
  'assets/inspira-card-leituras-v34.webp',
  'assets/inspira-card-pausas-v34.webp',
  'assets/inspira-card-reflexoes-v34.webp',
  'assets/inspira-card-jornada-v34.webp'
]);

function typeFor(path, fallback='application/octet-stream') {
  if (path.endsWith('.webp')) return 'image/webp';
  if (path.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (path.endsWith('.css')) return 'text/css; charset=utf-8';
  if (path.endsWith('.html') || path === '') return 'text/html; charset=utf-8';
  return fallback;
}

module.exports = async function handler(req, res) {
  try {
    let path = String(req.query.path || '').replace(/^\/+/, '');
    const isMainJs = path === 'inspira-v2-1.js';
    const isDirectAsset = DIRECT_ASSETS.has(path);

    const url = isMainJs
      ? RAW_JS
      : isDirectAsset
        ? `${RAW_BASE}/${path}`
        : (path ? `${UPSTREAM}/${path}` : `${UPSTREAM}/`);

    const upstream = await fetch(url, {
      headers: { 'User-Agent': 'Projeto-INSPIRA-3.6' }
    });

    if (!upstream.ok) {
      res.status(upstream.status).send('Not found');
      return;
    }

    const upstreamType = upstream.headers.get('content-type') || 'application/octet-stream';
    const type = typeFor(path, upstreamType);
    res.status(200);
    res.setHeader('Content-Type', type);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-INSPIRA-Release', RELEASE);

    if (isMainJs) {
      let js = await upstream.text();
      js = js
        .replace(/\?v=34/g, '?v=36')
        .replace(/INSPIRA 3\.5 PENDING/g, 'INSPIRA 3.6')
        .replace(/INSPIRA 3\.4/g, 'INSPIRA 3.6');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.send(js);
    }

    if (upstreamType.includes('text/html')) {
      let html = await upstream.text();
      html = html
        .replace(/inspira-v2-1\.js\?v=(?:34|35)/g, 'inspira-v2-1.js?v=36')
        .replace(/inspira-v2-1\.css\?v=(?:34|35)/g, 'inspira-v2-1.css?v=36')
        .replace(/content="3\.(?:4|5)"/g, 'content="3.6"');
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
    console.error('INSPIRA 3.6 proxy error', error);
    return res.status(500).send('Internal Server Error');
  }
};
