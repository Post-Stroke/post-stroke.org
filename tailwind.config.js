/* Utilities */
const rem = (px, base = 16) => `${px / base}rem`;

module.exports = {
  content: ["./src/**/*.njk", "./src/**/*.md", "./src/**/*.html"],
  theme: {
    // Custom Fonts
    fontFamily: {
      sans: [
        "-apple-system,BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
      ],
      serif: ["Skillet Regular", "sans-serif"],
    },

    // Colors
    colors: {
      // Grayscale
      black: "var(--black)",
      white: "var(--white)",
      current: "currentColor",

      // Colors
      "ficus-dark": "var(--ficus-dark)",
      ficus: "var(--ficus)",
      "ficus-light": "var(--ficus-light)",

      // View / Component Backgrounds
      page: "var(--page)",
      "page-offset": "var(--page-offset)",

      // Body Color
      body: "var(--body)",
      "body-offset": "var(--body-offset)",
      "body-muted": "var(--body-muted)",

      // Primary Color
      primary: "var(--primary)",
      "primary-offset": "var(--primary-offset)",
      "primary-underline": "var(--primary-underline)",
      "primary-underline-offset": "var(--primary-underline-offset)",
      "primary-reverse": "var(--primary-reverse)",

      // Borders
      border: "var(--border)",
    },

    // Container
    container: {
      center: true,
      padding: "var(--container-padding)",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: rem(1400),
      },
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
