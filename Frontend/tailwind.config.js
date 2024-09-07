import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#8EC5FC',
        'custom-purple': '#E0C3FC',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
      },
    },
  },
  plugins: [require('daisyui')],
}

