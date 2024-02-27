import "@repo/web-styling/templates/alpha.reset";
import "@repo/web-styling/templates/beta.responsive-layers";
import type { Metadata } from "next";

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
