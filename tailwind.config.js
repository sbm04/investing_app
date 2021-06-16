const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: colors.coolGray,
      white: colors.white,
      orange: colors.orange,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
      midnight: "#2c3e50",
      blue: colors.blue,
      cyan: colors.cyan,
      teal: colors.teal,
      yellow: colors.yellow,
      customYellow: "#f7be45",
      customBlue: "#172345",
      purple: "#6d329b",
      secondaryBlue: "#7b00ff",
    },
    fontFamily: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        body: ["Oswald", "sans-serif"],
        // body: ["Open Sans", "sans"],
      },
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transformOrigin: {
        0: "0%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
    variants: {
      variants: {
        borderColor: ["responsive", "hover", "focus", "focus-within"],
      },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
  },
};
