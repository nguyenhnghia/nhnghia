"use client";

import ConditionalRender from "@components/conditional-render";
import dynamic from "next/dynamic";
import { useState } from "react";

const MiniProfile = dynamic(() => import("./mini-profile"));

type HeaderProps = React.ComponentProps<"header">;

const Header: React.FC<HeaderProps> = (props) => {
  /*================== props =================*/
  const { ...restProps } = props;

  /*================== logics =================*/
  const [show, setShow] = useState(false);

  /*================== render =================*/
  return (
    <header {...restProps}>
      <button
        type="button"
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        Toggle show
      </button>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis labore ducimus tempora odio recusandae deserunt animi repellendus soluta fugit nostrum?
      <ConditionalRender condition={show}>
        <MiniProfile />
      </ConditionalRender>
    </header>
  );
};

Header.displayName = "Header";

export type { HeaderProps };
export default Header;
