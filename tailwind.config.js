module.exports = {
  content: ["_site/**/*.html"],
  theme: {
    container: {
      center: true,
      screens: {
        /* disable the 2xl breakpoint by default. */ sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        red: {
          900: "#660000",
        },
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              a: {
                textDecoration: "none",
                color: theme("colors.red.900"),
                "&:hover": {
                  textDecoration: "underline",
                },
              },
              h1: {
                marginTop: "1.25em",
              },
              img: {
                marginTop: 0,
                marginBottom: 0,
              },
              dt: {
                fontWeight: "600",
                marginBottom: "0.1em",
              },
              dd: {
                marginBottom: "1.25em",
                paddingLeft: "1.25em",
              },
              code: {
                background: theme("colors.gray.100"),
                padding: "0.125em",
              },
              "code::before": false,
              "code::after": false,
              "blockquote p:first-of-type::before": false,
              "blockquote p:last-of-type::after": false,
            },
          },
          sm: {
            css: {
              img: {
                marginTop: 0,
                marginBottom: 0,
              },
              h1: {
                marginTop: "1.25em",
              },
            },
          },
          lg: {
            css: {
              img: {
                marginTop: 0,
                marginBottom: 0,
              },
              h1: {
                marginTop: "1.25em",
              },
            },
          },
        };
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
  ],
};
