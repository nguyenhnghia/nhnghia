import button from "@repo/web-styling/components/button";
import conner from "@repo/web-styling/utilities/conner";

export const buttonA = button(["icon", "text"], {
  __responsive: {
    tablet: {
      size: "medium",
    },
    desktop: {
      size: "large",
    },
  },
  __extend: {
    root: [conner("normal", "large", "full")],
  },
});
