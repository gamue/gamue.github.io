module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "extends": [
        "eslint:recommended",
        "prettier"
    ],
    "rules": {
        "curly": ['error', 'all'],
        "quotes": ["error", "double"],
    }
}
