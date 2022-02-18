const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      "sans": ["Inter", ...defaultTheme.fontFamily.sans]
    },
    colors: {
      "very-dark-blue": "hsl(233, 47%, 7%)",
      "dark-desaturated-blue": "hsl(244, 38%, 16%)",
      "soft-violet": "hsl(277, 64%, 61%)",
      "white": "hsl(0, 0%, 100%)",
    },
    fontWeight: {
      "normal": 400,
      "bold": 700
    }
  },
  plugins: [],
}
