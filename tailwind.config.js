const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("kutty")],
  theme: {
    colors: {
      green: {
        50: "#b7ead9",
        100: "#88dcc0",
        200: "#58cea7",
        300: "#40c79a",
        400: "#28c08e",
        500: "#10b981",
        600: "#0d9467",
        700: "#0a6f4d",
        800: "#064a34",
        900: "#03251a",
      },
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuschia: colors.fuschia,
      pink: colors.pink,
      rose: colors.rose,
      white: colors.white,
      black: colors.black,
    },
    extend: {
      fontFamily: {
        display: ["Red Hat Display", "sans-serif"],
        sans: ["Red Hat Text", "sans-serif"],
        mono: ["Red Hat Mono", "mono"],
      },
    },
  },
};
