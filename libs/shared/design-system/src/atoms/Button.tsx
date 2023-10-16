import { FC, HTMLAttributes } from 'react';

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
  // props
  const { children } = props;

  // render
  return <button className="">{children}</button>;
};

Button.displayName = 'Button';

export type { ButtonProps };
export default Button;
