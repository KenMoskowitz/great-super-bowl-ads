/**
 * State Farm "Agent State Farm" — Super Bowl LVIII (2024)
 * Uses CommercialPage template for consistent layout across all 10 commercial pages.
 */
import CommercialPage from "@/components/CommercialPage";

const relatedLinks = [
  { label: "Budweiser: American Icons '26", path: "/budweiser-american-icons" },
  { label: "Etsy: Thank You, France '24", path: "/etsy-thank-you-france" },
  { label: "Budweiser: A Clydesdale's Journey '22", path: "/budweiser-clydesdales-journey" },
  { label: "Bubly: Bublé vs. Bubly '19", path: "/bubly-buble" },
  { label: "T-Mobile: #BagOfUnlimited '17", path: "/tmobile-bag-of-unlimited" },
  { label: "Budweiser: Lost Dog '15", path: "/budweiser-lost-dog" },
  { label: "M&M's: Just My Shell '12", path: "/mms-just-my-shell" },
  { label: "Volkswagen: The Force '11", path: "/volkswagen-the-force" },
  { label: "Bud Light: T-Pain Voice '10", path: "/bud-light-tpain" },
];

export default function StateFarmAgent() {
  return (
    <CommercialPage
      heroImage="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80"
      badge="Super Bowl LVIII · February 11, 2024 · #1 USA Today Ad Meter"
      title="State Farm: Agent State Farm"
      subtitle="Complete Production Credits"
      description='Arnold Schwarzenegger struggles to say "neighbor." Danny DeVito saves the day. The most popular Super Bowl ad of 2024.'
      kenRole="Senior Copywriter"
      kenDescription="Ken 'Spanky' Moskowitz contributed his legendary copywriting expertise to State Farm's record-breaking Super Bowl LVIII commercial, helping craft the comedic dialogue that made 'Agent State Farm' the #1 ad of Super Bowl LVIII according to USA Today's Ad Meter."
      kenAchievement="This commercial topped the USA Today Ad Meter survey — the most popular Super Bowl ad of 2024"
      youtubeId="86DNiIg3Lyk"
      youtubeTitle='State Farm "Agent State Farm" Super Bowl LVIII 2024 Commercial'
      airDate="Feb 11, 2024"
      superBowl="Super Bowl LVIII"
      achievement="#1 Ad Meter"
      overviewParagraphs={[
        "State Farm's Super Bowl LVIII commercial features Arnold Schwarzenegger cast as Agent State Farm in a blockbuster action film. The humor centers on Arnold's iconic Austrian accent making it impossible for him to correctly pronounce 'neighbor' in the brand's famous tagline 'Like a good neighbor, State Farm is there.'",
        "Despite the best efforts of the director and Jake from State Farm himself, Arnold's pronunciation comes out as 'neighbaaa' every time. The production eventually reaches a compromise by bringing in Danny DeVito — Arnold's co-star from Twins — to deliver the line correctly.",
        "The commercial topped USA Today's Ad Meter survey, making it the most popular Super Bowl ad of 2024. The reunion of Schwarzenegger and DeVito delighted audiences and showcased State Farm's commitment to being a good neighbor with both humor and heart.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "State Farm Insurance",
          credits: [
            { role: "Brand", name: "State Farm Insurance" },
            { role: "Agency of Record", name: "DDB" },
            { role: "Creative Agency", name: "Highdive (Chicago)" },
            { role: "Additional Agency", name: "Backstory" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "Highdive · DDB · Backstory",
          credits: [
            { role: "Chief Creative Officer (Highdive)", name: "Mark Gross" },
            { role: "Executive Creative Director", name: "Jason Gaboriau" },
            { role: "Creative Director", name: "Jeff Dryer" },
            { role: "Creative Director", name: "Scott Yoffe" },
            { role: "Senior Copywriter", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Talent Procurement", name: "Creative License" },
            { role: "CEO/Founder (Creative License)", name: "Kevin McKiernan" },
            { role: "Executive Producer", name: "Tanya LeSieur" },
            { role: "Account Director", name: "Jill Apfelbaum" },
          ],
        },
        {
          title: "Production",
          subtitle: "Hungry Man Productions",
          credits: [
            { role: "Production Company", name: "Hungry Man Productions" },
            { role: "Director", name: "Wayne McClammy" },
            { role: "Executive Producer", name: "Mino Jarjoura" },
            { role: "Executive Producer", name: "Dan Duffy" },
            { role: "Head of Production", name: "Rachel Curl" },
            { role: "Producer", name: "Elise Greiche" },
            { role: "Director of Photography", name: "Darko Suvak" },
          ],
        },
        {
          title: "Post-Production / Editorial",
          subtitle: "Cutters Studios · Sarofsky",
          credits: [
            { role: "Editorial Company", name: "Cutters Studios" },
            { role: "Editor", name: "Greg Scruton" },
            { role: "Executive Producer", name: "Steven Anderson" },
            { role: "Creative Director (Sarofsky)", name: "Stefan Draht" },
            { role: "Executive Creative Director (Sarofsky)", name: "Erin Sarofsky" },
            { role: "Final Branding", name: "Sarofsky" },
          ],
        },
        {
          title: "Featured Talent",
          subtitle: "On-Screen Performers",
          credits: [
            { role: "Agent State Farm", name: "Arnold Schwarzenegger" },
            { role: "The Voice of Reason", name: "Danny DeVito" },
            { role: "Brand Icon", name: "Jake from State Farm (Kevin Miles)" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="86DNiIg3Lyk"
      schemaUploadDate="2024-02-11"
      schemaBreadcrumb="State Farm: Agent State Farm '24"
      schemaUrl="https://greatestsuperbowlads.com/state-farm-agent"
    />
  );
}
