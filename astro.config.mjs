import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
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

  // Astro 7 defaults to "jsx", which drops line-break whitespace next to tags
  // and runs words together in our wrapped prose (e.g. "Pleaselet us know").
  compressHTML: true,
});
