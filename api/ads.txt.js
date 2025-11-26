// API endpoint for ads.txt to ensure proper formatting for Google AdSense
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Robots-Tag', 'noindex');
  
  // Google AdSense requires proper line endings
  const adsContent = 'google.com, pub-3490607792366389, DIRECT, f08c47fec0942fa0\n';
  
  res.status(200).send(adsContent);
};
