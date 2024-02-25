export type ButtonRequiredParts = "root";

export type ButtonOptionalParts = "icon" | "text";

export type ButtonParts = ButtonRequiredParts | ButtonOptionalParts;

export type ButtonSizes =
  | "tiny"
  | "small"
  | "normal"
  | "medium"
  | "large"
  | "huge";
