/**
 * Budweiser "Lost Dog" — Super Bowl XLIX (2015)
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
  { label: "M&M's: Just My Shell '12", path: "/mms-just-my-shell" },
  { label: "Volkswagen: The Force '11", path: "/volkswagen-the-force" },
  { label: "Bud Light: T-Pain Voice '10", path: "/bud-light-tpain" },
];

export default function BudweiserLostDog() {
  return (
    <CommercialPage
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80"
      badge="Super Bowl XLIX · February 1, 2015 · #1 Most Shared Super Bowl Ad"
      title="Budweiser: Lost Dog"
      subtitle="Complete Production Credits"
      description="A little yellow Labrador puppy gets lost and must find his way home — guided by the loyal Budweiser Clydesdales. The most emotionally powerful Super Bowl ad of 2015."
      kenRole="Contributing Writer"
      kenDescription="Ken 'Spanky' Moskowitz contributed as a writer on Budweiser's beloved 'Lost Dog' commercial, helping craft the emotional narrative that made this puppy-and-Clydesdale story the most shared Super Bowl ad of 2015 and one of the most beloved in the franchise's history."
      kenAchievement="The most shared Super Bowl ad of 2015 — watched over 50 million times online and beloved by audiences worldwide"
      thumbnailImage="/thumbnails/budweiser-lost-dog.jpg"
      youtubeId="Tu10xwlwWEk"
      videoSrc="/manus-storage/BudweiserLostDogSuperBowlCommercial_ffffe0cc.mp4"
      youtubeTitle='Budweiser "Lost Dog" Super Bowl XLIX 2015 Commercial'
      airDate="Feb 1, 2015"
      superBowl="Super Bowl XLIX"
      achievement="#1 Most Shared 2015"
      overviewParagraphs={[
        "A little yellow Labrador puppy accidentally gets separated from his owner and finds himself lost and alone. The puppy faces a series of challenges trying to find his way home — including a terrifying encounter with a wolf — before being rescued by the iconic Budweiser Clydesdales.",
        "The commercial was the follow-up to Budweiser's hugely successful 'Puppy Love' ad from Super Bowl XLVIII (2014), and it delivered an even more emotionally charged story. The combination of the adorable puppy and the majestic Clydesdales proved irresistible to audiences.",
        "Created by BBDO New York and directed by Jake Scott, 'Lost Dog' became the most shared Super Bowl ad of 2015, accumulating over 50 million online views. It reinforced Budweiser's mastery of emotional storytelling and its unique bond with American audiences.",
      ]}
      creditSections={[
        {
          title: "Brand / Client",
          subtitle: "Anheuser-Busch InBev",
          credits: [
            { role: "Brand", name: "Budweiser (Anheuser-Busch InBev)" },
            { role: "VP, Marketing", name: "Brian Perkins" },
            { role: "Director, Brand Marketing", name: "Rob McCarthy" },
          ],
        },
        {
          title: "Agency / Creative Team",
          subtitle: "BBDO New York",
          credits: [
            { role: "Agency", name: "BBDO New York" },
            { role: "Chief Creative Officer, Worldwide", name: "David Lubars" },
            { role: "Chief Creative Officer, NY", name: "Greg Hahn" },
            { role: "Executive Creative Director", name: "Matt MacDonald" },
            { role: "Creative Director / Copywriter", name: "Joao Coutinho" },
            { role: "Creative Director / Art Director", name: "Gustavo Sarkis" },
            { role: "Contributing Writer", name: 'Ken "Spanky" Moskowitz', highlight: true },
            { role: "Head of Production", name: "David Rolfe" },
            { role: "Executive Producer", name: "Diane Hill" },
          ],
        },
        {
          title: "Production",
          subtitle: "RSA Films",
          credits: [
            { role: "Production Company", name: "RSA Films" },
            { role: "Director", name: "Jake Scott" },
            { role: "Executive Producer", name: "Jules Daly" },
            { role: "Producer", name: "David Mitchell" },
            { role: "Director of Photography", name: "Chris Soos" },
          ],
        },
        {
          title: "Post-Production / Editorial",
          subtitle: "Arcade Edit · Company 3",
          credits: [
            { role: "Editorial Company", name: "Arcade Edit" },
            { role: "Editor", name: "Geoff Hounsell" },
            { role: "Executive Producer", name: "Damian Stevens" },
            { role: "Color Company", name: "Company 3" },
            { role: "Colorist", name: "Tom Poole" },
            { role: "VFX", name: "The Mill" },
          ],
        },
        {
          title: "Music / Sound",
          subtitle: "Featured Performance",
          credits: [
            { role: "Featured Music", name: "Sleeping with Sirens — I'd Rather Drown" },
            { role: "Sound Design & Mix", name: "Heard City" },
            { role: "Mixer", name: "Philip Loeb" },
          ],
        },
      ]}
      relatedLinks={relatedLinks}
      schemaVideoId="Tu10xwlwWEk"
      schemaUploadDate="2015-02-01"
      schemaBreadcrumb="Budweiser: Lost Dog '15"
      schemaUrl="https://greatestsuperbowlads.com/budweiser-lost-dog"
    />
  );
}
