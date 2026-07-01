/**
 * Budweiser "A Clydesdale's Journey" — Super Bowl LVI (2022)
 * Uses CommercialPage template for consistent layout across all 10 commercial pages.
 */
import CommercialPage from "@/components/CommercialPage";

const relatedLinks = [
  { label: "Budweiser: American Icons '26", path: "/budweiser-american-icons" },
  { label: "State Farm: Agent State Farm '24", path: "/state-farm-agent" },
  { label: "Etsy: Thank You, France '24", path: "/etsy-thank-you-france" },
  { label: "Bubly: Bublé vs. Bubly '19", path: "/bubly-buble" },
  { label: "T-Mobile: #BagOfUnlimited '17", path: "/tmobile-bag-of-unlimited" },
  { label: "Budweiser: Lost Dog '15", path: "/budweiser-lost-dog" },
  { label: "M&M's: Just My Shell '12", path: "/mms-just-my-shell" },
  { label: "Volkswagen: The Force '11", path: "/volkswagen-the-force" },
  { label: "Bud Light: T-Pain Voice '10", path: "/bud-light-tpain" },
];

export default function BudweiserClydesdale2022() {
  return (
    <CommercialPage
      heroImage="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=80"
      badge="Super Bowl LVI · February 13, 2022 · Directed by Chloé Zhao"
      title="Budweiser: A Clydesdale's Journey"
      subtitle="Complete Production Credits"
      description="An injured Clydesdale finds friendship and healing in an unlikely companion — a loyal dog — in this emotional comeback story directed by Oscar winner Chloé Zhao."
      kenRole="Contributing Writer"
      kenDescription="Ken 'Spanky' Moskowitz contributed his storytelling expertise as Contributing Writer on Budweiser's powerful Super Bowl LVI commercial, helping shape the emotional narrative arc of the Clydesdale's recovery and the bond formed with a loyal canine companion."
      kenAchievement="One of Ken's 10 Super Bowl contributions — part of his long creative partnership with Budweiser's iconic Clydesdale franchise"
      thumbnailImage="/thumbnails/budweiser-clydesdales-journey.jpg"
      youtubeId="H3WRqDrA0cY"
      videoSrc="/manus-storage/SuperBowlLVI(56)Commercial_Budweiser-AClydesdale'sJourney(2022)_984b63a5.mp4"
      youtubeTitle="Budweiser A Clydesdale's Journey Super Bowl LVI 2022 Commercial"
      airDate="Feb 13, 2022"
      superBowl="Super Bowl LVI"
      achievement="Directed by Chloé Zhao"
      overviewParagraphs={[
        "Directed by Academy Award-winning filmmaker Chloé Zhao, 'A Clydesdale's Journey' tells the emotional story of one of Budweiser's iconic Clydesdale horses who suffers an injury while jumping a fence. During his rehabilitation, the Clydesdale forms a deep bond with a loyal dog who stays by his side throughout his recovery.",
        "Set to Gary Clark Jr.'s powerful live rendition of the national anthem, the commercial captures the horse's journey from injury through rehabilitation and back to strength. The narrative serves as a metaphor for American resilience and the power of companionship during difficult times.",
        "This commercial marked Budweiser's highly anticipated return to the Super Bowl after taking a hiatus. Chloé Zhao's cinematic direction elevated the spot into a moving piece of visual storytelling that resonated deeply with audiences.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "Anheuser-Busch InBev",
          credits: [
            { role: "Brand", name: "Budweiser (Anheuser-Busch InBev)" },
            { role: "VP, Marketing", name: "Monica Rustgi" },
            { role: "Director, Brand Marketing", name: "Lindsey Sherrill" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "VaynerMedia",
          credits: [
            { role: "Agency", name: "VaynerMedia" },
            { role: "Contributing Writer", name: 'Ken "Spanky" Moskowitz', highlight: true },
          ],
        },
        {
          title: "Production",
          subtitle: "Superprime · Rigby Industries",
          credits: [
            { role: "Director", name: "Chloé Zhao" },
            { role: "Production Company", name: "Superprime" },
            { role: "Production Company", name: "Rigby Industries" },
            { role: "Executive Producer", name: "Charlotte Woodhead" },
            { role: "Head of Production", name: "Alex Hughes" },
            { role: "Line Producer", name: "Arlene McGann" },
            { role: "Production Supervisor", name: "Ashley Holloway" },
            { role: "1st AD", name: "Anthony Dimino" },
          ],
        },
        {
          title: "Music",
          subtitle: "Featured Performance",
          credits: [
            { role: "Featured Music", name: "Gary Clark Jr. — The Star-Spangled Banner (Live)" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="H3WRqDrA0cY"
      schemaUploadDate="2022-02-13"
      schemaBreadcrumb="Budweiser: A Clydesdale's Journey '22"
      schemaUrl="https://greatestsuperbowlads.com/budweiser-clydesdales-journey"
    />
  );
}
