import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

//* This forwards API requests (/rsvp) to the Express backend

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/rsvp': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
  root: path.resolve(__dirname, 'client'),
});
