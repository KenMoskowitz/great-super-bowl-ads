/**
 * Bud Light "T-Pain Voice" — Super Bowl XLIV (2010)
 * Uses CommercialPage template for consistent layout across all 10 commercial pages.
 */
import CommercialPage from "@/components/CommercialPage";

const relatedLinks = [
  { label: "Budweiser: American Icons '26", path: "/budweiser-american-icons" },
  { label: "State Farm: Agent State Farm '24", path: "/state-farm-agent" },
  { label: "Etsy: Thank You, France '24", path: "/etsy-thank-you-france" },
  { label: "Budweiser: A Clydesdale's Journey '22", path: "/budweiser-clydesdales-journey" },
  { label: "Bubly: Bublé vs. Bubly '19", path: "/bubly-buble" },
  { label: "T-Mobile: #BagOfUnlimited '17", path: "/tmobile-bag-of-unlimited" },
  { label: "Budweiser: Lost Dog '15", path: "/budweiser-lost-dog" },
  { label: "M&M's: Just My Shell '12", path: "/mms-just-my-shell" },
  { label: "Volkswagen: The Force '11", path: "/volkswagen-the-force" },
];

export default function BudLightTPain() {
  return (
    <CommercialPage
      heroImage="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80"
      badge="Super Bowl XLIV · February 7, 2010 · Ken's First Super Bowl"
      title="Bud Light: T-Pain Voice"
      subtitle="Complete Production Credits"
      description="Men who hear about a Bud Light party start talking like T-Pain — with Auto-Tune. Soon, T-Pain himself shows up at the party. The ad that launched Ken Spanky Moskowitz's legendary Super Bowl career."
      kenRole="Lead Writer"
      kenDescription="Ken 'Spanky' Moskowitz served as Lead Writer on Bud Light's Super Bowl XLIV commercial — his very first Super Bowl ad. The T-Pain Voice concept showcased Ken's ability to tap into pop culture at exactly the right moment, launching what would become a 10-commercial Super Bowl legacy spanning 16 years."
      kenAchievement="Ken's first Super Bowl commercial — the beginning of a 16-year, 10-commercial Super Bowl legacy spanning Budweiser, VW, M&M's, T-Mobile, Bubly, Etsy, State Farm, and more"
      youtubeId="bDhjcP02GQg"
      videoSrc="/manus-storage/t-painbudlightsuperbowl44commercialhd_e2ac0858.mp4"
      youtubeTitle="Bud Light T-Pain Voice Super Bowl XLIV 2010 Commercial"
      airDate="Feb 7, 2010"
      superBowl="Super Bowl XLIV"
      achievement="Ken's First Super Bowl"
      overviewParagraphs={[
        "Men who hear about a Bud Light party start talking like T-Pain — with Auto-Tune vocal effects. The concept taps into the massive cultural moment of T-Pain's Auto-Tune style, which was dominating pop music in 2009-2010.",
        "As more and more people hear about the Bud Light party, the Auto-Tune effect spreads. Eventually, T-Pain himself shows up at the party — the ultimate payoff to a brilliantly simple comedic premise.",
        "This was Ken 'Spanky' Moskowitz's first Super Bowl commercial — the beginning of a legendary 16-year run that would see him contribute to 10 of the most iconic Super Bowl ads ever made. The T-Pain Voice ad demonstrated Ken's signature ability to identify and amplify cultural moments with perfect comedic timing.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "Anheuser-Busch InBev",
          credits: [
            { role: "Brand", name: "Bud Light (Anheuser-Busch InBev)" },
            { role: "VP, Marketing", name: "Rob McCarthy" },
            { role: "Director, Brand Marketing", name: "Alexander Lambrecht" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "DDB Chicago",
          credits: [
            { role: "Agency", name: "DDB Chicago" },
            { role: "Chief Creative Officer", name: "Ewan Paterson" },
            { role: "Executive Creative Director", name: "Mark Gross" },
            { role: "Creative Director", name: "Steve Dildarian" },
            { role: "Lead Writer", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Art Director", name: "John Maxham" },
            { role: "Head of Production", name: "Diane Jackson" },
            { role: "Executive Producer", name: "Elise Greiche" },
            { role: "Account Director", name: "Paul Gunning" },
          ],
        },
        {
          title: "Production",
          subtitle: "Hungry Man Productions",
          credits: [
            { role: "Production Company", name: "Hungry Man Productions" },
            { role: "Director", name: "Bryan Buckley" },
            { role: "Executive Producer", name: "Mino Jarjoura" },
            { role: "Producer", name: "Rachel Curl" },
            { role: "Director of Photography", name: "Darko Suvak" },
          ],
        },
        {
          title: "Post-Production / Editorial",
          subtitle: "Cosmo Street Editorial",
          credits: [
            { role: "Editorial Company", name: "Cosmo Street Editorial" },
            { role: "Editor", name: "Tom Scherma" },
            { role: "Executive Producer", name: "Yvette Cobarrubias" },
            { role: "Color", name: "Company 3" },
            { role: "Audio Mix", name: "Heard City" },
          ],
        },
        {
          title: "Featured Talent",
          subtitle: "On-Screen Performers",
          credits: [
            { role: "Himself", name: "T-Pain" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="N-7tcRYy8Qg"
      schemaUploadDate="2010-02-07"
      schemaBreadcrumb="Bud Light: T-Pain Voice '10"
      schemaUrl="https://greatestsuperbowlads.com/bud-light-tpain"
    />
  );
}
