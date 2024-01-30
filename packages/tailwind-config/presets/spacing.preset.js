const spacing = () => {
  let spacing = {};
  for (let i = 1; i <= 200; i++) {
    spacing = { ...spacing, [`${i}`]: `${i}px` };
  }
  return spacing;
};

/**
 * @type {import('tailwindcss/types/config').PresetsConfig}
 */
module.exports = {
  theme: { spacing },
};
