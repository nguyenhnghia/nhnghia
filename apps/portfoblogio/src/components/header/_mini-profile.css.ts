import classes from "@repo/web-styling/utilities/classes";
import getScope from "@utils/scope";

// const getButtonClasses = buttonStyles({ scope: getScope(import.meta.url) });

// export const button = getButtonClasses(["root"], {
//   __responsive: {
//     tablet: {
//       size: "huge",
//     },
//     desktop: {
//       size: "huge",
//     },
//   },
// });

const getClasses = classes({ scope: getScope(import.meta.url) });

export const test = getClasses({ background: "blue" });
