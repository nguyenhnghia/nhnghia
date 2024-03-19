import classes from "@repo/web-styling/utilities/classes";
import { DESKTOP_BREAK_POINT } from "@utils/break-points";

const getClasses = classes({ utilization: { selector: true } });

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
