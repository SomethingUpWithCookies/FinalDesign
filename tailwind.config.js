/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#2B2D42',
      'gray': '#2f324c',
      'navBar': '#343750',
      'white': '#F7F7F9',
      'offwhite': '#B6B6B6',
      'pink': '#E86A92',
      'light-pink':'#f794b4',
      'yellow': '#F7E733',
      'light-yellow': '#f0d662',
      'green': '#41E2BA',
      'light-green': '#abf7e4'

    },
    fontFamily: {
      'Poppins': 'Poppins'
    },
    extend: {},
  },
  plugins: [],
}
