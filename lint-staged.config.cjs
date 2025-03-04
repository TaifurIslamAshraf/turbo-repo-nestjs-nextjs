// eslint-disable-next-line no-undef
module.exports = {
  // Run ESLint on JS, TS, JSX, and TSX files with more verbose output
  "**/*.{js,jsx,ts,tsx}": ["eslint --fix --max-warnings=0"],
  
  // Format other files with Prettier if needed
  "**/*.{json,md,yml,yaml}": ["prettier --write"]
};
