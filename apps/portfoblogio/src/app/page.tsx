import SvgArrowRight from "@repo/icons/arrow-right";
import Link from "next/link";
import ButtonA from "@components/button-a";
import "./_page.css";

export default function RootPage(): JSX.Element {
  return (
    <main className="p-20">
      <div className="flex">
        <ButtonA
          className="rounded-sm tl:rounded-lg dt:rounded-full"
          startIcon={<div className="size-full rounded-full bg-current" />}
          endIcon={<SvgArrowRight />}
        >
          Click me
        </ButtonA>
        <Link href="/test">go to test</Link>
      </div>
    </main>
  );
}
