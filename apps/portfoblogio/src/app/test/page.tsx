import Link from "next/link";
import "./_page.css";

export default function TestPage(): JSX.Element {
  return (
    <main>
      <div>
        <Link href="/">go home</Link>
      </div>
    </main>
  );
}
