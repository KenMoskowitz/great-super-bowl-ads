/**
 * CommercialPage — Editorial Prestige Template
 * ─────────────────────────────────────────────────────────────────────────────
 * Design: Variety/IMDb/Ad Age editorial style.
 *   - Full-bleed cinematic hero image (kept from original design)
 *   - Cream (#F8F5F0) background below the fold
 *   - Montserrat headlines and body/credits (all weights)
 *   - Budweiser red (#C8102E) used only for accent lines and labels
 *   - Muted gold (#B8960C) for Ken Moskowitz featured block border
 *   - Two-column credit rows (role | name) separated by 1px rules
 *   - No cards — full-width sections separated by 3px red rules
 * ─────────────────────────────────────────────────────────────────────────────
 */

import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { AD_ZOMBIES_URL, adZombiesLinkProps, linkifyAdZombies } from "@/lib/adzombies";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CreditRow {
  role: string;
  name: string;
  highlight?: boolean;
}

export interface CreditSection {
  title: string;
  subtitle?: string;
  credits: CreditRow[];
}

export interface CommercialPageProps {
  heroImage: string;
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  kenRole: string;
  kenDescription: string;
  kenAchievement?: string;
  youtubeId?: string;
  youtubeTitle: string;
  videoSrc?: string;
  duration?: string;
  airDate: string;
  superBowl: string;
  achievement?: string;
  overviewParagraphs: string[];
  creditSections: CreditSection[];
  relatedLinks?: { label: string; path: string }[];
  schemaVideoId?: string;
  schemaUploadDate?: string;
  schemaBreadcrumb?: string;
  schemaUrl?: string;
}

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  cream: "#F8F5F0",
  parchment: "#EDE9E1",
  charcoal: "#1A1A1A",
  ink: "#2C2C2C",
  slate: "#5A5A5A",
  rule: "#D4CFC7",
  red: "#C8102E",
  gold: "#B8960C",
  white: "#FFFFFF",
  navBg: "#14100C",
};

const font = "'Montserrat', system-ui, sans-serif";
const serif = font;
const sans = font;

// ─── Sub-components ───────────────────────────────────────────────────────────

function RedRule() {
  return <div style={{ width: "100%", height: "3px", backgroundColor: C.red }} />;
}

function ThinRule() {
  return <div style={{ width: "100%", height: "1px", backgroundColor: C.rule }} />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.red }}>
      {children}
    </span>
  );
}

