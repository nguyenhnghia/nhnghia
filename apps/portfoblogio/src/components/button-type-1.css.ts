import { registerButton } from "@repo/components/button";

export const ButtonA = registerButton({
  layout: "tight",
  shape: "rectangle",
  size: "tiny",
  __responsive: {
    tablet: {
      layout: "wide",
      shape: "rounded",
      size: "normal",
    },
    desktop: {
      layout: "tight",
      shape: "capsule",
      size: "large",
    },
  },
});
