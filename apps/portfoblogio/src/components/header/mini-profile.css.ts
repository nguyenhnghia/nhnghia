import buttonStyles from "@repo/web-styling/components/button";

const getButtonClasses = buttonStyles();

export const button1 = getButtonClasses(["root"], {
  size: "huge",
});

export const button2 = getButtonClasses(["root"], {
  size: "tiny",
});
