import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "nhnghia - portfoblogio",
};

const Page: React.FC = () => {
  //#region - render
  return (
    <main>
      <div>Lorem ipsum dolor sit amet.</div>
    </main>
  );
  //#endregion
};

Page.displayName = "Page";

export default Page;
