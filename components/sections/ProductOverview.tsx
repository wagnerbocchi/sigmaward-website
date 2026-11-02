import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { Dictionary, Locale, localizePath } from "@/lib/i18n";
export default function ProductOverview({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="site-container home-capabilities">
      <div className="section-heading">
        <h2>{dict.site.overviewTitle}</h2>
        <p>{dict.site.overviewBody}</p>
      </div>
      <div className="capability-list">
        {dict.site.shortFeatures.map((feature, index) => (
          <Link
            className="capability"
            key={feature.title}
            href={`${localizePath("/platform/", locale)}#${dict.product.features[index].id}`}
          >
            <div className="capability-title">
              <h3>{feature.title}</h3>
              <Icon name="arrow-right" size={18} />
            </div>
            <p>{feature.body}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
