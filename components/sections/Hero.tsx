"use client";

import { useEffect, useId, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { Dictionary, Locale, localizePath } from "@/lib/i18n";

const stageIcons = ["laptop", "file-text", "search", "settings"] as const;

export default function Hero({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const copy = dict.site.signal;
  const [active, setActive] = useState(2);
  const [eventIndex, setEventIndex] = useState(2);
  const layout = useRef<HTMLDivElement | null>(null);
  const panel = useRef<HTMLDivElement | null>(null);
  const [connection, setConnection] = useState("");
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  useEffect(() => {
    const root = layout.current;
    if (!root || !panel.current) return;
    const update = () => {
      const node = tabs.current[active]?.querySelector(".signal-node");
      if (!node || !panel.current || window.innerWidth <= 1000) {
        setConnection("");
        return;
      }
      const origin = root.getBoundingClientRect();
      const start = node.getBoundingClientRect();
      const end = panel.current.getBoundingClientRect();
      const x = start.left - origin.left + 5;
      const y = start.bottom - origin.top - 5;
      const lane = start.left - origin.left - 12;
      const endX = Math.max(
        end.left - origin.left + 24,
        Math.min(
          start.left - origin.left + start.width / 2,
          end.right - origin.left - 24,
        ),
      );
      const endY = end.top - origin.top;
      setConnection(
        `M${x} ${y} Q${lane} ${y} ${lane} ${y + 20} V${endY - 34} Q${lane} ${endY - 14} ${endX} ${endY - 14} V${endY}`,
      );
    };
    const observer = new ResizeObserver(update);
    observer.observe(root);
    observer.observe(panel.current);
    update();
    return () => observer.disconnect();
  }, [active]);
  const scene = copy.scenes[active];
  const event = scene.rows[eventIndex];
  const evidence = [
    eventIndex === scene.selected ? scene.evidence[0] : `${event.time}:00`,
    scene.evidence[1],
    scene.evidence[2],
    eventIndex === scene.selected ? scene.evidence[3] : event.detail,
  ];
  function selectStage(index: number, focus = false) {
    const next = (index + copy.scenes.length) % copy.scenes.length;
    setActive(next);
    setEventIndex(copy.scenes[next].selected);
    if (focus) tabs.current[next]?.focus();
  }

  return (
    <section className="signal-hero" aria-labelledby={`${id}-title`}>
      <div className="signal-layout" ref={layout}>
        <svg className="stage-panel-connection" aria-hidden="true">
          <path d={connection} />
        </svg>
        <div className="signal-copy">
          <h1 id={`${id}-title`}>{copy.title}</h1>
          <p>{copy.intro}</p>
          <div className="button-row">
            <Button
              href={`${localizePath("/company/", locale)}#contato`}
              variant="primary"
              withArrow
            >
              {dict.site.demo}
            </Button>
            <Button
              href={localizePath("/platform/", locale)}
              variant="secondary"
            >
              {copy.explore}
            </Button>
          </div>
        </div>

        <div className="signal-stages">
          <svg
            className="stage-wiring"
            viewBox="0 0 840 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M30 160V67Q30 55 43 50L150 8Q160 3 172 9L270 55Q280 60 294 54L405 7Q417 3 430 9L505 41Q518 47 518 60V160" />
              <path d="M30 160V87Q30 76 44 70L150 28Q162 23 174 29L270 75Q282 80 294 74L405 28Q418 23 431 29L505 61Q518 67 518 80V160" />
              <path d="M530 0L655 57Q669 64 682 58L765 22Q778 17 791 23L840 46" />
            </g>
          </svg>
          <div
            className="signal-tabs"
            role="tablist"
            aria-label={dict.site.flowLabel}
          >
            {dict.site.flow.map((step, index) => (
              <button
                type="button"
                key={step.id}
                ref={(el) => {
                  tabs.current[index] = el;
                }}
                role="tab"
                id={`${id}-tab-${index}`}
                aria-controls={`${id}-panel`}
                aria-selected={active === index}
                tabIndex={active === index ? 0 : -1}
                className="signal-tab"
                onClick={() => selectStage(index)}
                onKeyDown={(e) => {
                  const next =
                    e.key === "ArrowRight"
                      ? index + 1
                      : e.key === "ArrowLeft"
                        ? index - 1
                        : e.key === "Home"
                          ? 0
                          : e.key === "End"
                            ? 3
                            : null;
                  if (next !== null) {
                    e.preventDefault();
                    selectStage(next, true);
                  }
                }}
              >
                <span className="signal-node">
                  <Icon name={stageIcons[index]} size={24} />
                </span>
                <strong>{step.label}</strong>
                <span className="signal-step-description">
                  {copy.summaries[index]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div
          className="endpoint-map"
          aria-label={`${copy.endpoints}: ${copy.pipeline.join(", ")}, ${copy.alerts}`}
          role="img"
        >
          <svg
            viewBox="0 0 720 310"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M60 260V186Q60 174 74 168L130 144V79Q130 60 149 60H390Q405 60 418 51L505 0" />
              <path d="M155 260V200Q155 190 166 185L205 166V91Q205 70 224 70H393Q410 70 422 60L505 0" />
              <path d="M250 260V210Q250 200 264 195L302 178V105Q302 94 315 94H410L485 135" />
              <path d="M345 260V215Q345 200 330 194L302 178" />
              <path d="M34 260H369M150 60V34Q150 23 163 23H388Q405 23 417 16L445 0M486 164H633M486 208H633" />
            </g>
            <path
              className="endpoint-active-path"
              d="M60 260V186Q60 174 74 168L130 144V79Q130 60 149 60H390Q405 60 418 51L505 0"
              fill="none"
            />
            <path
              className="endpoint-uplink"
              d="M505 0Q500-20 500-50V-155Q500-168 510-168"
              fill="none"
              stroke="#3f93ff"
              strokeWidth="1.4"
            />
            <g fill="currentColor">
              {[
                [130, 115],
                [205, 121],
                [302, 145],
                [205, 70],
                [302, 94],
                [150, 23],
                [275, 60],
                [486, 164],
                [600, 164],
              ].map(([x, y]) => (
                <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />
              ))}
            </g>
          </svg>
          <div className="endpoint-devices" aria-hidden="true">
            {["laptop", "monitor", "server", "laptop"].map((icon, i) => (
              <span key={i}>
                <Icon name={icon} size={26} />
              </span>
            ))}
          </div>
          <div className="pipeline-rules" aria-hidden="true">
            <svg viewBox="0 0 120 144" preserveAspectRatio="none">
              <path d="M60 2 118 30V114L60 142 2 114V30Z" />
              <path d="M60 12 110 36V108L60 132 10 108V36Z" />
            </svg>
            {copy.pipeline.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="pipeline-alerts" aria-hidden="true">
            <Icon name="file-text" size={17} />
            <span>{copy.alerts}</span>
            <i />
            <i />
            <i />
          </div>
        </div>

        <div
          className="signal-panel"
          ref={panel}
          role="tabpanel"
          id={`${id}-panel`}
          aria-labelledby={`${id}-tab-${active}`}
          tabIndex={0}
        >
          <div className="signal-panel-heading">
            <div>
              <h2>{scene.title}</h2>
              <span className="illustration-label">{copy.preview}</span>
            </div>
            <div className="scene-controls">
              <button
                type="button"
                aria-label={copy.previous}
                onClick={() => selectStage(active - 1)}
              >
                <Icon name="chevron-left" size={18} />
              </button>
              <button
                type="button"
                aria-label={copy.next}
                onClick={() => selectStage(active + 1)}
              >
                <Icon name="chevron-right" size={18} />
              </button>
            </div>
          </div>
          <div className="signal-scene" key={active}>
            <div className="event-timeline">
              {scene.rows.map((row, index) => (
                <button
                  type="button"
                  key={row.title}
                  aria-pressed={eventIndex === index}
                  className="event-row"
                  onClick={() => setEventIndex(index)}
                >
                  <time>{row.time}</time>
                  <Icon
                    name={
                      index === 4
                        ? "shield-check"
                        : index === 0
                          ? "settings"
                          : "file-text"
                    }
                    size={19}
                  />
                  <span>
                    <strong>{row.title}</strong>
                    <small>{row.detail}</small>
                  </span>
                </button>
              ))}
            </div>
            <div
              className="event-evidence"
              aria-live="polite"
              aria-atomic="true"
            >
              <h3>
                <Icon name="file-text" size={23} />
                {event.title}
              </h3>
              <dl>
                {copy.fields.map((label, index) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{evidence[index]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <a
            className="scene-source"
            href={`${localizePath("/platform/", locale)}#${dict.site.flow[active].href}`}
          >
            {copy.exampleNote}
            <Icon name="arrow-right" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
