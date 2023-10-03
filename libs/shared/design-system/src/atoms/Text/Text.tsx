import { FC } from 'react';

import Heading1, { Heading1Props } from './Heading1';
import { CommonTextProps } from './types';

type TextProps = CommonTextProps<HTMLSpanElement>;

const Text: FC<TextProps> & { H1: FC<Heading1Props> } = (props) => {
  // props
  const { children } = props;

  // render
  return <span>{children}</span>;
};

Text.displayName = 'Text';
Text.H1 = Heading1;

export { Text };
export type { TextProps };
export default Text;
