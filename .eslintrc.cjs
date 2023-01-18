module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort"],
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  rules: {
    // imports linting
    "@typescript-eslint/consistent-type-imports": "warn",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",

    // linebreaks
    "linebreak-style": ["error", "unix"],
    // enforce consistent spacing inside braces of object literals et al.
    "object-curly-spacing": ["error", "always"],
    // prettier will enforce spaces after commas
    "comma-spacing": "off",
    // disable js version of no-unused-vars and enable ts version
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { args: "none", argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
  },
};
