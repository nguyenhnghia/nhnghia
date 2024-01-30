import type { Metadata } from "next";
import "./global.css";

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
      <body>{children}</body>
    </html>
  );
}
