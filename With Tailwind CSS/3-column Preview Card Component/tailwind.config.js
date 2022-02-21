const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'bright-orange': 'hsl(31, 77%, 52%)',
      'dark-cyan': 'hsl(184, 100%, 22%)',
      'very-dark-cyan': 'hsl(179, 100%, 13%)',
      'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
      'very-light-gray': 'hsl(0, 0%, 95%)'
    },
    fontFamily: {
      'sans': ['Lexend Deca', ...defaultTheme.fontFamily.sans],
      'display': ['Big Shoulders Display', ...defaultTheme.fontFamily.sans] // Fallback to sans font family if this display font fails to load
    }
  },
  plugins: [],
}
