module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    "@typescript-eslint",
    "react",
    "prettier",
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    "react-app",
    "plugin:react/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    "react/prop-types": "off",
    "prettier/prettier": "error",
    "@typescript-eslint/ban-ts-ignore": "off",
  },
};
