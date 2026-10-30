import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import PlatformShot from "@/components/mocks/PlatformShot";
import { getDictionary, type Locale } from "@/lib/i18n";
const captures = [
  "detections",
  "case-detail",
  "playbooks",
  "monitoring",
  "ai-assist",
  "fleet",
];
export default function PlatformPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale),
    p = dict.product;
  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          badge={dict.platform.badge}
          title={dict.platform.heroTitle}
          sub={dict.platform.heroSub}
        />
        <nav
          className="site-container section-nav"
          aria-label={dict.platform.badge}
        >
          {p.features.map((f) => (
            <a href={`#${f.id}`} key={f.id}>
              {f.tag.slice(5)}
            </a>
          ))}
        </nav>
        {p.features.map((f, i) => (
          <section
            className="site-container feature-split platform-feature"
            id={f.id}
            key={f.id}
          >
            <div>
              <p className="eyebrow">{f.tag}</p>
              <h2>{f.title}</h2>
              <p>{f.desc}</p>
              <ul className="detail-list">
                {f.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <PlatformShot
                src={`/screenshots/current/${captures[i]}.jpg`}
                alt={i === 5 ? p.agentLabel : f.title}
              />
              <p className="capture-caption">
                {i === 5 ? p.fleetCaption : p.captureNote}
              </p>
            </div>
          </section>
        ))}
        <section className="site-container integrations">
          <p className="eyebrow">{dict.platform.integrationsHead.eyebrow}</p>
          <h2>{dict.platform.integrationsHead.title}</h2>
          <p>{dict.platform.integrationsHead.sub}</p>
          <ul>
            {dict.platform.integrations.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
