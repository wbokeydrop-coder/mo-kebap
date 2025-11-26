// API endpoint for ads.txt to ensure it's always accessible
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Robots-Tag', 'noindex');
  
  const adsContent = 'google.com, pub-3490607792366389, DIRECT, f08c47fec0942fa0\n';
  
  res.status(200).send(adsContent);
};
