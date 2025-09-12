import nkzw from "@nkzw/eslint-config";

export const config = [
  ...nkzw,
  {
    rules: {
      "import-x/no-namespace": "off",
      "import-x/no-unresolved": "warn",
      "no-console": "off",
      "unicorn/prefer-top-level-await": "off",
    },
  },
];
