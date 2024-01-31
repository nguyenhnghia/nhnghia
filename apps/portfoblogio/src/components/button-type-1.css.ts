import { buttonVariables } from "@repo/components/button";
import { registerButton } from "@repo/components/button-register";
import { TABLET } from "@repo/components/screens";
import { assignVars } from "@vanilla-extract/css";

const { size } = buttonVariables;

export const ButtonA = registerButton(["Body", "Icon", "Text"], {
  layout: "tight",
  shape: "rectangle",
  size: "tiny",
  __responsive: {
    tablet: {
      layout: "wide",
    },
    desktop: {
      layout: "tight",
      shape: "capsule",
      size: "large",
    },
  },
  __override: {
    Root: {
      "@media": {
        [TABLET]: {
          vars: assignVars(size.root, {
            height: "100px",
            paddingX: "30px",
          }),
          width: "300px",
        },
      },
    },
  },
});
