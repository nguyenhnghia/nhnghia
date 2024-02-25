import button from "@repo/web-styling/components/button";
import conner from "@repo/web-styling/utilities/rounded-conner";

export const buttonB = button(["icon"], {
  __extend: {
    root: [conner("tiny", undefined, "full")],
  },
});
