const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        LineRG: ["LineRG"],
        LineBD: ["LineBD"],
        LineHE: ["LineHE"],
      },
      // colors: {
      //   blue: {
      //     950: "#1a1e51",
      //   },
      // },
    },
    plugins: [],
  },
};
