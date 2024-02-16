import SvgArrowRight from "@repo/icons/arrow-right";
import Link from "next/link";
import { buttonAStyles } from "./_page.css";

export default function RootPage(): JSX.Element {
  return (
    <main>
      <div>
        <button type="button" className={buttonAStyles.root}>
          <div className={buttonAStyles.text}>Click me</div>
          <SvgArrowRight className={buttonAStyles.icon} />
        </button>
        <Link href="/test">go to test</Link>
      </div>
    </main>
  );
}
