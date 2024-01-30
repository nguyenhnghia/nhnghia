import { registerButton } from "@repo/components/button";
import { sizeVars } from "@repo/components/button/variants";
import { TABLET } from "@repo/components/screens";
import { assignVars } from "@vanilla-extract/css";

export const ButtonA = registerButton({
  layout: "tight",
  shape: "rectangle",
  size: "tiny",
  __responsive: {
    desktop: {
      layout: "tight",
      shape: "capsule",
      size: "large",
    },
  },
  __override: {
    root: {
      "@media": {
        [TABLET]: {
          vars: assignVars(sizeVars.root, {
            height: "200px",
            paddingX: "30px",
          }),
        },
      },
    },
  },
});
