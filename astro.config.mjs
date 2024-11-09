import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import cloudflarePages from "@astrojs/cloudflare-pages";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://astro.thbz.in",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://astro.thbz.in/sitemap-index.xml",
        "https://astro.thbz.in/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
 output: "server",
  adapter: cloudflarePages(),  // Change to Cloudflare Pages adapter
  vite: {
    assetsInclude: "**/*.riv",
  },
});
