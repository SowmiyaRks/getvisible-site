import Link from "next/link";

const SERVICES: [string, string][] = [
  ["/services/ai-seo", "AI SEO & Automation"],
  ["/services/sem", "Search Engine Marketing"],
  ["/services/smm", "Social Media Marketing"],
  ["/services/email", "Email Marketing"],
  ["/services/web", "Website Design & Dev"],
  ["/services/app", "App Development"],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <Link href="/" className="brand">
              <span className="brand-dot" />
              Klimbr
            </Link>
            <p className="footer-blurb">
              An AI-powered digital marketing &amp; SEO automation agency. We help businesses rank
              higher, generate quality leads, and build a dominant online presence.
            </p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              {SERVICES.slice(0, 3).map(([h, t]) => (
                <li key={h}><Link href={h}>{t}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>More services</h5>
            <ul>
              {SERVICES.slice(3).map(([h, t]) => (
                <li key={h}><Link href={h}>{t}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About us</Link></li>
              <li><Link href="/services">All services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="mailto:connect@klimbr.in">connect@klimbr.in</a></li>
              <li style={{ color: "#9aa0b5" }}>Jeer Lane, Saidapet,<br />600015, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Klimbr — All rights reserved.</span>
          <span className="links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <a href="https://www.klimbr.in">www.klimbr.in</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
