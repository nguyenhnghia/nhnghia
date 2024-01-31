import ButtonA from "@components/button-a";

export default function Page(): JSX.Element {
  return (
    <main className="p-20">
      <ButtonA
        startIcon={<div className="h-full w-full rounded-full bg-current" />}
      >
        Click me
      </ButtonA>
    </main>
  );
}
