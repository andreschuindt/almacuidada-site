const UPSTREAM = 'https://projetoinspira-ms56uo6vp-schuindt.vercel.app';
const PLATFORM_IMAGE = 'https://raw.githubusercontent.com/andreschuindt/almacuidada-site/projetoinspira-production/assets/plataforma-dashboard-v33.svg';

module.exports = async function handler(req, res) {
  try {
    let path = String(req.query.path || '').replace(/^\/+/, '');
    const url = path ? `${UPSTREAM}/${path}` : `${UPSTREAM}/`;
    const upstream = await fetch(url, { headers: { 'User-Agent': 'Projeto-INSPIRA-3.2' } });

    res.status(upstream.status);
    const type = upstream.headers.get('content-type') || 'application/octet-stream';
    res.setHeader('Content-Type', type);
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-INSPIRA-Release', '3.2');

    if (type.includes('text/html')) {
      let html = await upstream.text();
      html = html
        .replace('/assets/plataforma-dashboard.jpg?v=31', PLATFORM_IMAGE)
        .replace('content="3.1"', 'content="3.2"');
      res.setHeader('Cache-Control', 'no-store, max-age=0');
      return res.send(html);
    }

    const buf = Buffer.from(await upstream.arrayBuffer());
    res.setHeader('Cache-Control', upstream.headers.get('cache-control') || 'public, max-age=300');
    return res.send(buf);
  } catch (error) {
    console.error('INSPIRA 3.2 proxy error', error);
    return res.status(500).send('Internal Server Error');
  }
};
