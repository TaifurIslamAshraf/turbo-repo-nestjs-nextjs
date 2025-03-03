import drizzlePlugin from "eslint-plugin-drizzle";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config} */
export default [
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    ignores: ["node_modules/**", ".turbo/**", "dist/**", "**/*.spec.ts"],
    plugins: {
      drizzle: drizzlePlugin
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
      }
    },
    rules: {
      // Disable the rule that's causing decorator errors
      "@typescript-eslint/no-invalid-this": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-parameter-properties": "off",
      "drizzle/enforce-delete-with-where": "error",
      "drizzle/enforce-update-with-where": "error"
    },
  }
];