import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-vercel-json',
      closeBundle() {
        const fs = require('fs');
        const path = require('path');
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
