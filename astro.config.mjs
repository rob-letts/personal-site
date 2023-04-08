import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer, cssnano]
      }
    }
  },
  output: "server",
  adapter: netlify()
});
