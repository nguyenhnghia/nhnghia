const workspaceConfig = require('../../../prettier.config');

/** @type {import("prettier").Config} */
const config = {
  ...workspaceConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};

module.exports = config;
