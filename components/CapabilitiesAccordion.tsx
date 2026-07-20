"use client";

import { useRef, useState } from "react";

type Capability = {
  index: string;
  title: string;
  text: string;
  detail: string;
  visual: "hub" | "flow" | "agent" | "connect";
};

function CapabilityVisual({ type }: { type: Capability["visual"] }) {
  return (
    <div className={`capability-visual capability-visual--${type}`} aria-hidden="true">
      <span className="capability-visual__tag">LAB99 / SYSTEM</span>
      <div className="capability-visual__field">
        <i className="visual-node visual-node--a" />
        <i className="visual-node visual-node--b" />
        <i className="visual-node visual-node--c" />
        <i className="visual-node visual-node--d" />
        <i className="visual-route visual-route--a" />
        <i className="visual-route visual-route--b" />
        <strong>{type === "agent" ? "AI" : type === "hub" ? "99" : "↗"}</strong>
      </div>
    </div>
  );
}

export function CapabilitiesAccordion({ items }: { items: Capability[] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const moveFocus = (current: number, direction: number) => {
    const next = (current + direction + items.length) % items.length;
    buttonRefs.current[next]?.focus();
  };

  return (
    <div className="capabilities__list" data-reveal>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `capability-panel-${index}`;
        const buttonId = `capability-button-${index}`;

        return (
          <article className={`capability ${isOpen ? "is-open" : ""}`} key={item.index}>
            <h3>
              <button
                ref={(node) => {
                  buttonRefs.current[index] = node;
                }}
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown") {
                    event.preventDefault();
                    moveFocus(index, 1);
                  }
                  if (event.key === "ArrowUp") {
                    event.preventDefault();
                    moveFocus(index, -1);
                  }
                  if (event.key === "Home") {
                    event.preventDefault();
                    buttonRefs.current[0]?.focus();
                  }
                  if (event.key === "End") {
                    event.preventDefault();
                    buttonRefs.current.at(-1)?.focus();
                  }
                }}
              >
                <span className="capability__index">[{item.index}]</span>
                <span className="capability__title">{item.title}</span>
                <span className="capability__toggle" aria-hidden="true">
                  <i />
                  <i />
                </span>
              </button>
            </h3>
            <div
              className="capability__panel"
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
            >
              <div className="capability__panel-inner">
                <div className="capability__copy">
                  <p>{item.text}</p>
                  <span>{item.detail}</span>
                </div>
                <CapabilityVisual type={item.visual} />
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
