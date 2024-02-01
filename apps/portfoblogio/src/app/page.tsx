import SvgArrowRight from "@repo/icons/arrow-right";
import ButtonA from "@components/button-a";

export default function Page(): JSX.Element {
  return (
    <main className="p-20">
      <div className="flex">
        <ButtonA
          className="rounded-sm md:rounded-lg lg:rounded-full "
          startIcon={<div className="h-full w-full rounded-full bg-current" />}
          endIcon={<SvgArrowRight />}
        >
          Click me
        </ButtonA>
      </div>
    </main>
  );
}
