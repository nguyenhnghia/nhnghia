"use client";

import type { ComponentProps, FC } from "react";
import cn from "@utils/cn";
import buttonABlueSprint from "./button-a.css";

type ButtonAProps = ComponentProps<"button"> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const { Root, Icon, Text } = buttonABlueSprint;

const ButtonA: FC<ButtonAProps> = (props) => {
  /*================== props =================*/
  const { children, startIcon, endIcon, className, ...restProps } = props;

  /*================== render =================*/
  return (
    <Root className={cn("border border-current", className)} {...restProps}>
      {startIcon ? <Icon>{startIcon}</Icon> : null}
      {children ? (
        <Text
          className={cn("line-clamp-1", {
            "pl-8": !startIcon && Boolean(endIcon),
            "pr-8": !endIcon && Boolean(startIcon),
            "px-8": !endIcon && !startIcon,
          })}
        >
          {children}
        </Text>
      ) : null}
      {endIcon ? <Icon>{endIcon}</Icon> : null}
    </Root>
  );
};

ButtonA.displayName = "ButtonA";

export type { ButtonAProps };
export default ButtonA;
