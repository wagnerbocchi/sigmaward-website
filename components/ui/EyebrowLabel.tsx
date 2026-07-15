const colorMap: Record<string, string> = {
  brand: "text-brand",
  violet: "text-violet",
  orange: "text-sev-high",
};

export default function EyebrowLabel({
  children,
  color = "brand",
}: {
  children: React.ReactNode;
  color?: "brand" | "violet" | "orange";
}) {
  return (
    <span
      className={`font-mono text-[11.5px] tracking-[0.22em] uppercase ${colorMap[color]}`}
    >
      {children}
    </span>
  );
}
