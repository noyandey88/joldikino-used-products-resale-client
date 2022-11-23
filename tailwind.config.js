/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: '#480CA8',
      //   secondary: '#560BAD',
      // }
    },
  },
  plugins: [require("daisyui")],
}
