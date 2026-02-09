import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Award, Building2, Film, Music, Palette, Video } from "lucide-react";

export default function BudweiserClydesdale2022() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=80)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 text-base px-4 py-1.5 bg-[#E32636] text-white border-[#FFD700]">
              Super Bowl LVI • February 13, 2022
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Budweiser "A Clydesdale's Journey"
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-medium">
              Complete Production Credits
            </p>
            <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              Directed by Oscar-winner Chloé Zhao, a powerful story of resilience and friendship
            </p>
          </div>
        </div>
      </header>

      <div className="container py-12 md:py-16">
        {/* Featured Contributing Writer */}
        <section className="mb-16">
          <Card className="shadow-lg border-[#E32636]/20">
            <CardHeader className="bg-gradient-to-r from-[#E32636]/10 to-[#FFD700]/5">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-[#E32636]" />
                <CardTitle className="text-3xl md:text-4xl">Featured Contributing Writer</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="bg-muted/50 p-6 md:p-8 rounded-lg border-l-4 border-[#E32636]">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#E32636]">Ken "Spanky" Moskowitz</h3>
                <div className="space-y-3 text-base md:text-lg">
                  <p className="leading-relaxed">
                    <strong>Role:</strong> Contributing Writer
                  </p>
                  <p className="leading-relaxed">
                    Ken "Spanky" Moskowitz contributed his storytelling expertise to Budweiser's powerful Super Bowl comeback commercial, helping craft the emotional narrative that made "A Clydesdale's Journey" resonate with millions of viewers.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Significance:</strong> This marked Budweiser's return to the Super Bowl after a hiatus, delivering a message of American resilience during challenging times.
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
                  src="https://www.youtube.com/embed/H3WRqDrA0cY"
                  title="Budweiser A Clydesdale's Journey Super Bowl LVI Commercial"
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
                Directed by Academy Award-winning filmmaker Chloé Zhao, "A Clydesdale's Journey" tells the emotional story of one of Budweiser's iconic Clydesdale horses who suffers an injury while jumping a fence. During his rehabilitation, the Clydesdale forms a deep bond with a loyal dog who stays by his side throughout his recovery.
              </p>
              <p>
                Set to Gary Clark Jr.'s powerful live rendition of the national anthem, the commercial captures the horse's journey from injury through rehabilitation and back to strength. The narrative serves as a metaphor for American resilience and the power of companionship during difficult times.
              </p>
              <p>
                This commercial marked Budweiser's highly anticipated return to the Super Bowl after taking a hiatus. The brand chose to make a statement about perseverance and recovery, themes that resonated deeply with audiences emerging from challenging times. Chloé Zhao's cinematic direction elevated the spot into a moving piece of visual storytelling.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="text-center p-4 bg-[#E32636]/5 rounded-lg border border-[#E32636]/20">
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="text-xl font-bold text-[#E32636]">60 seconds</p>
                </div>
                <div className="text-center p-4 bg-[#E32636]/5 rounded-lg border border-[#E32636]/20">
                  <p className="text-sm text-muted-foreground mb-1">Air Date</p>
                  <p className="text-xl font-bold text-[#E32636]">Feb 13, 2022</p>
                </div>
                <div className="text-center p-4 bg-[#E32636]/5 rounded-lg border border-[#E32636]/20">
                  <p className="text-sm text-muted-foreground mb-1">Event</p>
                  <p className="text-xl font-bold text-[#E32636]">Super Bowl LVI</p>
                </div>
                <div className="text-center p-4 bg-[#FFD700]/20 rounded-lg border border-[#FFD700]/40">
                  <p className="text-sm text-muted-foreground mb-1">Milestone</p>
                  <p className="text-xl font-bold text-[#E32636]">BUD Return</p>
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
              <p className="text-muted-foreground text-base md:text-lg">VaynerMedia (New York, USA)</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Agency</span>
                    <span className="text-right text-sm md:text-base">VaynerMedia</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Contributing Writer</span>
                    <span className="text-right text-sm md:text-base">Ken "Spanky" Moskowitz</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Brand</span>
                    <span className="text-right text-sm md:text-base">Budweiser (Anheuser-Busch)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Production Company */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Film className="h-7 w-7 text-[#E32636]" />
                <CardTitle className="text-2xl md:text-3xl">Production</CardTitle>
              </div>
              <p className="text-muted-foreground text-base md:text-lg">Superprime • Rigby Industries</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Director</span>
                    <span className="text-right text-sm md:text-base">Chloé Zhao</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Production Company</span>
                    <span className="text-right text-sm md:text-base">Superprime</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Executive Producer</span>
                    <span className="text-right text-sm md:text-base">Charlotte Woodhead</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Production Company</span>
                    <span className="text-right text-sm md:text-base">Rigby Industries</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Head of Production</span>
                    <span className="text-right text-sm md:text-base">Alex Hughes</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Line Producer</span>
                    <span className="text-right text-sm md:text-base">Arlene McGann</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Production Supervisor</span>
                    <span className="text-right text-sm md:text-base">Ashley Holloway</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">1st AD</span>
                    <span className="text-right text-sm md:text-base">Anthony Dimino</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Music */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Music className="h-7 w-7 text-[#E32636]" />
                <CardTitle className="text-2xl md:text-3xl">Music</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-start border-b border-border pb-2">
                  <span className="font-semibold text-sm md:text-base">Featured Music</span>
                  <span className="text-right text-sm md:text-base">Gary Clark Jr. - "The Star-Spangled Banner" (Live)</span>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  Gary Clark Jr.'s powerful live rendition of the national anthem provides the emotional backbone for this story of American resilience.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
