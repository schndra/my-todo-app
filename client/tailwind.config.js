/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "780px",
      lg: "976px",
      xl: "1440px",
    },

    colors: {
      primary: "#ff6e6c",
      secondary: "#67568c",
      tertiary: "#fbdd74",
      background: "#f4effc",
      buttonTxt: "#1f1235",

      headline: "#1f1135",
      subHeadline: "#1b1325",
      cardBg: "#e2daeb",
      cardhead: "#1f1135",
      cardPara: "#1b1325",
    },
    extend: {
      fontFamily: {
        body: ["Roboto Mono", "monospace"],
        head: ["Rubik", "sans-serif"],
      },
      width: {
        vw: "90vw",
        fixed: "450px",
      },
    },
  },
  plugins: [],
};
