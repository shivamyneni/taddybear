// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: { max: "640px" },

      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        alphaSlabOne: ["Alfa Slab One"],
        Inter: ["Inter"],
        SquarePeg: ["Square Peg"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
