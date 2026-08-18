import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// 发布上线后，把 site 改成你的真实域名（用于 SEO 和站点地图）
export default defineConfig({
  base: '/ht/',                 // ← 新增这一行（注意末尾的逗号）
  site: "https://huitong-tower.example.com",
  integrations: [sitemap()],
});
