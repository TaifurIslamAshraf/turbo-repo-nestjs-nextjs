module.exports = {
  // Run ESLint on JS, TS, JSX, and TSX files
  "**/*.{js,jsx,ts,tsx,mjs,cjs}": ["eslint --fix", "prettier --write"],

  // Format other files with Prettier
  "**/*.{json,md,yml,yaml}": ["prettier --write"],
};
