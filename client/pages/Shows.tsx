import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export default function Shows() {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Live Shows</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This is a placeholder page for tour dates and live performances. 
              We can expand this with ticket integration, venue details, 
              and interactive tour maps.
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Tour Dates Coming Soon
              </CardTitle>
              <CardDescription>
                Complete concert listings with ticket integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                This page will feature:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>• Complete tour schedule with dates and venues</li>
                <li>• Direct ticket purchasing integration</li>
                <li>• Venue information and directions</li>
                <li>• VIP and meet & greet packages</li>
                <li>• Past show photos and videos</li>
                <li>• Tour announcements and updates</li>
              </ul>
              <div className="flex gap-4">
                <Button className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get Notified
                </Button>
                <Button variant="outline" className="flex-1">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Local Shows
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
