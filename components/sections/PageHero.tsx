import type { ReactNode } from "react";
export default function PageHero({
  badge,
  title,
  sub,
  children,
}: {
  badge: string;
  title: string;
  sub: string;
  children?: ReactNode;
}) {
  return (
    <section className="site-container page-hero">
      <p className="eyebrow">{badge}</p>
      <h1>{title}</h1>
      <p className="page-intro">{sub}</p>
      {children && <div className="button-row">{children}</div>}
    </section>
  );
}
