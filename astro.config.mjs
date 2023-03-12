import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [
          postcssPresetEnv({ stage: 1 }),
          autoprefixer,
          cssnano
        ]
      }
    }
  },
  output: `server`,
  adapter: netlify()
});
