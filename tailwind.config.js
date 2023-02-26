/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bunting': '#1E206D',
        'peach': '#FFEEDB',
        'paua': '#24036B',
        'chardonnay': '#FFCA8F',
        black: {
          900: '#000000',
          800: "#111111",
          700: "#1E1E1E",
        },
      },
      fontFamily: {
        'Supreme': ['Supreme', 'sans-serif'],
        'Monoton': ['Monoton', 'cursive']
     },
    },
  },
  plugins: [],
}
