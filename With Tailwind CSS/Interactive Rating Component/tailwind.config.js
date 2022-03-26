const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      // primary
      "orange": "hsl(25, 97%, 53%)",

      // neutral
      "white": "hsl(0, 0%, 100%)",
      "light-grey": "hsl(217, 12%, 63%)",
      "medium-grey": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)"
    },
    fontFamily: {
      "sans": [ "Overpass", ...defaultTheme.fontFamily.sans ]
    }
  },
  plugins: [],
}
