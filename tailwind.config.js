const { transform } = require('windicss/helpers')

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [transform('@tailwindcss/aspect-ratio')],
}
