import "@repo/web-styling/reset";
import type { Metadata } from "next";
import "./_layout.css";

export const metadata: Metadata = {
  title: "nhnghia - portfoblogio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <header>this is shared header</header>
        {children}
        <footer>this is shared footer</footer>
      </body>
    </html>
  );
}
