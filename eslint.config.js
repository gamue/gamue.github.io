const js = require("@eslint/js");
const globals = require("globals");
const stylisticJs = require("@stylistic/eslint-plugin-js");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["**/*.min.js"],
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      ...js.configs.recommended.rules,
      curly: ["error", "all"],
      "@stylistic/js/quotes": ["error", "double"],
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        define: "readonly",
      },
    },
  },
];
