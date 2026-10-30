import Button from "@/components/ui/Button";
import PlatformShot from "@/components/mocks/PlatformShot";
import { Dictionary, Locale, localizePath } from "@/lib/i18n";

export default function Hero({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const p = dict.product;
  return (
    <section className="editorial-hero site-container">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">SIEM / SOAR / EDR / NOC</p>
          <h1>{p.title}</h1>
        </div>
        <div className="hero-summary">
          <p>{p.sub}</p>
          <Button
            href={localizePath("/platform/", locale)}
            variant="primary"
            withArrow
          >
            {p.primary}
          </Button>
        </div>
      </div>
      <PlatformShot
        src="/screenshots/current/watchfloor.jpg"
        alt={p.gallery[0].title}
        priority
      />
      <p className="capture-caption">{p.captureNote}</p>
    </section>
  );
}
