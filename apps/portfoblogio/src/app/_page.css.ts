import getButtonStyles from "@repo/component-styles/button";

export const buttonA = getButtonStyles(["icon", "text"], {
  __responsive: {
    tablet: {
      size: "medium",
    },
    desktop: {
      size: "large",
    },
  },
});

export const buttonB = getButtonStyles(["icon"]);
