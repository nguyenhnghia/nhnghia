import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { main } from "./page.css";

const Header = dynamic(() => import("@components/header/header"));

export const metadata: Metadata = {
  title: "nhnghia - portfoblogio",
  openGraph: {
    type: "article",
    url: "https://nhnghia-portfoblogio.vercel.app/",
    title: "Tiêm phòng cúm và phế cầu cùng lúc có an toàn không? - Dev test",
    description: "Những lưu ý quan trọng khi tiêm (dev test)",
  },
  other: {
    "fb:app_id": "1768713483442649",
  },
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
