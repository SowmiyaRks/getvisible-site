import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Klimbr — AI-first marketing, built for measurable growth",
  description:
    "Klimbr pairs AI-driven insight with full-funnel execution so every rupee spent has a reason behind it. 6+ years of experience, 40+ clients served across India and internationally.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(ellipse 70% 90% at 98% 0%, rgba(107,60,247,0.13) 0%, transparent 58%), radial-gradient(ellipse 50% 55% at 0% 100%, rgba(167,139,250,0.1) 0%, transparent 55%), #ffffff",
        }}
      >
        {/* floating shapes */}
        <div
          style={{
            position: "absolute",
            top: "18%",
            left: "4%",
            width: 66,
            height: 66,
            borderRadius: 14,
            border: "1.5px solid rgba(180,160,240,0.45)",
            background: "rgba(255,255,255,0.65)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "42%",
            left: "2%",
            width: 42,
            height: 42,
            borderRadius: 10,
            border: "1.5px solid rgba(180,160,240,0.35)",
            background: "rgba(255,255,255,0.55)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "3%",
            width: 56,
            height: 56,
            borderRadius: 13,
            border: "1.5px solid rgba(170,150,230,0.45)",
            background: "rgba(255,255,255,0.5)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "18%",
            right: "5%",
            width: 40,
            height: 40,
            borderRadius: 9,
            border: "1.5px solid rgba(170,150,230,0.4)",
            background: "rgba(255,255,255,0.5)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 1140,
            margin: "0 auto",
            padding: "90px 32px 100px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "#EDE9FE",
              color: "#5B35D5",
              fontSize: 13,
              fontWeight: 600,
              padding: "7px 18px",
              borderRadius: 100,
              border: "1px solid #DDD6FE",
              letterSpacing: "0.06em",
            }}
          >
            About Us
          </span>
          <h1
            style={{
              margin: "22px 0 0",
              fontSize: "clamp(38px,5vw,62px)",
              lineHeight: 1.06,
              fontWeight: 800,
              letterSpacing: "-0.028em",
              color: "#1A1040",
              maxWidth: 820,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            AI-first marketing, built for
            <br />
            <span style={{ color: "#6B3CF7" }}>measurable growth</span>
          </h1>
          <p
            style={{
              margin: "26px auto 0",
              fontSize: 18,
              lineHeight: 1.72,
              color: "#3D3762",
              maxWidth: 600,
            }}
          >
            We started Klimbr to fix a simple frustration: too many marketing
            decisions get made on instinct instead of evidence. We pair
            AI-driven insight with full-funnel execution so every rupee spent
            has a reason behind it.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 40,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link
              href="#story"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "linear-gradient(135deg,#5B35D5 0%,#7C4FF8 100%)",
                color: "#fff",
                fontSize: 15,
                fontWeight: 600,
                padding: "15px 30px",
                borderRadius: 100,
                boxShadow: "0 6px 22px rgba(107,60,247,0.32)",
              }}
            >
              Our story
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                color: "#1A1040",
                fontSize: 15,
                fontWeight: 600,
                padding: "15px 30px",
                borderRadius: 100,
                border: "1.5px solid rgba(26,16,64,0.25)",
              }}
            >
              Work with us
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "#1A1040" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 32px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
            }}
          >
            {[
              { big: "6+", label: "Years of\nexperience" },
              { big: "40+", label: "Clients served\nglobally" },
              { big: "100%", label: "Data-backed\ndecisions" },
              { big: "India +\nInternational", label: "Client reach", small: true },
            ].map((stat, i) => (
              <div
                key={stat.big}
                style={{
                  padding: "48px 20px",
                  textAlign: "center",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : undefined,
                }}
              >
                <div
                  style={{
                    fontSize: stat.small ? "clamp(22px,2.8vw,34px)" : "clamp(32px,3.8vw,48px)",
                    fontWeight: 800,
                    color: "#A78BFA",
                    letterSpacing: stat.small ? "-0.02em" : "-0.025em",
                    lineHeight: stat.small ? 1.1 : 1,
                    paddingTop: stat.small ? 6 : 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {stat.big}
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    color: "#B8B0D8",
                    fontWeight: 500,
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" style={{ background: "#fff" }}>
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "90px 32px",
            display: "flex",
            flexWrap: "wrap",
            gap: 72,
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: "0 0 320px", minWidth: 240 }}>
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6B3CF7",
                marginBottom: 14,
              }}
            >
              Our story
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(28px,3.4vw,40px)",
                lineHeight: 1.15,
                fontWeight: 700,
                letterSpacing: "-0.022em",
                color: "#1A1040",
              }}
            >
              Created to solve a real problem.
            </h2>
            <div
              style={{
                marginTop: 30,
                width: 48,
                height: 4,
                background: "linear-gradient(90deg,#5B35D5,#9B6BFF)",
                borderRadius: 2,
              }}
            />
          </div>
          <div style={{ flex: "1 1 380px", minWidth: 300 }}>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: "#3D3762" }}>
              Klimbr was built on a simple frustration: too many marketing
              decisions get made on instinct instead of evidence. Campaigns
              launch because they &quot;feel right,&quot; budgets shift because
              someone has a hunch, and by the time the data comes in, the
              spend is already gone.
            </p>
            <p style={{ margin: "24px 0 0", fontSize: 17, lineHeight: 1.8, color: "#3D3762" }}>
              We started Klimbr to fix that gap — pairing AI-driven insight
              with full-funnel execution so every rupee spent has a reason
              behind it and every result can be traced back to a decision.
            </p>
            <p style={{ margin: "24px 0 0", fontSize: 17, lineHeight: 1.8, color: "#3D3762" }}>
              With 6+ years of hands-on experience and 40+ clients served
              across India and internationally, we&apos;ve learned that good
              marketing isn&apos;t about doing more — it&apos;s about doing
              the right things, in the right order, backed by the right
              data.
            </p>
            <div
              style={{
                marginTop: 40,
                padding: "28px 32px",
                background: "#F7F5FF",
                border: "1px solid #E4DCFC",
                borderRadius: 18,
                borderLeft: "4px solid #6B3CF7",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 600,
                  lineHeight: 1.55,
                  color: "#1A1040",
                  letterSpacing: "-0.01em",
                }}
              >
                &quot;Good marketing isn&apos;t about doing more — it&apos;s
                about doing the right things, in the right order, backed by
                the right data.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section style={{ background: "#1A1040" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "90px 32px" }}>
          <div
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#A78BFA",
              marginBottom: 22,
            }}
          >
            Our mission
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px,3.8vw,52px)",
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: "-0.026em",
              color: "#fff",
              maxWidth: 900,
            }}
          >
            We exist to make marketing
            <br />
            decisions defensible.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 56, marginTop: 48 }}>
            <div style={{ flex: "1 1 340px", minWidth: 280 }}>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: "#B8B0D8" }}>
                Not &quot;we think this will work,&quot; but &quot;here&apos;s
                the data that shows this will work, and here&apos;s how
                we&apos;ll know if it did.&quot; That shift — from opinion to
                evidence — is what separates marketing that scales from
                marketing that just spends.
              </p>
            </div>
            <div style={{ flex: "1 1 340px", minWidth: 280 }}>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: "#B8B0D8" }}>
                Every engagement starts with one question: what does the data
                actually say? We don&apos;t chase vanity metrics. We build
                toward outcomes that matter to your business — qualified
                leads, conversion rate, revenue impact, and growth you can
                point to and explain.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 52 }}>
            {["Qualified leads", "Conversion rate", "Revenue impact", "Explainable growth"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "rgba(167,139,250,0.12)",
                    border: "1px solid rgba(167,139,250,0.2)",
                    borderRadius: 100,
                    padding: "10px 18px",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span style={{ fontSize: 14, color: "#B8B0D8", fontWeight: 500 }}>{tag}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── WHY KLIMBR ── */}
      <section style={{ background: "#fff", borderTop: "1px solid #EDE8FC" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "90px 32px" }}>
          <div
            style={{
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#6B3CF7",
              marginBottom: 14,
            }}
          >
            Why Klimbr
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(28px,3.4vw,40px)",
              lineHeight: 1.15,
              fontWeight: 700,
              letterSpacing: "-0.022em",
              color: "#1A1040",
              maxWidth: 600,
            }}
          >
            What makes us different
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 24,
              marginTop: 48,
            }}
          >
            {[
              {
                icon: (
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                ),
                title: "AI-first approach",
                copy: "Every campaign starts with data, not assumptions. We use AI tools to analyze search behavior, audience intent, and competitive positioning before we write a single headline or set a single budget. Less guessing, more decisions you can stand behind.",
              },
              {
                icon: (
                  <>
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </>
                ),
                title: "Transparent reporting",
                copy: "No black-box metrics. We build real-time dashboards so you can see exactly what's working, what isn't, and why. If a campaign underperforms, you'll know within days — not at the end of a quarter.",
              },
              {
                icon: (
                  <>
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 010 7.75"></path>
                  </>
                ),
                title: "Experienced team",
                copy: "Six years in this industry has taught us what actually moves the needle vs. what just looks good in a slide deck. We've worked across B2B analytics platforms to healthcare SaaS — that range brings pattern recognition you can't shortcut.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  border: "1px solid #EDE8FC",
                  borderRadius: 18,
                  padding: "32px 28px",
                  background: "#fff",
                  boxShadow: "0 2px 12px rgba(107,60,247,0.06)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 13,
                    background: "#EDE9FE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 22,
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#6B3CF7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {card.icon}
                  </svg>
                </div>
                <h3
                  style={{
                    margin: "0 0 12px",
                    fontSize: 19,
                    fontWeight: 700,
                    color: "#1A1040",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {card.title}
                </h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.73, color: "#3D3762" }}>
                  {card.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section
        style={{
          background: "#F7F5FF",
          borderTop: "1px solid #EDE8FC",
          borderBottom: "1px solid #EDE8FC",
        }}
      >
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "90px 32px",
            display: "flex",
            flexWrap: "wrap",
            gap: 72,
            alignItems: "flex-start",
          }}
        >
          <div style={{ flex: "1 1 380px", minWidth: 300 }}>
            <div
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6B3CF7",
                marginBottom: 14,
              }}
            >
              How we work
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(28px,3.4vw,40px)",
                lineHeight: 1.15,
                fontWeight: 700,
                letterSpacing: "-0.022em",
                color: "#1A1040",
              }}
            >
              No packages.
              <br />
              No guesswork.
            </h2>
            <p style={{ margin: "24px 0 0", fontSize: 17, lineHeight: 1.8, color: "#3D3762" }}>
              We don&apos;t believe in one-size-fits-all packages. Every
              client gets a strategy built around their actual business
              model, their actual customers, and their actual goals.
            </p>
            <p style={{ margin: "20px 0 0", fontSize: 17, lineHeight: 1.8, color: "#3D3762" }}>
              For some, that means a heavy SEO and content push. For others,
              it&apos;s a tighter focus on paid acquisition and conversion
              rate optimization. We figure out what your business actually
              needs, and we build toward that — not toward whatever&apos;s
              trending in marketing this quarter.
            </p>
          </div>
          <div style={{ flex: "1 1 380px", minWidth: 300 }}>
            <div
              style={{
                background: "#fff",
                border: "1px solid #EDE8FC",
                borderRadius: 20,
                padding: 36,
                boxShadow: "0 4px 24px rgba(107,60,247,0.07)",
              }}
            >
              <div
                style={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#6B3CF7",
                  marginBottom: 28,
                }}
              >
                What stays constant
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  {
                    title: "Data-backed decisions",
                    copy: "Every recommendation traces back to what the data actually says — not what feels right.",
                  },
                  {
                    title: "Transparent reporting",
                    copy: "Real-time dashboards, never quarterly summaries that obscure what's actually happening.",
                  },
                  {
                    title: "Results in your business",
                    copy: "A relentless focus on outcomes that show up in your revenue — not just your dashboard.",
                  },
                ].map((item) => (
                  <div key={item.title} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                    <span
                      style={{
                        flex: "none",
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        background: "#EDE9FE",
                        border: "1px solid #DDD6FE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 1,
                      }}
                    >
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6B3CF7"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <div>
                      <div style={{ fontSize: 16, fontWeight: 600, color: "#1A1040", marginBottom: 5 }}>
                        {item.title}
                      </div>
                      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "#7878A0" }}>
                        {item.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        style={{ background: "#1A1040", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40%",
            right: "-15%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(107,60,247,0.22) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(167,139,250,0.14) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: 1140,
            margin: "0 auto",
            padding: "90px 32px",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              background: "rgba(167,139,250,0.15)",
              color: "#A78BFA",
              fontSize: 13,
              fontWeight: 600,
              padding: "7px 18px",
              borderRadius: 100,
              border: "1px solid rgba(167,139,250,0.25)",
              letterSpacing: "0.06em",
              marginBottom: 24,
            }}
          >
            Let&apos;s talk
          </span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px,4vw,54px)",
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: "-0.026em",
              color: "#fff",
              maxWidth: 720,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Let&apos;s build something that works
          </h2>
          <p
            style={{
              margin: "24px auto 0",
              fontSize: 18,
              lineHeight: 1.72,
              color: "#B8B0D8",
              maxWidth: 520,
            }}
          >
            If you&apos;re tired of marketing that runs on guesswork,
            we&apos;d like to talk. Whether you need a full-funnel overhaul
            or focused help in one area, we start with your data and go from
            there.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
              marginTop: 40,
            }}
          >
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: "linear-gradient(135deg,#5B35D5 0%,#7C4FF8 100%)",
                color: "#fff",
                fontSize: 15.5,
                fontWeight: 600,
                padding: "16px 32px",
                borderRadius: 100,
                boxShadow: "0 6px 24px rgba(107,60,247,0.4)",
              }}
            >
              Get in touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                color: "#fff",
                fontSize: 15.5,
                fontWeight: 600,
                padding: "16px 32px",
                borderRadius: 100,
                border: "1.5px solid rgba(255,255,255,0.2)",
              }}
            >
              View our work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
