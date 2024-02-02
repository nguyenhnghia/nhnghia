/**
 * @typedef {import('tailwindcss').Config} TailwindConfig
 *
 * @type {TailwindConfig}
 */
module.exports = {
  content: ["./src/{app,components}/**/*.tsx"],
  presets: [require("@repo/tailwind-config/config")],
  theme: {
    screens: {
      tl: { min: "768px" },
      dt: { min: "1280px" },
    },
  },
};
