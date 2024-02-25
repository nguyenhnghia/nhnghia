import SvgArrowRight from "@repo/icons/arrow-right";
import Link from "next/link";
import { buttonC } from "@components/button-c.css";

export default function TestPage(): JSX.Element {
  return (
    <main>
      <div>
        <Link href="/">go home</Link>
        <button type="button" className={buttonC.root}>
          <SvgArrowRight className={buttonC.icon} />
        </button>
      </div>
    </main>
  );
}
