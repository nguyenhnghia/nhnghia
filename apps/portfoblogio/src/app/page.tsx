import { ButtonA } from "@components/button-type-1.css";

export default function Page(): JSX.Element {
  return (
    <main className="p-20">
      <ButtonA.Root className="border border-current">click me</ButtonA.Root>
    </main>
  );
}
