import onlyWarn from "eslint-plugin-only-warn";
import { resolve } from "node:path";
import * as tseslint from "typescript-eslint";

const project = resolve(process.cwd(), "tsconfig.json");

export default {
  files: ["**/*.{js,jsx,ts,tsx}"],
  plugins: {
    "only-warn": onlyWarn,
    "@typescript-eslint": tseslint.plugin,
  },
  languageOptions: {
    globals: {
      React: true,
      JSX: true,
    },
    parser: tseslint.parser,
    parserOptions: {
      project,
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignores: [".*.js", "node_modules/", "dist/"],
};
