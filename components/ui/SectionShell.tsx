export default function SectionShell({
  children,
  bg = "bg",
  topBorder = false,
  className,
  label,
}: {
  children: React.ReactNode;
  bg?: "bg" | "bg-alt";
  topBorder?: boolean;
  className?: string;
  label?: string;
}) {
  const bgClass = bg === "bg-alt" ? "bg-bg-alt" : "bg-bg";
  const borderClass = topBorder ? "border-t border-border-soft" : "";

  return (
    <section
      data-screen-label={label}
      className={`${bgClass} ${borderClass} py-[90px] px-8 ${className ?? ""}`}
    >
      <div className="max-w-[1180px] mx-auto">{children}</div>
    </section>
  );
}
