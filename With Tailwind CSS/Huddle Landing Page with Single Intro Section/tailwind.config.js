const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "violet": "hsl(257, 40%, 49%)",
      "soft-magenta": "hsl(300, 69%, 71%)",
      "white": "#ffffff"
    },
    fontFamily: {
      "sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
      "title": ["Poppins", ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      "normal": 400,
      "bold": 600
    }
  },
  plugins: [],
}
