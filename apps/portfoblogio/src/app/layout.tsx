import "@repo/web-styling/templates/reset";

import ConditionalRender from "@components/conditional-render";
import SiteLinksScript from "@components/scripts/site-links-script";
import WebVitals from "@components/web-vitals";
import { isProdEnv } from "@utils/context";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { footer, header } from "./layout.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = (props) => {
  //#region - props
  const { children } = props;
  //#endregion

  //#region - render
  return (
    <html lang="en">
      <head>
        <SiteLinksScript />
        <SiteLinksScript />
        <SiteLinksScript />
        <SiteLinksScript />
        <SiteLinksScript />
        <SiteLinksScript />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=favorite,home,search,settings" rel="stylesheet" />
      </head>
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
  //#endregion
};

RootLayout.displayName = "RootLayout";

export default RootLayout;
