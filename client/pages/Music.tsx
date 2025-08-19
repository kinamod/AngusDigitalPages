import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music as MusicIcon, Play, Download } from "lucide-react";

export default function Music() {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MusicIcon className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl font-bold mb-4">Music</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Listen to the latest tracks and mixes from Angus Digital
            </p>
          </div>

          {/* Featured SoundCloud Player */}
          <div className="mb-12">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="w-6 h-6 mr-2" />
                  Featured Track - Kinamod
                </CardTitle>
                <CardDescription>
                  Latest release from our collaboration series
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kinamod&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Full Kinamod Profile */}
          <div className="mb-12">
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MusicIcon className="w-6 h-6 mr-2" />
                  Complete Kinamod Collection
                </CardTitle>
                <CardDescription>
                  Explore the full discography and latest releases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <iframe
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kinamod&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Music Links */}
          <div className="text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>More Music</CardTitle>
                <CardDescription>
                  Find Angus Digital on all streaming platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button className="flex-1">
                    <Play className="w-4 h-4 mr-2" />
                    Listen on Spotify
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="w-4 h-4 mr-2" />
                    Buy on Bandcamp
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Apple Music
                  </Button>
                  <Button variant="outline" className="flex-1">
                    YouTube Music
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
