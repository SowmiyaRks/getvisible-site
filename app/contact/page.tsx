import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Getvisible.ai | Book a Free Digital Audit",
  description:
    "Get in touch with Getvisible.ai for a free digital audit. Discover where your business stands and what it will take to dominate your market online.",
  alternates: { canonical: "https://getvisible.ai/contact" },
  openGraph: {
    title: "Contact Getvisible.ai | Book a Free Digital Audit",
    description: "Book your free digital audit today.",
    url: "https://getvisible.ai/contact",
    siteName: "Getvisible.ai",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Book your free digital audit
      </h1>
      <p className="mt-6 text-lg text-gray-600">
        Discover exactly where your business stands and what it will take to dominate your market online.
        Reach out and we will get back to you within one business day.
      </p>

      <section className="py-12 space-y-4">
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <p className="text-gray-700">Email: <a href="mailto:hello@getvisible.ai" className="underline">hello@getvisible.ai</a></p>
        <p className="text-gray-700">Based in Chennai, India. Serving clients worldwide.</p>
      </section>
    </main>
  );
}