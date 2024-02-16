import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nhnghia - portfoblogio - test",
};

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <section>
      <header>this is test header</header>
      {children}
      <footer>this is test footer</footer>
    </section>
  );
}
