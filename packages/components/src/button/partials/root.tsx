type ButtonRootProps = React.ComponentProps<"button"> & {
  _ref?: React.RefObject<HTMLButtonElement>;
};

export function root(...classes: string[]) {
  return function Root(props: ButtonRootProps) {
    const { children, className, _ref, ...restProps } = props;
    return (
      <button
        ref={_ref}
        type="button"
        className={[classes, className].filter(Boolean).join(" ")}
        {...restProps}
      >
        {children}
      </button>
    );
  };
}
