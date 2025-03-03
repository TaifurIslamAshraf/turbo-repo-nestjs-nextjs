import { config as baseConfig } from "@workspace/eslint-config/base.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  {
    ignores: ["dist/**", "node_modules/**", ".turbo/**"],
    languageOptions: {
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
    },
    rules: {
      "no-redeclare": "off",
    },
  },
];
