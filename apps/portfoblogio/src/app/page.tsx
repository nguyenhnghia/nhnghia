import SvgArrowRight from "@repo/icons/arrow-right";
import Link from "next/link";
import buttonAStyles from "@component-styles/button/a.css";
import "./_page.css";

export default function RootPage(): JSX.Element {
  return (
    <main className="p-20">
      <div className="flex">
        <button type="button" className={buttonAStyles.root}>
          <div className={buttonAStyles.text}>Click me</div>
          <div className={buttonAStyles.icon}>
            <SvgArrowRight />
          </div>
        </button>
        <Link href="/test">go to test</Link>
      </div>
    </main>
  );
}
