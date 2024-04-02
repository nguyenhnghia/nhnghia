import "@repo/web-styling/templates/foundation";

import ConditionalRender from "@components/conditional-render";
import WebVitals from "@components/web-vitals";
import { isProdEnv } from "@utils/context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { footer, header } from "./layout.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  /*================== props =================*/
  const { children } = props;

  /*================== render =================*/
  return (
    <html lang="en">
      <body>
        <header className={header}>this is shared header</header>
        {children}
        <footer className={footer}>this is shared footer</footer>
        <WebVitals />
        <ConditionalRender condition={isProdEnv}>
          <SpeedInsights />
        </ConditionalRender>
      </body>
    </html>
  );
};

RootLayout.displayName = "RootLayout";

export default RootLayout;
