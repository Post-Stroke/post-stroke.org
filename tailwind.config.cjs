const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    // Custom Colors
    colors: {
      transparent: "transparent",

      // View / Component Backgrounds
      page: {
        light: "hsl(var(--color-page-light) / <alpha-value>)",
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

    screens: {
      xs: "460px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    fontSize: {
      xs: [".75rem", "1em"], // 12px
      sm: ["var(--font-size-sm)", "1.25em"],
      base: ["var(--font-size-base)", "1.5em"],
      lg: ["var(--font-size-lg)", "1.5em"],
      xl: ["var(--font-size-xl)", "1.375em"],
      "2xl": ["var(--font-size-2xl)", "1.25em"],
      "3xl": ["var(--font-size-3xl)", "1.05em"],
    },

    // Container
    container: {
      center: true,
      padding: "var(--container-padding-x)",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "103.125rem",
      },
    },

    // Tracking
    letterSpacing: {
      tighter: "-.04em",
      tight: "-.01em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },

    // Border Radius
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      DEFAULT: "0.25rem",
      md: "0.625rem",
      lg: "1rem",
      full: "9999px",
      xl: "1.875rem",
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
  plugins: [require("@tailwindcss/forms")],
};
