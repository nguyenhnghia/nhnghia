import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { main } from "./page.css";

const MiniProfile = dynamic(() => import("@components/header/mini-profile"));

export const metadata: Metadata = {
  title: "nhnghia - portfoblogio",
};

const RootPage: React.FC = () => {
  /*================== render =================*/
  return (
    <main className={main}>
      <div>Lorem ipsum dolor sit amet.</div>
      <MiniProfile />
    </main>
  );
};

RootPage.displayName = "RootPage";

export default RootPage;
