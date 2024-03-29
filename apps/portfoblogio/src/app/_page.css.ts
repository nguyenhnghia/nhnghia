import button from "@repo/web-styling/components/button";
import getScope from "@utils/scope";

const getButtonClasses = button({ scope: getScope(import.meta.url) });

export const buttonA = getButtonClasses(["root", "icon", "text"], {
  __responsive: {
    tablet: {
      size: "medium",
    },
    desktop: {
      size: "large",
    },
  },
});
