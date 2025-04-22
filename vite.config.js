import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/youtube': {
        target: 'https://www.googleapis.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/youtube/, '/youtube'),
        secure: true,
        headers: {
          referer: 'https://www.googleapis.com',
          origin: 'https://www.googleapis.com',
        },
      },
    },
  },
});
