import Link from "next/link";
import type { Metadata } from "next";
import ScrollFx from "./components/ScrollFx";
import Testimonials from "./components/Testimonials";
import HeroVisual from "./components/HeroVisual";

export const metadata: Metadata = {
  title: "Klimbr — AI-Powered Digital Marketing & SEO Automation",
  description:
    "Klimbr helps businesses across India and beyond rank higher, generate quality leads, and build a dominant online presence using intelligent automation, data-driven strategy, and full-stack digital execution.",
  alternates: { canonical: "https://klimbr.in/" },
  openGraph: {
    title: "Klimbr — AI-Powered Digital Marketing & SEO Automation",
    description:
      "Grow faster with AI-driven SEO automation, data-led strategy, and full-funnel digital marketing.",
    url: "https://klimbr.in/",
    siteName: "Klimbr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Klimbr — AI-Powered Digital Marketing & SEO Automation",
    description: "Grow faster with AI-driven SEO automation and full-funnel digital marketing.",
  },
};

const SERVICES = [
  ["/services/ai-seo", "🔍", "AI SEO & SEO Automation", "Rank faster with intelligent, data-powered search optimization that compounds month over month."],
  ["/services/sem", "🎯", "Search Engine Marketing", "Pay-per-click campaigns on Google & Bing, engineered for maximum return on every rupee spent."],
  ["/services/smm", "💬", "Social Media Marketing", "Build brand authority and engagement across LinkedIn, Instagram, Facebook, X, and YouTube."],
  ["/services/email", "✉️", "Email Marketing", "Nurture leads and retain customers with personalized, automated email flows."],
  ["/services/web", "🖥️", "Website Design & Development", "Fast, SEO-ready websites built to convert — on WordPress, Next.js, React, and more."],
  ["/services/app", "📱", "App Development", "Native & cross-platform mobile apps crafted for performance and user experience."],
];

