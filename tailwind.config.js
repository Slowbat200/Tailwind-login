/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        blueGradient: "rgba(15,10,125,1)",
        darkBlueGradient: "rgba(8,2,42,1)",
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "rgba(0, 0, 0, 0.35)",
        darkGreyishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGrey: "hsl(0, 0%, 98%)",
        alphaBlack: "rgba(0, 0, 0, 0.6)",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
