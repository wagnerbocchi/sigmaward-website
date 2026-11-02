import Link from "next/link";
import Icon from "@/components/ui/Icon";
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
      {withArrow && <Icon name="arrow-right" size={17} />}
    </Link>
  );
}
