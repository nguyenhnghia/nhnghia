type ButtonProps = React.ComponentProps<"button"> & {
  _ref?: React.RefObject<HTMLButtonElement>;
};

// pick more if needed
type SerializableButtonProps = Pick<ButtonProps, "className">;

export function button(initProps: SerializableButtonProps) {
  return function Button(props: ButtonProps) {
    const { className: initClassName, ...restInitProps } = initProps;
    const { children, className, _ref, ...restProps } = props;
    return (
      <button
        ref={_ref}
        type="button"
        className={[initClassName, className].filter(Boolean).join(" ")}
        {...restInitProps}
        {...restProps}
      >
        {children}
      </button>
    );
  };
}
