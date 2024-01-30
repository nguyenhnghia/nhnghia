module.exports = {
  "{apps,packages}/src/**/*.{json,js,jsx}": ["eslint --fix"],
  "{apps,packages}/src/**/*.{ts,tsx}": ["tsc --noEmit", "eslint --fix"],
  "*.{json,js,jsx,ts,tsx}": ["prettier --write"],
};
