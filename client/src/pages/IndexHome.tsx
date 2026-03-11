/**
 * IndexHome — Portfolio Index Page
 * Design: Editorial prestige — Variety/Ad Age/IMDb style.
 * Cream background, Montserrat, Budweiser red accents, no cards.
 */

import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { useEffect } from "react";

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
  { year: "2026", brand: "Budweiser", title: "American Icons", tagline: "The Clydesdale and the Eagle — A Story of American Resilience", kenRole: "Writer", superBowl: "Super Bowl LX", achievement: "10th Super Bowl", path: "/budweiser-american-icons" },
  { year: "2024", brand: "State Farm", title: "Agent State Farm", tagline: 'Arnold can\'t say "neighbor." Danny DeVito saves the day.', kenRole: "Contributing Writer", superBowl: "Super Bowl LVIII", achievement: "#1 USA Today Ad Meter", path: "/state-farm-agent" },
  { year: "2024", brand: "Etsy", title: "Thank You, France", tagline: "America thanks France for the Statue of Liberty — with cheese.", kenRole: "Creative Writing Consultant", superBowl: "Super Bowl LVIII", achievement: "Viral Sensation", path: "/etsy-thank-you-france" },
  { year: "2022", brand: "Budweiser", title: "A Clydesdale's Journey", tagline: "An injured Clydesdale finds friendship and the will to recover.", kenRole: "Lead Writer", superBowl: "Super Bowl LVI", achievement: "Top 5 Ad Meter", path: "/budweiser-clydesdales-journey" },
  { year: "2019", brand: "Bubly", title: "Bublé vs. Bubly", tagline: 'Singer Michael Bublé insists on pronouncing Bubly as "Bublé."', kenRole: "Contributing Writer", superBowl: "Super Bowl LIII", achievement: "Top 10 Ad Meter", path: "/bubly-buble" },
  { year: "2017", brand: "T-Mobile", title: "#BagOfUnlimited", tagline: "Martha Stewart and Snoop Dogg explain unlimited data with cannabis puns.", kenRole: "Lead Writer", superBowl: "Super Bowl LI", achievement: "Most Shared 2017", path: "/tmobile-bag-of-unlimited" },
  { year: "2015", brand: "Budweiser", title: "Lost Dog", tagline: "A little yellow Labrador gets lost and finds his way home.", kenRole: "Contributing Writer", superBowl: "Super Bowl XLIX", achievement: "#1 Ad Meter 2015", path: "/budweiser-lost-dog" },
  { year: "2012", brand: "M&M's", title: "Just My Shell", tagline: 'A brown M&M is mistaken for naked. Red tears off his shell to "Sexy and I Know It."', kenRole: "Contributing Writer", superBowl: "Super Bowl XLVI", achievement: "Top 5 Ad Meter", path: "/mms-just-my-shell" },
  { year: "2011", brand: "Volkswagen", title: "The Force", tagline: "A kid in a Darth Vader costume tries the Force — and succeeds.", kenRole: "Contributing Writer", superBowl: "Super Bowl XLV", achievement: "#9 YouTube Top 10 2011", path: "/volkswagen-the-force" },
  { year: "2010", brand: "Bud Light", title: "T-Pain Voice", tagline: "Men who hear about a Bud Light party talk like T-Pain. Then T-Pain shows up.", kenRole: "Lead Writer", superBowl: "Super Bowl XLIV", achievement: "Most Memorable 2010", path: "/bud-light-tpain" },
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
            Ken <em>"Spanky"</em>
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
      <section style={{ backgroundColor: C.white }}>
        <div className="container" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <SectionLabel>About the Writer</SectionLabel>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 900, color: C.charcoal, marginTop: "0.75rem", marginBottom: "0.25rem", lineHeight: 1.1 }}>
            The Man Behind the Words
          </h2>
          <div style={{ width: "48px", height: "2px", backgroundColor: C.red, marginBottom: "1.5rem" }} />

          <div style={{ borderLeft: `4px solid ${C.gold}`, paddingLeft: "1.75rem", maxWidth: "820px" }}>
            <p style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 400, color: C.ink, lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Ken <strong>"Spanky" Moskowitz</strong> is one of advertising's most prolific Super Bowl contributors — with 10 iconic commercials spanning {yearSpan} years. As <strong>Founder of Ad Zombies</strong> and <strong>Founder of Wedgie Creative</strong>, Ken has built a reputation for crafting advertising narratives that don't just sell products — they become cultural moments.
            </p>
            <p style={{ fontFamily: sans, fontSize: "1rem", fontWeight: 400, color: C.ink, lineHeight: 1.8, marginBottom: "1.5rem" }}>
              A <strong>Featured Keynote Speaker</strong>, <strong>Fractional CMO</strong> for several companies, and <strong>Advertising Consultant</strong> for some of the world's biggest brands, Ken brings a rare combination of creative brilliance and strategic business acumen to every project he touches.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Founder, Ad Zombies", "Founder, Wedgie Creative", "Featured Keynote Speaker", "Fractional CMO", "Advertising Consultant"].map((cred) => (
                <span key={cred} style={{ fontFamily: sans, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.slate, border: `1px solid ${C.rule}`, padding: "0.3rem 0.65rem", backgroundColor: C.cream }}>
                  {cred}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RedRule />

      {/* ── COMMERCIAL PORTFOLIO TABLE ────────────────────────────────────── */}
      <section style={{ backgroundColor: C.cream }}>
        <div className="container" style={{ paddingTop: "3.5rem", paddingBottom: "3.5rem" }}>
          <SectionLabel>Complete Portfolio</SectionLabel>
          <h2 style={{ fontFamily: serif, fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 900, color: C.charcoal, marginTop: "0.75rem", marginBottom: "0.5rem", lineHeight: 1.1 }}>
            10 Super Bowl Commercials
          </h2>
          <p style={{ fontFamily: sans, fontSize: "0.9rem", fontWeight: 400, color: C.slate, marginBottom: "2.5rem", fontStyle: "italic" }}>
            2010 – 2026 · Click any commercial to view complete production credits
          </p>

          {/* Desktop table */}
          <div className="hidden md:block">
            <div style={{ borderBottom: `3px solid ${C.charcoal}`, paddingBottom: "0.5rem", display: "grid", gridTemplateColumns: "72px 130px 1fr 180px", gap: "0", marginBottom: "0" }}>
              {["Year", "Brand", "Commercial", "Ken's Role"].map((h) => (
                <span key={h} style={{ fontFamily: sans, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.slate }}>
                  {h}
                </span>
              ))}
            </div>

            {commercials.map((c, i) => (
              <Link key={c.path} href={c.path} style={{ textDecoration: "none", display: "block" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "72px 130px 1fr 180px",
                    gap: "0",
                    padding: "1.25rem 0",
                    borderBottom: `1px solid ${C.rule}`,
                    backgroundColor: i % 2 === 0 ? "transparent" : C.white,
                    cursor: "pointer",
                    transition: "background-color 0.15s ease",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = C.parchment; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = i % 2 === 0 ? "transparent" : C.white; }}
                >
                  <span style={{ fontFamily: serif, fontSize: "1.15rem", fontWeight: 700, color: C.red, alignSelf: "center" }}>{c.year}</span>
                  <span style={{ fontFamily: sans, fontSize: "0.8rem", fontWeight: 700, color: C.slate, textTransform: "uppercase", letterSpacing: "0.06em", alignSelf: "center", paddingRight: "1rem" }}>{c.brand}</span>
                  <div style={{ alignSelf: "center", paddingRight: "1rem" }}>
                    <div style={{ fontFamily: serif, fontSize: "1.05rem", fontWeight: 700, color: C.charcoal }}>{c.title}</div>
                    <p style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 600, color: C.ink, marginTop: "3px" }}>{c.tagline}</p>
                    {c.achievement && (
                      <div style={{ fontFamily: sans, fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: C.gold, marginTop: "4px" }}>{c.achievement}</div>
                    )}
                  </div>
                  <div style={{ alignSelf: "center" }}>
                    <span style={{ fontFamily: sans, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: C.red, border: `1px solid ${C.red}`, padding: "0.2rem 0.5rem", display: "inline-block" }}>
                      {c.kenRole}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile list */}
          <div className="md:hidden">
            {commercials.map((c) => (
              <Link key={c.path} href={c.path} style={{ textDecoration: "none", display: "block" }}>
                <div style={{ borderBottom: `1px solid ${C.rule}`, padding: "1.5rem 0" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.4rem" }}>
                    <span style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 700, color: C.red }}>{c.year}</span>
                    <span style={{ fontFamily: sans, fontSize: "0.7rem", fontWeight: 700, color: C.slate, textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.brand}</span>
                  </div>
                  <div style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 700, color: C.charcoal, marginBottom: "0.25rem" }}>{c.title}</div>
                  <div style={{ fontFamily: sans, fontSize: "0.82rem", fontWeight: 600, color: C.ink, marginBottom: "0.5rem" }}>{c.tagline}</div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontFamily: sans, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.red, border: `1px solid ${C.red}`, padding: "0.2rem 0.5rem" }}>
                      {c.kenRole}
                    </span>
                    {c.achievement && (
                      <span style={{ fontFamily: sans, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: C.gold }}>
                        {c.achievement}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RedRule />

      {/* ── BRAND EXPLORER ───────────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.parchment }}>
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
          <SectionLabel>Explore by Brand</SectionLabel>
          <h2 style={{ fontFamily: serif, fontSize: "1.5rem", fontWeight: 700, color: C.charcoal, marginTop: "0.75rem", marginBottom: "1.5rem" }}>
            Ken Moskowitz's Super Bowl Work by Brand
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0" }}>
            {[
              { brand: "Budweiser", ads: ["American Icons (2026)", "A Clydesdale's Journey (2022)", "Lost Dog (2015)"], path: "/budweiser-american-icons" },
              { brand: "State Farm", ads: ["Agent State Farm (2024) — #1 Ad Meter"], path: "/state-farm-agent" },
              { brand: "Etsy", ads: ["Thank You, France (2024)"], path: "/etsy-thank-you-france" },
              { brand: "Bubly", ads: ["Bublé vs. Bubly (2019)"], path: "/bubly-buble" },
              { brand: "T-Mobile", ads: ["#BagOfUnlimited (2017)"], path: "/tmobile-bag-of-unlimited" },
              { brand: "M&M's", ads: ["Just My Shell (2012)"], path: "/mms-just-my-shell" },
              { brand: "Volkswagen", ads: ["The Force (2011) — #9 YouTube Top 10"], path: "/volkswagen-the-force" },
              { brand: "Bud Light", ads: ["T-Pain Voice (2010)"], path: "/bud-light-tpain" },
            ].map((brand) => (
              <Link key={brand.path} href={brand.path} style={{ textDecoration: "none", display: "block", padding: "1.5rem", borderRight: `1px solid ${C.rule}`, borderBottom: `1px solid ${C.rule}` }}>
                <div style={{ fontFamily: serif, fontSize: "1.1rem", fontWeight: 700, color: C.charcoal, marginBottom: "0.5rem" }}>{brand.brand}</div>
                {brand.ads.map((ad) => (
                  <div key={ad} style={{ fontFamily: sans, fontSize: "0.8rem", fontWeight: 400, color: C.slate, marginBottom: "0.2rem" }}>→ {ad}</div>
                ))}
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
              Founder, Ad Zombies · Founder, Wedgie Creative<br />
              Featured Keynote Speaker · Fractional CMO · Advertising Consultant
            </div>
          </div>
          <div>
            <div style={{ fontFamily: sans, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem" }}>Portfolio</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {commercials.slice(0, 5).map((c) => (
                <Link key={c.path} href={c.path} style={{ fontFamily: sans, fontSize: "0.75rem", fontWeight: 400, color: "#7A7268", textDecoration: "none" }}>
                  {c.year} — {c.brand}: {c.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: sans, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: C.gold, marginBottom: "0.75rem" }}>More</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {commercials.slice(5).map((c) => (
                <Link key={c.path} href={c.path} style={{ fontFamily: sans, fontSize: "0.75rem", fontWeight: 400, color: "#7A7268", textDecoration: "none" }}>
                  {c.year} — {c.brand}: {c.title}
                </Link>
              ))}
            </div>
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
