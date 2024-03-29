import button from "@repo/web-styling/components/button";
import getScope from "@utils/scope";

const getButtonClasses = button({ scope: getScope(import.meta.url) });

export const buttonC = getButtonClasses(["root", "icon"]);
