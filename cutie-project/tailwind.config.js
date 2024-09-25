/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#010851",
        "secondary": "#FFBE98",
        "tartiary": "#707070",
        "pink" : "#EE9AE5",
      },
      boxShadow: {
        '3xl' : '0px 10px 50px 0px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
};
