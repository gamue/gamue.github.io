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
            screens: { /* disable the 2xl breakpoint by default. */
               sm: "100%",
               md: "100%",
               lg: "1024px",
               xl: "1280px"
            }
         }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
