import { clsx } from "clsx";
import { test } from "./header.css";
import { button, buttonExtra, buttonExtra2, buttonExtra3, buttonExtra4 } from "./mini-profile.css";

type MiniProfileProps = React.ComponentProps<"div">;

const MiniProfile: React.FC<MiniProfileProps> = (props) => {
  //#region - render
  return (
    <div {...props}>
      this is mini profile
      <button type="button" className={clsx(button, buttonExtra.root, buttonExtra3)}>
        click mini-profile
      </button>
      <button type="button" className={clsx(buttonExtra2.root, buttonExtra4)}>
        click mini-profile 2
      </button>
      <div className={test}>Lorem ipsum dolor sit amet.</div>
    </div>
  );
  //#endregion
};

MiniProfile.displayName = "MiniProfile";

export type { MiniProfileProps };
export default MiniProfile;
