module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        header: ["Poppins"],
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      colors: {
        yellowPrimary: "#FEC878",
        yellowSecondary: "#FFB748",
        bluePrimary: "#202E44",
        paulBlue: "#4CD9EE",
      },
    },
    typography: theme => ({
      default: {
        css: {
          color: theme("colors.gray.700"),
          h1: {
            fontFamily: theme("fontFamily.header"),
          },
          h2: {
            fontFamily: theme("fontFamily.header"),
          },
          h3: {
            fontFamily: theme("fontFamily.header"),
          },
          a: {
            color: false,
            textDecoration: false,
            "&:hover": {
              textDecoration: false,
            },
          },
          "ul > li::before": {
            content: "none",
          },
        },
      },
    }),
  },
  variants: { display: ["group-hover", "responsive"] },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
}
