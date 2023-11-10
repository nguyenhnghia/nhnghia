import cn from '@/common-functionalities/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';
import { HTMLAttributes, ReactElement, forwardRef } from 'react';

import css from '../styles/button.module.scss';

const getButtonBaseClassName = cva('button', {
  variants: {
    size: {
      tiny: css['size-tiny'],
      small: css['size-small'],
      normal: css['size-normal'],
      medium: css['size-medium'],
      large: css['size-large'],
      huge: css['size-huge'],
    },
    shape: {
      rectangle: css['shape-rectangle'],
      rounded: css['shape-rounded'],
      capsule: css['shape-capsule'],
    },
    layout: {
      wide: css['layout-wide'],
      tight: css['layout-tight'],
    },
  },
  defaultVariants: {
    size: 'normal',
    shape: 'capsule',
    layout: 'tight',
  },
});

const getTabletViewButtonClassName = cva('', {
  variants: {
    size: {
      tiny: css['tablet-size-tiny'],
      small: css['tablet-size-small'],
      normal: css['tablet-size-normal'],
      medium: css['tablet-size-medium'],
      large: css['tablet-size-large'],
      huge: css['tablet-size-huge'],
    },
    shape: {
      rectangle: css['tablet-shape-rectangle'],
      rounded: css['tablet-shape-rounded'],
      capsule: css['tablet-shape-capsule'],
    },
    layout: {
      wide: css['tablet-layout-wide'],
      tight: css['tablet-layout-tight'],
    },
  },
});

const getDesktopViewButtonClassName = cva('', {
  variants: {
    size: {
      tiny: css['desktop-size-tiny'],
      small: css['desktop-size-small'],
      normal: css['desktop-size-normal'],
      medium: css['desktop-size-medium'],
      large: css['desktop-size-large'],
      huge: css['desktop-size-huge'],
    },
    shape: {
      rectangle: css['desktop-shape-rectangle'],
      rounded: css['desktop-shape-rounded'],
      capsule: css['desktop-shape-capsule'],
    },
    layout: {
      wide: css['desktop-layout-wide'],
      tight: css['desktop-layout-tight'],
    },
  },
});

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  /**
   * @description
   * base appearance which is described by:
   * - size: tiny | small | normal (default) | medium | large | huge
   * - shape: rectangle | rounded | capsule (default)
   * - layout: wide (default) | tight
   * @default
   * { size: 'normal', shape: 'capsule', layout: 'wide' }
   */
  base?: VariantProps<typeof getButtonBaseClassName>;
  /**
   * @description
   * - have the same config as base config but work on tablet view (from 767px),
   * - will partially overwrite base config
   * - will be overwritten partially if desktop view config is set
   * @default
   * undefined
   */
  tablet?: VariantProps<typeof getTabletViewButtonClassName>;
  /**
   * @description
   * - have the same config as base config but work on desktop view (from 1280px),
   * - will partially overwrite base & tablet config
   * @default
   * undefined
   */
  desktop?: VariantProps<typeof getDesktopViewButtonClassName>;
} & {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  /**
   * @description
   * extends component's class name
   * @property {ClassValue} contentWrapper - extends class for content wrapper (which wrapped icons & button text)
   * @property {ClassValue} startIcon - extends class for start icon
   * @property {ClassValue} text - extends class for button text
   * @property {ClassValue} endIcon - extends class for end icon
   */
  extendClasses?: {
    contentWrapper?: ClassValue;
    startIcon?: ClassValue;
    text?: ClassValue;
    endIcon?: ClassValue;
  };
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    // props
    const {
      base,
      tablet,
      desktop,
      children,
      startIcon,
      endIcon,
      extendClasses,
      className,
      ...restProps
    } = props;

    // render
    return (
      <button
        className={cn(
          css['button'],
          getButtonBaseClassName(base),
          getTabletViewButtonClassName(tablet),
          getDesktopViewButtonClassName(desktop),
          className
        )}
        {...restProps}
        data-ds="nov19"
        data-component="button"
        ref={forwardedRef}
      >
        <div
          className={cn(css['content-wrapper'], extendClasses?.contentWrapper)}
        >
          {startIcon ? (
            <div className={cn(css['icon'], extendClasses?.startIcon)}>
              {startIcon}
            </div>
          ) : null}
          {children ? (
            <div className={cn(css['text'], extendClasses?.text)}>
              {children}
            </div>
          ) : null}
          {endIcon ? (
            <div className={cn(css['icon'], extendClasses?.endIcon)}>
              {endIcon}
            </div>
          ) : null}
        </div>
      </button>
    );
  }
);

Button.displayName = 'DS/Button';

export type { ButtonProps };
export default Button;
