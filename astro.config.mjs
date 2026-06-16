// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  srcDir: "./src/client",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [solidJs()],
});
