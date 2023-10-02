import { FC, HTMLAttributes } from 'react';

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  type: 'h1' | 'h2' | 'h3' | 'paragraph' | 'text';
}

const Text: FC<TextProps> = (props) => {
  // props
  const { children } = props;

  // render
  return <div className="">{children}</div>;
};

Text.displayName = 'Text';

export { Text };
export type { TextProps };
export default Text;
