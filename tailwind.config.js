const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
      'white': 'hsl(0, 0%, 100%)'
    },
    fontWeight: {
      'light': 300,
      'normal': 400,
      'bold': 600
    },
    fontFamily: {
      sans: ['Outfit', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}
