module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "no-debugger": "off",
        "no-console": 0,
        "class-methods-use-this": "off",
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/no-non-null-assertion": 0,
    }
};
