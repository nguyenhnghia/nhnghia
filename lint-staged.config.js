module.exports = {
  // "{apps,packages}/**/*.{json,js,jsx}": ["eslint --fix", "prettier --write"],
  "*.{ts,tsx}": ["eslint --fix"],
  "*.{json,js,jsx,ts,tsx}": ["prettier -w -l"],
};
