import template from "./.svgr.template.js";

export default {
  filenameCase: "kebab",
  icon: "1em",
  index: true,
  jsxRuntime: "automatic",
  outDir: "src/static-icons",
  svgo: false,
  svgProps: { fill: "currentColor" },
  template,
  typescript: true,
};
