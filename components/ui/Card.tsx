export default function Card({
  children,
  hover = false,
  className,
}: {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}) {
  const hoverClasses = hover
    ? "hover:border-[#2E6E66] hover:bg-[#121C2C] transition-colors"
    : "";

  return (
    <div
      className={`bg-surface border border-border rounded-2xl ${hoverClasses} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
