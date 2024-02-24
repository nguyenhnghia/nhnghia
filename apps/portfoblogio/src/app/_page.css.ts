import getButtonStyles from "@repo/web-styling/components/button";
import getConnerStyles from "@repo/web-styling/utilities/rounded-conner";

export const buttonA = getButtonStyles(["icon", "text"], {
  __responsive: {
    tablet: {
      size: "medium",
    },
    desktop: {
      size: "large",
    },
  },
  __extend: {
    root: [getConnerStyles("normal", "large", "full")],
  },
});

export const buttonB = getButtonStyles(["icon"], {
  __extend: {
    root: [getConnerStyles("tiny", undefined, "full")],
  },
});
