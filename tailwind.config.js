const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  // mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  experimental: {
    applyComplexClasses: true,
  },
  variants: {
    extend: {
      borderWidth: ["first"],
      borderWidth: ["last"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  theme: {
    extend: {
      colors: {
        primary: "#141625", //"#15202B",
        secondary: "#252945", // "#22303C",
        third: "#1e2139", // "#192734",
        fourth: "#8899A6", //"#8899A6",
        light: "#F8FAFD",
      },
      fontFamily: {
        body: ["Epilogue", "sans-serif"],
        logo: ["JetBrains Mono", "monospaced"],
      },
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
