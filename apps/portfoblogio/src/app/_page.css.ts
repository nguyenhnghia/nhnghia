import button from "@repo/web-styling/components/button";
import { theme } from "@repo/web-styling/theme";
import getClasses from "@utils/classes";
import getScope from "@utils/scope";

const getButtonClasses = button({ scope: getScope(import.meta.url) });

export const test = getClasses({
  background: theme.colors.__solid("cyan", "500", 0.5),
  color: theme.colors.__solid("green", "500"),
  padding: 20,
  selectors: {
    "&:hover": {
      background: theme.colors.__solid("green", "500"),
      width: "var(--height)",
      color: theme.colors.__solid("red", "500"),
      textDecoration: "underline",
    },
    "main > &": {
      background: theme.colors.__solid("purple", "500", 0.5),
      color: "white",
    },
  },
});

export const buttonA = getButtonClasses(["icon", "text"], {
  __responsive: {
    tablet: {
      size: "medium",
    },
    desktop: {
      size: "large",
    },
  },
});
