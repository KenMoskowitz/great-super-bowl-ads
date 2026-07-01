/**
 * Volkswagen "The Force" — Super Bowl XLV (2011)
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
  { label: "Bud Light: T-Pain Voice '10", path: "/bud-light-tpain" },
];

export default function VolkswagenTheForce() {
  return (
    <CommercialPage
      heroImage="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&q=80"
      badge="Super Bowl XLV · February 6, 2011 · #9 YouTube Top 10 Videos of 2011"
      title="Volkswagen: The Force"
      subtitle="Complete Production Credits"
      description="A kid dressed as Darth Vader tries to use the Force on random objects around the house — and fails. When his father comes home in a Volkswagen Passat, the kid tries the Force on the car. He succeeds — or so he thinks."
      kenRole="Contributing Writer"
      kenDescription="Ken 'Spanky' Moskowitz contributed as a writer on Volkswagen's landmark Super Bowl XLV commercial, helping shape the charming story of a little Darth Vader who believes he has the Force — a concept that became the most viral Super Bowl ad of 2011 and one of the greatest of all time."
      kenAchievement="Voted #9 on YouTube's Top 10 Videos of 2011 — one of the most viral Super Bowl ads ever made, with over 60 million views"
      youtubeId="u48RXO2HzXo"
      videoSrc="/manus-storage/TheForce-VolkswagenCommercial_3dbbf3e3.mp4"
      youtubeTitle='Volkswagen "The Force" Super Bowl XLV 2011 Commercial'
      airDate="Feb 6, 2011"
      superBowl="Super Bowl XLV"
      achievement="#9 YouTube Top 10 of 2011"
      overviewParagraphs={[
        "A young boy dressed in a Darth Vader costume spends his day trying to use the Force on various objects around the house — the family dog, the washing machine, a sandwich, his baby sister — and fails each time. His frustration is palpable but adorable.",
        "When his father arrives home in a new Volkswagen Passat, the boy tries one more time — pointing his hands at the car. To his amazement, the car roars to life. What he doesn't know is that his father, watching from inside the house, used the car's remote start feature.",
        "The commercial was released online before the Super Bowl and immediately went viral, accumulating millions of views before it even aired on television. It was voted #9 on YouTube's Top 10 Videos of 2011 and is widely considered one of the greatest Super Bowl commercials ever made.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "Volkswagen of America",
          credits: [
            { role: "Brand", name: "Volkswagen of America" },
            { role: "VP, Marketing", name: "Tim Ellis" },
            { role: "Director, Brand Marketing", name: "Justin Osborne" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "Deutsch LA",
          credits: [
            { role: "Agency", name: "Deutsch LA" },
            { role: "Chief Creative Officer", name: "Mark Hunter" },
            { role: "Executive Creative Director", name: "Eric Hirshberg" },
            { role: "Creative Director", name: "Michael Kadin" },
            { role: "Creative Director", name: "Jason Elm" },
            { role: "Art Director", name: "Ryan Lehr" },
            { role: "Copywriter", name: "Josh Fell" },
            { role: "Contributing Writer", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Head of Production", name: "Vic Palumbo" },
            { role: "Executive Producer", name: "Paul Roy" },
            { role: "Account Director", name: "Cory Berger" },
          ],
        },
        {
          title: "Production",
          subtitle: "MJZ Productions",
          credits: [
            { role: "Production Company", name: "MJZ Productions" },
            { role: "Director", name: "Lance Acord" },
            { role: "Executive Producer", name: "David Zander" },
            { role: "Executive Producer", name: "Scott Howard" },
            { role: "Producer", name: "Laurie Boccaccio" },
            { role: "Director of Photography", name: "Lance Acord" },
          ],
        },
        {
          title: "Post-Production / Editorial",
          subtitle: "Rock Paper Scissors · Company 3",
          credits: [
            { role: "Editorial Company", name: "Rock Paper Scissors" },
            { role: "Editor", name: "Angus Wall" },
            { role: "Executive Producer", name: "Carol Lynn Weaver" },
            { role: "Color Company", name: "Company 3" },
            { role: "Colorist", name: "Stefan Sonnenfeld" },
            { role: "VFX", name: "The Mill" },
          ],
        },
        {
          title: "Music",
          subtitle: "Featured Track",
          credits: [
            { role: "Featured Music", name: "John Williams — The Imperial March (Star Wars)" },
            { role: "Music Licensing", name: "Walt Disney Music Company" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="u48RXO2HzXo"
      schemaUploadDate="2011-02-06"
      schemaBreadcrumb="Volkswagen: The Force '11"
      schemaUrl="https://greatestsuperbowlads.com/volkswagen-the-force"
    />
  );
}
