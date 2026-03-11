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

const navLinks = [
  { label: "Portfolio", path: "/" },
  { label: "Budweiser '26", path: "/budweiser-american-icons" },
  { label: "State Farm '24", path: "/state-farm-agent" },
  { label: "Etsy '24", path: "/etsy-thank-you-france" },
  { label: "Budweiser '22", path: "/budweiser-clydesdales-journey" },
  { label: "Bubly '19", path: "/bubly-buble" },
  { label: "T-Mobile '17", path: "/tmobile-bag-of-unlimited" },
  { label: "Budweiser '15", path: "/budweiser-lost-dog" },
  { label: "M&M's '12", path: "/mms-just-my-shell" },
  { label: "VW '11", path: "/volkswagen-the-force" },
  { label: "Bud Light '10", path: "/bud-light-tpain" },
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

          {/* Desktop links */}
          <div className="hidden lg:flex items-center" style={{ overflowX: "auto", scrollbarWidth: "none" }}>
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{
                    fontFamily: "'Montserrat', system-ui, sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: isActive ? "#B8960C" : "#C8C0B4",
                    padding: "0 0.65rem",
                    height: "56px",
                    display: "flex",
                    alignItems: "center",
                    borderBottom: isActive ? "3px solid #C8102E" : "3px solid transparent",
                    transition: "color 0.15s ease, border-color 0.15s ease",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
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
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{
                    fontFamily: "'Montserrat', system-ui, sans-serif",
                    fontSize: "1.1rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#B8960C" : "#F8F5F0",
                    padding: "1rem 1.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
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
