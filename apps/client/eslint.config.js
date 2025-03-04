import { nextJsConfig } from "@workspace/eslint-config/next.js";

/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  {
    rules: {
      // Ensure unused variables are caught as errors
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
];
