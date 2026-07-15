import Link from "next/link";

export default function Button({
  href,
  variant,
  children,
  withArrow,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  withArrow?: boolean;
}) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className="inline-flex items-center gap-[9px] text-[15.5px] font-bold text-brand-ink bg-brand rounded-[11px] px-6 py-[13px] shadow-[0_10px_30px_-10px_rgba(32,221,201,0.7)] hover:bg-brand-hover"
      >
        {children}
        {withArrow && <span className="text-[17px]">→</span>}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center text-[15.5px] font-semibold text-text-bright bg-white/[0.04] border border-border-strong rounded-[11px] px-[22px] py-[13px] hover:bg-white/[0.08]"
    >
      {children}
      {withArrow && <span className="text-[17px]">→</span>}
    </Link>
  );
}
