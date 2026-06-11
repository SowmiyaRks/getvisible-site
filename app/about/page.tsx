import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Getvisible.ai | Practitioner-Led AI SEO Agency",
  description:
    "Getvisible.ai is a practitioner-led digital marketing agency combining AI, automation, and 6+ years of SEO expertise to grow businesses across India and beyond.",
  alternates: { canonical: "https://getvisible.ai/about" },
  openGraph: {
    title: "About Getvisible.ai | Practitioner-Led AI SEO Agency",
    description: "AI-first digital marketing, built by practitioners who ship the work themselves.",
    url: "https://getvisible.ai/about",
    siteName: "Getvisible.ai",
    type: "website",
  },
};

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Built by practitioners, not just strategists
      </h1>
      <p className="mt-6 text-lg text-gray-600">
        Getvisible.ai is a digital marketing agency built for the age of AI. We combine over six years
        of hands-on SEO expertise with intelligent automation to help businesses rank higher, generate
        quality leads, and grow online, across India and international markets.
      </p>

      <section className="py-12">
        <h2 className="text-3xl font-bold">Our approach</h2>
        <p className="mt-4 text-gray-600">
          We do not just advise. We build the systems, write the automation, and ship the work ourselves.
          Every strategy is grounded in real data, every decision is measurable, and every campaign is
          designed to compound over time.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold">What makes us different</h2>
        <ul className="mt-6 space-y-3 text-gray-700">
          <li>AI-first methods applied across SEO, content, and paid media.</li>
          <li>Python automation pipelines that scale work beyond manual limits.</li>
          <li>Transparent, real-time reporting with no black boxes.</li>
          <li>Proven results across healthcare, real estate, B2B SaaS, and more.</li>
        </ul>
      </section>

      <Link href="/contact" className="inline-block mt-6 rounded-full bg-black px-8 py-3 text-white font-medium">
        Work with us
      </Link>
    </main>
  );
}