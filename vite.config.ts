import { defineConfig } from 'vite';
import presetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export default defineConfig({
  server: { port: 3000 },
  css: {
    postcss: {
      plugins: [
        presetEnv({ stage: 1 }),
        autoprefixer
      ]
    }
  },
  resolve: { alias: { "@": resolve(__dirname, `src`) }},
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        uses: resolve(__dirname, 'uses/index.html')
      },
    },
  },
});


