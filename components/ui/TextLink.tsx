import Link from "next/link";
import Icon from "@/components/ui/Icon";
export default function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <Icon name="arrow-right" size={17} />
    </Link>
  );
}
