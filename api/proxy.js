const COMMIT='ed482d3d1ccbef21a278746e9f16ef56999f355d';
const REPO='andreschuindt/almacuidada-site';
const RAW=`https://raw.githubusercontent.com/${REPO}/${COMMIT}/`;
const REV='20260905-v23';

const MIME={
  '.html':'text/html; charset=utf-8',
  '.css':'text/css; charset=utf-8',
  '.js':'application/javascript; charset=utf-8',
  '.json':'application/json; charset=utf-8',
  '.txt':'text/plain; charset=utf-8',
  '.xml':'application/xml; charset=utf-8',
  '.svg':'image/svg+xml',
  '.webp':'image/webp',
  '.jpg':'image/jpeg',
  '.jpeg':'image/jpeg',
  '.png':'image/png',
  '.gif':'image/gif'
};
function ext(path){const m=path.toLowerCase().match(/(\.[a-z0-9]+)$/);return m?m[1]:'';}
function allowed(path){return /^(index\.html|inspira-v2-1\.(css|js)|privacidade\.html|termos\.html|robots\.txt|sitemap\.xml|favicon\.svg|assets\/[A-Za-z0-9._\/-]+)$/.test(path) && !path.includes('..');}
export default async function handler(req,res){
  let path=Array.isArray(req.query.path)?req.query.path.join('/'):(req.query.path||'index.html');
  path=String(path).replace(/^\/+/, '');
  if(!allowed(path)){res.status(404).send('Not found');return;}
  try{
    const upstream=await fetch(RAW+path,{headers:{'User-Agent':'Projeto-INSPIRA-Vercel'}});
    if(!upstream.ok){res.status(upstream.status).send('Not found');return;}
    let body=Buffer.from(await upstream.arrayBuffer());
    if(path==='index.html'){
      let html=body.toString('utf8');
      html=html.replace('src="/inspira-v2-1.js"',`src="/inspira-v2-1.js?v=${REV}"`);
      body=Buffer.from(html,'utf8');
    }
    res.setHeader('Content-Type',MIME[ext(path)]||upstream.headers.get('content-type')||'application/octet-stream');
    if(path==='index.html') res.setHeader('Cache-Control','no-store, max-age=0');
    else if(path.startsWith('assets/')) res.setHeader('Cache-Control','public, max-age=31536000, s-maxage=31536000, immutable');
    else if(/\.(css|js|svg)$/.test(path)) res.setHeader('Cache-Control','public, max-age=60, s-maxage=60, must-revalidate');
    else res.setHeader('Cache-Control','public, max-age=30, s-maxage=60, must-revalidate');
    res.setHeader('X-Content-Type-Options','nosniff');
    res.setHeader('Referrer-Policy','strict-origin-when-cross-origin');
    res.status(200).send(body);
  }catch(e){res.status(502).send('Upstream unavailable');}
}
