import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// 文章统一放在 src/content/pages 目录下，用 Markdown 管理
const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages" }),
});

export const collections = { pages };
