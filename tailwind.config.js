/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        desaturatedDarkCyan: "hsl(180, 29%, 50%)",
        lightGrayishCyan: "hsl(180, 52%, 96%)",
        lightGrayishCyan: "hsl(180, 31%, 95%)",
        darkGrayishCyan: "hsl(180, 8%, 52%)",
        veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      fontFamily: {
        leagueSpartan: ['League Spartan', 'sans-serif'],
      },
      fontWeight: {
        regular: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};
