module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    jsx: true,
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
  },
  overrides: [
    {
      files: ["config/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0,
      },
    },
  ],
};
