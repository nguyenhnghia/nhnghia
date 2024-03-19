import getButtonClasses from "@utils/button";

export const buttonA = getButtonClasses(["icon", "text"], {
  __responsive: {
    tablet: {
      size: "medium",
    },
    desktop: {
      size: "large",
    },
  },
});
