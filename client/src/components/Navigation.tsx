/**
 * Navigation — Editorial Prestige Style
 * ─────────────────────────────────────────────────────────────────────────────
 * Design: Deep charcoal (#14100C) bar with Montserrat wordmark.
 * Montserrat nav links. Budweiser red top accent line. Gold active state.
 * No nested anchor tags — Link renders its own <a>.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { AD_ZOMBIES_CONTACT_URL, adZombiesLinkProps } from "@/lib/adzombies";

// Primary nav stays short — individual commercials live in the
// portfolio card grid and each detail page's "related" links,
// not crammed into the top bar (that overflowed off-screen).
const navLinks = [
  { label: "Portfolio", path: "/#portfolio" },
  { label: "About", path: "/#about" },
  { label: "By Brand", path: "/#brands" },
];

// Full commercial list — used only in the mobile menu, where there's
// room to show every entry without breaking the layout.
const commercialLinks = [
  { label: "Budweiser '26 — American Icons", path: "/budweiser-american-icons" },
  { label: "State Farm '24 — Agent State Farm", path: "/state-farm-agent" },
  { label: "Etsy '24 — Thank You, France", path: "/etsy-thank-you-france" },
  { label: "Budweiser '22 — A Clydesdale's Journey", path: "/budweiser-clydesdales-journey" },
  { label: "Bubly '19 — Bublé vs. Bubly", path: "/bubly-buble" },
  { label: "T-Mobile '17 — #BagOfUnlimited", path: "/tmobile-bag-of-unlimited" },
  { label: "Budweiser '15 — Lost Dog", path: "/budweiser-lost-dog" },
  { label: "M&M's '12 — Just My Shell", path: "/mms-just-my-shell" },
  { label: "Volkswagen '11 — The Force", path: "/volkswagen-the-force" },
  { label: "Bud Light '10 — T-Pain Voice", path: "/bud-light-tpain" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navBg = scrolled ? "rgba(20,16,12,0.97)" : "#14100C";

  return (
    <>
      {/* ── Main Nav Bar ─────────────────────────────────────────────────── */}
      <nav
        style={{ backgroundColor: navBg, backdropFilter: scrolled ? "blur(8px)" : "none", transition: "background-color 0.3s ease" }}
        className="fixed top-0 left-0 right-0 z-50"
        aria-label="Main navigation"
      >
        {/* Budweiser red top accent line */}
        <div style={{ height: "3px", backgroundColor: "#C8102E" }} />

        <div className="container flex items-center justify-between" style={{ height: "56px" }}>
          {/* Wordmark — no nested <a> */}
          <Link
            href="/"
            style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}
          >
            <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: "1rem", fontWeight: 800, color: "#F8F5F0", letterSpacing: "0.01em", lineHeight: 1.1 }}>
              Ken <span style={{ color: "#C8102E" }}>"Spanky"</span> Moskowitz
            </span>
            <span style={{ fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8960C", marginTop: "3px" }}>
              Super Bowl Portfolio · 10 Commercials
            </span>
          </Link>

          {/* Desktop links — short, fixed set. Individual commercials are
              reached via the portfolio cards, not crammed in here. */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                style={{
                  fontFamily: "'Montserrat', system-ui, sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "#C8C0B4",
                  padding: "0 1rem",
                  height: "56px",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.15s ease",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#B8960C"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#C8C0B4"; }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={AD_ZOMBIES_CONTACT_URL}
              {...adZombiesLinkProps}
              style={{
                fontFamily: "'Montserrat', system-ui, sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                backgroundColor: "#C8102E",
                padding: "0.55rem 1.1rem",
                marginLeft: "0.75rem",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#A50D24"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = "#C8102E"; }}
            >
              Work with Spanky
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            style={{ color: "#F8F5F0", padding: "0.5rem", background: "none", border: "none" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Overlay ───────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col" style={{ backgroundColor: "#14100C", paddingTop: "59px" }}>
          <div style={{ height: "3px", backgroundColor: "#C8102E" }} />
          <div className="flex flex-col overflow-y-auto">
            <a
              href={AD_ZOMBIES_CONTACT_URL}
              {...adZombiesLinkProps}
              style={{
                fontFamily: "'Montserrat', system-ui, sans-serif",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                backgroundColor: "#C8102E",
                textAlign: "center",
                padding: "1rem 1.5rem",
                textDecoration: "none",
                display: "block",
              }}
            >
              Work with Spanky
            </a>
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Montserrat', system-ui, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#F8F5F0",
                  padding: "1rem 1.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ padding: "1.25rem 1.5rem 0.5rem", fontFamily: "'Montserrat', system-ui, sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8960C" }}>
              All Commercials
            </div>
            {commercialLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{
                    fontFamily: "'Montserrat', system-ui, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: isActive ? 700 : 400,
                    color: isActive ? "#B8960C" : "#C8C0B4",
                    padding: "0.65rem 1.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Spacer for fixed nav */}
      <div style={{ height: "59px" }} />
    </>
  );
}
