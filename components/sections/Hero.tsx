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
  return (
    <section className="hero site-container">
      <h1>{dict.product.title}</h1>
      <p className="hero-summary">{dict.product.sub}</p>
      <div className="button-row">
        <Button
          href={`${localizePath("/company/", locale)}#contato`}
          variant="primary"
          withArrow
        >
          {dict.site.demo}
        </Button>
        <Button href={localizePath("/platform/", locale)} variant="secondary">
          {dict.product.primary}
        </Button>
      </div>
      <figure>
        <div className="hero-capture">
          <PlatformShot
            src="/screenshots/current/watchfloor.jpg"
            alt={dict.product.gallery[0].title}
            priority
          />
        </div>
        <figcaption className="capture-caption">
          {dict.site.heroCaption}{" "}
          <a
            href="/screenshots/current/watchfloor.jpg"
            target="_blank"
            rel="noreferrer"
          >
            {dict.site.fullCapture}.
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
