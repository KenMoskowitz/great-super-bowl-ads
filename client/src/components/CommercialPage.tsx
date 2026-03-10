/**
 * CommercialPage — Reusable template for all 10 Super Bowl commercial pages
 *
 * Design Philosophy: Editorial / Documentary
 * - No cards — clean full-width sections separated by thick red rule dividers
 * - High-contrast: white backgrounds, near-black text, Budweiser red (#E32636) accents
 * - Ken Moskowitz always appears first in a prominent gold-bordered featured block
 * - Two-column credit rows (role | name) with bottom border separators
 * - Responsive: single column on mobile, two columns on desktop
 */

import Navigation from "@/components/Navigation";
import { Link } from "wouter";
import { useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface CreditRow {
  role: string;
  name: string;
  highlight?: boolean; // true = Ken Moskowitz row gets gold accent
}

export interface CreditSection {
  title: string;
  subtitle?: string;
  credits: CreditRow[];
}

export interface CommercialPageProps {
  // Hero
  heroImage: string;
  badge: string;
  title: string;
  subtitle?: string;
  description: string;

  // Ken's featured block
  kenRole: string;
  kenDescription: string;
  kenAchievement?: string;

  // YouTube embed
  youtubeId: string;
  youtubeTitle: string;

  // Overview stats
  duration?: string;
  airDate: string;
  superBowl: string;
  achievement?: string;
  overviewParagraphs: string[];

  // Credit sections
  creditSections: CreditSection[];

  // Related pages nav
  relatedLinks?: { label: string; path: string }[];

  // Schema
  schemaVideoId?: string;
  schemaUploadDate?: string;
  schemaBreadcrumb?: string;
  schemaUrl?: string;
}

// ─── Section Divider ──────────────────────────────────────────────────────────

function SectionDivider() {
  return <div className="w-full h-1 bg-[#E32636] my-0" />;
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-gray-50 px-6 md:px-10 py-5 border-b border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-base text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
}

// ─── Credit Row ───────────────────────────────────────────────────────────────

function CreditItem({ role, name, highlight }: CreditRow) {
  return (
    <div
      className={`flex justify-between items-start py-3 px-2 border-b border-gray-200 last:border-0 ${
        highlight ? "bg-[#FFF8DC]" : ""
      }`}
    >
      <span className={`font-semibold text-sm md:text-base text-gray-700 pr-4 ${highlight ? "text-[#8B0000]" : ""}`}>
        {role}
      </span>
      <span className={`text-sm md:text-base text-right ${highlight ? "font-bold text-[#E32636]" : "text-gray-900"}`}>
        {name}
      </span>
    </div>
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
  duration,
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

  // Inject VideoObject + BreadcrumbList JSON-LD
  useEffect(() => {
    const scripts: HTMLScriptElement[] = [];

    if (schemaVideoId) {
      const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: title,
        description,
        thumbnailUrl: `https://img.youtube.com/vi/${schemaVideoId}/maxresdefault.jpg`,
        uploadDate: schemaUploadDate ?? airDate,
        contentUrl: `https://www.youtube.com/watch?v=${schemaVideoId}`,
        embedUrl: `https://www.youtube.com/embed/${schemaVideoId}`,
        duration: "PT60S",
      };
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(videoSchema);
      document.head.appendChild(s);
      scripts.push(s);
    }

    if (schemaBreadcrumb && schemaUrl) {
      const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://greatestsuperbowlads.com/" },
          { "@type": "ListItem", position: 2, name: schemaBreadcrumb, item: schemaUrl },
        ],
      };
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.text = JSON.stringify(breadcrumb);
      document.head.appendChild(s);
      scripts.push(s);
    }

    return () => scripts.forEach((s) => { if (s.parentNode) document.head.removeChild(s); });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* ── Hero ── */}
      <header className="relative overflow-hidden py-24 md:py-36 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/80" />
        <div className="container relative z-10 max-w-4xl mx-auto text-center space-y-5">
          <span className="inline-block bg-[#E32636] text-white text-sm md:text-base font-bold px-5 py-2 uppercase tracking-widest">
            {badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/95 font-medium">{subtitle}</p>
          )}
          <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </header>

      <SectionDivider />

      {/* ── Ken Moskowitz Featured Block ── */}
      <section className="bg-white">
        <SectionHeader title={`Featured ${kenRole}`} />
        <div className="px-6 md:px-10 py-8">
          <div className="border-l-4 border-[#E32636] bg-[#FFF8DC] px-6 py-6 md:py-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#E32636] mb-2">
              Featured Creative
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              Ken "Spanky" Moskowitz
            </h3>
            <p className="text-base font-semibold text-[#E32636] mb-4">{kenRole}</p>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-3">
              {kenDescription}
            </p>
            {kenAchievement && (
              <p className="text-sm font-semibold text-gray-700">
                <span className="text-[#E32636]">Achievement:</span> {kenAchievement}
              </p>
            )}
            <div className="mt-4 pt-4 border-t border-[#E32636]/20 text-sm text-gray-600 space-y-1">
              <p>
                <strong>Founder</strong> of{" "}
                <a
                  href="https://www.adzombies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E32636] hover:underline"
                >
                  Ad Zombies
                </a>{" "}
                &amp; Wedgie Creative &nbsp;·&nbsp; <strong>Featured Keynote Speaker</strong> &nbsp;·&nbsp;{" "}
                <strong>Fractional CMO</strong> &nbsp;·&nbsp; <strong>Advertising Consultant</strong>
              </p>
              <p className="italic text-gray-500">
                This commercial is one of Ken's 10 Super Bowl contributions spanning 2010–2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Watch the Commercial ── */}
      <section className="bg-gray-50">
        <SectionHeader title="Watch the Commercial" />
        <div className="px-6 md:px-10 py-8">
          <div className="relative w-full max-w-4xl mx-auto" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={youtubeTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Commercial Overview ── */}
      <section className="bg-white">
        <SectionHeader title="Commercial Overview" />
        <div className="px-6 md:px-10 py-8 space-y-4">
          {overviewParagraphs.map((p, i) => (
            <p key={i} className="text-base md:text-lg text-gray-800 leading-relaxed">
              {p}
            </p>
          ))}

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-6 border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200">
            <div className="p-4 text-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Duration</p>
              <p className="text-xl font-bold text-[#E32636]">{duration ?? "60 sec"}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Air Date</p>
              <p className="text-xl font-bold text-[#E32636]">{airDate}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Event</p>
              <p className="text-xl font-bold text-[#E32636]">{superBowl}</p>
            </div>
            {achievement && (
              <div className="p-4 text-center bg-[#FFF8DC]">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Achievement</p>
                <p className="text-xl font-bold text-[#E32636]">{achievement}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Credit Sections ── */}
      {creditSections.map((section, si) => (
        <div key={si}>
          <section className={si % 2 === 0 ? "bg-gray-50" : "bg-white"}>
            <SectionHeader title={section.title} subtitle={section.subtitle} />
            <div className="px-6 md:px-10 py-6">
              <div className="grid md:grid-cols-2 gap-x-12">
                {/* Split credits into two columns */}
                <div>
                  {section.credits
                    .filter((_, i) => i % 2 === 0)
                    .map((credit, ci) => (
                      <CreditItem key={ci} {...credit} />
                    ))}
                </div>
                <div>
                  {section.credits
                    .filter((_, i) => i % 2 !== 0)
                    .map((credit, ci) => (
                      <CreditItem key={ci} {...credit} />
                    ))}
                </div>
              </div>
            </div>
          </section>
          <SectionDivider />
        </div>
      ))}

      {/* ── Related Pages ── */}
      {relatedLinks && relatedLinks.length > 0 && (
        <section className="bg-[#E32636] py-10">
          <div className="container max-w-5xl mx-auto px-6 md:px-10">
            <p className="text-white/70 text-xs uppercase tracking-widest mb-4 font-semibold">
              More from Ken's Super Bowl Portfolio
            </p>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link, i) => (
                <Link key={i} href={link.path}>
                  <span className="inline-block bg-white text-[#E32636] font-bold text-sm px-5 py-2 hover:bg-[#FFD700] transition-colors cursor-pointer">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container max-w-5xl mx-auto px-6 md:px-10 text-center space-y-2">
          <p className="text-lg font-bold text-[#FFD700]">Ken "Spanky" Moskowitz</p>
          <p className="text-sm text-gray-400">
            Founder, Ad Zombies &amp; Wedgie Creative &nbsp;·&nbsp; Featured Keynote Speaker &nbsp;·&nbsp; Fractional CMO &nbsp;·&nbsp; Advertising Consultant
          </p>
          <p className="text-sm text-gray-500 pt-2">
            10 Super Bowl Commercials · 2010–2026 ·{" "}
            <a href="https://www.adzombies.com" target="_blank" rel="noopener noreferrer" className="text-[#E32636] hover:underline">
              adzombies.com
            </a>
          </p>
          <p className="text-xs text-gray-600 pt-2">
            &copy; {new Date().getFullYear()} greatestsuperbowlads.com. All production credits are property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}
