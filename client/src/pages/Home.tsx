/**
 * Budweiser "American Icons" — Super Bowl LX (2026)
 * Ken "Spanky" Moskowitz: Writer
 * His 10th Super Bowl commercial contribution
 */
import CommercialPage from "@/components/CommercialPage";

const relatedLinks = [
  { label: "State Farm: Agent State Farm (2024)", path: "/state-farm-agent" },
  { label: "Etsy: Thank You, France (2024)", path: "/etsy-thank-you-france" },
  { label: "Budweiser: A Clydesdale's Journey (2022)", path: "/budweiser-clydesdales-journey" },
  { label: "Bubly: Bublé vs. Bubly (2019)", path: "/bubly-buble" },
  { label: "T-Mobile: #BagOfUnlimited (2017)", path: "/tmobile-bag-of-unlimited" },
  { label: "Budweiser: Lost Dog (2015)", path: "/budweiser-lost-dog" },
  { label: "M&M's: Just My Shell (2012)", path: "/mms-just-my-shell" },
  { label: "Volkswagen: The Force (2011)", path: "/volkswagen-the-force" },
  { label: "Bud Light: T-Pain Voice (2010)", path: "/bud-light-tpain" },
];

export default function Home() {
  return (
    <CommercialPage
      heroImage="https://img.youtube.com/vi/a_mh-v02-Tw/maxresdefault.jpg"
      badge="Super Bowl LX · 2026 · Budweiser"
      title='Budweiser "American Icons"'
      subtitle="The Clydesdale and the Eagle — A Story of American Resilience"
      description="Two of America's most iconic symbols — the Budweiser Clydesdale and the bald eagle — unite in a breathtaking Super Bowl LX commercial that celebrates the enduring spirit of the American people. Written by Ken Spanky Moskowitz in his 10th Super Bowl contribution."
      kenRole="Writer"
      kenDescription='Ken "Spanky" Moskowitz served as a writer on the Budweiser "American Icons" Super Bowl LX commercial — his 10th Super Bowl contribution spanning 16 years. As Founder of Ad Zombies and Wedgie Creative, Ken brings an unmatched ability to craft advertising narratives that resonate at the highest level of the industry. His work on this commercial helped shape one of the most emotionally powerful Super Bowl ads of 2026.'
      kenAchievement="This marks Ken Moskowitz's 10th Super Bowl commercial — a milestone achieved by only a handful of advertising writers in history. Spanning 16 years (2010–2026), his portfolio represents some of the most-watched, most-shared, and most-awarded commercials in Super Bowl history."
      youtubeId="a_mh-v02-Tw"
      youtubeTitle='Budweiser "American Icons" Super Bowl LX 2026 Commercial — Clydesdale and Eagle'
      airDate="February 8, 2026"
      superBowl="Super Bowl LX — New Orleans, LA"
      achievement="Most-Watched Super Bowl Ad 2026"
      overviewParagraphs={[
        'The Budweiser "American Icons" Super Bowl LX commercial is a cinematic celebration of American resilience and unity. Set against the sweeping landscapes of the American heartland, the ad features the legendary Budweiser Clydesdale — one of the most recognizable symbols in advertising history — alongside the bald eagle, America\'s national bird and symbol of freedom.',
        "The commercial taps into a deep vein of American pride and nostalgia, reminding viewers of the values that have defined the nation for generations. The Clydesdale's powerful stride through golden fields, with the eagle soaring overhead, creates an image of strength, freedom, and enduring spirit that resonated deeply with Super Bowl LX viewers.",
        "Created by BBDO New York and produced by SMUGGLER, the commercial represents the pinnacle of Super Bowl advertising craft — combining world-class cinematography, emotional storytelling, and the iconic Budweiser brand heritage into a 60-second masterpiece that will be remembered for years to come.",
      ]}
      creditSections={[
        {
          title: "Brand",
          subtitle: "Anheuser-Busch / Budweiser",
          credits: [
            { role: "Brand", name: "Budweiser / Anheuser-Busch" },
            { role: "VP, Marketing", name: "Todd Allen" },
            { role: "Senior Director, Marketing", name: "Monica Rustgi" },
          ],
        },
        {
          title: "Agency",
          subtitle: "BBDO New York",
          credits: [
            { role: "Chief Creative Officer", name: "David Lubars" },
            { role: "Executive Creative Director", name: "Greg Hahn" },
            { role: "Creative Director", name: "Peter Kain" },
            { role: "Creative Director", name: "Gianfranco Arena" },
            { role: "Writer", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Art Director", name: "Pam Fujimoto" },
            { role: "Executive Producer", name: "David Rolfe" },
            { role: "Account Director", name: "Kirsten Flanagan" },
          ],
        },
        {
          title: "Production",
          subtitle: "SMUGGLER",
          credits: [
            { role: "Director", name: "Henry-Alex Rubin" },
            { role: "Executive Producer", name: "Brian Carmody" },
            { role: "Executive Producer", name: "Patrick Milling Smith" },
            { role: "Head of Production", name: "Allison Kunzman" },
            { role: "Director of Photography", name: "Linus Sandgren" },
          ],
        },
        {
          title: "Post-Production",
          subtitle: "VFX & Finishing",
          credits: [
            { role: "VFX Supervisor", name: "Chris Bayol" },
            { role: "Colorist", name: "Tim Masick" },
            { role: "Online Editor", name: "Paul Yacono" },
          ],
        },
        {
          title: "Editorial",
          subtitle: "Cutting Room",
          credits: [
            { role: "Editor", name: "Tom Scherma" },
            { role: "Assistant Editor", name: "Gina Marinelli" },
            { role: "Editorial Company", name: "Rock Paper Scissors" },
          ],
        },
        {
          title: "Music & Sound",
          subtitle: "Audio Production",
          credits: [
            { role: "Music", name: "Human" },
            { role: "Sound Design", name: "Heard City" },
            { role: "Mix", name: "Heard City" },
          ],
        },
        {
          title: "Animal Welfare",
          subtitle: "American Humane",
          credits: [
            { role: "Animal Welfare Oversight", name: "American Humane Association" },
            { role: "Animal Trainer", name: "Chad Byrnes" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="a_mh-v02-Tw"
      schemaUploadDate="2026-02-08"
      schemaBreadcrumb='Budweiser "American Icons" Super Bowl LX 2026'
      schemaUrl="https://greatestsuperbowlads.com/budweiser-american-icons"
    />
  );
}
