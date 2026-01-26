/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        umak: {
          // Primary Blue (Space Cadet)
          blue: {
            DEFAULT: '#111c4e',
            50: '#47528a',
            100: '#28336b',
            200: '#060e33',
            300: '#01061c',
          },
          // Primary Yellow (Maximum Yellow)
          yellow: {
            DEFAULT: '#f5ec3a',
            50: '#fff989',
            100: '#fef760',
          },
          // Secondary Blue (Silver Lake Blue)
          'blue-2': {
            DEFAULT: '#105389',
            50: '#c0d5f0',
            100: '#8bb0dc',
            200: '#406fa5',
            300: '#275996',
          },
          // Graphics & Accent Colors
          navy: '#001478',
          sky: '#497ccf',
          red: '#FF0000',
          'dark-navy': '#020727',
          white: '#ffffff',
        },
      },
      fontFamily: {
        marcellus: ['Marcellus', 'serif'],
        metropolis: ['Metropolis', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
