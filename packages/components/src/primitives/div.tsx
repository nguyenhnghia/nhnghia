type DivProps = React.ComponentProps<"div"> & {
  _ref?: React.RefObject<HTMLDivElement>;
};

// pick more if needed
type SerializableDivProps = Pick<DivProps, "className">;

export function div(initProps: SerializableDivProps) {
  return function Div(props: DivProps) {
    const { className: initClassName, ...restInitProps } = initProps;
    const { children, className, _ref, ...restProps } = props;
    return (
      <div
        ref={_ref}
        className={[initClassName, className].filter(Boolean).join(" ")}
        {...restInitProps}
        {...restProps}
      >
        {children}
      </div>
    );
  };
}
