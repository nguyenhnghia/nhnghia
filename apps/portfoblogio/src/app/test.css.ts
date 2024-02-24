import getButtonStyles from "@repo/web-styling/components/button";
import getConnerStyles from "@repo/web-styling/utilities/rounded-conner";

export const buttonC = getButtonStyles(["icon"], {
  __extend: {
    root: [getConnerStyles("tiny", undefined, "full")],
  },
});
