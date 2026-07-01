/**
 * IndexHome — Portfolio Index Page
 * Design: Editorial prestige — Variety/Ad Age/IMDb style.
 * Cream background, Montserrat, Budweiser red accents, no cards.
 */

import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { useEffect } from "react";
import { AD_ZOMBIES_URL, adZombiesLinkProps } from "@/lib/adzombies";

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

const mono = "'Montserrat', system-ui, sans-serif";
const serif = mono; // All fonts use Montserrat
const sans = mono;

const commercials = [
  { year: "2026", brand: "Budweiser", title: "American Icons", tagline: "The Clydesdale and the Eagle — A Story of American Resilience", kenRole: "Writer", superBowl: "Super Bowl LX", achievement: "10th Super Bowl", path: "/budweiser-american-icons", youtubeId: "a_mh-v02-Tw" },
  { year: "2024", brand: "State Farm", title: "Agent State Farm", tagline: 'Arnold can\'t say "neighbor." Danny DeVito saves the day.', kenRole: "Contributing Writer", superBowl: "Super Bowl LVIII", achievement: "#1 USA Today Ad Meter", path: "/state-farm-agent", youtubeId: "86DNiIg3Lyk" },
  { year: "2024", brand: "Etsy", title: "Thank You, France", tagline: "America thanks France for the Statue of Liberty — with cheese.", kenRole: "Creative Writing Consultant", superBowl: "Super Bowl LVIII", achievement: "Viral Sensation", path: "/etsy-thank-you-france", youtubeId: "cXT8JgdvCHc" },
  { year: "2022", brand: "Budweiser", title: "A Clydesdale's Journey", tagline: "An injured Clydesdale finds friendship and the will to recover.", kenRole: "Lead Writer", superBowl: "Super Bowl LVI", achievement: "Top 5 Ad Meter", path: "/budweiser-clydesdales-journey", youtubeId: "H3WRqDrA0cY" },
  { year: "2019", brand: "Bubly", title: "Bublé vs. Bubly", tagline: 'Singer Michael Bublé insists on pronouncing Bubly as "Bublé."', kenRole: "Contributing Writer", superBowl: "Super Bowl LIII", achievement: "Top 10 Ad Meter", path: "/bubly-buble", youtubeId: "rrk6QQfAZpc" },
  { year: "2017", brand: "T-Mobile", title: "#BagOfUnlimited", tagline: "Martha Stewart and Snoop Dogg explain unlimited data with cannabis puns.", kenRole: "Lead Writer", superBowl: "Super Bowl LI", achievement: "Most Shared 2017", path: "/tmobile-bag-of-unlimited", youtubeId: "eVdGG_MYXpY" },
  { year: "2015", brand: "Budweiser", title: "Lost Dog", tagline: "A little yellow Labrador gets lost and finds his way home.", kenRole: "Contributing Writer", superBowl: "Super Bowl XLIX", achievement: "#1 Ad Meter 2015", path: "/budweiser-lost-dog", youtubeId: "Tu10xwlwWEk" },
  { year: "2012", brand: "M&M's", title: "Just My Shell", tagline: 'A brown M&M is mistaken for naked. Red tears off his shell to "Sexy and I Know It."', kenRole: "Contributing Writer", superBowl: "Super Bowl XLVI", achievement: "Top 5 Ad Meter", path: "/mms-just-my-shell", youtubeId: "Azs1lbG2eOU" },
  { year: "2011", brand: "Volkswagen", title: "The Force", tagline: "A kid in a Darth Vader costume tries the Force — and succeeds.", kenRole: "Contributing Writer", superBowl: "Super Bowl XLV", achievement: "#9 YouTube Top 10 2011", path: "/volkswagen-the-force", youtubeId: "u48RXO2HzXo" },
  { year: "2010", brand: "Bud Light", title: "T-Pain Voice", tagline: "Men who hear about a Bud Light party talk like T-Pain. Then T-Pain shows up.", kenRole: "Lead Writer", superBowl: "Super Bowl XLIV", achievement: "Most Memorable 2010", path: "/bud-light-tpain", youtubeId: "bDhjcP02GQg" },
];

function RedRule() {
  return <div style={{ width: "100%", height: "3px", backgroundColor: C.red }} />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.red }}>
      {children}
    </span>
  );
}

const FIRST_YEAR = 2010;
const currentYear = new Date().getFullYear();
const yearSpan = currentYear - FIRST_YEAR;
const yearRange = `${FIRST_YEAR}–${currentYear}`;

