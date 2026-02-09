import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Award, Film, Music, Palette, Users, Video, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-20 md:py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663141268147/CjuYXCgkmLCrJyNd.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4 text-base px-4 py-1.5">
              Super Bowl LX • February 8, 2026
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Budweiser "American Icons"
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-medium">
              Complete Production Credits
            </p>
            <p className="text-base md:text-lg text-white/85 max-w-3xl mx-auto leading-relaxed">
              Celebrating 150 years of Budweiser and America's 250th birthday with the iconic Clydesdale and Bald Eagle
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 md:py-20">
        {/* Featured Writer Section */}
        <section className="mb-16">
          <Card className="border-2 border-primary/20 shadow-xl bg-card/80 backdrop-blur">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-2">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle className="text-3xl md:text-4xl">Featured Writer</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                      Ken "Spanky" Moskowitz
                    </h2>
                    <p className="text-xl font-semibold text-muted-foreground">Writer</p>
                  </div>
                  <Badge variant="default" className="text-lg px-6 py-3 self-start md:self-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    10th Super Bowl Contribution
                  </Badge>
                </div>
                
                <Separator className="my-6" />
                
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Career Highlights:</p>
                    <ul className="space-y-1.5 text-muted-foreground">
                      <li>• Nearly 40 years in creative advertising</li>
                      <li>• Over 100,000 ads created</li>
                      <li>• $300+ billion in client revenue generated</li>
                      <li>• Founder & CCO of Ad Zombies</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Major Brands:</p>
                    <ul className="space-y-1.5 text-muted-foreground">
                      <li>• Budweiser, Coca-Cola, Frito-Lay</li>
                      <li>• NBA, NFL, MLB, ESPN Sports</li>
                      <li>• Chevrolet, Samuel Adams, Indy 500</li>
                      <li>• M&M Mars, Häagen-Dazs, Tampax</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Author:</span> "Jab Till It Hurts: How Following Gary Vaynerchuk's Advice Helped Me Build A 7-Figure Brand"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <span className="font-semibold text-foreground">Contact:</span> ken@adzombies.com | 
                    <span className="ml-2"><span className="font-semibold text-foreground">Social:</span> @spankymoskowitz</span>
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
                <Video className="h-7 w-7 text-primary" />
                <CardTitle className="text-2xl md:text-3xl">Watch the Commercial</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/a_mh-v02-Tw"
                  title="Budweiser Super Bowl LX American Icons Commercial"
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
                <CardTitle className="text-2xl md:text-3xl">About the Commercial</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">"American Icons"</span> is Budweiser's 60-second Super Bowl LX commercial celebrating the brand's 150th anniversary and America's 250th birthday. The spot features the iconic Budweiser Clydesdales in their 48th national Super Bowl appearance alongside an American Bald Eagle under the care of the American Eagle Foundation.
              </p>
              <p>
                The heartwarming story chronicles an unlikely friendship between a Clydesdale foal and a baby eagle, set to Lynyrd Skynyrd's "Free Bird." The commercial showcases their journey from vulnerable youngsters to majestic symbols of American strength and freedom.
              </p>
              <p>
                <span className="font-semibold text-foreground">Key Details:</span> The eagle, named Lincoln, was rescued in Tennessee and trained by the American Eagle Foundation. He serves as the mascot for Philadelphia Eagles home games. The commercial was filmed in the St. Louis countryside and features real-life Budweiser barley farmer Brian Fransen.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="outline">60-second spot</Badge>
                <Badge variant="outline">Super Bowl LX</Badge>
                <Badge variant="outline">150th Anniversary</Badge>
                <Badge variant="outline">Made of America Campaign</Badge>
                <Badge variant="outline">Free Bird by Lynyrd Skynyrd</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Production Credits Grid */}
        <section className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Complete Production Credits</h2>
            <p className="text-muted-foreground text-lg">The talented team behind "American Icons"</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Brand Team */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Brand: Budweiser</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Kyle Norrington</p>
                    <p className="text-muted-foreground">Chief Commercial Officer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Todd Allen</p>
                    <p className="text-muted-foreground">SVP of Marketing for Budweiser</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Kristina Zackler</p>
                    <p className="text-muted-foreground">Head of Marketing</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Veronica Sperry</p>
                    <p className="text-muted-foreground">Marketing Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jamie Murray</p>
                    <p className="text-muted-foreground">Brand Team</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Maura Larkin</p>
                    <p className="text-muted-foreground">Brand Manager</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Lacey Clifford</p>
                    <p className="text-muted-foreground">Communications Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Justin DeMarco</p>
                    <p className="text-muted-foreground">Communications Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Delaney Adams</p>
                    <p className="text-muted-foreground">Partnerships</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Naveen Sood</p>
                    <p className="text-muted-foreground">Media Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Eric Li</p>
                    <p className="text-muted-foreground">Agency Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agency Creative */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Palette className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Agency: BBDO New York</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Michael Aimette</p>
                    <p className="text-muted-foreground">Chief Creative Officer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Danilo Boer</p>
                    <p className="text-muted-foreground">Chairman</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Alexandre Abrantes</p>
                    <p className="text-muted-foreground">Executive Creative Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jono Flannery</p>
                    <p className="text-muted-foreground">Group Creative Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Kevin Watkins</p>
                    <p className="text-muted-foreground">Group Creative Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">EJ Lee</p>
                    <p className="text-muted-foreground">Creative Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Joey Monteverde</p>
                    <p className="text-muted-foreground">Creative Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Nick Williams</p>
                    <p className="text-muted-foreground">Head of Production</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Daniel Roversi</p>
                    <p className="text-muted-foreground">Integrated Producer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jenna Ramon</p>
                    <p className="text-muted-foreground">Producer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Emma Armstrong</p>
                    <p className="text-muted-foreground">Chief Executive Officer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Todd Sussman</p>
                    <p className="text-muted-foreground">Chief Strategy Officer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Production Company */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Film className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Production: SMUGGLER</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Henry-Alex Rubin</p>
                    <p className="text-muted-foreground">Director (Academy Award-nominated, Emmy Award-winning)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Patrick Milling-Smith</p>
                    <p className="text-muted-foreground">Founder</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sue Yeon Ahn</p>
                    <p className="text-muted-foreground">Managing Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Drew Santarsiero</p>
                    <p className="text-muted-foreground">Executive Producer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Salli Zilles</p>
                    <p className="text-muted-foreground">Line Producer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Anthony Dimino</p>
                    <p className="text-muted-foreground">1st AD</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ryley Brown</p>
                    <p className="text-muted-foreground">Director of Photography</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Justin Allen</p>
                    <p className="text-muted-foreground">Production Designer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Young-Ah Kim</p>
                    <p className="text-muted-foreground">Costume Designer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ayumi Moore</p>
                    <p className="text-muted-foreground">Costume Designer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Tara Loren</p>
                    <p className="text-muted-foreground">Makeup Artist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Post Production */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Video className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Post Production: Time Based Arts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Sheldon Gardner</p>
                    <p className="text-muted-foreground">VFX Supervisor & Creative Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Dave Hunt</p>
                    <p className="text-muted-foreground">Editor</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Nick Smalley</p>
                    <p className="text-muted-foreground">Animal Lead</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mike Battcock</p>
                    <p className="text-muted-foreground">CG Supervisor</p>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">2D Artists:</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Jasmine Cooper, Lucy Lawerence, Olivia O'Neil, Matt Shires, Viola Bascombe, Frankie Foster, Ross Ferguson, Manolo Perez, Liam Doyle, Miguel Carballal, Sarah Breakwell, Tanguy Lemonnier, Billy Stockwell, Chris Wood
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">3D Artists:</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Hendrik Kramer, Aksynia Gatsenko, Oliver Lémery, Federico Vanone, Joe Ibbett, Ian Baird, Bethan Williams, Elia Göttlicher, Teodora Retegan, Ashley West, Ihor Obukhovskyi, Ben Cantor, Jake Thompson, Francesco Barbera, Gaël Kerchenbaum, Tom Keijer, Victor Vinyals, Dan Lane, Alastair Hearsum, Joe Trimby
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Editorial */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Film className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Editorial: Work USA</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Neil Smith</p>
                    <p className="text-muted-foreground">Editor</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fatos Marishta</p>
                    <p className="text-muted-foreground">Cut Assistant</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Chris Debreutel</p>
                    <p className="text-muted-foreground">Head of Production</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Alejandra Alarcon</p>
                    <p className="text-muted-foreground">Executive Producer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Victor Medina</p>
                    <p className="text-muted-foreground">Producer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Erica Thompson</p>
                    <p className="text-muted-foreground">Managing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Music & Sound */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Music className="h-6 w-6 text-primary" />
                  <CardTitle className="text-xl">Music & Sound: Soundtree</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Luke Fabia</p>
                    <p className="text-muted-foreground">Music Producer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Peter Raeburn</p>
                    <p className="text-muted-foreground">Music Producer & Creative Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">John Mouroumes</p>
                    <p className="text-muted-foreground">Music Producer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Maddie Stephenson</p>
                    <p className="text-muted-foreground">Music Mixer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Gabriel Firmin</p>
                    <p className="text-muted-foreground">Music Producer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Henning Knoepfel</p>
                    <p className="text-muted-foreground">Sound Designer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jack Patterson</p>
                    <p className="text-muted-foreground">Sound Designer</p>
                  </div>
                  <Separator className="my-4" />
                  <div>
                    <p className="font-semibold text-foreground">Featured Music:</p>
                    <p className="text-muted-foreground">"Free Bird" by Lynyrd Skynyrd</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Credits */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Clydesdale Handlers */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Clydesdale Handlers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Jon Pate</p>
                    <p className="text-muted-foreground">Operations Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Coordinators:</p>
                    <p className="text-muted-foreground">
                      Dave Hennen, Chris Wiegert, Dennis Knepp, Walter Graber, Andrew LaCrosse, Kate Wiltshire, Robin Wiltshire
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* American Eagle Foundation */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">American Eagle Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Jessica A Hall</p>
                    <p className="text-muted-foreground">Chief Executive Officer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Katelyn Jennings</p>
                    <p className="text-muted-foreground">Chief Operating Officer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Bailey Hall</p>
                    <p className="text-muted-foreground">Team Member</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Ryan Chamberlain</p>
                    <p className="text-muted-foreground">Team Member</p>
                  </div>
                  <Separator className="my-4" />
                  <p className="text-muted-foreground italic">
                    The American Bald Eagle "Lincoln" was rescued in Tennessee and trained for 5 years. He serves as the mascot for Philadelphia Eagles home games.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* American Humane */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">American Humane</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Marean Spero Steen</p>
                    <p className="text-muted-foreground">Vice President</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Chad Byrnes</p>
                    <p className="text-muted-foreground">Project Manager</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Amanda Goldman</p>
                    <p className="text-muted-foreground">Marketing Director</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Devan Costello-Mays</p>
                    <p className="text-muted-foreground">Social Media</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* On-Screen Talent */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">On-Screen Talent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Brian Fransen</p>
                    <p className="text-muted-foreground">Real-life Budweiser barley farmer</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Jack Geren (@jackgeren)</p>
                    <p className="text-muted-foreground">Farmer with "sun in his eyes"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer Info */}
        <section className="mt-20 text-center space-y-6 pb-12">
          <Separator className="mb-8" />
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold">About This Commercial</h3>
            <p className="text-muted-foreground leading-relaxed">
              "American Icons" aired during Super Bowl LX on February 8, 2026, marking Budweiser's 150th anniversary and celebrating America's 250th birthday. The 60-second spot was part of Budweiser's "Made of America" campaign and featured the Budweiser Clydesdales in their 48th national Super Bowl appearance.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Badge variant="secondary">Views: 4.5M+</Badge>
              <Badge variant="secondary">Likes: 45K+</Badge>
              <Badge variant="secondary">Released: January 26, 2026</Badge>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2026 Budweiser Super Bowl LX "American Icons" Production Credits</p>
          <p className="mt-2">For 150 Years, This Bud's For You</p>
        </div>
      </footer>
    </div>
  );
}
