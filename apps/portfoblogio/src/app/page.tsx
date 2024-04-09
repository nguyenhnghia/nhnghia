import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { main } from "./page.css";

const Header = dynamic(() => import("@components/header/header"));

export const metadata: Metadata = {
  title: "nhnghia - portfoblogio",
};

const RootPage: React.FC = () => {
  //#region - render
  return (
    <main className={main}>
      <div>Lorem ipsum dolor sit amet.</div>
      <Header />
    </main>
  );
  //#endregion
};

RootPage.displayName = "RootPage";

export default RootPage;
