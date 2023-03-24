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
        'paua': '#24036A',
        'chardonnay': '#FFCA8F',
        'oyster': '#D9FBFF',
        'meteorite': '#3B1C7B',
        black: {
          900: '#000000',
          800: "#111111",
          700: "#1E1E1E",
        },
      },
      fontFamily: {
        'Supreme': ['Supreme', 'sans-serif'],
        'Monoton': ['Monoton', 'cursive'],
        'Stretch': ['Stretch', 'cursive']
     },
      width: {
        '112': '28rem', /* 448px */
        '128': '32rem', /* 512px */
        '144': '36rem', /* 576px */
        '160': '40rem', /* 640px */
        '176': '44rem', /* 704px */
        '192': '48rem', /* 768px */
        '208': '52rem', /* 832px */
        '224': '56rem', /* 896px */
        '240': '60rem', /* 960px */
        '256': '64rem', /* 1024px */
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
