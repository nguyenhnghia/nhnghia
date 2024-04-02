type ConditionalRenderProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
} & ({ condition: () => boolean } | { condition: boolean });

const ConditionalRender: React.FC<ConditionalRenderProps> = (props) => {
  /*================== props =================*/
  const { children, condition, fallback = null } = props;

  /*================== render =================*/
  if (typeof condition === "boolean" && condition) return children;
  if (typeof condition === "function" && condition()) return children;
  return fallback;
};

export default ConditionalRender;
