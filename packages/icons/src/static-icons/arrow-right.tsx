import type { SVGProps } from "react";

const SvgArrowRight: React.FC<SVGProps<SVGSVGElement>> = (
  props: SVGProps<SVGSVGElement>,
) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.20874 13.0007H16.3787L11.4987 17.8807C11.1087 18.2707 11.1087 18.9107 11.4987 19.3007C11.8887 19.6907 12.5187 19.6907 12.9087 19.3007L19.4987 12.7107C19.8887 12.3207 19.8887 11.6907 19.4987 11.3007L12.9187 4.7007C12.5287 4.3107 11.8987 4.3107 11.5087 4.7007C11.1187 5.0907 11.1187 5.7207 11.5087 6.1107L16.3787 11.0007H5.20874C4.65874 11.0007 4.20874 11.4507 4.20874 12.0007C4.20874 12.5507 4.65874 13.0007 5.20874 13.0007Z"
      fill="black"
    />
  </svg>
);
export default SvgArrowRight;
