import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  base: '/ht',
  site: "https://wzx0225.github.io",
  trailingSlash: "always",
  integrations: [sitemap()],
});
