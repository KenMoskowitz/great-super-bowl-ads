import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Award, Building2, Film, Video } from "lucide-react";

export default function VolkswagenTheForce() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1920&q=80)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 text-base px-4 py-1.5 bg-[#E32636] text-white border-[#FFD700]">
              Super Bowl XLV • February 6, 2011
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Volkswagen "The Force"
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-medium">
              Complete Production Credits
            </p>
            <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              A kid dressed as Darth Vader tries the Force - #9 on YouTube's Top 10 Videos of 2011
            </p>
          </div>
        </div>
      </header>

      <div className="container py-12 md:py-16">
        {/* Featured Writer */}
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
                    Ken "Spanky" Moskowitz brought his creative expertise to this memorable Super Bowl commercial, contributing to the writing and concept development that made it a cultural phenomenon.
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
                  src="https://www.youtube.com/embed/R55e-uHQna0"
                  title="Super Bowl Commercial"
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
                A kid dressed as Darth Vader tries the Force - #9 on YouTube's Top 10 Videos of 2011
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-[#E32636]/5 rounded-lg border border-[#E32636]/20">
                  <p className="text-sm text-muted-foreground mb-1">Air Date</p>
                  <p className="text-xl font-bold text-[#E32636]">2011</p>
                </div>
                <div className="text-center p-4 bg-[#E32636]/5 rounded-lg border border-[#E32636]/20">
                  <p className="text-sm text-muted-foreground mb-1">Brand</p>
                  <p className="text-xl font-bold text-[#E32636]">Volkswagen</p>
                </div>
                <div className="text-center p-4 bg-[#FFD700]/20 rounded-lg border border-[#FFD700]/40">
                  <p className="text-sm text-muted-foreground mb-1">Agency</p>
                  <p className="text-sm font-bold text-[#E32636]">Deutsch LA</p>
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
              <p className="text-muted-foreground text-base md:text-lg">Deutsch LA (Los Angeles, USA)</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Brand</span>
                    <span className="text-right text-sm md:text-base">Volkswagen</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Contributing Writer</span>
                    <span className="text-right text-sm md:text-base">Ken "Spanky" Moskowitz</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Agency</span>
                    <span className="text-right text-sm md:text-base">Deutsch LA</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
