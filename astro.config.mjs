import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs()],
  config: {
    applyBaseStyles: false,
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
