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
  return (
    <Link href={href} className={`site-button site-button-${variant}`}>
      {children}
      {withArrow && <span aria-hidden="true">&rarr;</span>}
    </Link>
  );
}
