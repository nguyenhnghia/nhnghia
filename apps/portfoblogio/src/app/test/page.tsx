import Link from "next/link";
import ButtonA from "@components/button-a";
import "./_page.css";

export default function TestPage(): JSX.Element {
  return (
    <main>
      <div>
        <ButtonA>click me</ButtonA>
        <Link href="/">go home</Link>
      </div>
    </main>
  );
}
