/**
 * Bubly "Bublé vs. Bubly" — Super Bowl LIII (2019)
 * Uses CommercialPage template for consistent layout across all 10 commercial pages.
 */
import CommercialPage from "@/components/CommercialPage";

const relatedLinks = [
  { label: "Budweiser: American Icons '26", path: "/budweiser-american-icons" },
  { label: "State Farm: Agent State Farm '24", path: "/state-farm-agent" },
  { label: "Etsy: Thank You, France '24", path: "/etsy-thank-you-france" },
  { label: "Budweiser: A Clydesdale's Journey '22", path: "/budweiser-clydesdales-journey" },
  { label: "T-Mobile: #BagOfUnlimited '17", path: "/tmobile-bag-of-unlimited" },
  { label: "Budweiser: Lost Dog '15", path: "/budweiser-lost-dog" },
  { label: "M&M's: Just My Shell '12", path: "/mms-just-my-shell" },
  { label: "Volkswagen: The Force '11", path: "/volkswagen-the-force" },
  { label: "Bud Light: T-Pain Voice '10", path: "/bud-light-tpain" },
];

export default function BublyBuble() {
  return (
    <CommercialPage
      heroImage="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80"
      badge="Super Bowl LIII · February 3, 2019 · Funniest Ad of 2019"
      title="Bubly: Bublé vs. Bubly"
      subtitle="Complete Production Credits"
      description='Singer Michael Bublé insists on pronouncing the sparkling water brand "Bubly" as "Bublé" — even after a customer and a clerk correct him. A comedic battle of names that delighted Super Bowl audiences.'
      kenRole="Lead Writer"
      kenDescription="Ken 'Spanky' Moskowitz served as Lead Writer on PepsiCo's Bubly debut Super Bowl commercial, crafting the sharp comedic premise and wordplay that made the Michael Bublé name-confusion concept one of the funniest ads of Super Bowl LIII."
      kenAchievement="One of the most-talked-about comedic Super Bowl ads of 2019 — a perfect showcase of Ken's wit and wordplay expertise"
      youtubeId="rrk6QQfAZpc"
      videoSrc="/manus-storage/bubly-buble-superbowl-2019_5ae9d3df.mp4"
      youtubeTitle='Bubly "Bublé vs. Bubly" Super Bowl LIII 2019 Commercial'
      airDate="Feb 3, 2019"
      superBowl="Super Bowl LIII"
      achievement="Funniest Ad 2019"
      overviewParagraphs={[
        "At a store, singer Michael Bublé insists on pronouncing the name of the sparkling water brand Bubly as 'Bublé' — even after another customer and a store clerk (whom Bublé refers to as 'Davé') correct him. The ad plays on the near-identical pronunciation of the singer's name and the brand name.",
        "The commercial was PepsiCo's debut Super Bowl spot for Bubly, their sparkling water brand. It was a massive success, introducing the brand to a national audience with humor and the star power of Michael Bublé.",
        "The ad's clever wordplay and Bublé's self-deprecating performance made it one of the most memorable and shared commercials from Super Bowl LIII, earning widespread praise from advertising critics and audiences alike.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "PepsiCo / Bubly",
          credits: [
            { role: "Brand", name: "Bubly (PepsiCo)" },
            { role: "Chief Marketing Officer", name: "Todd Kaplan" },
            { role: "VP, Marketing", name: "Stacy Taffet" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "Goodby Silverstein & Partners",
          credits: [
            { role: "Agency", name: "Goodby Silverstein & Partners" },
            { role: "Lead Writer", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Chief Creative Officer", name: "Margaret Johnson" },
            { role: "Executive Creative Director", name: "Keith Anderson" },
            { role: "Creative Director", name: "Tristan Graham" },
            { role: "Art Director", name: "Niklas Lilja" },
            { role: "Executive Producer", name: "Hilary Coate" },
          ],
        },
        {
          title: "Production",
          subtitle: "Hungry Man Productions",
          credits: [
            { role: "Production Company", name: "Hungry Man Productions" },
            { role: "Director", name: "Wayne McClammy" },
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
          ],
        },
        {
          title: "Featured Talent",
          subtitle: "On-Screen Performers",
          credits: [
            { role: "Himself", name: "Michael Bublé" },
            { role: "Store Clerk 'Davé'", name: "Featured Actor" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="rrk6QQfAZpc"
      schemaUploadDate="2019-02-03"
      schemaBreadcrumb="Bubly: Bublé vs. Bubly '19"
      schemaUrl="https://greatestsuperbowlads.com/bubly-buble"
    />
  );
}
