import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://post-stroke.org",
  integrations: [alpinejs()],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  redirects: {
    "/links": "/",
  },

  trailingSlash: "never",

  // Inline the CSS so it applies as the page parses. With a separate
  // stylesheet, browser extensions that measure the page early make Firefox
  // paint it unstyled (a white flash) and then animate every
  // transition-colors element from the default blue link color.
  build: {
    inlineStylesheets: "always",
  },

  // Astro 7 defaults to "jsx", which drops line-break whitespace next to tags
  // and runs words together in our wrapped prose (e.g. "Pleaselet us know").
  compressHTML: true,
});
