const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  mode: "jit",
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  experimental: {
    applyComplexClasses: true,
  },
  theme: {
    extend: {
      colors: {},
      fontFamily: {},
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          md: "2rem",
        },
      },
    },
  },
};
