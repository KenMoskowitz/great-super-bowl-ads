import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Award, TrendingUp, Film, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function IndexHome() {
  const commercials = [
    {
      title: "Budweiser: American Icons",
      year: "2026",
      superbowl: "Super Bowl LX",
      path: "/budweiser-american-icons",
      role: "Writer",
      achievement: "10th Super Bowl",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663141268147/CjuYXCgkmLCrJyNd.jpg",
      description: "Clydesdale and eagle celebrate 150 years of Budweiser and American icons",
    },
    {
      title: "State Farm: Agent State Farm",
      year: "2024",
      superbowl: "Super Bowl LVIII",
      path: "/state-farm-agent",
      role: "Senior Copywriter",
      achievement: "#1 USA Today Ad Meter",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      description: "Arnold Schwarzenegger struggles with 'neighbor,' Danny DeVito saves the day",
    },
    {
      title: "Etsy: Thank You, France",
      year: "2024",
      superbowl: "Super Bowl LVIII",
      path: "/etsy-thank-you-france",
      role: "Creative Writing Consultant",
      achievement: "Etsy's 1st Super Bowl",
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663141268147/wDgpfeikURjrzeeq.jpg",
      description: "Americans realize they need to thank France for the Statue of Liberty with cheese",
    },
    {
      title: "Budweiser: A Clydesdale's Journey",
      year: "2022",
      superbowl: "Super Bowl LVI",
      path: "/budweiser-clydesdales-journey",
      role: "Contributing Writer",
      achievement: "Directed by Chloé Zhao",
      image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=80",
      description: "Injured Clydesdale befriends dog during rehab in powerful comeback commercial",
    },
    {
      title: "Bubly: Bublé vs. Bubly",
      year: "2019",
      superbowl: "Super Bowl LIII",
      path: "/bubly-buble",
      role: "Lead Writer",
      achievement: "Funniest Ad 2019",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      description: "Michael Bublé insists on pronouncing Bubly as 'Bublé' in hilarious debut",
    },
    {
      title: "T-Mobile: #BagOfUnlimited",
      year: "2017",
      superbowl: "Super Bowl LI",
      path: "/tmobile-bag-of-unlimited",
      role: "Senior Copywriter",
      achievement: "Martha & Snoop",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
      description: "Martha Stewart and Snoop Dogg crack weed jokes promoting unlimited data",
    },
    {
      title: "Budweiser: Lost Dog",
      year: "2015",
      superbowl: "Super Bowl XLIX",
      path: "/budweiser-lost-dog",
      role: "Contributing Writer",
      achievement: "Emotional Classic",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
      description: "Yellow Labrador gets lost and finds his way home with Clydesdales' help",
    },
    {
      title: "M&M's: Just My Shell",
      year: "2012",
      superbowl: "Super Bowl XLVI",
      path: "/mms-just-my-shell",
      role: "Lead Writer",
      achievement: "LMFAO Soundtrack",
      image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=800&q=80",
      description: "Red M&M tears off shell and dances to 'Sexy and I Know It'",
    },
    {
      title: "Volkswagen: The Force",
      year: "2011",
      superbowl: "Super Bowl XLV",
      path: "/volkswagen-the-force",
      role: "Contributing Writer",
      achievement: "#9 YouTube Top 10 2011",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
      description: "Kid dressed as Darth Vader tries the Force on his dad's Volkswagen",
    },
    {
      title: "Bud Light: T-Pain Voice",
      year: "2010",
      superbowl: "Super Bowl XLIV",
      path: "/bud-light-tpain",
      role: "Senior Copywriter",
      achievement: "T-Pain Cameo",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
      description: "Men start talking like T-Pain after hearing about Bud Light party",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-[#E32636] via-[#C41E3A] to-[#8B0000] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="flex justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-[#FFD700] text-[#E32636] font-bold border-2 border-white">
                10 Super Bowl Commercials • 2010-2026
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Ken "Spanky" Moskowitz
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-[#FFD700]">
              Super Bowl Portfolio
            </p>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed">
              Explore the complete production credits for 10 iconic Super Bowl commercials spanning 16 years, featuring work with Budweiser, State Farm, Etsy, Volkswagen, M&M's, T-Mobile, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <p className="text-sm text-white/80">Total Commercials</p>
                <p className="text-3xl font-bold text-[#FFD700]">10</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <p className="text-sm text-white/80">Years</p>
                <p className="text-3xl font-bold text-[#FFD700]">2010-2026</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
                <p className="text-sm text-white/80">Brands</p>
                <p className="text-3xl font-bold text-[#FFD700]">8</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="container py-16 md:py-20">
        <Card className="shadow-2xl border-[#E32636]/20">
          <CardHeader className="bg-gradient-to-r from-[#E32636]/10 to-[#FFD700]/5">
            <div className="flex items-center gap-3 mb-2">
              <Award className="h-8 w-8 text-[#E32636]" />
              <CardTitle className="text-3xl md:text-4xl">About Ken "Spanky" Moskowitz</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                Ken "Spanky" Moskowitz is a veteran advertising creative with an extraordinary track record of Super Bowl success. Over 16 years, he has contributed his writing expertise to 10 Super Bowl commercials, working with some of America's most iconic brands and helping create ads that have become cultural touchstones.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                His work spans multiple roles—from Lead Writer to Senior Copywriter to Creative Writing Consultant—showcasing his versatility and deep understanding of what makes a Super Bowl commercial resonate with millions of viewers. Ken's commercials have topped USA Today's Ad Meter, ranked on YouTube's Top 10 Videos, and been celebrated for their humor, heart, and cultural impact.
              </p>
              <p className="text-lg leading-relaxed">
                As co-founder of <a href="https://www.adzombies.com" target="_blank" rel="noopener noreferrer" className="text-[#E32636] font-semibold hover:underline">Ad Zombies</a>, a creative consultancy, Ken continues to bring his sharp wit and storytelling prowess to brands looking to make an impact on advertising's biggest stage.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Commercials Grid */}
      <section className="container py-16 md:py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Film className="h-10 w-10 text-[#E32636]" />
            <h2 className="text-4xl md:text-5xl font-bold">Complete Portfolio</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click any commercial to view complete production credits, watch the ad, and explore behind-the-scenes details
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commercials.map((commercial, index) => (
            <Link key={index} href={commercial.path}>
              <a className="group">
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-[#E32636]/30 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={commercial.image} 
                      alt={commercial.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#E32636] text-white font-bold">
                        {commercial.year}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm">{commercial.superbowl}</p>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-[#E32636] transition-colors">
                      {commercial.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="outline" className="border-[#E32636] text-[#E32636]">
                        {commercial.role}
                      </Badge>
                      <Badge variant="secondary" className="bg-[#FFD700]/20 text-[#E32636]">
                        {commercial.achievement}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {commercial.description}
                    </p>
                    <div className="flex items-center text-[#E32636] font-semibold text-sm group-hover:gap-2 transition-all">
                      View Credits
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-[#E32636] to-[#8B0000] py-16 md:py-20 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="h-10 w-10 text-[#FFD700]" />
              <h2 className="text-4xl md:text-5xl font-bold">Portfolio Highlights</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <p className="text-6xl font-bold text-[#FFD700] mb-2">10</p>
              <p className="text-lg text-white/90">Super Bowl Commercials</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold text-[#FFD700] mb-2">16</p>
              <p className="text-lg text-white/90">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold text-[#FFD700] mb-2">8</p>
              <p className="text-lg text-white/90">Major Brands</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold text-[#FFD700] mb-2">#1</p>
              <p className="text-lg text-white/90">Ad Meter Winner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container text-center">
          <p className="text-lg mb-4">
            <strong>Ken "Spanky" Moskowitz</strong> • Super Bowl Portfolio
          </p>
          <p className="text-sm text-gray-400 mb-4">
            Co-founder of <a href="https://www.adzombies.com" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">Ad Zombies</a>
          </p>
          <p className="text-xs text-gray-500">
            © 2026 All Rights Reserved • Complete Production Credits for 10 Super Bowl Commercials
          </p>
        </div>
      </footer>
    </div>
  );
}
