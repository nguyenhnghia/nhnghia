import type { Metadata } from "next";
import Link from "next/link";
import { title404 } from "./not-found.css";

export const metadata: Metadata = {
  title: "nhnghia - 404",
};

export default function NotFound(): JSX.Element {
  return (
    <div>
      <p className={title404}>Page not found</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
