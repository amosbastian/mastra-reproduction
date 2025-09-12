module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  arrowParens: "always",
  printWidth: 120,
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  importOrderParserPlugins: ["importAssertions", "typescript", "jsx"],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
  tailwindFunctions: ["cva"],
};
