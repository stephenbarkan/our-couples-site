module.exports = {
  purge: ["./site/**/*.njk"],
  theme: {
    container: {
      center: true,
      padding: {
        default: ".75rem",
        sm: "1rem",
        lg: "2rem",
      },
    },
    colors: {
      black: "#000000",
      white: "#FFFFFF",

      beige: "#FFF1E5",

      green: "#C9F493",
      salmon: "#FE927A",
      yellow: "#FFCA62",
      teal: "#99ECE2",
      pink: "#FFAAD8",
      blue: "#99DBF0",
    },

    fontFamily: {
      sans: [
        "Freizeit",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },

    extend: {
      fontSize: {
        // "4xl": "2.5rem",
        "5xl": "3.5rem",
        "6xl": "4.5rem",
        "7xl": "5rem",
      },
      borderRadius: {
        xl: "1rem",
      },
      spacing: {
        half: ".125rem",
        "1/2": "50%",
        72: "18rem",
      },
      rotate: {
        25: "25deg",
        "-25": "-25deg",
        22: "22deg",
        "-22": "-22deg",
        15: "15deg",
        "-15": "-15deg",
        12: "12deg",
        "-12": "-12deg",
        5: "5deg",
        "-5": "-5deg",
        2: "2deg",
        "-2": "-2deg",
      },
    },
  },
  variants: {
    textDecoration: ["hover", "focus", "group-hover"],
    padding: ["first", "last", "responsive"],
    rotate: ["hover", "group-hover"],
    backgroundColor: ["hover", "group-hover"],
  },
  plugins: [],
};
