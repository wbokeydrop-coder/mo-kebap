import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-special-files',
      closeBundle() {
        const fs = require('fs');
        const path = require('path');
        
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
