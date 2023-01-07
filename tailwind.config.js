/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      purple: "#8000FF",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],
}
