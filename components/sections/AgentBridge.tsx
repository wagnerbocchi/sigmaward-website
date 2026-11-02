import Icon from "@/components/ui/Icon";
import TextLink from "@/components/ui/TextLink";
import { Dictionary, Locale, localizePath } from "@/lib/i18n";
const icons = ["file-text", "search", "settings", "server"] as const;
export default function AgentBridge({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const copy = dict.site.signal;
  return (
    <section className="agent-bridge">
      <div className="agent-bridge-copy">
        <h2>{copy.sharedTitle}</h2>
        <p>{copy.sharedBody}</p>
        <TextLink href={`${localizePath("/platform/", locale)}#agent`}>
          {dict.site.learnMore}
        </TextLink>
      </div>
      <div className="agent-bridge-visual">
        <img
          src="/illustrations/agent-laptop.png"
          alt={copy.illustrationAlt}
          width="1440"
          height="1080"
          loading="lazy"
          decoding="async"
        />
        <svg
          className="agent-connections"
          viewBox="0 0 700 300"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M275 146H408Q421 146 426 134L446 60Q450 48 463 48H497M275 146H497M275 146H408Q421 146 426 158L446 212Q450 224 463 224H497M275 146H398Q411 146 416 161L446 270Q450 282 463 282H497" />
          </g>
        </svg>
        <div className="agent-capabilities">
          {copy.sharedLinks.map((link, index) => (
            <a
              key={link.href}
              href={`${localizePath("/platform/", locale)}#${link.href}`}
            >
              <Icon name={icons[index]} size={20} />
              <span>
                <strong>{link.title}</strong>
                <small>{link.body}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
