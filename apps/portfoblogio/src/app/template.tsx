export default function Template({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <div className="border-4 border-white">{children}</div>;
}
