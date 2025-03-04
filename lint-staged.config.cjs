// eslint-disable-next-line no-undef
module.exports = {
  // Run ESLint on JS, TS, JSX, and TSX files
  "**/*.{js,jsx,ts,tsx}": ["eslint --fix"],
  
  // Format other files with Prettier if needed
  "**/*.{json,md,yml,yaml}": ["prettier --write"]
};
