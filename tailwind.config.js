const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'pale-blue': 'hsl(225, 100%, 94%)',
      'bright-blue': 'hsl(245, 75%, 52%)',
      'very-pale-blue': 'hsl(225, 100%, 98%)',
      'desaturated-blue': 'hsl(224, 23%, 55%)',
      'dark-blue': 'hsl(223, 47%, 23%)',
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ["Red Hat Display", ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      'normal': 500,
      'semibold': 700,
      'bold': 900
    }
  },
  plugins: [],
}
