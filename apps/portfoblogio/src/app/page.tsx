import SvgArrowRight from "@repo/icons/arrow-right";
import Link from "next/link";
import { buttonA } from "../styles/button-a.css";
import { buttonB } from "../styles/button-b.css";
import { buttonC } from "../styles/button-c.css";
import { test } from "./_page.css";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <div className={test}>
        <button type="button" className={buttonA.root} style={{ display: "inline-flex" }}>
          <div className={buttonA.text}>Click me</div>
          <SvgArrowRight className={buttonA.icon} />
        </button>
        <Link href="/test">go to test</Link>
        <button type="button" className={buttonB.root}>
          <SvgArrowRight className={buttonB.icon} />
        </button>
        <button type="button" className={buttonC.root}>
          <SvgArrowRight className={buttonC.icon} />
        </button>
      </div>
    </main>
  );
}
