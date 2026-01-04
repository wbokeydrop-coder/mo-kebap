const CSP = "default-src 'self'; script-src 'self' https://pagead2.googlesyndication.com https://www.googletagservices.com https://www.googletagmanager.com https://www.google-analytics.com 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.googleusercontent.com https://*.ggpht.com https://*.google.com https://*.gstatic.com https://*.googlesyndication.com; frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://pagead2.googlesyndication.com https://fundingchoicesmessages.google.com https://www.google.com; connect-src 'self' https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.google-analytics.com https://fundingchoicesmessages.google.com;"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: CSP
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
