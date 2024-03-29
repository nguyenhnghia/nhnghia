import "@repo/web-styling/templates/foundation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import WebVitals from "@components/web-vitals";

export const metadata: Metadata = {
  title: "nhnghia - portfoblogio",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>
        <header>this is shared header</header>
        {children}
        <footer>this is shared footer</footer>
        <WebVitals />
        <SpeedInsights />
      </body>
    </html>
  );
}
