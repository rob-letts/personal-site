import { defineConfig } from 'vite';
import { resolve } from 'path';
import presetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  server: { port: 3000 },
  css: { postcss: { plugins: [presetEnv({ stage: 1 }), autoprefixer] }},
  resolve: { alias: { "@": resolve(__dirname, `src`) }}
});
