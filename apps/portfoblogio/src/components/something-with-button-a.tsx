"use client";

import type { ComponentProps, FC } from "react";
import ButtonA from "@component-registers/button/a.css";
import cn from "@utils/cn";

type SomethingWithButtonAProps = ComponentProps<"button"> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const SomethingWithButtonA: FC<SomethingWithButtonAProps> = (props) => {
  /*================== props =================*/
  const { children, startIcon, endIcon, className, ...restProps } = props;

  /*================== render =================*/
  return (
    <div className="animate-bounce rounded-md bg-red-600 p-20">
      <ButtonA.Root
        className={cn("border border-current", className)}
        {...restProps}
      >
        {startIcon ? <ButtonA.Icon>{startIcon}</ButtonA.Icon> : null}
        {children ? <ButtonA.Text>{children}</ButtonA.Text> : null}
        {endIcon ? <ButtonA.Icon>{endIcon}</ButtonA.Icon> : null}
      </ButtonA.Root>
    </div>
  );
};

SomethingWithButtonA.displayName = "SomethingWithButtonA";

export type { SomethingWithButtonAProps };
export default SomethingWithButtonA;
