import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerenderConfig from './prerender.config.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const siteUrl = 'https://www.mo-kebap.de'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap-robots',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist')

        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true })
        }

        const routes = prerenderConfig.routes || []
        const lastmod = new Date().toISOString().split('T')[0]

        const sitemapEntries = routes
          .map((r) => r || '/')
          .map((r) => {
            const normalized = r.startsWith('/') ? r : `/${r}`
            return `${siteUrl}${normalized === '/' ? '/' : normalized}`
          })
          .map((loc) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${loc.endsWith('/') ? '1.0' : '0.8'}</priority>\n  </url>`)
          .join('\n')

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`
        fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemap)

        const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
        fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robots)
      }
    },
    {
      name: 'prerender-manifest',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist')

        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true })
        }

        const manifest = {
          generatedAt: new Date().toISOString(),
          routes: prerenderConfig.routes || [],
          sitemap: !!prerenderConfig.sitemap,
          robotsTxt: !!prerenderConfig.robotsTxt
        }

        fs.writeFileSync(
          path.resolve(distDir, 'prerender-manifest.json'),
          JSON.stringify(manifest, null, 2)
        )
      }
    },
    {
      name: 'copy-special-files',
      closeBundle() {
        // Create ads.txt with proper content (source of truth: public/ads.txt)
        const adsSourcePath = path.resolve(__dirname, 'public', 'ads.txt');
        const adsContent = fs.readFileSync(adsSourcePath, 'utf8');
        fs.writeFileSync(path.resolve(__dirname, 'dist', 'ads.txt'), adsContent);
        
        // Create vercel.json for SPA routing
        const vercelJson = {
          routes: [
            { handle: "filesystem" },
            { src: "/.*", dest: "/index.html" }
          ]
        };
        fs.writeFileSync(
          path.resolve(__dirname, 'dist', 'vercel.json'),
          JSON.stringify(vercelJson, null, 2)
        );
      }
    }
  ],
  server: {
    port: 5173
  },
  resolve: {
    alias: {}
  },
  ssr: {
    noExternal: ['react-router-dom']
  },
  build: {
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true
      }
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    // Chunk size warnings
    chunkSizeWarningLimit: 600
  }
})
