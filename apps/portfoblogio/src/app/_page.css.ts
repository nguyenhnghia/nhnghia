import { DESKTOP_BREAK_POINT } from "@repo/web-styling/constants";
import classes from "@repo/web-styling/utilities/classes";
import conner from "@repo/web-styling/utilities/conner";

const getClasses = classes({ utilitiesSelector: true });

export const link = conner("small");

export const test = getClasses({
  background: "red",
  color: "green",
  padding: 20,
  selectors: {
    "&:hover": {
      background: "green",
      width: "var(--height)",
      color: "red",
      textDecoration: "underline",
      "@media": {
        [DESKTOP_BREAK_POINT]: {
          background: "black",
        },
      },
    },
    "main > &": {
      background: "purple",
      color: "white",
      textDecoration: "line-through",
    },
  },
});
