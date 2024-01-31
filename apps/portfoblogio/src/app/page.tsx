import { ButtonA } from "@components/button-a.css";
import SvgArrowRight from "@repo/icons/arrow-right";

export default function Page(): JSX.Element {
  return (
    <main className="p-20">
      <ButtonA.Root>
        <ButtonA.Body>
          <ButtonA.Icon>
            <div className="h-full w-full rounded-full bg-current" />
          </ButtonA.Icon>
          <ButtonA.Text>Click me</ButtonA.Text>
          <ButtonA.Icon>
            <SvgArrowRight />
          </ButtonA.Icon>
        </ButtonA.Body>
      </ButtonA.Root>
    </main>
  );
}
