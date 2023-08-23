/** @type {import('tailwindcss').Config} */

const spaceObject = {
  1: "0.25rem",
  2: "0.50rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.50rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.50rem",
  11: "2.75rem",
  12: "3rem",
};

module.exports = {
  content: [
    "./src/presentation/pages/**/*.{js,ts,jsx,tsx}",
    "./src/presentation/components/**/*.{js,ts,jsx,tsx}",
    "./src/presentation/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/presentation/styles/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { max: "1365px" },
      lg: { max: "1439px" },
      xl: { min: "1440px" },
    },
    extend: {
      fontSize: spaceObject,
      space: spaceObject,
      paddind: spaceObject,
      border: spaceObject,
      minWidth: spaceObject,
      maxWidth: spaceObject,
      minHeight: spaceObject,
      maxHeight: spaceObject,
      fontWeight: {
        sm: 400,
        md: 600,
        lg: 700,
      },
      borderRadius: {
        1: "2px",
        2: "4px",
        full: "100%",
      },
      colors: {
        white1000: "#FFFFFF",
        white950: "#FAFAFA",
        white900: "#F1F0F0",
        white300: "#F1F0F050",

        black1000: "#000",
        black900: "#121214",
        black800: "#23201E",

        blue900: "#051E55",
        blue800: "#0E3C8A",
        blue700: "#3599F5",
        blue600: "#2E7CDF",

        gray100: "#CBC5C130",
        gray200: "#8F8F8F",
        gray300: "#494949",
        gray400: "#454D4A15",
        gray500: "#B0B0B0",
        gray600: "#454D4A",

        green700: "#03C68B",

        red800: "#e61a4d",
        red900: "#D60000",

        cyan400: "#68E7EF",
        cyan700: "#00F0FF",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-font-inter"),
  ],
};
