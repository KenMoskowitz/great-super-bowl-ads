/**
 * Budweiser "American Icons" — Super Bowl LX (2026)
 * Uses CommercialPage template for consistent layout across all 10 commercial pages.
 */
import CommercialPage from "@/components/CommercialPage";

const relatedLinks = [
  { label: "State Farm: Agent State Farm '24", path: "/state-farm-agent" },
  { label: "Etsy: Thank You, France '24", path: "/etsy-thank-you-france" },
  { label: "Budweiser: A Clydesdale's Journey '22", path: "/budweiser-clydesdales-journey" },
  { label: "Bubly: Bublé vs. Bubly '19", path: "/bubly-buble" },
  { label: "T-Mobile: #BagOfUnlimited '17", path: "/tmobile-bag-of-unlimited" },
  { label: "Budweiser: Lost Dog '15", path: "/budweiser-lost-dog" },
  { label: "M&M's: Just My Shell '12", path: "/mms-just-my-shell" },
  { label: "Volkswagen: The Force '11", path: "/volkswagen-the-force" },
  { label: "Bud Light: T-Pain Voice '10", path: "/bud-light-tpain" },
];

export default function Home() {
  return (
    <CommercialPage
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663141268147/CjuYXCgkmLCrJyNd.jpg"
      badge="Super Bowl LX · February 8, 2026 · 10th Super Bowl"
      title="Budweiser: American Icons"
      subtitle="Complete Production Credits"
      description="A Clydesdale and a bald eagle journey together across America, celebrating 150 years of Budweiser and the enduring spirit of American icons."
      kenRole="Writer"
      kenDescription="Ken 'Spanky' Moskowitz served as Writer on Budweiser's landmark Super Bowl LX commercial — his 10th Super Bowl contribution spanning 16 years. His storytelling helped craft the emotional narrative of the Clydesdale and eagle's journey, honoring 150 years of Budweiser's American heritage."
      kenAchievement="10th Super Bowl commercial — a milestone spanning 16 years (2010–2026)"
      youtubeId="a_mh-v02-Tw"
      youtubeTitle='Budweiser "American Icons" Super Bowl LX 2026 Commercial'
      airDate="Feb 8, 2026"
      superBowl="Super Bowl LX"
      achievement="10th Super Bowl"
      overviewParagraphs={[
        "Budweiser's Super Bowl LX commercial is a cinematic celebration of American heritage. A majestic Clydesdale and a bald eagle — two of America's most iconic symbols — embark on a journey together across sweeping American landscapes, from golden plains to mountain passes.",
        "The commercial marks Budweiser's 48th Super Bowl appearance and celebrates 150 years of the brand's history. It was created by BBDO New York and directed by Henry-Alex Rubin through SMUGGLER Productions.",
        "The ad reinforces Budweiser's long-standing commitment to American craftsmanship and its emotional connection with consumers, delivering a powerful message about resilience, partnership, and national pride.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "Anheuser-Busch InBev",
          credits: [
            { role: "Brand", name: "Budweiser (Anheuser-Busch InBev)" },
            { role: "VP, Marketing", name: "Kyle Norrington" },
            { role: "Director, Brand Marketing", name: "Monica Rustgi" },
            { role: "Senior Manager, Brand Marketing", name: "Lindsey Sherrill" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "BBDO New York",
          credits: [
            { role: "Agency", name: "BBDO New York" },
            { role: "Chief Creative Officer, Worldwide", name: "David Lubars" },
            { role: "Chief Creative Officer, NY", name: "Greg Hahn" },
            { role: "Executive Creative Director", name: "Danilo Boer" },
            { role: "Executive Creative Director", name: "Marcos Kotlhar" },
            { role: "Creative Director", name: "Max Geraldo" },
            { role: "Creative Director", name: "Renato Zandoná" },
            { role: "Writer", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Art Director", name: "Gustavo Dorietto" },
            { role: "Head of Production", name: "David Rolfe" },
            { role: "Executive Producer", name: "Diane Hill" },
            { role: "Senior Producer", name: "Emlyn Mackay" },
            { role: "Director of Music", name: "Rani Vaz" },
            { role: "Account Director", name: "Laure Doumit" },
            { role: "Account Manager", name: "Jillian Fischman" },
          ],
        },
        {
          title: "Production",
          subtitle: "SMUGGLER",
          credits: [
            { role: "Production Company", name: "SMUGGLER" },
            { role: "Director", name: "Henry-Alex Rubin" },
            { role: "Executive Producer", name: "Patrick Milling-Smith" },
            { role: "Executive Producer", name: "Brian Carmody" },
            { role: "Head of Production", name: "Lisa Rich" },
            { role: "Producer", name: "Andrew Colon" },
            { role: "Director of Photography", name: "Linus Sandgren" },
            { role: "Production Designer", name: "Naaman Marshall" },
          ],
        },
        {
          title: "Post-Production / VFX",
          subtitle: "The Mill",
          credits: [
            { role: "VFX Company", name: "The Mill" },
            { role: "VFX Supervisor", name: "Angus Kneale" },
            { role: "Executive Producer", name: "Sue Troyan" },
            { role: "Producer", name: "Anastasia Von Rahl" },
            { role: "Colorist", name: "Fergus McCall" },
          ],
        },
        {
          title: "Editorial",
          subtitle: "Whitehouse Post",
          credits: [
            { role: "Editorial Company", name: "Whitehouse Post" },
            { role: "Editor", name: "Neil Smith" },
            { role: "Executive Producer", name: "Joanna Manning" },
            { role: "Producer", name: "Kristin Branstetter" },
          ],
        },
        {
          title: "Music / Sound",
          subtitle: "Squeak E. Clean Studios",
          credits: [
            { role: "Music & Sound Company", name: "Squeak E. Clean Studios" },
            { role: "Music Supervisor", name: "Sam Spiegel" },
            { role: "Sound Design", name: "Squeak E. Clean Studios" },
            { role: "Mix", name: "Heard City" },
            { role: "Mixer", name: "Philip Loeb" },
          ],
        },
        {
          title: "Animal Welfare",
          subtitle: "American Humane",
          credits: [
            { role: "Animal Welfare Organization", name: "American Humane" },
            { role: "Animal Welfare Representative", name: "Chad Byrnes" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="a_mh-v02-Tw"
      schemaUploadDate="2026-02-09"
      schemaBreadcrumb="Budweiser: American Icons '26"
      schemaUrl="https://greatestsuperbowlads.com/budweiser-american-icons"
    />
  );
}
