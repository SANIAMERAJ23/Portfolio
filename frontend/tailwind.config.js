/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        golden: "#eea302",
        skyblue: "#80d8da",
        fumewhite: "#f3f3f3",
        red: "#e86060",
        blue: "#006bff",
      },
      fontFamily: {
        custom: ["Shadows Into Light Two", "cursive", "sans-serif"], // Google Font
        // myfont: ["MyCustomFont", "sans-serif"], // Local Font
      },
    },
  },
  plugins: [],
};
