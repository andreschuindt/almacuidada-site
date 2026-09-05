const base = require('./proxy');

module.exports = async function handler(req, res) {
  let statusCode = 200;
  let body;
  const headers = {};

  const capture = {
    setHeader(name, value) { headers[String(name).toLowerCase()] = value; },
    status(code) { statusCode = code; return this; },
    send(value) { body = value; return this; }
  };

  await base(req, capture);

  if (typeof body === 'string') {
    body = body
      .replace('/assets/plataforma-dashboard.jpg?v=31', '/assets/plataforma-dashboard-v33.svg?v=32')
      .replace('content="3.1"', 'content="3.2"')
      .replace('inspira-v2-1.css?v=31', 'inspira-v2-1.css?v=32')
      .replace('inspira-v2-1.js?v=31', 'inspira-v2-1.js?v=32');
  }

  for (const [name, value] of Object.entries(headers)) {
    res.setHeader(name, value);
  }
  res.setHeader('X-INSPIRA-Release', '3.2');
  res.setHeader('Cache-Control', typeof body === 'string' ? 'no-store, max-age=0' : (headers['cache-control'] || 'public, max-age=300'));
  res.status(statusCode).send(body);
};
