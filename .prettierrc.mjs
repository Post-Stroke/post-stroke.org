/** @type {import("prettier").Config} */
export default {
  tabWidth: 2,
  htmlWhitespaceSensitivity: "css",
  bracketSameLine: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
