import { clsx } from "clsx";
import { button1, button2 } from "./mini-profile.css";

type MiniProfileProps = React.ComponentProps<"div">;

const MiniProfile: React.FC<MiniProfileProps> = (props) => {
  //#region - render
  return (
    <div {...props}>
      this is mini profile
      <button type="button" className={clsx(button1.root)}>
        click mini-profile
      </button>
      <button type="button" className={clsx(button2.root)}>
        click mini-profile 2
      </button>
      <div>Lorem ipsum dolor sit amet.</div>
    </div>
  );
  //#endregion
};

MiniProfile.displayName = "MiniProfile";

export type { MiniProfileProps };
export default MiniProfile;
