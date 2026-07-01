/**
 * Etsy "Thank You, France" — Super Bowl LVIII (2024)
 * Uses CommercialPage template for consistent layout across all 10 commercial pages.
 */
import CommercialPage from "@/components/CommercialPage";

const relatedLinks = [
  { label: "Budweiser: American Icons '26", path: "/budweiser-american-icons" },
  { label: "State Farm: Agent State Farm '24", path: "/state-farm-agent" },
  { label: "Budweiser: A Clydesdale's Journey '22", path: "/budweiser-clydesdales-journey" },
  { label: "Bubly: Bublé vs. Bubly '19", path: "/bubly-buble" },
  { label: "T-Mobile: #BagOfUnlimited '17", path: "/tmobile-bag-of-unlimited" },
  { label: "Budweiser: Lost Dog '15", path: "/budweiser-lost-dog" },
  { label: "M&M's: Just My Shell '12", path: "/mms-just-my-shell" },
  { label: "Volkswagen: The Force '11", path: "/volkswagen-the-force" },
  { label: "Bud Light: T-Pain Voice '10", path: "/bud-light-tpain" },
];

export default function EtsyCredits() {
  return (
    <CommercialPage
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663141268147/wDgpfeikURjrzeeq.jpg"
      badge="Super Bowl LVIII · February 11, 2024 · Etsy's First Super Bowl"
      title="Etsy: Thank You, France"
      subtitle="Complete Production Credits"
      description="Americans realize they owe France a thank-you for the Statue of Liberty — and use Etsy's Gift Mode to send the perfect gift: a magnificent cheese board."
      kenRole="Creative Writing Consultant"
      kenDescription="Ken 'Spanky' Moskowitz served as Creative Writing Consultant on Etsy's landmark first-ever Super Bowl commercial, contributing his expertise in crafting the comedic voice and narrative structure that made this ad a standout moment at Super Bowl LVIII."
      kenAchievement="Etsy's first-ever Super Bowl commercial — a historic debut on advertising's biggest stage"
      thumbnailImage="/thumbnails/etsy-thank-you-france.jpg"
      youtubeId="cXT8JgdvCHc"
      videoSrc="/manus-storage/GiftMode_Etsy_s2024BigGameCommercial_94faa6fc.mp4"
      youtubeTitle='Etsy "Thank You, France" Super Bowl LVIII 2024 Commercial'
      airDate="Feb 11, 2024"
      superBowl="Super Bowl LVIII"
      achievement="Etsy's 1st Super Bowl"
      overviewParagraphs={[
        "Etsy's first-ever Super Bowl commercial asks a simple but hilarious question: did America ever properly thank France for the Statue of Liberty? The answer, of course, is no — and the ad follows a group of Americans scrambling to make it right using Etsy's Gift Mode.",
        "The solution they land on is a spectacular French cheese board — 'Un plateau des fromages!' — delivered as a heartfelt gesture of gratitude to the nation that gifted America one of its most iconic landmarks back in the 1880s.",
        "Created by Orchard and directed by Andreas Nilsson through Biscuit Filmworks, the commercial blends absurdist humor with genuine warmth, positioning Etsy as the go-to destination for meaningful, personalized gifts.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "Etsy",
          credits: [
            { role: "Brand", name: "Etsy" },
            { role: "Chief Marketing Officer", name: "Brad Minor" },
            { role: "VP, Brand Marketing", name: "Margot Schermuly" },
            { role: "Senior Director, Brand", name: "Alicia Hirschhorn" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "Orchard (New York)",
          credits: [
            { role: "Agency", name: "Orchard" },
            { role: "Chief Creative Officer", name: "David Kolbusz" },
            { role: "Executive Creative Director", name: "Jimm Lasser" },
            { role: "Creative Director", name: "Heather Larimer" },
            { role: "Sr. Art Director", name: "Kevin Igunbor" },
            { role: "Sr. Copywriter", name: "Patrick Wells" },
            { role: "Creative Writing Consultant", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Head of Production", name: "Jenn Pennington" },
            { role: "Executive Producer", name: "Jenn Bercovici" },
            { role: "Account Director", name: "Tara Lawall" },
          ],
        },
        {
          title: "Production",
          subtitle: "Biscuit Filmworks",
          credits: [
            { role: "Production Company", name: "Biscuit Filmworks" },
            { role: "Director", name: "Andreas Nilsson" },
            { role: "Founding Partner / EP", name: "Shawn Lacy" },
            { role: "Executive Producer", name: "Holly Vega" },
            { role: "Head of Production", name: "Rachel Glaub" },
            { role: "Producer", name: "Jay Veal" },
            { role: "Director of Photography", name: "Lasse Frank" },
            { role: "Production Designer", name: "Mihai Ionescu" },
          ],
        },
        {
          title: "Post-Production / Editorial",
          subtitle: "Whitehouse Post · Company 3",
          credits: [
            { role: "Editorial Company", name: "Whitehouse Post" },
            { role: "Editor", name: "Russell Icke" },
            { role: "Executive Producer", name: "Joanna Manning" },
            { role: "Producer", name: "Kristin Branstetter" },
            { role: "Color Company", name: "Company 3" },
            { role: "Colorist", name: "Tom Poole" },
            { role: "VFX", name: "Framestore" },
          ],
        },
        {
          title: "Music / Sound",
          subtitle: "Heard City",
          credits: [
            { role: "Music Supervision", name: "Heard City" },
            { role: "Sound Design & Mix", name: "Heard City" },
            { role: "Mixer", name: "Philip Loeb" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="EgaRKjuYtRg"
      schemaUploadDate="2024-02-11"
      schemaBreadcrumb="Etsy: Thank You, France '24"
      schemaUrl="https://greatestsuperbowlads.com/etsy-thank-you-france"
    />
  );
}
