import getButtonClasses from "@utils/button";

export const buttonA = getButtonClasses(["icon", "text"], {
  size: "tiny",
  __responsive: {
    tablet: {
      size: "medium",
    },
    desktop: {
      size: "large",
    },
  },
});
