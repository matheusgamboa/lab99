"use client";

import { useEffect } from "react";

export function ExperienceController() {
  useEffect(() => {
    const root = document.documentElement;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const counters = Array.from(
      document.querySelectorAll<HTMLElement>("[data-counter]"),
    );
    const header = document.querySelector<HTMLElement>("[data-site-header]");

    root.classList.add("motion-ready");

    const setCountersToEnd = () => {
      counters.forEach((counter) => {
        counter.textContent = counter.dataset.counter ?? "0";
      });
    };

    if (motionQuery.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      setCountersToEnd();
    }

    const revealObserver = motionQuery.matches
      ? null
      : new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              (entry.target as HTMLElement).classList.add("is-visible");
              observer.unobserve(entry.target);
            });
          },
          { threshold: 0.14, rootMargin: "0px 0px -8%" },
        );

    revealItems.forEach((item) => revealObserver?.observe(item));

    const counterObserver = motionQuery.matches
      ? null
      : new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              const counter = entry.target as HTMLElement;
              const target = Number(counter.dataset.counter ?? 0);
              const duration = 1100;
              const start = performance.now();

              const tick = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const value = Math.round(target * eased);
                counter.textContent = String(value).padStart(
                  counter.dataset.pad ? Number(counter.dataset.pad) : 1,
                  "0",
                );

                if (progress < 1) requestAnimationFrame(tick);
              };

              requestAnimationFrame(tick);
              observer.unobserve(counter);
            });
          },
          { threshold: 0.6 },
        );

    counters.forEach((counter) => counterObserver?.observe(counter));

    let frame = 0;
    const updateHeader = () => {
      frame = 0;
      header?.classList.toggle("is-scrolled", window.scrollY > 28);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      root.classList.remove("motion-ready");
      revealObserver?.disconnect();
      counterObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
