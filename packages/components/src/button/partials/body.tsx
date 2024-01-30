type ButtonBodyProps = React.ComponentProps<"div"> & {
  _ref?: React.RefObject<HTMLDivElement>;
};

export function body(...classes: string[]) {
  return function Body(props: ButtonBodyProps) {
    const { children, className, _ref, ...restProps } = props;
    return (
      <div
        ref={_ref}
        className={[classes, className].filter(Boolean).join(" ")}
        {...restProps}
      >
        {children}
      </div>
    );
  };
}
