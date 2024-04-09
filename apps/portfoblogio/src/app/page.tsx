import type { Metadata } from "next";
import dynamic from "next/dynamic";

const MiniProfile = dynamic(() => import("@components/header/header"));

export const metadata: Metadata = {
  title: "nhnghia - portfoblogio",
};

const RootPage: React.FC = () => {
  //#region - render
  return (
    // <main className={main}>
    <main>
      <div>Lorem ipsum dolor sit amet.</div>
      <MiniProfile />
    </main>
  );
  //#endregion
};

RootPage.displayName = "RootPage";

export default RootPage;
