import cn from '@/common-functionalities/cn';
import { ElementType, FC, HTMLAttributes } from 'react';

type TextProps =
  | ({ HTMLTag: 'span' } & HTMLAttributes<HTMLSpanElement>)
  | ({ HTMLTag: 'p' } & HTMLAttributes<HTMLParagraphElement>)
  | ({ HTMLTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' } & HTMLAttributes<HTMLHeadElement>);

const Text: FC<TextProps> = (props) => {
  // props
  const { HTMLTag, className, children, ...restProps } = props;

  const Component = HTMLTag as ElementType;

  // render
  return (
    <Component className={cn('', className)} {...restProps}>
      {children}
    </Component>
  );
};

Text.displayName = 'Text';

export type { TextProps };
export default Text;
