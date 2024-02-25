import SvgArrowRight from "@repo/icons/arrow-right";
import Link from "next/link";
import { buttonA } from "@components/button-a.css";
import { buttonB } from "@components/button-b.css";
import { buttonC } from "@components/button-c.css";
import { link } from "./_page.css";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <div>
        <button type="button" className={buttonA.root}>
          <div className={buttonA.text}>Click me</div>
          <SvgArrowRight className={buttonA.icon} />
        </button>
        <Link href="/test" className={link}>
          go to test
        </Link>
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
