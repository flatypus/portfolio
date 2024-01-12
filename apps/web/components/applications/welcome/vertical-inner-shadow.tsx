export function VerticalInnerShadow(): JSX.Element {
  return (
    <div
      className="pointer-events-none absolute left-0 top-0 z-10 mt-6 h-[calc(100%-20px)] w-full rotate-180"
      style={{ boxShadow: "inset 0 20px 10px -10px rgb(1 1 1 / 0.15)" }}
    />
  );
}
