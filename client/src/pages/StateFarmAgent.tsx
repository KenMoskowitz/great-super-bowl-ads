import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Award, Building2, Film, Music, Palette, Video } from "lucide-react";

export default function StateFarmAgent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 text-base px-4 py-1.5 bg-[#E32636] text-white border-[#FFD700]">
              Super Bowl LVIII • February 11, 2024 • #1 USA Today Ad Meter
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              State Farm "Agent State Farm"
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-medium">
              Complete Production Credits
            </p>
            <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              Arnold Schwarzenegger struggles with "neighbor," Danny DeVito saves the day in this #1 Ad Meter winner
            </p>
          </div>
        </div>
      </header>

      <div className="container py-12 md:py-16">
        {/* Featured Senior Copywriter */}
        <section className="mb-16">
          <Card className="shadow-lg border-[#E32636]/20">
            <CardHeader className="bg-gradient-to-r from-[#E32636]/10 to-[#FFD700]/5">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-[#E32636]" />
                <CardTitle className="text-3xl md:text-4xl">Featured Senior Copywriter</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="bg-muted/50 p-6 md:p-8 rounded-lg border-l-4 border-[#E32636]">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#E32636]">Ken "Spanky" Moskowitz</h3>
                <div className="space-y-3 text-base md:text-lg">
                  <p className="leading-relaxed">
                    <strong>Role:</strong> Senior Copywriter
                  </p>
                  <p className="leading-relaxed">
                    Ken "Spanky" Moskowitz contributed his legendary copywriting expertise to State Farm's record-breaking Super Bowl commercial, helping craft the comedic dialogue that made "Agent State Farm" the #1 ad of Super Bowl LVIII according to USA Today's Ad Meter.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Achievement:</strong> This commercial topped the USA Today Ad Meter survey, marking it as the most popular Super Bowl ad of 2024.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Video Section */}
        <section className="mb-16">
          <Card className="shadow-lg overflow-hidden">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Video className="h-7 w-7 text-[#E32636]" />
                <CardTitle className="text-2xl md:text-3xl">Watch the Commercial</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/86DNiIg3Lyk"
                  title="State Farm Agent State Farm Super Bowl LVIII Commercial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Commercial Overview */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Film className="h-7 w-7 text-[#E32636]" />
                <CardTitle className="text-2xl md:text-3xl">Commercial Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                State Farm's Super Bowl LVIII commercial features Arnold Schwarzenegger cast as Agent State Farm in a blockbuster action film. The humor centers on Arnold's iconic Austrian accent making it impossible for him to correctly pronounce "neighbor" in the brand's famous tagline "Like a good neighbor, State Farm is there."
              </p>
              <p>
                Despite the best efforts of the director and Jake from State Farm himself, Arnold's pronunciation comes out as "neighbaaa" every time. The production eventually reaches a compromise by bringing in Danny DeVito—Arnold's co-star from "Twins"—to deliver the line correctly, bringing the action-packed film to a satisfying close.
              </p>
              <p>
                The commercial topped USA Today's Ad Meter survey, making it the most popular Super Bowl ad of 2024. The reunion of Schwarzenegger and DeVito delighted audiences and showcased State Farm's commitment to being a good neighbor with both humor and heart.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="text-center p-4 bg-[#E32636]/5 rounded-lg border border-[#E32636]/20">
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="text-xl font-bold text-[#E32636]">60 seconds</p>
                </div>
                <div className="text-center p-4 bg-[#E32636]/5 rounded-lg border border-[#E32636]/20">
                  <p className="text-sm text-muted-foreground mb-1">Air Date</p>
                  <p className="text-xl font-bold text-[#E32636]">Feb 11, 2024</p>
                </div>
                <div className="text-center p-4 bg-[#E32636]/5 rounded-lg border border-[#E32636]/20">
                  <p className="text-sm text-muted-foreground mb-1">Event</p>
                  <p className="text-xl font-bold text-[#E32636]">Super Bowl LVIII</p>
                </div>
                <div className="text-center p-4 bg-[#FFD700]/20 rounded-lg border border-[#FFD700]/40">
                  <p className="text-sm text-muted-foreground mb-1">Achievement</p>
                  <p className="text-xl font-bold text-[#E32636]">#1 Ad Meter</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Agency / Creative Team */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-7 w-7 text-[#E32636]" />
                <CardTitle className="text-2xl md:text-3xl">Agency / Creative Team</CardTitle>
              </div>
              <p className="text-muted-foreground text-base md:text-lg">Highdive (Chicago, USA) • DDB • Backstory</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Creative Agency</span>
                    <span className="text-right text-sm md:text-base">Highdive</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Agency of Record</span>
                    <span className="text-right text-sm md:text-base">DDB</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Additional Agency</span>
                    <span className="text-right text-sm md:text-base">Backstory</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Senior Copywriter</span>
                    <span className="text-right text-sm md:text-base">Ken "Spanky" Moskowitz</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Talent Procurement</span>
                    <span className="text-right text-sm md:text-base">Creative License</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">CEO/Founder (Creative License)</span>
                    <span className="text-right text-sm md:text-base">Kevin McKiernan</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Post-Production / Editorial */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Palette className="h-7 w-7 text-[#E32636]" />
                <CardTitle className="text-2xl md:text-3xl">Post-Production / Editorial</CardTitle>
              </div>
              <p className="text-muted-foreground text-base md:text-lg">Cutters Studios • Sarofsky</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Editorial Company</span>
                    <span className="text-right text-sm md:text-base">Cutters Studios</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Executive Creative Director</span>
                    <span className="text-right text-sm md:text-base">Erin Sarofsky</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Executive Producer</span>
                    <span className="text-right text-sm md:text-base">Steven Anderson</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Creative Director</span>
                    <span className="text-right text-sm md:text-base">Stefan Draht</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Final Branding</span>
                    <span className="text-right text-sm md:text-base">Sarofsky</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Talent */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-7 w-7 text-[#E32636]" />
                <CardTitle className="text-2xl md:text-3xl">Featured Talent</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <p className="text-xl font-bold mb-2">Arnold Schwarzenegger</p>
                  <p className="text-sm text-muted-foreground">Agent State Farm</p>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <p className="text-xl font-bold mb-2">Danny DeVito</p>
                  <p className="text-sm text-muted-foreground">The Voice of Reason</p>
                </div>
                <div className="text-center p-6 bg-muted/50 rounded-lg">
                  <p className="text-xl font-bold mb-2">Jake from State Farm</p>
                  <p className="text-sm text-muted-foreground">Brand Icon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
