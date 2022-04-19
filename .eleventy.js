const htmlmin = require("html-minifier");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
const pluginSEO = require("eleventy-plugin-seo");
const markdownIt = require("markdown-it");

// Add within your config module
const md = new markdownIt({
  html: true,
});

module.exports = function (eleventyConfig) {
  /**
   * Upgrade helper
   * Uncomment if you need help upgrading to new major version.
   */
  //eleventyConfig.addPlugin(UpgradeHelper);

  /**
   * Files to copy
   * https://www.11ty.dev/docs/copy/
   */
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("assets/downloads");
  eleventyConfig.addPassthroughCopy("assets/fonts");
  eleventyConfig.addPassthroughCopy("_redirects");

  // SEO Plugin
  eleventyConfig.addPlugin(pluginSEO, require("./_data/seo.json"));

  // Add Year Shortcode
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Markdown
  eleventyConfig.addFilter("markdown", (content) => {
    return md.render(content);
  });

  /**
   * HTML Minifier for production builds
   */
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV == "production" &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      data: "../_data",
    },
  };
};
