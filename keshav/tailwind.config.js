/** @type {import('tailwindcss').Config} */

import tailwindScrollBar from 'tailwind-scrollbar';

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [tailwindScrollBar],
}