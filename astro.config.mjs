import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";
// https://astro.build/config
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind(),
    prefetch(),
    sitemap({
      // changefreq: "daily",
      // priority: 0.7,
      // lastmod: new Date("2022-02-24"),
      // filter: (page) => page !== "https://stargazers.club/secret-vip-lounge",
      // customPages: [
      //   "https://stargazers.club/external-page",
      //   "https://stargazers.club/external-page2",
      // ],
      // customPages: [1, 2, 3, 4, 5].map((i) => `https://test.com/${i}`),
    }),
  ],
  site: "https://astro-svelte-tailwind-nu.vercel.app",
  experimental: {
    prerender: true,
  },
  // output: "server",
  // adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});
