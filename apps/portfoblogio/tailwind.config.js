/**
 * @typedef {import('tailwindcss').Config} TailwindConfig
 *
 * @type {TailwindConfig}
 */
module.exports = {
  content: ["./src/app/**/*.tsx"],
  presets: [require("@repo/tailwind-config/config")],
};
