module.exports = (req, res) => {
  const adsLine = 'google.com, pub-3490607792366389, DIRECT, f08c47fec0942fa0';
  const adsWithNewline = adsLine + '\n';
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Length', Buffer.byteLength(adsWithNewline));
  res.end(adsWithNewline, 'utf8');
};
