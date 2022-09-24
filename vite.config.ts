import { defineConfig } from 'vitest/config';
import presetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import { resolve } from 'path';

export default defineConfig({
  server: { port: 3000 },
  css: { postcss: { plugins: [presetEnv({ stage: 1 }), autoprefixer] }},
  resolve: { alias: { "@": resolve(__dirname, `src`) }},
  test: { includeSource: [`src/**/*.{js,ts}`] },
  define: { 'import.meta.vitest': `undefined` }
});
