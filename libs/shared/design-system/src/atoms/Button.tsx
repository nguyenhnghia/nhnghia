import cn from '@/common-functionalities/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { ClassValue } from 'clsx';
import { HTMLAttributes, ReactElement, forwardRef } from 'react';

import './styles/button.css';

const getMobileViewButtonClassName = cva('button', {
  variants: {
    size: {
      tiny: 'size-tiny',
      small: 'size-small',
      normal: 'size-normal',
      medium: 'size-medium',
      large: 'size-large',
      huge: 'size-huge',
    },
    shape: {
      rectangle: 'shape-rectangle',
      rounded: 'shape-rounded',
      capsule: 'shape-capsule',
    },
    layout: {
      wide: 'layout-wide',
      tight: 'layout-tight',
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
      tiny: 'tablet-size-tiny',
      small: 'tablet-size-small',
      normal: 'tablet-size-normal',
      medium: 'tablet-size-medium',
      large: 'tablet-size-large',
      huge: 'tablet-size-huge',
    },
    shape: {
      rectangle: 'tablet-shape-rectangle',
      rounded: 'tablet-shape-rounded',
      capsule: 'tablet-shape-capsule',
    },
    layout: {
      wide: 'tablet-layout-wide',
      tight: 'tablet-layout-tight',
    },
  },
});

const getDesktopViewButtonClassName = cva('', {
  variants: {
    size: {
      tiny: 'desktop-size-tiny',
      small: 'desktop-size-small',
      normal: 'desktop-size-normal',
      medium: 'desktop-size-medium',
      large: 'desktop-size-large',
      huge: 'desktop-size-huge',
    },
    shape: {
      rectangle: 'desktop-shape-rectangle',
      rounded: 'desktop-shape-rounded',
      capsule: 'desktop-shape-capsule',
    },
    layout: {
      wide: 'desktop-layout-wide',
      tight: 'desktop-layout-tight',
    },
  },
});

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  /**
   * @description
   * mobile view (from 0px to 767px) appearance which is described by:
   * - size: tiny | small | normal (default) | medium | large | huge
   * - shape: rectangle | rounded | capsule (default)
   * - layout: wide (default) | tight
   * @default
   * { size: 'normal', shape: 'capsule', layout: 'wide' }
   */
  mobile?: VariantProps<typeof getMobileViewButtonClassName>;
  /**
   * @description
   * - have the same config as mobile config but work on tablet view (from 767px),
   * - will partially overwrite mobile config
   * - will be overwrite partially if desktop view config is set
   * @default
   * undefined
   */
  tablet?: VariantProps<typeof getTabletViewButtonClassName>;
  /**
   * @description
   * - have the same config as mobile config but work on desktop view (from 1280px),
   * - will partially overwrite mobile & tablet config
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
      data-component="nov19-button"
      className={cn(
        getMobileViewButtonClassName(mobile),
        getTabletViewButtonClassName(tablet),
        getDesktopViewButtonClassName(desktop),
        className
      )}
      {...restProps}
      ref={forwardedRef}
    >
      <div className={cn('content-wrapper', componentClassName?.contentWrapper)}>
        {startIcon && <div className={cn('icon', componentClassName?.startIcon)}>{startIcon}</div>}
        <div className={cn('text', componentClassName?.text)}>{children}</div>
        {endIcon && <div className={cn('icon', componentClassName?.endIcon)}>{endIcon}</div>}
      </div>
    </button>
  );
});

Button.displayName = 'DS/Button';

export type { ButtonProps };
export default Button;
