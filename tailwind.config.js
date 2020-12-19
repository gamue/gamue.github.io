/*
* A tailwinds config file used to generate atomic utility css classes.
* See: https://tailwindcss.com/docs/configuration/
* Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*
* Run '$ npm run css:dev' to compile changes in this file.
*/

module.exports = {
    purge: [
        '{,!(node_modules|_site)/**/}*.{html,md,js}',
    ],
    theme: {
        container: {
            center: true,
            screens: { /* disable the 2xl breakpoint by default. */
               sm: "100%",
               md: "100%",
               lg: "1024px",
               xl: "1280px",
            },
        },
        extend: {
            colors: {
                red: {
                    900: '#660000',
                },
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                          textDecoration: 'none',
                          color: '#660000',
                          '&:hover': {
                              textDecoration: 'underline',
                          },
                        },
                        h1: {
                          marginTop: '1.25em',
                        },
                        img: {
                          marginTop: 0,
                          marginBottom: 0,
                        },
                        dt: {
                          fontWeight: '600',
                          marginBottom: '0.1em',
                        },
                        dd: {
                          marginBottom: '1.25em',
                          paddingLeft: '1.25em',
                        },
                    },
                },
                sm:{
                    css: {
                        img: {
                          marginTop: 0,
                          marginBottom: 0,
                        },
                        h1: {
                          marginTop: '1.25em',
                        },
                    },
                },
                lg:{
                    css: {
                        img: {
                          marginTop: 0,
                          marginBottom: 0,
                        },
                        h1: {
                          marginTop: '1.25em',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('tailwindcss-textshadow'),
    ],
}
