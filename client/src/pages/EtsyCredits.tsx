import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Award, Building2, Clapperboard, Film, Music, Palette, Users, Video, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function EtsyCredits() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Navigation />
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663141268147/wDgpfeikURjrzeeq.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 text-base px-4 py-1.5">
              Super Bowl LVIII • February 11, 2024
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Etsy "Thank You, France"
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-medium">
              Complete Production Credits
            </p>
            <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              Etsy's first Super Bowl commercial celebrating the art of thoughtful gifting with a humorous trip back to the 1880s
            </p>
          </div>
        </div>
      </header>

      <div className="container py-12 md:py-16">
        {/* Featured Creative Writing Consultant */}
        <section className="mb-16">
          <Card className="shadow-lg border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle className="text-3xl md:text-4xl">Featured Creative Writing Consultant</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="bg-muted/50 p-6 md:p-8 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">Ken "Spanky" Moskowitz</h3>
                <div className="space-y-3 text-base md:text-lg">
                  <p className="leading-relaxed">
                    <strong>Role:</strong> Creative Writing Consultant
                  </p>
                  <p className="leading-relaxed">
                    Ken "Spanky" Moskowitz brought his extensive expertise to Etsy's debut Super Bowl commercial, helping craft the witty dialogue and comedic timing that made "Thank You, France" an instant classic.
                  </p>
                  <p className="leading-relaxed">
                    <strong>Career Highlights:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Veteran advertising creative with decades of Super Bowl experience</li>
                    <li>Co-founder of Ad Zombies, a creative consultancy</li>
                    <li>Known for his sharp wit and ability to elevate scripts with memorable moments</li>
                    <li>Contributed to multiple award-winning campaigns across major brands</li>
                  </ul>
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
                <Video className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Watch the Commercial</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/EgaRKjuYtRg"
                  title="Etsy Thank You France Super Bowl LVIII Commercial"
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
                <Video className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Commercial Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                Etsy's first-ever Super Bowl commercial takes viewers back to the 1880s when France gifted the United States the Statue of Liberty. The comedic spot captures the moment Americans realize they need to reciprocate with an equally thoughtful gift.
              </p>
              <p>
                After a moment of panic ("Aw, crap. Now we've gotta get France something"), someone suggests cheese—"They like cheese." Using Etsy's new Gift Mode feature, they select a beautifully crafted cheese board, which arrives in France to great acclaim: "Un plateau des fromages!"
              </p>
              <p>
                The commercial showcases Etsy's Gift Mode, a feature designed to help shoppers find the perfect gift by answering a few simple questions. Shot on location in Bucharest, Romania, the production featured meticulously crafted period sets and costumes that brought the 1880s to life with both historical authenticity and comedic flair.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Duration</p>
                  <p className="text-xl font-bold">30 seconds</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Air Date</p>
                  <p className="text-xl font-bold">Feb 11, 2024</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Event</p>
                  <p className="text-xl font-bold">Super Bowl LVIII</p>
                </div>
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Milestone</p>
                  <p className="text-xl font-bold">Etsy's 1st</p>
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
                <Building2 className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Agency / Creative Team</CardTitle>
              </div>
              <p className="text-muted-foreground text-base md:text-lg">Orchard (New York, USA)</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Chief Creative Officer</span>
                    <span className="text-right text-sm md:text-base">David Kolbusz</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Executive Creative Director</span>
                    <span className="text-right text-sm md:text-base">Jimm Lasser</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Creative Director</span>
                    <span className="text-right text-sm md:text-base">Heather Larimer</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Sr. Art Director</span>
                    <span className="text-right text-sm md:text-base">Kevin Igunbor</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Sr. Copywriter</span>
                    <span className="text-right text-sm md:text-base">Patrick Wells</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Creative Writing Consultant</span>
                    <span className="text-right text-sm md:text-base">Ken "Spanky" Moskowitz</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Head of Production</span>
                    <span className="text-right text-sm md:text-base">Jenn Pennington</span>
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
                <Film className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Production</CardTitle>
              </div>
              <p className="text-muted-foreground text-base md:text-lg">Biscuit Filmworks</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Director</span>
                    <span className="text-right text-sm md:text-base">Andreas Nilsson</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Founding Partner</span>
                    <span className="text-right text-sm md:text-base">Shawn Lacy</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Executive Producer</span>
                    <span className="text-right text-sm md:text-base">Holly Vega</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Head of Production</span>
                    <span className="text-right text-sm md:text-base">Sean Moody</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Producer</span>
                    <span className="text-right text-sm md:text-base">Jay Veal</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Production Supervisor</span>
                    <span className="text-right text-sm md:text-base">Luke Thornton</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Director of Photography</span>
                    <span className="text-right text-sm md:text-base">Nicolaj Bruel</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Production Designer</span>
                    <span className="text-right text-sm md:text-base">Peter Grant</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Wardrobe Stylist</span>
                    <span className="text-right text-sm md:text-base">Adina Bucur</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Hair Stylist</span>
                    <span className="text-right text-sm md:text-base">Margo Stefan</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Makeup Artists</span>
                    <span className="text-right text-sm md:text-base">Andrea Dardea, Claire De-Graft</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Service Company</span>
                    <span className="text-right text-sm md:text-base">Icon Films Sofia</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Post-Production */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Palette className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Post-Production / VFX</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">VFX / Color</span>
                    <span className="text-right text-sm md:text-base">Bacon X</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Editor</span>
                    <span className="text-right text-sm md:text-base">Ian MacKenzie @ MACKCUT</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Music / Sound */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Music className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Music / Sound</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Music</span>
                    <span className="text-right text-sm md:text-base">KO Music</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start border-b border-border pb-2">
                    <span className="font-semibold text-sm md:text-base">Sound</span>
                    <span className="text-right text-sm md:text-base">Barking Owl</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Client */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Client</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-start border-b border-border pb-2">
                  <span className="font-semibold text-sm md:text-base">Brand</span>
                  <span className="text-right text-sm md:text-base">Etsy</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-16">
          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Awards & Recognition</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-lg mb-1">Gold ANDY Award</p>
                  <p className="text-sm text-muted-foreground">Advertising Excellence</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="font-semibold text-lg mb-1">Craft Award</p>
                  <p className="text-sm text-muted-foreground">Creative Execution</p>
                </div>
              </div>
              <div className="mt-6">
                <p className="font-semibold mb-3">Press Coverage:</p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="outline">Wall Street Journal</Badge>
                  <Badge variant="outline">Adweek</Badge>
                  <Badge variant="outline">Ad Age</Badge>
                  <Badge variant="outline">Little Black Book</Badge>
                  <Badge variant="outline">Muse by Clio</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Related Projects */}
      <section className="mb-16">
        <Card className="shadow-lg bg-gradient-to-r from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl">More Ken Moskowitz Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <Link href="/">
              <a className="flex items-center justify-between p-6 bg-background rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div>
                  <h3 className="text-xl font-bold mb-2">Budweiser "American Icons"</h3>
                  <p className="text-muted-foreground">Super Bowl LX (2026) • Writer • 10th Super Bowl</p>
                </div>
                <ArrowRight className="h-6 w-6 text-primary" />
              </a>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 py-8 mt-16">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Complete production credits for Etsy "Thank You, France" Super Bowl LVIII (58) commercial</p>
          <p className="mt-2">Featuring Ken "Spanky" Moskowitz as Creative Writing Consultant</p>
        </div>
      </footer>
    </div>
  );
}
