import SvgArrowRight from "@repo/icons/arrow-right";
import Link from "next/link";
import ButtonA from "@component-registers/button/a.css";
import "./_page.css";

export default function RootPage(): JSX.Element {
  return (
    <main className="p-20">
      <div className="flex">
        <ButtonA.Root className="rounded-sm tl:rounded-lg dt:rounded-full">
          {/* <ButtonA.Icon>
            <div className="size-full rounded-full bg-current" />
          </ButtonA.Icon> */}
          <ButtonA.Text>Click me</ButtonA.Text>
          <ButtonA.Icon>
            <SvgArrowRight />
          </ButtonA.Icon>
        </ButtonA.Root>
        <Link href="/test">go to test</Link>
      </div>
    </main>
  );
}
