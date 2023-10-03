import { FC } from 'react';

import { CommonTextProps } from './types';

type Heading1Props = CommonTextProps<HTMLHeadElement>;

const Heading1: FC<Heading1Props> = (props) => {
  // props
  const { children } = props;

  // render
  return <h1>{children}</h1>;
};

Heading1.displayName = 'Heading1';

export { Heading1 };
export type { Heading1Props };
export default Heading1;
