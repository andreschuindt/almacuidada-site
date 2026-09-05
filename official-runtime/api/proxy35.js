const UPSTREAM = 'https://projetoinspira-nfm7h9dh8-schuindt.vercel.app';
const RAW_JS = 'https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production/inspira-v2-1.js';
const RELEASE = '3.5';

module.exports = async function handler(req, res) {
  try {
    let path = String(req.query.path || '').replace(/^\/+/, '');
    const isMainJs = path === 'inspira-v2-1.js';
    const url = isMainJs ? RAW_JS : (path ? `${UPSTREAM}/${path}` : `${UPSTREAM}/`);

    const upstream = await fetch(url, {
      headers: { 'User-Agent': 'Projeto-INSPIRA-3.5' }
    });

    res.status(upstream.status);
    const type = isMainJs
      ? 'application/javascript; charset=utf-8'
      : (upstream.headers.get('content-type') || 'application/octet-stream');
    res.setHeader('Content-Type', type);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-INSPIRA-Release', RELEASE);

    if (type.includes('text/html')) {
      let html = await upstream.text();
      html = html
        .replace(/inspira-v2-1\.js\?v=34/g, 'inspira-v2-1.js?v=35')
        .replace(/inspira-v2-1\.css\?v=34/g, 'inspira-v2-1.css?v=35')
        .replace(/content="3\.4"/g, 'content="3.5"');
      res.setHeader('Cache-Control', 'no-store, max-age=0');
      return res.send(html);
    }

    const buf = Buffer.from(await upstream.arrayBuffer());
    if (isMainJs) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', upstream.headers.get('cache-control') || 'public, max-age=300');
    }
    return res.send(buf);
  } catch (error) {
    console.error('INSPIRA 3.5 proxy error', error);
    return res.status(500).send('Internal Server Error');
  }
};
