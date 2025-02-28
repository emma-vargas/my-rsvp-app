//* This forwards API requests (/rsvp) to the Express backend
// vite: the build tool and development server used for my React fronend

import { defineConfig } from 'vite';
// node.js
import path from 'path';

// Imports the React plugin for Vite, which allows Vite to process and optimize React files
import react from '@vitejs/plugin-react';

// exporting an obj that tells vite how to build / serve the project
export default defineConfig({
  // tells vite how to process React files
  plugins: [react()],
  // server vite will start
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
