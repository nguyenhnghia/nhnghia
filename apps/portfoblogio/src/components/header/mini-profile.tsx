import { clsx } from "clsx";
import { test } from "./_mini-profile.css";

type MiniProfileProps = React.ComponentProps<"div">;

const MiniProfile: React.FC<MiniProfileProps> = (props) => {
  /*================== render =================*/
  return (
    <div {...props}>
      this is mini profile
      <button type="button" className={clsx(test)}>
        click here (mini-profile)
      </button>
    </div>
  );
};

MiniProfile.displayName = "MiniProfile";

export type { MiniProfileProps };
export default MiniProfile;
