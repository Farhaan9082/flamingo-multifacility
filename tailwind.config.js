/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '3rem',
      },
    },
    fontFamily: {
      'body': ['Plus Jakarta Sans', 'sans-serif']
    },

    extend: {
      colors: {
        'accent-pink': '#e5087e',
        'accent-blue': '#2b336a',
        'accent-yellow': '#fce40b',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
