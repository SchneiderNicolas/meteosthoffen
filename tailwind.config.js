/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'martinique': '#423866',
        'rajah': '#FFBF71'
      },
      fontFamily: {
        'Supreme': ['Supreme', 'sans-serif'],
        'Monoton': ['Monoton', 'cursive']
     },
    },
  },
  plugins: [],
}
