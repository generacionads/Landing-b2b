/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Chillax', 'sans-serif'],
      },
      colors: {
        accent: '#FFB400',
        brand: {
          50: '#fbf4fd',
          100: '#f6e7fb',
          200: '#edd0f7',
          300: '#e0abf1',
          400: '#ce7ee9',
          500: '#b854de',
          600: '#9536B6',
          700: '#7d2999',
          800: '#69247f',
          900: '#562167',
          950: '#380e46',
        }
      }
    },
  },
  plugins: [],
};