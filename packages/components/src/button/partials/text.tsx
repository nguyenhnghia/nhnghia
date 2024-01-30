type ButtonTextProps = React.ComponentProps<"div"> & {
  _ref?: React.RefObject<HTMLDivElement>;
};

export function text(...classes: string[]) {
  return function Text(props: ButtonTextProps) {
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
