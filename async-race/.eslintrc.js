module.exports = {
  "env": {
   "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
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
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "consistent-return": 0,
    "no-plusplus": 0,
  }
}
