import { button, test } from "./mini-profile.css";

type MiniProfileProps = React.ComponentProps<"div">;

const MiniProfile: React.FC<MiniProfileProps> = (props) => {
  //#region - render
  return (
    <div {...props}>
      this is mini profile
      <button type="button" className={button}>
        click mini-profile
      </button>
      <div className={test}>Lorem ipsum dolor sit amet.</div>
    </div>
  );
  //#endregion
};

MiniProfile.displayName = "MiniProfile";

export type { MiniProfileProps };
export default MiniProfile;
