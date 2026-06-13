import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Klimbr | Book a Free Digital Audit",
  description: "Get in touch with Klimbr for a free digital audit. Discover where your business stands.",
};

export default function Contact() {
  return (
    <main className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <h1>Book your free digital audit</h1>
        <p className="lead" style={{ marginTop: 20 }}>
          Discover exactly where your business stands and what it will take to dominate your market online.
        </p>
        <section style={{ marginTop: 40 }}>
          <h2>Get in touch</h2>
          <p style={{ marginTop: 12 }}>Email: <a href="mailto:connect@klimbr.in" style={{ color: "var(--accent)" }}>connect@klimbr.in</a></p>
          <p style={{ marginTop: 8 }}>Based in Chennai, India. Serving clients worldwide.</p>
        </section>
        <Link href="/" className="btn btn-primary" style={{ marginTop: 32, display: "inline-block" }}>Back to home</Link>
      </div>
    </main>
  );
}