/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

