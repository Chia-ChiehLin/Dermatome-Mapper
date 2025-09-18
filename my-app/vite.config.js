import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/3-Dermatome-Mapper/',
  // https://vite.dev/guide/ssr.html 
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        quiz: resolve(__dirname, 'quiz.html'),
        disclaimer: resolve(__dirname, 'disclaimer.html'),
        glossary: resolve(__dirname, 'glossary.html'),
      }
    }
  }
});
