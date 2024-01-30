type ButtonIconProps = React.ComponentProps<"div"> & {
  _ref?: React.RefObject<HTMLDivElement>;
};

export function icon(...classes: string[]) {
  return function Icon(props: ButtonIconProps) {
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
