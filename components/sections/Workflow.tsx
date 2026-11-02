"use client";
import { useId, useRef, useState } from "react";
import Icon from "@/components/ui/Icon";
import TextLink from "@/components/ui/TextLink";
import { localizePath, type Dictionary, type Locale } from "@/lib/i18n";
const icons = ["sliders", "target", "search", "shield-check"] as const;
export default function Workflow({
  copy,
  locale,
}: {
  copy: Dictionary["site"];
  locale: Locale;
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = copy.flow[active];
  function select(index: number) {
    setActive(index);
    refs.current[index]?.focus();
  }
  return (
    <section
      className="site-container workflow-section"
      aria-labelledby={`${id}-heading`}
    >
      <div className="center-heading">
        <h2 id={`${id}-heading`}>{copy.flowTitle}</h2>
        <p>{copy.flowIntro}</p>
      </div>
      <div className="flow-tabs" role="tablist" aria-label={copy.flowLabel}>
        {copy.flow.map((step, index) => (
          <button
            key={step.id}
            type="button"
            className="flow-tab"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel-${index}`}
            aria-selected={active === index}
            tabIndex={active === index ? 0 : -1}
            ref={(el) => {
              refs.current[index] = el;
            }}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              let next: number | undefined;
              if (event.key === "ArrowRight")
                next = (index + 1) % copy.flow.length;
              if (event.key === "ArrowLeft")
                next = (index + copy.flow.length - 1) % copy.flow.length;
              if (event.key === "Home") next = 0;
              if (event.key === "End") next = copy.flow.length - 1;
              if (next !== undefined) {
                event.preventDefault();
                select(next);
              }
            }}
          >
            <span className="flow-tab-icon">
              <Icon name={icons[index]} size={21} />
            </span>
            <span>{step.label}</span>
          </button>
        ))}
      </div>
      {copy.flow.map((step, index) => (
        <div
          key={step.id}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          tabIndex={0}
          hidden={active !== index}
        >
          {active === index && (
            <div className="flow-panel flow-panel-enter">
              <h3>{current.title}</h3>
              <p>{current.body}</p>
              <TextLink
                href={`${localizePath("/platform/", locale)}#${current.href}`}
              >
                {copy.learnMore}
              </TextLink>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
