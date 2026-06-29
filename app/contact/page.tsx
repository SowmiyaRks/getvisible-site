"use client";

import { useState } from "react";

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "3b0c2218-3573-47d5-a061-9c162c8f51e4");
    formData.append("subject", "New message from Klimbr contact page");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Thanks! We'll get back to you within 24 hours.");
        event.currentTarget.reset();
      } else {
        setResult("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setResult("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(160deg,#F5F3FF 0%,#FAF5FF 60%,#fff 100%)",
          borderBottom: "1px solid #EDE9FE",
          padding: "80px 32px 88px",
        }}
      >
        <div style={{ maxWidth: 660, margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              display: "inline-block",
              background: "#EDE9FE",
              color: "#7C3AED",
              fontSize: 12.5,
              fontWeight: 600,
              padding: "7px 18px",
              borderRadius: 100,
              border: "1px solid #C4B5FD",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </span>
          <h1
            style={{
              margin: "20px 0 0",
              fontSize: "clamp(32px,4.2vw,52px)",
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: "-0.025em",
              color: "#1E1B4B",
            }}
          >
            Let&apos;s talk about
            <span
              style={{
                background: "linear-gradient(135deg,#6366F1,#A855F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}
              your growth
            </span>
          </h1>
          <p
            style={{
              margin: "20px auto 0",
              fontSize: 18,
              lineHeight: 1.68,
              color: "#46566D",
              maxWidth: 580,
            }}
          >
            Tired of marketing that runs on guesswork? Tell us what
            you&apos;re working with, and we&apos;ll show you what the data
            says. No generic pitch decks, just a real look at where the
            opportunity is.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: "72px 32px 80px" }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 60,
            alignItems: "flex-start",
          }}
        >
          {/* LEFT: Contact Info */}
          <div style={{ flex: "0 0 300px", minWidth: 260 }}>
            <h2 style={{ fontSize: 19, fontWeight: 700, color: "#1E1B4B", marginBottom: 8 }}>
              Reach us directly
            </h2>
            <p style={{ fontSize: 14.5, color: "#9CA3AF", lineHeight: 1.6, marginBottom: 32 }}>
              We typically respond within 24 hours, sometimes much sooner.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {/* Email */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#EDE9FE",
                    border: "1px solid #C4B5FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 3 }}>
                    Email
                  </div>
                  <a href="mailto:klimbr.in@gmail.com" style={{ fontSize: 15, fontWeight: 500, color: "#6366F1" }}>
                    klimbr.in@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#EDE9FE",
                    border: "1px solid #C4B5FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.13 10.13a19.79 19.79 0 01-3.07-8.67A2 2 0 012.05 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 3 }}>
                    Phone
                  </div>
                  <a href="tel:+918098471678" style={{ fontSize: 15, fontWeight: 500, color: "#1E1B4B" }}>
                    +91 80984 71678
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#EDE9FE",
                    border: "1px solid #C4B5FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 3 }}>
                    Location
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: "#1E1B4B", lineHeight: 1.5 }}>
                    Chennai, Tamil Nadu, India
                  </div>
                  <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 2 }}>
                    Serving clients across India &amp; internationally
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "#EDE9FE",
                    border: "1px solid #C4B5FD",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600, color: "#9CA3AF", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 3 }}>
                    Response time
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: "#1E1B4B" }}>Within 24 hours</div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px solid #EDE9FE", margin: "36px 0" }} />

            <div style={{ background: "#EDE9FE", border: "1px solid #C4B5FD", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#7C3AED", marginBottom: 6 }}>
                No hard sell. Ever.
              </div>
              <p style={{ fontSize: 13, color: "#46566D", lineHeight: 1.6 }}>
                We start by understanding your data, not pushing a package.
                If we&apos;re not the right fit, we&apos;ll tell you that
                too.
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div style={{ flex: "1 1 420px", minWidth: 300 }}>
            <div
              style={{
                background: "#fff",
                border: "1px solid #EDE9FE",
                borderRadius: 20,
                padding: 40,
                boxShadow: "0 24px 56px -24px rgba(99,102,241,0.18)",
              }}
            >
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "#1E1B4B", marginBottom: 4 }}>
                Send us a message
              </h2>
              <p style={{ fontSize: 14, color: "#9CA3AF", marginBottom: 28 }}>
                Fill in the details below and we&apos;ll be in touch.
              </p>

              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                  <div style={{ flex: "1 1 180px" }}>
                    <label style={labelStyle}>
                      Name <span style={{ color: "#A855F7" }}>*</span>
                    </label>
                    <input style={inputStyle} type="text" name="name" placeholder="Your full name" required />
                  </div>
                  <div style={{ flex: "1 1 180px" }}>
                    <label style={labelStyle}>
                      Email <span style={{ color: "#A855F7" }}>*</span>
                    </label>
                    <input style={inputStyle} type="email" name="email" placeholder="you@company.com" required />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Company / Website</label>
                  <input style={inputStyle} type="text" name="company" placeholder="yourcompany.com" />
                </div>

                <div>
                  <label style={labelStyle}>What do you need help with?</label>
                  <select style={inputStyle} name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service…
                    </option>
                    <option>SEO</option>
                    <option>Paid campaigns</option>
                    <option>Full-funnel strategy</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Tell us about your business</label>
                  <textarea
                    style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                    name="message"
                    placeholder="What are you working on? What's the challenge? The more context, the better."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 9,
                    background: "linear-gradient(135deg,#6366F1,#A855F7)",
                    color: "#fff",
                    border: "none",
                    borderRadius: 11,
                    fontSize: 15.5,
                    fontWeight: 600,
                    padding: "15px 32px",
                    cursor: submitting ? "default" : "pointer",
                    opacity: submitting ? 0.7 : 1,
                    width: "100%",
                    boxShadow: "0 4px 18px rgba(168,85,247,0.28)",
                  }}
                >
                  {submitting ? "Sending..." : "Let's talk"}
                  {!submitting && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  )}
                </button>

                {result && (
                  <p
                    style={{
                      fontSize: 13.5,
                      textAlign: "center",
                      color: result.startsWith("Thanks") ? "#16A34A" : "#DC2626",
                      fontWeight: 500,
                    }}
                  >
                    {result}
                  </p>
                )}

                <p style={{ fontSize: 12.5, color: "#9CA3AF", textAlign: "center", lineHeight: 1.5 }}>
                  By submitting, you agree that we&apos;ll use your info to
                  get back to you. No spam, promise.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY REACH OUT ── */}
      <section
        style={{
          background: "linear-gradient(160deg,#F5F3FF 0%,#FAF5FF 100%)",
          borderTop: "1px solid #EDE9FE",
          borderBottom: "1px solid #EDE9FE",
          padding: "64px 32px",
        }}
      >
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(22px,2.8vw,30px)", fontWeight: 700, color: "#1E1B4B", letterSpacing: "-0.02em" }}>
              Why reach out?
            </h2>
            <p style={{ fontSize: 15.5, color: "#9CA3AF", marginTop: 8 }}>
              Three things that are different about working with us.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
            {[
              {
                title: "No sales pitch",
                copy: "We start by understanding your data, not pushing a package. The first conversation is always about your situation.",
                icon: (
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                ),
              },
              {
                title: "Fast turnaround",
                copy: "You'll hear back within a day, not a week. We respect your time, and yours is probably already stretched thin.",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </>
                ),
              },
              {
                title: "Straight talk",
                copy: "If we're not the right fit, we'll tell you that too. No stringing along, no vague follow-ups, just honest conversation.",
                icon: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>,
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#fff",
                  border: "1px solid #E5E7EB",
                  borderRadius: 16,
                  padding: "28px 24px",
                  flex: "1 1 260px",
                  boxShadow: "0 1px 3px rgba(99,102,241,0.05)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "linear-gradient(135deg,#6366F1,#A855F7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {card.icon}
                  </svg>
                </div>
                <h3 style={{ fontSize: 16.5, fontWeight: 700, color: "#1E1B4B", marginBottom: 8 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 14.5, color: "#46566D", lineHeight: 1.65 }}>{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section style={{ background: "linear-gradient(135deg,#4338CA,#7E22CE)", padding: "56px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:klimbr.in@gmail.com"
              style={{ color: "#fff", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.4)", paddingBottom: 1 }}
            >
              klimbr.in@gmail.com
            </a>
          </p>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.45)", marginTop: 10 }}>
            Chennai, Tamil Nadu, India · +91 80984 71678
          </p>
        </div>
      </section>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13.5,
  fontWeight: 600,
  color: "#46566D",
  marginBottom: 7,
};

const inputStyle: React.CSSProperties = {
  fontFamily: "inherit",
  fontSize: 15,
  color: "#1E1B4B",
  background: "#fff",
  border: "1.5px solid #E5E7EB",
  borderRadius: 11,
  padding: "13px 16px",
  width: "100%",
  outline: "none",
};
