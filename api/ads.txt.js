// API endpoint for ads.txt - ensures proper formatting for Google AdSense
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Robots-Tag', 'noindex');
  
  // Important: ads.txt spec requires entries be on their own lines
  // Adding comment ensures file ends with newline (some parsers require this)
  const adsLines = [
    'google.com, pub-3490607792366389, DIRECT, f08c47fec0942fa0',
    '# Updated for Google AdSense compatibility',
    ''  // Empty line at end
  ];
  
  const adsContent = Buffer.from(adsLines.join('\n'), 'utf8');
  
  res.status(200).end(adsContent);
};
