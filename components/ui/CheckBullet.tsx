export default function CheckBullet({
  children,
  color = "brand",
}: {
  children: React.ReactNode;
  color?: "brand" | "violet";
}) {
  const chipBg =
    color === "violet"
      ? "bg-[rgba(140,123,255,0.12)]"
      : "bg-[rgba(32,221,201,0.12)]";
  const strokeColor =
    color === "violet" ? "var(--color-violet)" : "var(--color-brand)";

  return (
    <div className="flex gap-[11px] items-start mb-3">
      <span
        className={`flex-shrink-0 w-5 h-5 rounded-[6px] ${chipBg} flex items-center justify-center mt-[1px]`}
      >
        <svg
          viewBox="0 0 24 24"
          width="11"
          height="11"
          fill="none"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      <span className="text-[14.5px] text-text leading-[1.5]">{children}</span>
    </div>
  );
}
