import ConditionalRender from "@components/conditional-render";
import WebVitals from "@components/web-vitals";
import { isProdEnv } from "@utils/context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import "@repo/web-styling/templates/foundation";

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
        <ConditionalRender condition={isProdEnv}>
          <SpeedInsights />
        </ConditionalRender>
      </body>
    </html>
  );
}
