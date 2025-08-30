import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Play, Pause, Calendar, MapPin, ExternalLink, Music, Download, Volume2, VolumeX } from "lucide-react";

export default function Index() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [isBackgroundMusicPlaying, setIsBackgroundMusicPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const backgroundMusicRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const songs = [
    {
      id: "1",
      title: "Midnight Drive",
      album: "Neon Dreams",
      duration: "3:42",
      coverArt: "/placeholder.svg",
      audioSrc: "#",
    },
    {
      id: "2", 
      title: "Electric Nights",
      album: "Neon Dreams",
      duration: "4:15",
      coverArt: "/placeholder.svg",
      audioSrc: "#",
    },
    {
      id: "3",
      title: "City Lights",
      album: "Urban Echoes",
      duration: "3:28",
      coverArt: "/placeholder.svg",
      audioSrc: "#",
    },
  ];

  const upcomingShows = [
    {
      id: "1",
      date: "2024-02-15",
      venue: "The Mercury Lounge",
      city: "New York, NY",
      ticketLink: "#",
      time: "8:00 PM",
    },
    {
      id: "2",
      date: "2024-02-22",
      venue: "Bottom of the Hill",
      city: "San Francisco, CA", 
      ticketLink: "#",
      time: "9:00 PM",
    },
    {
      id: "3",
      date: "2024-03-01",
      venue: "Bowery Ballroom",
      city: "New York, NY",
      ticketLink: "#",
      time: "7:30 PM",
    },
  ];

  const albums = [
    {
      id: "1",
      title: "Neon Dreams",
      year: "2024",
      coverArt: "/placeholder.svg",
      description: "Latest album featuring atmospheric dub with reggae elements",
      streamingLinks: {
        spotify: "#",
        apple: "#",
        bandcamp: "#",
      },
    },
    {
      id: "2",
      title: "Urban Echoes",
      year: "2023",
      coverArt: "/placeholder.svg",
      description: "Debut album exploring themes of modern city life",
      streamingLinks: {
        spotify: "#",
        apple: "#", 
        bandcamp: "#",
      },
    },
  ];

  const togglePlay = (songId: string) => {
    if (currentlyPlaying === songId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(songId);
    }
  };

  const toggleBackgroundMusic = () => {
    setIsBackgroundMusicPlaying(!isBackgroundMusicPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <Layout>
      {/* Background Music Controls */}
      <div className="fixed bottom-6 right-6 z-50 flex gap-2">
        <Button
          size="icon"
          variant="secondary"
          onClick={toggleBackgroundMusic}
          className="bg-black/80 hover:bg-black/90 text-white border border-white/20"
        >
          {isBackgroundMusicPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={toggleMute}
          className="bg-black/80 hover:bg-black/90 text-white border border-white/20"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </Button>
      </div>

      {/* Hidden Background Music Player */}
      {!isMuted && (
        <div className="fixed -bottom-full opacity-0 pointer-events-none">
          <iframe
            ref={backgroundMusicRef}
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/kinamod/kinamod-theme&color=%23ff5500&auto_play=${isBackgroundMusicPlaying}&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false`}
          ></iframe>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dynamic Jamaican Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              ${45 + scrollProgress * 90}deg,
              rgba(220, 38, 38, ${0.4 + scrollProgress * 0.3}) 0%,
              rgba(250, 204, 21, ${0.5 + scrollProgress * 0.2}) 50%,
              rgba(34, 197, 94, ${0.4 + scrollProgress * 0.3}) 100%
            )`
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6">
            <span
              style={{
                WebkitTextStroke: '0.25px white',
                textStroke: '0.25px white',
                WebkitTextFillColor: 'black',
                color: 'black',
                fontFamily: 'Xirod, sans-serif'
              }}
            >
              Angus Digital
            </span>
          </h1>
          <p
            className="text-xl sm:text-2xl text-white mb-8 max-w-2xl mx-auto font-medium"
            style={{
              textShadow: '2px 2px 6px rgba(0,0,0,0.9), 0 0 8px rgba(0,0,0,0.7)'
            }}
          >
            Dub and reggae producer crafting atmospheric soundscapes that blend traditional reggae
            with modern digital production techniques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 hover:opacity-90 text-lg px-8 py-6 text-black font-semibold" asChild>
              <Link to="/music">
                <Play className="w-5 h-5 mr-2" />
                Listen Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/tour">
                <Calendar className="w-5 h-5 mr-2" />
                View Shows
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border border-foreground/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6"><p>Angus Digital - The Dub Alchemist</p></h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p></p>
                <p>
                  From childhood days listening to reggae records on his
                  father's Bluespot to being inspired by the legendary
                  dub pioneers, Angus Digital has always lived and
                  breathed music. His love for deep bass, echo, and
                  experimentation led him to the studio, where he began
                  crafting his own dubs. First championed by sound
                  systems like King Earthquake and Jah Voice among many
                  others, Angus has grown into The Dub Alchemist —
                  creating powerful, atmospheric dub music that
                  continues the tradition while pushing it into new
                  dimensions.
                </p>
                <p>
                  <br />
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-600/20 to-green-500/20 rounded-2xl flex items-center justify-center">
                <img 
                  src="/placeholder.svg" 
                  alt="Angus Digital"
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Music Section /}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Tracks</h2>
            <p className="text-xl text-muted-foreground">Latest releases and fan favorites</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {songs.map((song) => (
              <Card key={song.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img 
                      src={song.coverArt} 
                      alt={song.title}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <button
                      onClick={() => togglePlay(song.id)}
                      className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                    >
                      {currentlyPlaying === song.id ? (
                        <Pause className="w-12 h-12 text-white" />
                      ) : (
                        <Play className="w-12 h-12 text-white" />
                      )}
                    </button>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{song.title}</h3>
                  <p className="text-muted-foreground mb-2">{song.album}</p>
                  <p className="text-sm text-muted-foreground">{song.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/music">
                <Music className="w-5 h-5 mr-2" />
                View All Music
              </Link>
            </Button>
          </div>
        </div>
      </section>
*/}
      {/* Upcoming Shows Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Shows</h2>
            <p className="text-xl text-muted-foreground">Catch Angus Digital live at these venues</p>
          </div>
          
          <div className="space-y-4 mb-12">
            {upcomingShows.map((show) => (
              <Card key={show.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                        <div className="text-primary font-semibold min-w-24">
                          {new Date(show.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{show.venue}</h3>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {show.city}
                          </div>
                        </div>
                        <div className="text-muted-foreground">
                          {show.time}
                        </div>
                      </div>
                    </div>
                    <Button className="shrink-0">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Get Tickets
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/tour">
                <Calendar className="w-5 h-5 mr-2" />
                View All Shows
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Discography</h2>
            <p className="text-xl text-muted-foreground">Available on all streaming platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {albums.map((album) => (
              <Card key={album.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="relative">
                    <img 
                      src={album.coverArt} 
                      alt={album.title}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl">{album.title}</CardTitle>
                        <CardDescription className="text-lg">{album.year}</CardDescription>
                      </CardHeader>
                      <p className="text-muted-foreground mb-6">{album.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          Spotify
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Apple Music
                        </Button>
                      </div>
                      <Button size="sm" variant="secondary" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Bandcamp
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600/10 via-yellow-400/10 to-green-500/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get notified about new releases, tour dates, and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 hover:opacity-90 text-black font-semibold" asChild>
              <Link to="/contact">Join Mailing List</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
