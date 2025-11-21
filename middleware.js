export default async function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  // Skip modifying common static asset types to avoid extra overhead
  const skipExt = /\.(js|css|png|jpg|jpeg|svg|ico|gif|webp|json|xml|txt|woff2?|map)$/i;
  if (skipExt.test(path)) {
    return fetch(request);
  }

  const res = await fetch(request);
  const contentType = res.headers.get('content-type') || '';

  // Only add CSP and other security headers to HTML responses
  if (!contentType.includes('text/html')) {
    return res;
  }

  const newHeaders = new Headers(res.headers);
  newHeaders.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://fundingchoicesmessages.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: http:; frame-src 'self' https://www.google.com https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://fundingchoicesmessages.google.com; connect-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com https://googleads.g.doubleclick.net; object-src 'none'; base-uri 'self'; form-action 'self';"
  );
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('X-Frame-Options', 'SAMEORIGIN');
  newHeaders.set('X-XSS-Protection', '1; mode=block');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newHeaders.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  const body = await res.arrayBuffer();
  return new Response(body, {
    status: res.status,
    statusText: res.statusText,
    headers: newHeaders,
  });
}
