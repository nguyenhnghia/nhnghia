export type ComponentDesign<RP extends string, OP extends string, V extends Record<string, string>> = {
  foundation: RP;
  optional: OP;
  variants: V;
};
