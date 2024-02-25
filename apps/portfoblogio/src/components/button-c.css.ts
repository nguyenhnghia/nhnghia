import button from "@repo/web-styling/components/button";
import conner from "@repo/web-styling/utilities/conner";

export const buttonC = button(["icon"], {
  __extend: {
    root: [conner("tiny", undefined, "full")],
    icon: [conner("tiny")],
  },
});
