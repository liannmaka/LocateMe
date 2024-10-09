/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      // => @media (min-width: 320px)
      sm: "481px",
      // => @media (min-width: 481px)
      md: "768px",
      // => @media (min-width: 768px)
      lg: "992px",
      // => @media (min-width: 992px)
      xl: "1201px"
      // => @media (min-width: 1201px)
    }
  },
  plugins: [require("flowbite/plugin")]
};
