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
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
}