function CreditRow({ role, name, highlight }: CreditRow) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          padding: "0.75rem 0",
          backgroundColor: highlight ? "#FFFDF8" : "transparent",
          paddingLeft: highlight ? "1rem" : "0",
          paddingRight: highlight ? "1rem" : "0",
          marginLeft: highlight ? "-1rem" : "0",
          marginRight: highlight ? "-1rem" : "0",
          borderLeft: highlight ? `3px solid ${C.gold}` : "none",
        }}
      >
        <span
          style={{
            fontFamily: sans,
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.slate,
            minWidth: "220px",
            flexShrink: 0,
            paddingRight: "1.5rem",
          }}
        >
          {role}
        </span>
        <span
          style={{
            fontFamily: highlight ? serif : sans,
            fontSize: highlight ? "1.05rem" : "0.95rem",
            fontWeight: highlight ? 700 : 400,
            color: highlight ? C.charcoal : C.ink,
            fontStyle: highlight ? "normal" : "normal",
          }}
        >
          {name}
        </span>
      </div>
      <ThinRule />
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function CommercialPage({
  heroImage,
  badge,
  title,
  subtitle,
  description,
  kenRole,
  kenDescription,
  kenAchievement,
  youtubeId,
  youtubeTitle,
  videoSrc,
  airDate,
  superBowl,
  achievement,
  overviewParagraphs,
  creditSections,
  relatedLinks,
  schemaVideoId,
  schemaUploadDate,
  schemaBreadcrumb,
  schemaUrl,
}: CommercialPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPoster, setShowPoster] = useState(true);

  const handlePlay = () => {
    setShowPoster(false);
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  // Inject VideoObject + BreadcrumbList schema
  useEffect(() => {
    if (!schemaVideoId) return;
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "VideoObject",
          "name": title,
          "description": description,
          "thumbnailUrl": `https://img.youtube.com/vi/${schemaVideoId}/maxresdefault.jpg`,
          "uploadDate": schemaUploadDate || "2024-01-01",
          "embedUrl": `https://www.youtube.com/embed/${schemaVideoId}`,
          "url": schemaUrl || "https://greatestsuperbowlads.com",
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://greatestsuperbowlads.com/" },
            { "@type": "ListItem", "position": 2, "name": schemaBreadcrumb || title, "item": schemaUrl || "https://greatestsuperbowlads.com" },
          ],
        },
      ],
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(schema);
    el.id = "commercial-schema";
    document.getElementById("commercial-schema")?.remove();
    document.head.appendChild(el);
  }, [schemaVideoId, title, description, schemaUploadDate, schemaUrl, schemaBreadcrumb]);

  return (
    <div style={{ backgroundColor: C.cream, minHeight: "100vh" }}>
      <Navigation />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "70vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.82) 100%)",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "3.5rem", paddingTop: "2rem" }}>
          {/* Badge */}
          <div style={{ marginBottom: "1rem" }}>
            <span style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8102E", backgroundColor: "rgba(255,255,255,0.95)", padding: "0.3rem 0.75rem", display: "inline-block" }}>
              {badge}
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: serif, fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "1rem", textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p style={{ fontFamily: sans, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8960C", marginBottom: "1rem" }}>
              {subtitle}
            </p>
          )}

          {/* Description */}
          <p style={{ fontFamily: sans, fontSize: "1.05rem", fontWeight: 300, color: "rgba(255,255,255,0.88)", maxWidth: "680px", lineHeight: 1.65 }}>
            {description}
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "2.5rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {[
              { label: "Air Date", value: airDate },
              { label: "Game", value: superBowl },
              ...(achievement ? [{ label: "Achievement", value: achievement }] : []),
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: sans, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8960C" }}>{stat.label}</div>
                <div style={{ fontFamily: serif, fontSize: "1rem", fontWeight: 600, color: "#FFFFFF", marginTop: "2px" }}>{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RedRule />

      {/* ── KEN MOSKOWITZ FEATURED BLOCK ─────────────────────────────────── */}
      <section style={{ backgroundColor: C.white }}>
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <SectionLabel>Featured Credit</SectionLabel>

          <div
            style={{
              borderLeft: `4px solid ${C.gold}`,
              paddingLeft: "2rem",
              marginTop: "1.25rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
            }}
          >
            <div>
              <div style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.slate, marginBottom: "0.4rem" }}>
                {kenRole}
              </div>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, color: C.charcoal, lineHeight: 1.1, marginBottom: "0.25rem" }}>
                Ken <em>"Spanky"</em> Moskowitz
              </h2>
              <div style={{ width: "48px", height: "2px", backgroundColor: C.red, marginBottom: "1.25rem" }} />
              <p style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 400, color: C.ink, lineHeight: 1.75, maxWidth: "700px" }}>
                {linkifyAdZombies(kenDescription)}
              </p>
              {kenAchievement && (
                <div style={{ marginTop: "1.25rem", padding: "0.9rem 1.25rem", backgroundColor: C.parchment, borderLeft: `3px solid ${C.red}` }}>
                  <p style={{ fontFamily: sans, fontSize: "0.85rem", fontWeight: 600, color: C.ink, lineHeight: 1.6, margin: 0 }}>
                    {kenAchievement}
                  </p>
                </div>
              )}

              {/* Ken's credentials */}
              <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["Founder, Ad Zombies", "Founder, Wedgie Creative", "Featured Keynote Speaker", "Fractional CMO", "Advertising Consultant"].map((cred) => {
                  const chipStyle = { fontFamily: sans, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: C.slate, border: `1px solid ${C.rule}`, padding: "0.25rem 0.6rem", backgroundColor: C.cream, textDecoration: "none" };
                  return cred === "Founder, Ad Zombies" ? (
                    <a key={cred} href={AD_ZOMBIES_URL} {...adZombiesLinkProps} style={chipStyle}>{cred}</a>
                  ) : (
                    <span key={cred} style={chipStyle}>{cred}</span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RedRule />

      {/* ── WATCH THE COMMERCIAL ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.parchment }}>
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <SectionLabel>Watch the Commercial</SectionLabel>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, color: C.charcoal, marginTop: "0.75rem", marginBottom: "1.5rem" }}>
            {title}
          </h2>

          {/* Native video player */}
          {videoSrc ? (
            <div style={{ position: "relative", backgroundColor: "#000", aspectRatio: "16/9", overflow: "hidden" }}>
              {/* Poster / click-to-play overlay */}
              {showPoster && (
                <div
                  onClick={handlePlay}
                  style={{
                    position: "absolute", inset: 0, zIndex: 2, cursor: "pointer",
                    background: "linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)",
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  {/* Play button */}
                  <div
                    style={{
                      width: "72px", height: "72px", borderRadius: "50%",
                      backgroundColor: C.red, display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 4px 24px rgba(200,16,46,0.5)",
                      transition: "transform 0.15s ease, box-shadow 0.15s ease",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1.08)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "scale(1)"; }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: sans, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
                    Play Commercial
                  </span>
                </div>
              )}
              <video
                ref={videoRef}
                controls={isPlaying}
                preload="none"
                style={{ width: "100%", height: "100%", display: "block", objectFit: "contain" }}
                onEnded={() => { setIsPlaying(false); setShowPoster(true); }}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : youtubeId ? (
            /* Fallback: YouTube embed if no native video */
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", backgroundColor: "#000" }}>
              <iframe
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                title={youtubeTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      </section>

      <RedRule />

      {/* ── OVERVIEW ─────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.white }}>
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <SectionLabel>About This Commercial</SectionLabel>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, color: C.charcoal, marginTop: "0.75rem", marginBottom: "1.5rem" }}>
            The Story Behind the Ad
          </h2>
          <div style={{ maxWidth: "780px" }}>
            {overviewParagraphs.map((para, i) => (
              <p key={i} style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 400, color: C.ink, lineHeight: 1.8, marginBottom: "1.25rem" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      <RedRule />

      {/* ── PRODUCTION CREDITS ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.cream }}>
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <SectionLabel>Complete Production Credits</SectionLabel>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, color: C.charcoal, marginTop: "0.75rem", marginBottom: "2rem" }}>
            Everyone Who Made It Happen
          </h2>

          {creditSections.map((section, si) => (
            <div key={si} style={{ marginBottom: "3rem" }}>
              {/* Section header */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.5rem" }}>
                <h3 style={{ fontFamily: serif, fontSize: "1.25rem", fontWeight: 700, color: C.charcoal }}>
                  {section.title}
                </h3>
                {section.subtitle && (
                  <span style={{ fontFamily: sans, fontSize: "0.75rem", fontWeight: 400, color: C.slate, fontStyle: "italic" }}>
                    {section.subtitle}
                  </span>
                )}
              </div>
              <div style={{ width: "32px", height: "2px", backgroundColor: C.red, marginBottom: "1rem" }} />

              {/* Credit rows */}
              <div>
                <ThinRule />
                {section.credits.map((credit, ci) => (
                  <CreditRow key={ci} {...credit} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <RedRule />

      {/* ── RELATED COMMERCIALS ──────────────────────────────────────────── */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section style={{ backgroundColor: C.navBg }}>
          <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <SectionLabel>More from Ken's Portfolio</SectionLabel>
            <h2 style={{ fontFamily: serif, fontSize: "1.5rem", fontWeight: 700, color: "#F8F5F0", marginTop: "0.75rem", marginBottom: "1.5rem" }}>
              Explore All 10 Super Bowl Commercials
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.5rem" }}>
              {relatedLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  style={{
                    fontFamily: sans,
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#C8C0B4",
                    padding: "0.75rem 1rem",
                    borderLeft: `2px solid ${C.red}`,
                    backgroundColor: "rgba(255,255,255,0.04)",
                    textDecoration: "none",
                    display: "block",
                    transition: "color 0.15s ease, background-color 0.15s ease",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#0D0A08", borderTop: `3px solid ${C.red}` }}>
        <div className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <div>
            <div style={{ fontFamily: serif, fontSize: "1rem", fontWeight: 700, color: "#F8F5F0" }}>
              Ken <span style={{ color: C.red }}>"Spanky"</span> Moskowitz
            </div>
            <div style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 400, color: "#7A7268", marginTop: "4px" }}>
              Founder, <a href={AD_ZOMBIES_URL} {...adZombiesLinkProps} style={{ color: "inherit" }}>Ad Zombies</a> · Founder, Wedgie Creative · Fractional CMO · Keynote Speaker
            </div>
          </div>
          <div style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 400, color: "#5A5248", textAlign: "right" }}>
            <div>10 Super Bowl Commercials · 2010–2026</div>
            <div style={{ marginTop: "2px" }}>greatestsuperbowlads.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
