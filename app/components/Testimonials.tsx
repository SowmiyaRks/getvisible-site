"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Our leads doubled in four months. Klimbr's AI SEO strategy transformed how buyers find our projects online.",
    name: "Rajesh Kumar",
    role: "Managing Director, Real Estate Developer",
    av: "RK",
  },
  {
    quote:
      "Cost per lead dropped 40 percent. Their Meta Ads targeting is sharper than any agency we have worked with before.",
    name: "Suresh Narayanan",
    role: "Head of Marketing, Real Estate Group",
    av: "SN",
  },
  {
    quote:
      "We went from page three to page one in six months. Klimbr delivered exactly what they promised.",
    name: "Priya Venkatesh",
    role: "VP Marketing, IT Services Company",
    av: "PV",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const start = () => {
      timer.current = setInterval(
        () => setActive((i) => (i + 1) % TESTIMONIALS.length),
        3800
      );
    };
    start();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const pause = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setActive(i);
  };
  const resume = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(
      () => setActive((i) => (i + 1) % TESTIMONIALS.length),
      3800
    );
  };

  return (
    <section className="section section--soft">
      <div className="container">
        <div className="mx-auto center reveal" style={{ maxWidth: 640 }}>
          <span className="eyebrow eyebrow--center">What clients say</span>
          <h2 style={{ marginTop: 16 }}>Results our clients can measure</h2>
        </div>
        <div className="t-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={`tcard reveal${i === active ? " active" : ""}`}
              data-d={i + 1}
              onMouseEnter={() => pause(i)}
              onMouseLeave={resume}
            >
              <span className="qmark" aria-hidden="true">&ldquo;</span>
              <blockquote className="quote">{t.quote}</blockquote>
              <figcaption className="who">
                <span className="av">{t.av}</span>
                <span>
                  <span className="nm">{t.name}</span>
                  <span className="rl">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
