const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
      colors: {
        purple: "#8360c3",
        secondary: "#4BA69D",
        primary: "var(--shadow-hover-color)",
        defaultIconColor: "var(--text-primary)",
        defaultIconColor2: "var(--text-secondary)",
        brandPurple: "#7763BF",
        brandGreen: "#2ebf91",
        card: "var(--bg-card)",
        "gray-200": "var(--bg-secondary)",
        hover: "var(--bg-hover)",
        icon: "var(--icon-primary)",
        error: "#f26a6a",
        border: "var(--border)",
        textcolor: "var(--text-primary)",
        backgroundPrimary: "#010409",
        backgroundSecondary: "#0e0e0e",
      },
      boxShadow: {
        doublexl: "var(--shadow-color) 0px -6px 15px 0px inset",
        xl: "var(--shadow-color) 0px -4px 10px 0px inset",
        lg: "var(--shadow-color) 0px -2px 6px 0px inset",
        sm: "var(--shadow-color) 0px -1px 2px 0px inset",
        md: "var(--shadow-color) 0px -2px 4px 0px inset",
        top: "var(--shadow-color) 0px 1px 4px 0px inset",
        light: "rgba(10, 37, 64, 0.35) 0px -2px 4px 0px inset",
        md4: "var(--shadow-color) 0px 0px 7px 0px inset",
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-dot-thick": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
