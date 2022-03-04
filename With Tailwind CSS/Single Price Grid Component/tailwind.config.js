const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "cyan": "hsl(179, 62%, 43%)",
      "bright-yellow": "hsl(71, 73%, 54%)",
      "light-gray": "hsl(204, 43%, 93%)",
      "grayish-blue": "hsl(218, 22%, 67%)"
    },
    fontFamily: {
      "sans": ["Karla", ...defaultTheme.fontFamily.sans]
    },
    fontWeight: {
      "normal": 400,
      "bold": 700
    }
  },
  plugins: [],
}
