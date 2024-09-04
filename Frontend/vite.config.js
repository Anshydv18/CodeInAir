// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Back-end server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite path if necessary
      },
    },
  },
});
