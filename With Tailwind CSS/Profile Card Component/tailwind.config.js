const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "dark-cyan": "hsl(185, 75%, 39%)",
      "very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
      "dark-grayish-blue": "hsl(227, 10%, 46%)",
      "dark-gray": "hsl(0, 0%, 59%)",
      "white": "hsl(0, 0%, 100%)"
    },
    fontFamily: {
      "sans": ["Kumbh Sans", ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      "normal": 400,
      "bold": 700
    }
  },
  plugins: [],
}
