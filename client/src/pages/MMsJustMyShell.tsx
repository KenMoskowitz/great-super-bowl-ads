/**
 * M&M's "Just My Shell" — Super Bowl XLVI (2012)
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
  { label: "Volkswagen: The Force '11", path: "/volkswagen-the-force" },
  { label: "Bud Light: T-Pain Voice '10", path: "/bud-light-tpain" },
];

export default function MMsJustMyShell() {
  return (
    <CommercialPage
      heroImage="https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=1920&q=80"
      badge="Super Bowl XLVI · February 5, 2012 · BBDO New York"
      title="M&M's: Just My Shell"
      subtitle="Complete Production Credits"
      description='At a party, a brown-shelled M&M is mistaken for being naked. The red M&M tears off its candy shell and dances to "Sexy and I Know It" by LMFAO — one of the funniest Super Bowl ads of 2012.'
      kenRole="Contributing Writer"
      kenDescription="Ken 'Spanky' Moskowitz contributed as a writer on M&M's hilarious Super Bowl XLVI commercial, helping develop the comedic concept and sharp dialogue that made Red M&M's impromptu dance to 'Sexy and I Know It' one of the most memorable moments of Super Bowl 2012."
      kenAchievement="One of the most-laughed-at Super Bowl ads of 2012 — Red M&M's dance became an instant pop culture moment"
      youtubeId="WK7lIjFsGvg"
      youtubeTitle="M&M's Just My Shell Super Bowl XLVI 2012 Commercial"
      airDate="Feb 5, 2012"
      superBowl="Super Bowl XLVI"
      achievement="Funniest Ad 2012"
      overviewParagraphs={[
        "At a party, the brown-shelled M&M is mistaken for being naked — because she is the same color as a human. The misunderstanding causes a stir among partygoers. In response, the red M&M decides to strip off his candy shell and dance to LMFAO's 'Sexy and I Know It,' declaring he is naked too.",
        "The commercial brilliantly plays on the M&M characters' long-established personalities — Red's confident, comedic bravado and Brown's cool, sophisticated demeanor. The ad was perfectly timed to LMFAO's massive hit, which was dominating the charts at the time.",
        "Created by BBDO New York, the commercial was one of the most-discussed ads of Super Bowl XLVI, earning widespread praise for its humor and the seamless integration of a popular song. It reinforced M&M's position as one of the most beloved and entertaining brands in Super Bowl advertising history.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "Mars, Incorporated",
          credits: [
            { role: "Brand", name: "M&M's (Mars, Incorporated)" },
            { role: "VP, Marketing", name: "Allison Miazga-Bedrick" },
            { role: "Brand Director", name: "Sarah Long" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "BBDO New York",
          credits: [
            { role: "Agency", name: "BBDO New York" },
            { role: "Chief Creative Officer, Worldwide", name: "David Lubars" },
            { role: "Chief Creative Officer, NY", name: "Greg Hahn" },
            { role: "Executive Creative Director", name: "Gianfranco Arena" },
            { role: "Executive Creative Director", name: "Peter Kain" },
            { role: "Creative Director", name: "Danilo Boer" },
            { role: "Art Director", name: "Marcos Kotlhar" },
            { role: "Contributing Writer", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Head of Production", name: "David Rolfe" },
            { role: "Executive Producer", name: "Diane Hill" },
          ],
        },
        {
          title: "Production",
          subtitle: "Moxian Inc.",
          credits: [
            { role: "Production Company", name: "Moxian Inc." },
            { role: "Director", name: "Phil Joanou" },
            { role: "Executive Producer", name: "Rhea Scott" },
            { role: "Producer", name: "Aris McGarry" },
          ],
        },
        {
          title: "Post-Production / Animation",
          subtitle: "Framestore · Whitehouse Post",
          credits: [
            { role: "Animation / VFX", name: "Framestore" },
            { role: "VFX Supervisor", name: "Tim Webber" },
            { role: "Editorial Company", name: "Whitehouse Post" },
            { role: "Editor", name: "Neil Smith" },
          ],
        },
        {
          title: "Music",
          subtitle: "Featured Track",
          credits: [
            { role: "Featured Music", name: "LMFAO — Sexy and I Know It" },
            { role: "Music Licensing", name: "Interscope Records" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="WK7lIjFsGvg"
      schemaUploadDate="2012-02-05"
      schemaBreadcrumb="M&M's: Just My Shell '12"
      schemaUrl="https://greatestsuperbowlads.com/mms-just-my-shell"
    />
  );
}
