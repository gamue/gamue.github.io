import js from "@eslint/js";
import globals from "globals"
import stylisticJs from "@stylistic/eslint-plugin-js"

export default [
  {
    files: ["**/*.js"],
    ignores: ["**/*.min.js"],
    plugins: {
      "@stylistic/js": stylisticJs
    },
    rules: {
      ...js.configs.recommended.rules,
      "curly": ["error", "all"],
       "@stylistic/js/quotes": ["error", "double"],
    },
  },
  {
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node,
          define: "readonly"
        }
      }
    },
];