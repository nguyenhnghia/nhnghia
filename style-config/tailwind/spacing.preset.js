/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    spacing: () =>
      [...Array(200).keys()].reduce(
        (prev, i) => ({ ...prev, [`${i + 1}`]: `${i + 1}px` }),
        {}
      ),
  },
};