const INDUSTRIES = ["Healthcare", "Real Estate", "B2B SaaS", "Education", "E-commerce", "Professional Services", "Technology Startups", "Retail"];

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const Arrow = () => (
  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Home() {
  return (
    <main>
      <ScrollFx />

      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="grid-fade" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="shape" style={{ width: 64, height: 64, top: "22%", left: "8%", transform: "rotate(18deg)" }} />
          <div className="shape circle" style={{ width: 42, height: 42, top: "64%", right: "12%" }} />
          <div className="shape" style={{ width: 30, height: 30, top: "30%", right: "20%", transform: "rotate(35deg)" }} />
        </div>
        <div className="container">
          <div className="center mx-auto" style={{ maxWidth: 920 }}>
            <span className="pill reveal" style={{ marginBottom: 22 }}>
              <span className="dot" /> AI-first digital marketing · Chennai, India
            </span>
            <h1 className="display reveal" style={{ marginTop: 0 }}>
              Grow Faster with <span className="grad-text">AI-Powered</span> Digital Marketing
            </h1>
            <p className="lead reveal mx-auto" data-d="2" style={{ marginTop: 26, maxWidth: 680 }}>
              Klimbr helps businesses across India and beyond rank higher, generate quality leads, and
              build a dominant online presence — using intelligent automation, data-driven strategy,
              and full-stack digital execution.
            </p>
            <div className="hero-actions reveal" data-d="3" style={{ justifyContent: "center", marginTop: 36 }}>
              <Link href="/contact" className="btn btn-primary btn--lg">
                Get a Free Strategy Session <Arrow />
              </Link>
              <Link href="/services" className="btn btn-secondary btn--lg">Explore Our Services</Link>
            </div>
          </div>

          <div className="reveal" data-d="4" style={{ marginTop: "clamp(44px,6vw,76px)", maxWidth: 1000, marginInline: "auto" }}>
            <HeroVisual />
          </div>

          <div className="grid grid-4 reveal" data-d="4" style={{ marginTop: "clamp(40px,6vw,72px)" }}>
            <div className="stat center"><div className="num grad-text"><span data-count="360" data-suffix="°">0</span></div><div className="lbl">Full-funnel coverage</div></div>
            <div className="stat center"><div className="num grad-text"><span data-count="6">0</span></div><div className="lbl">Marketing channels</div></div>
            <div className="stat center"><div className="num grad-text"><span data-count="6" data-suffix="+">0</span></div><div className="lbl">Years of expertise</div></div>
            <div className="stat center"><div className="num grad-text"><span data-count="24" data-suffix="/7">0</span></div><div className="lbl">AI systems working</div></div>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow reveal">What We Do</span>
            <h2 className="reveal" data-d="1" style={{ marginTop: 18 }}>Your growth partner, built for the age of AI</h2>
            <p className="lead reveal" data-d="2" style={{ marginTop: 20 }}>
              We combine cutting-edge artificial intelligence with proven digital marketing expertise to
              deliver measurable results for every client — from AI-driven SEO automation to
              high-converting ad campaigns.
            </p>
            <p className="sub reveal" data-d="2" style={{ marginTop: 14 }}>
              We&apos;re not just another digital agency. Whether you&apos;re a startup chasing your first
              1,000 customers or an established brand ready to scale, our 360-degree approach ensures no
              opportunity is missed.
            </p>
            <div className="row reveal" data-d="3" style={{ marginTop: 28 }}>
              <Link href="/about" className="btn btn-ghost">Learn about us <Arrow /></Link>
            </div>
          </div>
          <div className="media">
            <div className="grid grid-2" style={{ gap: 18 }}>
              <div className="card reveal" data-d="1" style={{ padding: 24 }}><div className="icon-badge">⚡</div><h4>AI-driven</h4><p>Machine learning at every layer of strategy.</p></div>
              <div className="card reveal" data-d="2" style={{ padding: 24, marginTop: 28 }}><div className="icon-badge">🎯</div><h4>Data-led</h4><p>Every decision grounded in real numbers.</p></div>
              <div className="card reveal" data-d="3" style={{ padding: 24 }}><div className="icon-badge">🔁</div><h4>Full-funnel</h4><p>Awareness to conversion, in sync.</p></div>
              <div className="card reveal" data-d="4" style={{ padding: 24, marginTop: 28 }}><div className="icon-badge">📊</div><h4>Transparent</h4><p>Real-time dashboards, no black boxes.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CORE SERVICES ============ */}
      <section className="section section--soft">
        <div className="container">
          <div className="center mx-auto reveal" style={{ maxWidth: 680 }}>
            <span className="eyebrow eyebrow--center">Our Core Services</span>
            <h2 style={{ marginTop: 18 }}>Every channel your business needs to grow online</h2>
            <p className="lead" style={{ marginTop: 16 }}>An integrated suite where each service amplifies the next.</p>
          </div>
          <div className="grid grid-3" style={{ marginTop: 56 }}>
            {SERVICES.map(([href, icon, title, desc], i) => (
              <Link key={href} href={href} className="card svc-card reveal" data-d={(i % 3) + 1}>
                <div className="icon-badge">{icon}</div>
                <div className="svc-num">0{i + 1}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="more">Explore service <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY KLIMBR ============ */}
      <section className="section">
        <div className="container split split--rev">
          <div className="media">
            <div className="placeholder reveal"><span>dashboard / reporting visual</span></div>
          </div>
          <div>
            <span className="eyebrow reveal">Why Klimbr</span>
            <h2 className="reveal" data-d="1" style={{ marginTop: 18 }}>Built different, by design</h2>
            <ul className="checks reveal" data-d="2" style={{ marginTop: 28 }}>
              <li><span className="ck"><Check /></span><div><strong>AI-first approach</strong> to every campaign and strategy.</div></li>
              <li><span className="ck"><Check /></span><div><strong>Full-funnel solutions</strong> from awareness to conversion.</div></li>
              <li><span className="ck"><Check /></span><div><strong>Transparent reporting</strong> with real-time dashboards.</div></li>
              <li><span className="ck"><Check /></span><div><strong>Experienced team</strong> with proven results across industries.</div></li>
              <li><span className="ck"><Check /></span><div><strong>Based in Chennai,</strong> serving clients across India and internationally.</div></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="section--tight section--soft">
        <div className="container center reveal" style={{ marginBottom: 36 }}>
          <span className="eyebrow eyebrow--center">Industries We Serve</span>
          <h3 style={{ marginTop: 14, fontWeight: 500, color: "var(--ink-2)" }}>
            Our AI-powered strategies adapt to your market, audience, and growth goals
          </h3>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...INDUSTRIES, ...INDUSTRIES].map((t, i) => (
              <span className="ind-chip" key={i}><span className="dot" />{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUSTED / STATS ============ */}
      <section className="section section--ink">
        <div className="container split">
          <div>
            <span className="eyebrow reveal">Proven results</span>
            <h2 className="reveal" data-d="1" style={{ marginTop: 18, color: "#fff" }}>Trusted by Growing Businesses</h2>
            <p className="reveal" data-d="2" style={{ marginTop: 18, color: "#c7cad8", fontSize: "1.1rem" }}>
              Businesses trust Klimbr to drive digital visibility, qualified traffic, and measurable
              revenue growth. Our AI systems work around the clock so you always stay ahead of the
              competition.
            </p>
          </div>
          <div className="grid grid-2" style={{ gap: 20 }}>
            <div className="stat reveal" data-d="1"><div className="num grad-text"><span data-count="36" data-suffix="×">0</span></div><div className="lbl">Avg. ROI from email channel</div></div>
            <div className="stat reveal" data-d="2"><div className="num grad-text"><span data-count="92" data-suffix="%">0</span></div><div className="lbl">Client retention rate</div></div>
            <div className="stat reveal" data-d="3"><div className="num grad-text"><span data-count="100" data-suffix="s">0</span></div><div className="lbl">Pages optimized in parallel</div></div>
            <div className="stat reveal" data-d="4"><div className="num grad-text">∞</div><div className="lbl">Compounding monthly returns</div></div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <Testimonials />

      {/* ============ CTA ============ */}
      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div className="orb o1" aria-hidden="true" />
            <div className="orb o2" aria-hidden="true" />
            <span className="eyebrow eyebrow--center">Ready to get visible?</span>
            <h2 style={{ marginTop: 18, maxWidth: "18ch", marginInline: "auto" }}>Book your free digital audit today</h2>
            <p className="lead" style={{ maxWidth: "54ch", marginTop: 16, color: "#c7cad8" }}>
              Discover exactly where your business stands — and what it will take to dominate your market online.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 32 }}>
              <Link href="/contact" className="btn btn--light btn--lg">Get My Free Audit <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
