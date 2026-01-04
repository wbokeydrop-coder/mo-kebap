/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { runtime: 'nodejs' },
  output: 'export',
  images: { unoptimized: true }
};

module.exports = nextConfig;
