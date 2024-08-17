/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: '#ef6f70', // Add your custom color here
      },
    },
  },
  plugins: [],
}
