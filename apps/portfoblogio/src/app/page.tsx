import SvgArrowRight from "@repo/icons/arrow-right";
import Link from "next/link";
import { buttonA, buttonB } from "./_page.css";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <div>
        <button type="button" className={buttonA.root}>
          <div className={buttonA.text}>Click me</div>
          <SvgArrowRight className={buttonA.icon} />
        </button>
        <Link href="/test">go to test</Link>
        <button type="button" className={buttonB.root}>
          <SvgArrowRight className={buttonB.icon} />
        </button>
      </div>
    </main>
  );
}
