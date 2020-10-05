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
          color: theme("colors.gray.800"),
          h1: {
            "margin-top": theme("spacing.8"),
            fontSize: theme("fontSize.5xl"),
            fontWeight: theme("fontWeight.semibold"),
            color: theme("colors.gray.800"),
          },
          h2: {
            color: theme("colors.gray.800"),
          },
          h3: {
            color: theme("colors.gray.900"),
          },
          a: {
            color: "#3182ce",
            "text-decoration": "none",
            "&:hover": {
              color: "#2c5282",
            },
          },
          "ul > li::before": {
            visibility: "hidden",
          },
        },
      },
      md: {
        css: {
          h1: {
            "margin-top": theme("spacing.16"),
            fontSize: theme("fontSize.6xl"),
          },
        },
      },
      lg: {
        css: {
          h1: {
            fontSize: theme("fontSize.7xl"),
            fontWeight: theme("fontWeight.medium"),
          },
        },
      },
      xl: {
        css: {
          h1: {
            "margin-top": theme("spacing.24"),
            fontSize: theme("fontSize.8xl"),
            fontWeight: theme("fontWeight.medium"),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
}
