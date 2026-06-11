import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | AI SEO, Ads & More | Getvisible.ai",
  description:
    "Explore Getvisible.ai services: AI SEO and SEO automation, search engine marketing, social media, email marketing, web development, and app development.",
  alternates: { canonical: "https://getvisible.ai/services" },
  openGraph: {
    title: "Digital Marketing Services | Getvisible.ai",
    description: "An integrated suite where each service amplifies the next.",
    url: "https://getvisible.ai/services",
    siteName: "Getvisible.ai",
    type: "website",
  },
};

const services = [
  { num: "01", title: "AI SEO & SEO Automation", desc: "Rank faster with intelligent, data-powered search optimization that compounds month over month. We use Python automation and LLM-aware strategy to scale technical SEO, content, and visibility tracking." },
  { num: "02", title: "Search Engine Marketing", desc: "Pay-per-click campaigns on Google and Bing, engineered for maximum return on every rupee spent." },
  { num: "03", title: "Social Media Marketing", desc: "Build brand authority and engagement across LinkedIn, Instagram, Facebook, X, and YouTube." },
  { num: "04", title: "Email Marketing", desc: "Nurture leads and retain customers with personalized, automated email flows." },
  { num: "05", title: "Website Design & Development", desc: "Fast, SEO-ready websites built to convert on WordPress, Next.js, React, and more." },
  { num: "06", title: "App Development", desc: "Native and cross-platform mobile apps crafted for performance and user experience." },
];

export default function Services() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Every channel your business needs to grow online
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-3xl">
        An integrated suite of AI-powered services where each channel amplifies the next, from search
        visibility to paid campaigns to the website itself.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {services.map((s) => (
          <div key={s.num} className="rounded-2xl border border-gray-200 p-6">
            <div className="text-sm text-gray-400">{s.num}</div>
            <h2 className="text-2xl font-semibold mt-1">{s.title}</h2>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>

      <Link href="/contact" className="inline-block mt-10 rounded-full bg-black px-8 py-3 text-white font-medium">
        Get a free strategy session
      </Link>
    </main>
  );
}