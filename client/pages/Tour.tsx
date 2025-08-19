import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink, Clock } from "lucide-react";

export default function Tour() {
  const upcomingShows = [
    {
      id: "featured",
      date: "2024-10-10",
      venue: "Het Depot & Kingstep",
      city: "Leuven, Belgium",
      ticketLink: "https://www.hetdepot.be",
      time: "TBA",
      status: "On Sale",
      featured: true,
      event: "Dub Unit",
      supportingActs: "w/ Macka B & The Roots Ragga Band, Reemshot",
      poster: "https://cdn.builder.io/api/v1/image/assets%2F76e39d6cb5b24501bed5149204e569f5%2F95089408cefb4dd5898cd1de43b15593?format=webp&width=800"
    },
    {
      id: "1",
      date: "2024-11-15",
      venue: "Reggae Cafe",
      city: "Amsterdam, Netherlands",
      ticketLink: "#",
      time: "9:00 PM",
      status: "On Sale",
    },
    {
      id: "2",
      date: "2024-11-22",
      venue: "Dub Club",
      city: "London, UK",
      ticketLink: "#",
      time: "8:00 PM",
      status: "Pre-Sale",
    },
    {
      id: "3",
      date: "2024-12-01",
      venue: "Rasta Foundation",
      city: "Berlin, Germany",
      ticketLink: "#",
      time: "9:30 PM",
      status: "On Sale",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Tour Dates</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Catch Angus Digital live at these upcoming venues. Experience the full energy
              of dub and reggae fusion in person.
            </p>
          </div>

          {/* Featured Show with Poster */}
          {upcomingShows.find(show => show.featured) && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 bg-clip-text text-transparent">
                Featured Event
              </h2>
              <Card className="max-w-4xl mx-auto bg-gradient-to-br from-red-600/10 to-green-500/10 border-red-600/20">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="order-2 lg:order-1">
                      {(() => {
                        const featuredShow = upcomingShows.find(show => show.featured)!;
                        return (
                          <div>
                            <div className="text-primary font-bold text-xl mb-2">
                              {new Date(featuredShow.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </div>
                            <h3 className="text-3xl font-bold mb-2">{featuredShow.event}</h3>
                            <div className="text-xl font-semibold mb-2">{featuredShow.venue}</div>
                            <div className="flex items-center text-muted-foreground mb-2">
                              <MapPin className="w-5 h-5 mr-2" />
                              {featuredShow.city}
                            </div>
                            <div className="text-lg text-muted-foreground mb-4">
                              {featuredShow.supportingActs}
                            </div>
                            <div className="flex gap-4">
                              <Button size="lg" className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-500" asChild>
                                <a href="https://apps.ticketmatic.com/widgets/hetdepot/flow/feest?event=697505918189&l=en#!/addtickets" target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-5 h-5 mr-2" />
                                  Get Tickets
                                </a>
                              </Button>
                              <Button size="lg" variant="outline" asChild>
                                <a href="https://www.hetdepot.be/over-het-depot" target="_blank" rel="noopener noreferrer">
                                  <MapPin className="w-5 h-5 mr-2" />
                                  Venue Info
                                </a>
                              </Button>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                    <div className="order-1 lg:order-2">
                      <img
                        src={upcomingShows.find(show => show.featured)?.poster}
                        alt="Dub Unit Event Poster"
                        className="w-full max-w-md mx-auto rounded-lg shadow-2xl border-2 border-primary/30"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          <div className="space-y-4 mb-12">
            {upcomingShows.filter(show => !show.featured).map((show) => (
              <Card key={show.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="text-primary font-bold text-lg min-w-32">
                          {new Date(show.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-xl mb-1">{show.venue}</h3>
                          <div className="flex items-center text-muted-foreground mb-1">
                            <MapPin className="w-4 h-4 mr-2" />
                            {show.city}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            {show.time}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            show.status === 'On Sale' ? 'bg-primary/20 text-primary' :
                            show.status === 'Sold Out' ? 'bg-red-100 text-red-800' :
                            'bg-secondary/20 text-secondary'
                          }`}>
                            {show.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {show.status !== 'Sold Out' && (
                        <Button className="shrink-0">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Get Tickets
                        </Button>
                      )}
                      <Button variant="outline" className="shrink-0">
                        <MapPin className="w-4 h-4 mr-2" />
                        Venue Info
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tour Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>VIP Packages</CardTitle>
                <CardDescription>Enhanced concert experience</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Meet & greet with Angus Digital</li>
                  <li>• Exclusive merchandise bundle</li>
                  <li>• Premium seating or standing area</li>
                  <li>• Professional photo opportunity</li>
                  <li>• Pre-show sound check access</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  Learn More About VIP
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tour Updates</CardTitle>
                <CardDescription>Stay in the loop</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get notified when new tour dates are announced in your area. 
                  Be the first to access presale tickets and exclusive offers.
                </p>
                <div className="space-y-3">
                  <Button className="w-full">
                    Join Tour Alerts
                  </Button>
                  <Button variant="outline" className="w-full">
                    Follow on Social Media
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Booking Information</CardTitle>
              <CardDescription>For venues and promoters</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Interested in booking Angus Digital for your venue or festival? 
                Get in touch with our booking team for availability and rates.
              </p>
              <div className="flex gap-4">
                <Button className="flex-1">
                  Booking Inquiry
                </Button>
                <Button variant="outline" className="flex-1">
                  Download Press Kit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
