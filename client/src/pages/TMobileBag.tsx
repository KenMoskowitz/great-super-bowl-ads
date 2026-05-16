/**
 * T-Mobile "#BagOfUnlimited" — Super Bowl LI (2017)
 * Uses CommercialPage template for consistent layout across all 10 commercial pages.
 */
import CommercialPage from "@/components/CommercialPage";

const relatedLinks = [
  { label: "Budweiser: American Icons '26", path: "/budweiser-american-icons" },
  { label: "State Farm: Agent State Farm '24", path: "/state-farm-agent" },
  { label: "Etsy: Thank You, France '24", path: "/etsy-thank-you-france" },
  { label: "Budweiser: A Clydesdale's Journey '22", path: "/budweiser-clydesdales-journey" },
  { label: "Bubly: Bublé vs. Bubly '19", path: "/bubly-buble" },
  { label: "Budweiser: Lost Dog '15", path: "/budweiser-lost-dog" },
  { label: "M&M's: Just My Shell '12", path: "/mms-just-my-shell" },
  { label: "Volkswagen: The Force '11", path: "/volkswagen-the-force" },
  { label: "Bud Light: T-Pain Voice '10", path: "/bud-light-tpain" },
];

export default function TMobileBag() {
  return (
    <CommercialPage
      heroImage="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1920&q=80"
      badge="Super Bowl LI · February 5, 2017 · Martha Stewart & Snoop Dogg"
      title="T-Mobile: #BagOfUnlimited"
      subtitle="Complete Production Credits"
      description="Martha Stewart and Snoop Dogg explain T-Mobile's unlimited data plan using a series of cannabis-related puns — one of the most talked-about celebrity pairings in Super Bowl history."
      kenRole="Senior Copywriter"
      kenDescription="Ken 'Spanky' Moskowitz contributed as Senior Copywriter on T-Mobile's viral Super Bowl LI commercial, helping craft the sharp, double-entendre-laden script that made the Martha Stewart and Snoop Dogg pairing so memorably hilarious."
      kenAchievement="One of the most viral Super Bowl ads of 2017 — the Martha & Snoop pairing became a cultural phenomenon"
      youtubeId="eVdGG_MYXpY"
      videoSrc="/manus-storage/TMobileSuperBowlCommercial2017SnoopDoggandMarthaStewart_3a1599fa.mp4"
      youtubeTitle='T-Mobile "#BagOfUnlimited" Super Bowl LI 2017 Commercial'
      airDate="Feb 5, 2017"
      superBowl="Super Bowl LI"
      achievement="Martha & Snoop"
      overviewParagraphs={[
        "T-Mobile's Super Bowl LI commercial features the unlikely but iconic pairing of Martha Stewart and Snoop Dogg — two celebrities who had already built a surprising friendship through their cooking show — to explain T-Mobile's unlimited data plan.",
        "The ad is packed with cannabis-related double entendres as Martha and Snoop describe the benefits of T-Mobile's '#BagOfUnlimited' plan. The wordplay is clever, the chemistry between the two stars is undeniable, and the result is one of the most shareable Super Bowl ads of the decade.",
        "The commercial was a massive viral success, generating millions of views and social media shares. It perfectly captured T-Mobile's irreverent brand voice while leveraging the genuine friendship between two of pop culture's most unlikely BFFs.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "T-Mobile",
          credits: [
            { role: "Brand", name: "T-Mobile" },
            { role: "Chief Marketing Officer", name: "Andrew Sherrard" },
            { role: "VP, Brand Marketing", name: "Peter DeLuca" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "Publicis Seattle",
          credits: [
            { role: "Agency", name: "Publicis Seattle" },
            { role: "Senior Copywriter", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Chief Creative Officer", name: "Gary Pascoe" },
            { role: "Executive Creative Director", name: "Jason Marks" },
            { role: "Creative Director", name: "Beau Hanson" },
            { role: "Executive Producer", name: "Jenn Bercovici" },
            { role: "Account Director", name: "Megan Keller" },
          ],
        },
        {
          title: "Production",
          subtitle: "Biscuit Filmworks",
          credits: [
            { role: "Production Company", name: "Biscuit Filmworks" },
            { role: "Director", name: "Clay Weiner" },
            { role: "Executive Producer", name: "Shawn Lacy" },
            { role: "Producer", name: "Jay Veal" },
            { role: "Director of Photography", name: "Lasse Frank" },
          ],
        },
        {
          title: "Post-Production / Editorial",
          subtitle: "Whitehouse Post",
          credits: [
            { role: "Editorial Company", name: "Whitehouse Post" },
            { role: "Editor", name: "Russell Icke" },
            { role: "Executive Producer", name: "Joanna Manning" },
            { role: "Color", name: "Company 3" },
            { role: "Colorist", name: "Tom Poole" },
          ],
        },
        {
          title: "Featured Talent",
          subtitle: "On-Screen Performers",
          credits: [
            { role: "Herself", name: "Martha Stewart" },
            { role: "Himself", name: "Snoop Dogg" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="0RRmDKFXFac"
      schemaUploadDate="2017-02-05"
      schemaBreadcrumb="T-Mobile: #BagOfUnlimited '17"
      schemaUrl="https://greatestsuperbowlads.com/tmobile-bag-of-unlimited"
    />
  );
}
