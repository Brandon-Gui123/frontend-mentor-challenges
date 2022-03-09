const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      // Primary
      "desaturated-red": "hsl(0, 36%, 70%)",
      "soft-red": "hsl(0, 93%, 68%)",

      // Neutral
      "dark-grayish-red": "hsl(0, 6%, 24%)",

      // Common
      "white": "hsl(0, 0%, 100%)",
      "dark-gray": "hsl(330, 7%, 6%)"
    },
    fontFamily: {
      "sans": [ "Josefin Sans", ...defaultTheme.fontFamily.sans ]
    },
    fontWeight: {
      "light": 300,
      "normal": 400,
      "semibold": 600
    }
  },
  plugins: [],
}
