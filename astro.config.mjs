import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import presetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import tokencss from "@tokencss/astro";

export default defineConfig({
  integrations: [vue(), tokencss()],
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