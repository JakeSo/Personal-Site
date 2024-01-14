/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary': '#1C538E',
        'secondary': '#7B89EE',
      },
      transform: ['hover', 'focus'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [],
  
}

