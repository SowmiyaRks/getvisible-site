"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const SERVICES: [string, string, string][] = [
  ["/services/ai-seo", "AI SEO & Automation", "Rank faster, organically"],
  ["/services/sem", "Search Engine Marketing", "Top of Google, today"],
  ["/services/smm", "Social Media Marketing", "Build brand & community"],
  ["/services/email", "Email Marketing", "Revenue on autopilot"],
  ["/services/web", "Website Design & Dev", "Sites built to convert"],
  ["/services/app", "App Development", "iOS & Android"],
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => pathname === href;
  const isService = pathname?.startsWith("/services");

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <span className="brand-dot" />
          Klimbr
        </Link>

        <nav className="nav-links">
          <Link href="/" className={isActive("/") ? "active" : ""}>Home</Link>
          <Link href="/about" className={isActive("/about") ? "active" : ""}>About</Link>
          <div className="has-drop">
            <Link href="/services" className={isActive("/services") || isService ? "active" : ""}>
              Services ▾
            </Link>
            <div className="drop">
              {SERVICES.map(([href, t, s]) => (
                <Link key={href} href={href}>
                  <strong>{t}</strong>
                  <span>{s}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
        </nav>

        <div className="nav-cta">
          <Link href="/contact" className="btn btn-primary">Free Audit</Link>
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(false)}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        {SERVICES.map(([href, t]) => (
          <Link key={href} href={href} className="m-sub">— {t}</Link>
        ))}
        <Link href="/contact">Contact</Link>
        <Link href="/contact" className="btn btn-primary">Get a Free Audit</Link>
      </div>
    </header>
  );
}
