const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  mode: "jit",
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
  theme: {
    extend: {
      colors: {
        light: "#F8FAFD",
      },
      fontFamily: {
        body: ["Poppins"],
        logo: ["Nunito"],
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
