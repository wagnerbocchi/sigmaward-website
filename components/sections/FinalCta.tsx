import Button from "@/components/ui/Button";
import { Dictionary, Locale, localizePath } from "@/lib/i18n";
export default function FinalCta({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="site-container final-cta">
      <div>
        <p className="eyebrow">Sigmaward</p>
        <h2>{dict.cta.title}</h2>
        <p>{dict.cta.sub}</p>
      </div>
      <Button
        href={`${localizePath("/company/", locale)}#contato`}
        variant="primary"
        withArrow
      >
        {dict.product.secondary}
      </Button>
    </section>
  );
}
