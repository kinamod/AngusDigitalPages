import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface EventItem {
  id: string;
  date: string; // ISO yyyy-mm-dd
  event: string;
  venue: string;
  city: string;
  ticketLink?: string;
  supportingActs?: string;
  description?: string;
  badge?: string;
  poster?: string;
}

export default function Live() {
  const events: EventItem[] = [
    {
      id: "dub-unit",
      date: "2025-10-10",
      event: "Dub Unit",
      venue: "Het Depot & Kingstep",
      city: "Leuven, Belgium",
      ticketLink:
        "https://apps.ticketmatic.com/widgets/hetdepot/flow/feest?event=697505918189&l=en#!/addtickets",
      supportingActs: "w/ Macka B & The Roots Ragga Band, Reemshot",
      poster:
        "https://cdn.builder.io/api/v1/image/assets%2F76e39d6cb5b24501bed5149204e569f5%2F95089408cefb4dd5898cd1de43b15593?format=webp&width=800",
    },
    {
      id: "rootsrev",
      date: "2025-09-27",
      event: "Rootsrev Soundsystem",
      venue: "Festa Campestre",
      city: "Vidulis, UD, Italy",
      description:
        "Featuring: Angus Digital - The Dub Alchemist, Militant Youths (from Genova)",
      badge: "For the First Time to the World",
      poster:
        "https://cdn.builder.io/api/v1/image/assets%2F76e39d6cb5b24501bed5149204e569f5%2F8bbffc1ee721405e975dc3ade0cfe021?format=webp&width=800",
    },
  ];

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const toDate = (s: string) => {
    const d = new Date(s + "T00:00:00");
    d.setHours(0, 0, 0, 0);
    return d;
  };
  const formatLong = (s: string) =>
    new Date(s).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  const upcoming = events
    .filter((e) => toDate(e.date) >= today)
    .sort((a, b) => toDate(a.date).getTime() - toDate(b.date).getTime());
  const past = events
    .filter((e) => toDate(e.date) < today)
    .sort((a, b) => toDate(b.date).getTime() - toDate(a.date).getTime());

  const renderCard = (e: EventItem) => (
    <Card
      key={e.id}
      className="max-w-4xl mx-auto bg-gradient-to-br from-red-600/10 to-green-500/10 border-red-600/20 mb-16"
    >
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div>
              <div className="text-primary font-bold text-xl mb-2">
                {formatLong(e.date)}
              </div>
              <h3 className="text-3xl font-bold mb-2">{e.event}</h3>
              <div className="text-xl font-semibold mb-2">{e.venue}</div>
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                {e.city}
              </div>
              {e.supportingActs && (
                <div className="text-lg text-muted-foreground mb-4">
                  {e.supportingActs}
                </div>
              )}
              {e.description && (
                <div className="text-lg text-muted-foreground mb-4">
                  <span className="font-semibold">Featuring:</span>
                  <br />
                  {e.description}
                </div>
              )}
              {e.badge && (
                <div className="mb-4">
                  <span className="px-3 py-2 rounded-full text-sm font-medium bg-accent/20 text-accent">
                    {e.badge}
                  </span>
                </div>
              )}
              {e.ticketLink && toDate(e.date) >= today && (
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 text-black"
                    asChild
                  >
                    <a
                      href={e.ticketLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      <div className="text-black">Get Tickets</div>
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            {e.poster && (
              <img
                src={e.poster}
                alt={`${e.event} Event Poster`}
                className="w-full max-w-md mx-auto rounded-lg shadow-2xl border-2 border-primary/30"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl font-bold mb-4">
              <p>Live Dates</p>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Catch Angus Digital live at these upcoming venues. Experience the
              full energy of dub and reggae fusion in person.
            </p>
          </div>

          {upcoming.map(renderCard)}

          {past.length > 0 && (
            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-6">Past Events</h2>
              {past.map(renderCard)}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
