"use client";

import { useEffect } from "react";

/**
 * Mount this once per page. It powers:
 *  - .reveal -> adds .in when scrolled into view
 *  - [data-count] -> count-up animation
 * Same behaviour as the original site.js.
 */
export default function ScrollFx() {
  useEffect(() => {
    let ticking = false;

    const revealCheck = () => {
      ticking = false;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9 && r.bottom > 0) el.classList.add("in");
      });
    };
    const onReveal = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(revealCheck);
      }
    };

    const runCount = (el: HTMLElement) => {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      const target = parseFloat(el.dataset.count || "0");
      const suffix = el.dataset.suffix || "";
      const dec = (el.dataset.count?.split(".")[1] || "").length;
      const dur = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const countCheck = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      counters.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.85 && r.bottom > 0) runCount(el);
      });
    };

    window.addEventListener("scroll", onReveal, { passive: true });
    window.addEventListener("resize", onReveal, { passive: true });
    revealCheck();
    [60, 200, 500, 1000].forEach((t) => setTimeout(revealCheck, t));

    if (counters.length) {
      window.addEventListener("scroll", countCheck, { passive: true });
      countCheck();
      [200, 600].forEach((t) => setTimeout(countCheck, t));
    }

    return () => {
      window.removeEventListener("scroll", onReveal);
      window.removeEventListener("resize", onReveal);
      window.removeEventListener("scroll", countCheck);
    };
  }, []);

  return null;
}
