import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    files: ["**/*.js", "**/*.mjs"],
    ignores: ["**/*.min.js"],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      ...js.configs.recommended.rules,
      curly: ["error", "all"],
      "@stylistic/quotes": ["error", "double"],
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
