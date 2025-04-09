// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svelte from '@astrojs/svelte';

export default defineConfig({
  site: 'https://mistahuman.github.io/landpage-andreafaccani',
  base: process.env.NODE_ENV === "production" ? "/landpage-andreafaccani/" : "/landpage-andreafaccani/",
  output: "static",
  integrations: [
    svelte()
  ],
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
});