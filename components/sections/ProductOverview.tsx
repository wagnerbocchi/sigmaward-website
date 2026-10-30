import Link from "next/link";
import { Dictionary, Locale, localizePath } from "@/lib/i18n";
export default function ProductOverview({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const p = dict.product;
  return (
    <section className="site-container product-overview">
      <div className="section-heading">
        <p className="eyebrow">{p.overviewLabel}</p>
        <h2>{p.overviewTitle}</h2>
        <p>{p.overviewBody}</p>
      </div>
      <div className="capability-list">
        {p.features.map((f) => (
          <Link
            href={`${localizePath("/platform/", locale)}#${f.id}`}
            className="capability"
            key={f.id}
          >
            <span className="eyebrow">{f.tag}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <span className="capability-arrow" aria-hidden="true">
              &#8599;
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
