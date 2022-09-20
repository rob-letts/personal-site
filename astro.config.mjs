import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import presetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  integrations: [vue()],
  vite: {
    css: {
      postcss: {
        plugins: [
          presetEnv({stage: 1}),
          autoprefixer
        ]
      }
    }
  }
});