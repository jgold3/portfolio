import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  }),
  {
    rules: {
      quotes: ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
    },
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    ignores: [".next/**", "node_modules/**", "public/**", "**/*.config.js", "**/*.config.mjs", "**/*.config.ts"],
  },
];

export default eslintConfig;
