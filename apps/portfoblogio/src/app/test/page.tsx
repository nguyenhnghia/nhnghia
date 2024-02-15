import Link from "next/link";
import SomethingWithButtonA from "@components/something-with-button-a";
import "./_page.css";

export default function TestPage(): JSX.Element {
  return (
    <main>
      <div>
        <SomethingWithButtonA>click me</SomethingWithButtonA>
        <Link href="/">go home</Link>
      </div>
    </main>
  );
}
