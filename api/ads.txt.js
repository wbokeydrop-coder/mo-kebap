// API endpoint for ads.txt - ensures proper formatting for Google AdSense
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Robots-Tag', 'noindex');
  
  // Important: Google AdSense requires newline at end of file
  // Using Buffer to preserve exact bytes including trailing newline
  const adsContent = Buffer.from('google.com, pub-3490607792366389, DIRECT, f08c47fec0942fa0\n', 'utf8');
  
  res.status(200).end(adsContent);
};
