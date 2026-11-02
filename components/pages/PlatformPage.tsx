import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/sections/PageHero";
import FinalCta from "@/components/sections/FinalCta";
import Faq from "@/components/sections/Faq";
import PlatformShot from "@/components/mocks/PlatformShot";
import DetailList from "@/components/ui/DetailList";
import Button from "@/components/ui/Button";
import { getDictionary, localizePath, type Locale } from "@/lib/i18n";
const captures = [
  "detections",
  "case-detail",
  "playbooks",
  "monitoring",
  "ai-assist",
];
export default function PlatformPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale),
    p = dict.product,
    s = dict.site;
  return (
    <>
      <Nav locale={locale} />
      <main id="main-content">
        <PageHero
          locale={locale}
          badge={dict.nav.platform}
          title={dict.platform.heroTitle}
          sub={dict.platform.heroSub}
        >
          <Button
            href={`${localizePath("/company/", locale)}#contato`}
            variant="primary"
            withArrow
          >
            {s.demo}
          </Button>
        </PageHero>
        <nav
          className="site-container section-nav"
          aria-label={dict.platform.badge}
        >
          <a href="#agent">{p.agentLabel}</a>
          {p.features.map((f, i) => (
            <a href={`#${f.id}`} key={f.id}>
              {s.shortFeatures[i].title}
            </a>
          ))}
        </nav>
        <section className="site-container reading-section">
          <h2>{s.architectureTitle}</h2>
          <p>{s.architectureBody}</p>
          <div className="architecture-flow">
            {s.architecture.map((part) => (
              <div key={part.title}>
                <h3>{part.title}</h3>
                <p>{part.body}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="site-container reading-section" id="agent">
          <h2>{s.agentTitle}</h2>
          <p>{s.agentIntro}</p>
          <DetailList items={p.agentFacts} />
          <div className="agent-table-wrap">
            <table className="agent-table">
              <thead>
                <tr>
                  <th scope="col">{s.osHeading}</th>
                  <th scope="col">{s.collectorsHeading}</th>
                </tr>
              </thead>
              <tbody>
                {s.agentPlatforms.map((os) => (
                  <tr key={os.os}>
                    <th scope="row">{os.os}</th>
                    <td>{os.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>{s.agentNote}</p>
        </section>
        {p.features.slice(0, 5).map((feature, index) => (
          <section
            className="site-container feature-split platform-feature"
            id={feature.id}
            key={feature.id}
          >
            <div>
              <h2>{feature.title}</h2>
              <p>{feature.desc}</p>
              <DetailList items={feature.details} />
            </div>
            <figure>
              <PlatformShot
                src={`/screenshots/current/${captures[index]}.jpg`}
                alt={s.shortFeatures[index].title}
              />
              <figcaption className="capture-caption">
                {s.captureNote}{" "}
                <a
                  href={`/screenshots/current/${captures[index]}.jpg`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {s.fullCapture}.
                </a>
              </figcaption>
            </figure>
          </section>
        ))}
        <section className="site-container reading-section" id="governance">
          <h2>{p.features[5].title}</h2>
          <p>{p.features[5].desc}</p>
          <div className="architecture-flow">
            {s.governanceLayers.map((layer) => (
              <div key={layer.title}>
                <h3>{layer.title}</h3>
                <p>{layer.body}</p>
              </div>
            ))}
          </div>
          <p>{p.governanceBody}</p>
        </section>
        <section className="site-container reading-section">
          <h2>{dict.platform.integrationsHead.title}</h2>
          <p>{dict.platform.integrationsHead.sub}</p>
          <ul className="integration-list">
            {dict.platform.integrations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <Faq title={s.platformFaqTitle} items={s.platformFaq} />
        <FinalCta dict={dict} locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
