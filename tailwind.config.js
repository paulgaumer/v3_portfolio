module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      colors: {
        yellowPrimary: "#FEC878",
        yellowSecondary: "#FFB748",
        bluePrimary: "#202E44",
      },
    },
    typography: theme => ({
      default: {
        css: {
          color: theme("colors.gray.700"),
          a: {
            color: theme(`colors.blue.600`),
            textDecoration: `none`,
            "&:hover": {
              textDecoration: `underline`,
            },
          },
          "ul > li::before": {
            content: "none",
          },
        },
      },
    }),
  },
  variants: { display: ["group-hover"] },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
}
