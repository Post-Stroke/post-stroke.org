const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Custom Colors
    colors: {
      transparent: "transparent",

      // View / Component Backgrounds
      page: {
        DEFAULT: "hsl(var(--color-page) / <alpha-value>)",
        offset: "hsl(var(--color-page-offset) / <alpha-value>)",
      },

      // Border Color
      border: "hsl(var(--color-border) / <alpha-value>)",

      // Body Color
      body: "hsl(var(--color-body) / <alpha-value>)",

      // Muted Color
      muted: "hsl(var(--color-muted) / <alpha-value>)",

      // Primary Color
      primary: {
        DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
        dark: "hsl(var(--color-primary-dark) / <alpha-value>)",
      },

      // Individual Colors

      // White
      white: "hsl(var(--color-white) / <alpha-value>)",

      // Stone
      stone: {
        800: "hsl(var(--color-stone-800) / <alpha-value>)",
      },

      // Marine
      marine: {
        100: "hsl(var(--color-marine-100) / <alpha-value>)",
        400: "hsl(var(--color-marine-400) / <alpha-value>)",
        800: "hsl(var(--color-marine-800) / <alpha-value>)",
      },

      // Marine
      moss: {
        100: "hsl(var(--color-moss-100) / <alpha-value>)",
        400: "hsl(var(--color-moss-400) / <alpha-value>)",
        800: "hsl(var(--color-moss-800) / <alpha-value>)",
      },

      // Marine
      plum: {
        100: "hsl(var(--color-plum-100) / <alpha-value>)",
        400: "hsl(var(--color-plum-400) / <alpha-value>)",
        800: "hsl(var(--color-plum-800) / <alpha-value>)",
      },
    },

    fontSize: {
      xs: [".75rem", "1em"], // 12px
      sm: ["0.875rem", "1.25em"], // 14px
      base: ["1rem", "1.5em"], // 16px
      lg: ["1.125rem", "1.5em"], // 18px
      xl: ["1.5rem", "1.375em"], // 24px
      "2xl": ["2rem", "1.25em"], // 32px
      "3xl": ["2.5rem", "1.05em"], // 40px
    },

    // Container
    container: {
      center: false,
      padding: "var(--container-padding-x)",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "106.25rem", // max 1700px
      },
    },

    letterSpacing: {
      tighter: "-.04em",
      tight: "-.01em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },

    extend: {
      // Custom Font
      fontFamily: {
        sans: ["GT America", defaultTheme.fontFamily.sans],
        exteded: ["GT America Extended", defaultTheme.fontFamily.sans],
        mono: ["GT America Mono", defaultTheme.fontFamily.sans],
      },

      // Transition Duration Default
      transitionDuration: {
        DEFAULT: "400ms",
      },
    },
  },
  plugins: [],
};
