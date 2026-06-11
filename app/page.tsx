import Link from "next/link";
import type { Metadata } from "next";

// ===== SEO METADATA (this is how meta tags work in Next.js) =====
export const metadata: Metadata = {
  title: "AI-Powered Digital Marketing Agency | Getvisible.ai",
  description:
    "Getvisible.ai helps businesses across India and beyond rank higher, generate quality leads, and grow online using AI SEO automation, paid ads, and full-stack digital execution.",
  alternates: {
    canonical: "https://getvisible.ai/",
  },
  openGraph: {
    title: "AI-Powered Digital Marketing Agency | Getvisible.ai",
    description:
      "Grow faster with AI-driven SEO automation, data-led strategy, and full-funnel digital marketing.",
    url: "https://getvisible.ai/",
    siteName: "Getvisible.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Digital Marketing Agency | Getvisible.ai",
    description:
      "Grow faster with AI-driven SEO automation, data-led strategy, and full-funnel digital marketing.",
  },
};

const stats = [
  { value: "360°", label: "Full-funnel coverage" },
  { value: "6", label: "Marketing channels" },
  { value: "6+", label: "Years of expertise" },
  { value: "24/7", label: "AI systems working" },
];

const services = [
  { num: "01", icon: "🔍", title: "AI SEO & SEO Automation", desc: "Rank faster with intelligent, data-powered search optimization that compounds month over month." },
  { num: "02", icon: "🎯", title: "Search Engine Marketing", desc: "Pay-per-click campaigns on Google and Bing, engineered for maximum return on every rupee spent." },
  { num: "03", icon: "💬", title: "Social Media Marketing", desc: "Build brand authority and engagement across LinkedIn, Instagram, Facebook, X, and YouTube." },
  { num: "04", icon: "✉️", title: "Email Marketing", desc: "Nurture leads and retain customers with personalized, automated email flows." },
  { num: "05", icon: "🖥️", title: "Website Design & Development", desc: "Fast, SEO-ready websites built to convert on WordPress, Next.js, React, and more." },
  { num: "06", icon: "📱", title: "App Development", desc: "Native and cross-platform mobile apps crafted for performance and user experience." },
];

const whyUs = [
  "AI-first approach to every campaign and strategy.",
  "Full-funnel solutions from awareness to conversion.",
  "Transparent reporting with real-time dashboards.",
  "Experienced team with proven results across industries.",
  "Serving clients across India and internationally.",
];

const industries = ["Healthcare", "Real Estate", "B2B SaaS", "Education", "E-commerce", "Professional Services", "Technology Startups", "Retail"];

const results = [
  { value: "36×", label: "Avg. ROI from email channel" },
  { value: "92%", label: "Client retention rate" },
  { value: "100s", label: "Pages optimized in parallel" },
  { value: "∞", label: "Compounding monthly returns" },
];

const testimonials = [
  { quote: "Our leads doubled in four months. Getvisible.ai's AI SEO strategy transformed how buyers find our projects online.", name: "Rajesh Kumar", role: "Managing Director, Real Estate Developer" },
  { quote: "Cost per lead dropped 40 percent. Their Meta Ads targeting is sharper than any agency we have worked with before.", name: "Suresh Narayanan", role: "Head of Marketing, Real Estate Group" },
  { quote: "We went from page three to page one in six months. Getvisible.ai delivered exactly what they promised.", name: "Priya Venkatesh", role: "VP Marketing, IT Services Company" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 text-gray-900">
      {/* ===== HERO (one H1 only) ===== */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Grow Faster with AI-Powered Digital Marketing
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Getvisible.ai helps businesses across India and beyond rank higher, generate quality leads,
          and build a dominant online presence using intelligent automation, data-driven strategy,
          and full-stack digital execution.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link href="/contact" className="rounded-full bg-black px-6 py-3 text-white font-medium">
            Get a Free Strategy Session
          </Link>
          <Link href="/services" className="rounded-full border border-gray-300 px-6 py-3 font-medium">
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-y border-gray-200">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-sm text-gray-500 mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section className="py-16">
        <h2 className="text-3xl font-bold">Your growth partner, built for the age of AI</h2>
        <p className="mt-4 text-gray-600 max-w-3xl">
          We combine cutting-edge artificial intelligence with proven digital marketing expertise to
          deliver measurable results for every client, from AI-driven SEO automation to high-converting
          ad campaigns. Whether you are a startup chasing your first 1,000 customers or an established
          brand ready to scale, our 360-degree approach ensures no opportunity is missed.
        </p>
        <Link href="/about" className="inline-block mt-4 font-medium underline">Learn about us</Link>
      </section>

      {/* ===== CORE SERVICES ===== */}
      <section className="py-16">
        <h2 className="text-3xl font-bold">Every channel your business needs to grow online</h2>
        <p className="mt-4 text-gray-600">An integrated suite where each service amplifies the next.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((s) => (
            <Link key={s.num} href="/services" className="block rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="text-3xl">{s.icon}</div>
              <div className="text-sm text-gray-400 mt-2">{s.num}</div>
              <h3 className="text-xl font-semibold mt-1">{s.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-16">
        <h2 className="text-3xl font-bold">Built different, by design</h2>
        <ul className="mt-6 space-y-3">
          {whyUs.map((point) => (
            <li key={point} className="flex gap-3"><span>✅</span><span className="text-gray-700">{point}</span></li>
          ))}
        </ul>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="py-16">
        <h2 className="text-3xl font-bold">Industries we serve</h2>
        <p className="mt-4 text-gray-600">Our AI-powered strategies adapt to your market, audience, and growth goals.</p>
        <div className="flex flex-wrap gap-3 mt-6">
          {industries.map((i) => (
            <span key={i} className="rounded-full bg-gray-100 px-4 py-2 text-sm">{i}</span>
          ))}
        </div>
      </section>

      {/* ===== RESULTS ===== */}
      <section className="py-16 border-y border-gray-200">
        <h2 className="text-3xl font-bold">Trusted by growing businesses</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {results.map((r) => (
            <div key={r.label} className="text-center">
              <div className="text-3xl font-bold">{r.value}</div>
              <div className="text-sm text-gray-500 mt-1">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-16">
        <h2 className="text-3xl font-bold">Results our clients can measure</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border border-gray-200 p-6">
              <p className="text-gray-700">{t.quote}</p>
              <footer className="mt-4 text-sm font-semibold">{t.name}<span className="block font-normal text-gray-500">{t.role}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Book your free digital audit today</h2>
        <p className="mt-4 text-gray-600">Discover exactly where your business stands and what it will take to dominate your market online.</p>
        <Link href="/contact" className="inline-block mt-6 rounded-full bg-black px-8 py-3 text-white font-medium">Get My Free Audit</Link>
      </section>
    </main>
  );
}