export default async function handler(req, res) {
  const { path } = req.query;
  if (!path) return res.status(400).json({ error: 'missing ?path=' });

  const url = 'https://v2.gosplan.info' + path;
  const resp = await fetch(url);
  const data = await resp.text();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', resp.headers.get('content-type') || 'application/json');
  res.status(resp.status).send(data);
}
