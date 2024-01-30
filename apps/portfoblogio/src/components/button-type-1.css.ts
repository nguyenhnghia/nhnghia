import { registerButton } from "@repo/components/button";
import { sizeVars } from "@repo/components/button/variants";
import { TABLET } from "@repo/components/screens";
import { assignVars } from "@vanilla-extract/css";

export const ButtonA = registerButton({
  size: "medium",
  __responsive: {
    desktop: {
      size: "huge",
    },
  },
  __override: {
    root: {
      vars: assignVars(sizeVars, {
        root: { height: "200px", paddingX: "50px" },
      }),
      "@media": {
        [TABLET]: {
          vars: assignVars(sizeVars, {
            root: { height: "400px", paddingX: "100px" },
          }),
        },
      },
    },
  },
});