export default function IndexHome() {
  useEffect(() => {
    document.title = `Ken "Spanky" Moskowitz — Super Bowl Portfolio | 10 Iconic Commercials (${yearRange})`;
  }, []);

  return (
    <div style={{ backgroundColor: C.cream, minHeight: "100vh" }}>
      <Navigation />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "80vh",
          display: "flex",
          alignItems: "flex-end",
          backgroundImage: "url(https://private-us-east-1.manuscdn.com/sessionFile/74D4rY78UoLus5hZrYfUHa/sandbox/g4IWIO5CX5FRx9WYV1PQ8g-img-1_1770611755000_na1fn_aGVyby1tb250YWdlLXN1cGVyYm93bC1hZHM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvNzRENHJZNzhVb0x1czVoWnJZZlVIYS9zYW5kYm94L2c0SVdJTzVDWDVGUng5V1lWMVBROGctaW1nLTFfMTc3MDYxMTc1NTAwMF9uYTFmbl9hR1Z5YnkxdGIyNTBZV2RsTFhOMWNHVnlZbTkzYkMxaFpITS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V-M9cRytr518LSBpmb~ZwGii91zHUYQkWYNiHE3gHTS7Cm52FghVaWVKf5KNjvN8dlnwCgjoOcrSPLY7F0~jWoA5UQEnfqG9ipeDTis85~IytsBwT3V9EVlch0qhmLRmDYU-L-Zw873PC1UjSrEkrYJcVZ3fF7dD7WNTU9IQxz3T3Qc7eOlM-G70Ds4PmTCFrKn2RaMg4lCdOrHAP4nu6i7ifS4UHIPhgCHoR~DSnfmTFUt9dTHM7nzQI7XGU~kMvGYqq9QGAK9I0qa8EmVYmhwMp15MEneYFvBzxlJb5bhERZZztwQz8scosv2CTiln-l05dEnOi-NIQ43uXIB34A__)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.88) 100%)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "4rem", paddingTop: "2rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span style={{ fontFamily: sans, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: C.red, backgroundColor: "rgba(255,255,255,0.95)", padding: "0.3rem 0.75rem", display: "inline-block" }}>
              Official Production Credits Portfolio
            </span>
          </div>

          <h1 style={{ fontFamily: serif, fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.0, marginBottom: "0.5rem", textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}>
            Ken <span style={{ color: C.red }}>"Spanky"</span>
            <br />
            Moskowitz
          </h1>
          <div style={{ width: "80px", height: "3px", backgroundColor: C.red, marginBottom: "1.25rem" }} />

          <p style={{ fontFamily: sans, fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", fontWeight: 400, color: "rgba(255,255,255,0.92)", maxWidth: "600px", lineHeight: 1.7, marginBottom: "2rem" }}>
            Ten iconic Super Bowl commercials spanning {yearSpan} years — Budweiser, State Farm, Etsy, Volkswagen, M&M's, T-Mobile, Bubly, and Bud Light. Writer, Contributing Writer, and Creative Writing Consultant on some of the most-watched ads in Super Bowl history.
          </p>

          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            {[
              { num: "10", label: "Super Bowl Commercials" },
              { num: `${yearSpan}`, label: `Years (${yearRange})` },
              { num: "3×", label: "Ad Meter Top Wins" },
              { num: "8", label: "Iconic Brands" },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ fontFamily: serif, fontSize: "2rem", fontWeight: 900, color: "#FFFFFF", lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontFamily: sans, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.gold, marginTop: "4px" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RedRule />

      {/* ── KEN BIO ───────────────────────────────────────────────────────── */}
      <section id="about" style={{ backgroundColor: C.white, scrollMarginTop: "59px" }}>
        <div className="container" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <SectionLabel>About the Writer</SectionLabel>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 900, color: C.charcoal, marginTop: "0.75rem", marginBottom: "0.25rem", lineHeight: 1.1 }}>
            The Man Behind the Words
          </h2>
          <div style={{ width: "48px", height: "2px", backgroundColor: C.red, marginBottom: "1.5rem" }} />

          <div style={{ borderLeft: `4px solid ${C.gold}`, paddingLeft: "1.75rem", maxWidth: "820px" }}>
            <p style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 400, color: C.ink, lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Ken <strong>"Spanky" Moskowitz</strong> is one of advertising's most prolific Super Bowl contributors — with 10 iconic commercials spanning {yearSpan} years. As <strong>Founder of <a href={AD_ZOMBIES_URL} {...adZombiesLinkProps} style={{ color: "inherit" }}>Ad Zombies</a></strong> and <strong>Founder of Wedgie Creative</strong>, Ken has built a reputation for crafting advertising narratives that don't just sell products — they become cultural moments.
            </p>
            <p style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 400, color: C.ink, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              A <strong>Featured Keynote Speaker</strong>, <strong>Fractional CMO</strong> for several companies, and <strong>Advertising Consultant</strong> for some of the world's biggest brands, Ken brings a rare combination of creative brilliance and strategic business acumen to every project he touches.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Founder, Ad Zombies", "Founder, Wedgie Creative", "Featured Keynote Speaker", "Fractional CMO", "Advertising Consultant"].map((cred) => {
                const chipStyle = { fontFamily: sans, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: C.slate, border: `1px solid ${C.rule}`, padding: "0.3rem 0.65rem", backgroundColor: C.cream, textDecoration: "none" };
                return cred === "Founder, Ad Zombies" ? (
                  <a key={cred} href={AD_ZOMBIES_URL} {...adZombiesLinkProps} style={chipStyle}>{cred}</a>
                ) : (
                  <span key={cred} style={chipStyle}>{cred}</span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <RedRule />

      {/* ── COMMERCIAL PORTFOLIO GRID ────────────────────────────────────── */}
      <section id="portfolio" style={{ backgroundColor: C.cream, scrollMarginTop: "59px" }}>
        <div className="container" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <SectionLabel>Complete Portfolio</SectionLabel>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 900, color: C.charcoal, marginTop: "0.75rem", marginBottom: "0.5rem", lineHeight: 1.1 }}>
            10 Super Bowl Commercials
          </h2>
          <p style={{ fontFamily: sans, fontSize: "0.9rem", fontWeight: 400, color: C.slate, marginBottom: "2.5rem", fontStyle: "italic" }}>
            2010 – 2026 · Click any commercial to view complete production credits
          </p>

          {/* Card grid — one card per commercial, thumbnail-first so the
              portfolio reads as a video showcase instead of a data table. */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.75rem" }}>
            {commercials.map((c, i) => (
              <Link key={c.path} href={c.path} style={{ textDecoration: "none", display: "block" }}>
                <div
                  className="fade-up"
                  style={{
                    backgroundColor: C.white,
                    border: `1px solid ${C.rule}`,
                    borderTop: `3px solid ${i % 2 === 0 ? C.red : C.gold}`,
                    cursor: "pointer",
                    transition: "transform 0.15s ease, box-shadow 0.15s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden", backgroundColor: C.charcoal }}>
                    <img
                      src={`https://img.youtube.com/vi/${c.youtubeId}/hqdefault.jpg`}
                      alt={`${c.brand} — ${c.title} thumbnail`}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span style={{ position: "absolute", top: "0.6rem", left: "0.6rem", fontFamily: serif, fontSize: "0.9rem", fontWeight: 800, color: "#FFFFFF", backgroundColor: "rgba(0,0,0,0.65)", padding: "0.15rem 0.55rem" }}>
                      {c.year}
                    </span>
                  </div>

                  <div style={{ padding: "1.25rem 1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <span style={{ fontFamily: sans, fontSize: "0.68rem", fontWeight: 700, color: C.slate, textTransform: "uppercase", letterSpacing: "0.1em" }}>{c.brand}</span>
                    <div style={{ fontFamily: serif, fontSize: "1.15rem", fontWeight: 700, color: C.charcoal, marginTop: "0.3rem" }}>{c.title}</div>
                    <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 500, color: C.ink, marginTop: "0.5rem", lineHeight: 1.5, flex: 1 }}>{c.tagline}</p>

                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center", marginTop: "1rem" }}>
                      <span style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.red, border: `1px solid ${C.red}`, padding: "0.2rem 0.5rem", display: "inline-block" }}>
                        {c.kenRole}
                      </span>
                      {c.achievement && (
                        <span style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.gold, backgroundColor: C.cream, padding: "0.2rem 0.5rem", display: "inline-block" }}>
                          {c.achievement}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RedRule />

      {/* ── BRAND EXPLORER ───────────────────────────────────────────────── */}
      <section id="brands" style={{ backgroundColor: C.parchment, scrollMarginTop: "59px" }}>
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <SectionLabel>Explore by Brand</SectionLabel>
          <h2 style={{ fontFamily: serif, fontSize: "1.5rem", fontWeight: 700, color: C.charcoal, marginTop: "0.75rem", marginBottom: "1.5rem" }}>
            Ken Moskowitz's Super Bowl Work by Brand
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {[
              { brand: "Budweiser", ads: ["American Icons (2026)", "A Clydesdale's Journey (2022)", "Lost Dog (2015)"], path: "/budweiser-american-icons" },
              { brand: "State Farm", ads: ["Agent State Farm (2024) — #1 Ad Meter"], path: "/state-farm-agent" },
              { brand: "Etsy", ads: ["Thank You, France (2024)"], path: "/etsy-thank-you-france" },
              { brand: "Bubly", ads: ["Bublé vs. Bubly (2019)"], path: "/bubly-buble" },
              { brand: "T-Mobile", ads: ["#BagOfUnlimited (2017)"], path: "/tmobile-bag-of-unlimited" },
              { brand: "M&M's", ads: ["Just My Shell (2012)"], path: "/mms-just-my-shell" },
              { brand: "Volkswagen", ads: ["The Force (2011) — #9 YouTube Top 10"], path: "/volkswagen-the-force" },
              { brand: "Bud Light", ads: ["T-Pain Voice (2010)"], path: "/bud-light-tpain" },
            ].map((brand, i) => (
              <Link key={brand.path} href={brand.path} style={{ textDecoration: "none", display: "block" }}>
                <div
                  style={{
                    backgroundColor: C.white,
                    border: `1px solid ${C.rule}`,
                    borderTop: `3px solid ${i % 2 === 0 ? C.red : C.gold}`,
                    padding: "1.5rem",
                    height: "100%",
                    transition: "transform 0.15s ease, box-shadow 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 18px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: C.cream,
                      color: C.red,
                      fontFamily: serif,
                      fontWeight: 800,
                      fontSize: "1rem",
                      marginBottom: "0.85rem",
                    }}
                  >
                    {brand.brand.charAt(0)}
                  </div>
                  <div style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 700, color: C.charcoal, marginBottom: "0.5rem" }}>{brand.brand}</div>
                  {brand.ads.map((ad) => (
                    <div key={ad} style={{ fontFamily: sans, fontSize: "0.8rem", fontWeight: 400, color: C.slate, marginBottom: "0.2rem" }}>→ {ad}</div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RedRule />

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#0D0A08", borderTop: `3px solid ${C.red}` }}>
        <div className="container" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "2rem" }}>
          <div>
            <div style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 700, color: "#F8F5F0", marginBottom: "0.5rem" }}>
              Ken <span style={{ color: C.red }}>"Spanky"</span> Moskowitz
            </div>
            <div style={{ fontFamily: sans, fontSize: "0.72rem", fontWeight: 400, color: "#7A7268", lineHeight: 1.7 }}>
              Founder, <a href={AD_ZOMBIES_URL} {...adZombiesLinkProps} style={{ color: "inherit" }}>Ad Zombies</a> · Founder, Wedgie Creative<br />
              Featured Keynote Speaker · Fractional CMO · Advertising Consultant
            </div>
          </div>
          <div>
            <div style={{ fontFamily: sans, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem" }}>Site</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              <a href="#portfolio" style={{ fontFamily: sans, fontSize: "0.78rem", fontWeight: 400, color: "#7A7268", textDecoration: "none" }}>Portfolio</a>
              <a href="#about" style={{ fontFamily: sans, fontSize: "0.78rem", fontWeight: 400, color: "#7A7268", textDecoration: "none" }}>About</a>
              <a href="#brands" style={{ fontFamily: sans, fontSize: "0.78rem", fontWeight: 400, color: "#7A7268", textDecoration: "none" }}>By Brand</a>
            </div>
          </div>
          <div>
            <div style={{ fontFamily: sans, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem" }}>Ad Zombies</div>
            <a href={AD_ZOMBIES_URL} {...adZombiesLinkProps} style={{ fontFamily: sans, fontSize: "0.78rem", fontWeight: 400, color: "#7A7268", textDecoration: "none", display: "block" }}>adzombies.com</a>
          </div>
          <div style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 400, color: "#5A5248", textAlign: "right", alignSelf: "flex-end" }}>
            <div>10 Super Bowl Commercials · 2010–2026</div>
            <div style={{ marginTop: "4px" }}>greatestsuperbowlads.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
