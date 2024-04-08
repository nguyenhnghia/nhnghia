type ConditionalRenderProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
} & ({ condition: () => boolean } | { condition: boolean });

const ConditionalRender: React.FC<ConditionalRenderProps> = (props) => {
  //#region - props
  const { children, condition, fallback = null } = props;
  //#endregion

  //#region - render
  if (typeof condition === "boolean" && condition) return children;
  if (typeof condition === "function" && condition()) return children;
  return fallback;
  //#endregion
};

export default ConditionalRender;
