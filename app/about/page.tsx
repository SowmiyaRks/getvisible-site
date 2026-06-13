import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Klimbr | AI-Powered SEO Agency",
  description: "Klimbr is a practitioner-led digital marketing agency combining AI, automation, and 6+ years of SEO expertise.",
};

export default function About() {
  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <h1>Built by practitioners, not just strategists</h1>
        <p className="lead" style={{ marginTop: 20 }}>Coming soon — full about page.</p>
        <Link href="/" className="btn btn-ghost" style={{ marginTop: 28 }}>Back to home</Link>
      </div>
    </main>
  );
}