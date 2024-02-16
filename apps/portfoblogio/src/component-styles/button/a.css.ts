import getButtonStyles from "@repo/component-styles/button";

const buttonAStyles = getButtonStyles(["icon", "text"], {
  size: "huge",
  __responsive: {
    tablet: {
      size: "normal",
    },
    desktop: {
      size: "tiny",
    },
  },
  __override: {
    root: {
      border: "1px solid red",
    },
  },
});

export default buttonAStyles;
