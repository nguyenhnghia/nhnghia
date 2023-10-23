import cn from '@/common-functionalities/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';
import { HTMLAttributes, ReactElement, forwardRef } from 'react';

import styles from './styles/button.module.css';

const getMobileViewButtonClassName = cva(styles['button'], {
  variants: {
    size: {
      tiny: styles['size-tiny'],
      small: styles['size-small'],
      normal: styles['size-normal'],
      medium: styles['size-medium'],
      large: styles['size-large'],
      huge: styles['size-huge'],
    },
    shape: {
      rectangle: styles['shape-rectangle'],
      rounded: styles['shape-rounded'],
      capsule: styles['shape-capsule'],
    },
    layout: {
      wide: styles['layout-wide'],
      tight: styles['layout-tight'],
    },
  },
  defaultVariants: {
    size: 'normal',
    shape: 'capsule',
    layout: 'wide',
  },
});

const getTabletViewButtonClassName = cva('', {
  variants: {
    size: {
      tiny: styles['tablet-size-tiny'],
      small: styles['tablet-size-small'],
      normal: styles['tablet-size-normal'],
      medium: styles['tablet-size-medium'],
      large: styles['tablet-size-large'],
      huge: styles['tablet-size-huge'],
    },
    shape: {
      rectangle: styles['tablet-shape-rectangle'],
      rounded: styles['tablet-shape-rounded'],
      capsule: styles['tablet-shape-capsule'],
    },
    layout: {
      wide: styles['tablet-layout-wide'],
      tight: styles['tablet-layout-tight'],
    },
  },
});

const getDesktopViewButtonClassName = cva('', {
  variants: {
    size: {
      tiny: styles['desktop-size-tiny'],
      small: styles['desktop-size-small'],
      normal: styles['desktop-size-normal'],
      medium: styles['desktop-size-medium'],
      large: styles['desktop-size-large'],
      huge: styles['desktop-size-huge'],
    },
    shape: {
      rectangle: styles['desktop-shape-rectangle'],
      rounded: styles['desktop-shape-rounded'],
      capsule: styles['desktop-shape-capsule'],
    },
    layout: {
      wide: styles['desktop-layout-wide'],
      tight: styles['desktop-layout-tight'],
    },
  },
});

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  mobile?: VariantProps<typeof getMobileViewButtonClassName>;
  tablet?: VariantProps<typeof getTabletViewButtonClassName>;
  desktop?: VariantProps<typeof getDesktopViewButtonClassName>;
} & {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  componentClassName?: {
    contentWrapper?: ClassValue;
    startIcon?: ClassValue;
    text?: ClassValue;
    endIcon?: ClassValue;
  };
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  // props
  const {
    mobile,
    tablet,
    desktop,
    children,
    startIcon,
    endIcon,
    componentClassName,
    className,
    ...restProps
  } = props;

  // render
  return (
    <button
      data-component="button"
      className={cn(
        getMobileViewButtonClassName(mobile),
        getTabletViewButtonClassName(tablet),
        getDesktopViewButtonClassName(desktop),
        className
      )}
      {...restProps}
      ref={forwardedRef}
    >
      <div className={cn(styles['content-wrapper'], componentClassName?.contentWrapper)}>
        {startIcon && (
          <div className={cn(styles['icon'], componentClassName?.startIcon)}>{startIcon}</div>
        )}
        <div
          className={cn(
            styles['text'],
            { 'mx-auto': !startIcon && !endIcon },
            componentClassName?.text
          )}
        >
          {children}
        </div>
        {endIcon && (
          <div className={cn(styles['icon'], componentClassName?.endIcon)}>{endIcon}</div>
        )}
      </div>
    </button>
  );
});

Button.displayName = 'DS/Button';

export type { ButtonProps };
export default Button;
