import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink, Clock } from "lucide-react";

export default function Live() {
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
            <h1 className="text-4xl font-bold mb-4"><p>Live Dates</p></h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Catch Angus Digital live at these upcoming venues. Experience the full energy
              of dub and reggae fusion in person.
            </p>
          </div>

          {/* First Featured Show - BUSSOLINO */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-red-600/10 to-green-500/10 border-red-600/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div>
                      <div className="text-primary font-bold text-xl mb-2">
                        Saturday, September 27, 2025
                      </div>
                      <h3 className="text-3xl font-bold mb-2"><p>Rootsrev Soundsystem</p></h3>
                      <div className="text-xl font-semibold mb-2">Festa Campestre</div>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="w-5 h-5 mr-2" />
                        Vidulis, UD, Italy
                      </div>
                      <div className="text-lg text-muted-foreground mb-4">
                        <span className="font-semibold">Featuring:</span><br />
                        <p>Angus Digital - The Dub Alchemist</p><br />
                        Militant Youths (from Genova)
                      </div>
                      <div className="mb-4">
                        <span className="px-3 py-2 rounded-full text-sm font-medium bg-accent/20 text-accent">
                          For the First Time to the World
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F76e39d6cb5b24501bed5149204e569f5%2F8bbffc1ee721405e975dc3ade0cfe021?format=webp&width=800"
                      alt="BUSSOLINO Event Poster"
                      className="w-full max-w-md mx-auto rounded-lg shadow-2xl border-2 border-primary/30"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Featured Show - Dub Unit */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto bg-gradient-to-br from-red-600/10 to-green-500/10 border-red-600/20">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div>
                      <div className="text-primary font-bold text-xl mb-2">
                        Thursday, October 10, 2024
                      </div>
                      <h3 className="text-3xl font-bold mb-2">Dub Unit</h3>
                      <div className="text-xl font-semibold mb-2">Het Depot & Kingstep</div>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="w-5 h-5 mr-2" />
                        Leuven, Belgium
                      </div>
                      <div className="text-lg text-muted-foreground mb-4">
                        w/ Macka B & The Roots Ragga Band, Reemshot
                      </div>
                      <div className="flex gap-4">
                        <Button size="lg" className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 text-black" asChild>
                          <a href="https://apps.ticketmatic.com/widgets/hetdepot/flow/feest?event=697505918189&l=en#!/addtickets" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            <div className="text-black">Get Tickets</div>
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
                  </div>
                  <div className="order-1 lg:order-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F76e39d6cb5b24501bed5149204e569f5%2F95089408cefb4dd5898cd1de43b15593?format=webp&width=800"
                      alt="Dub Unit Event Poster"
                      className="w-full max-w-md mx-auto rounded-lg shadow-2xl border-2 border-primary/30"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
