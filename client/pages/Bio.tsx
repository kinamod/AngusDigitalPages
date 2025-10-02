import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Bio() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-600/10 via-yellow-400/10 to-green-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-yellow-400 to-green-500 bg-clip-text text-transparent leading-tight px-1">
            Biography
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The story behind Angus Digital - from the UK streets to global dub
            frequencies
          </p>
        </div>
      </section>

      {/* Main Bio Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo Gallery */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-red-600/20 to-green-500/20 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F76e39d6cb5b24501bed5149204e569f5%2F64d982209779459496826640eba7753c"
                    alt="Angus Digital portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-yellow-400/20 to-red-600/20 flex items-center justify-center">
                  <img
                    src="/placeholder.svg"
                    alt="Angus Digital in studio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-green-500/20 to-yellow-400/20 flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe16f9ec5cc6d49d89abb0b1c7db20d4f%2F3bc3f2f8d3f84133bfedf6a673040be6"
                    alt="Angus Digital preparing for live show"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Biography Text */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  <p>Root and Early Inspiration</p>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Greetings one and all, I thought it would be of interest to
                    some who would like to know a little about me, Angus
                    Digital.
                  </p>
                  <p>
                    I've always been interested in music as far back as I can
                    remember.
                  </p>
                  <p>
                    Many years ago my father used to play records on his
                    Blaupunkt gram every Sunday. Back then, no self-respecting
                    Jamaican would not have had a Blaupunkt or Bluespot gram in
                    their living room. My father's gram was the one with the two
                    sliding doors and the drinks cabinet at the bottom, I used
                    to love the smell of the cabinet when you opened it.
                  </p>
                  <p>
                    I was fascinated by all of the lights and knobs and buttons
                    and especially the sound. The bass that came from that thing
                    was incredible and even though I was at a very young age,
                    (around five or six) I could really appreciate the sound at
                    even that time.
                  </p>
                  <p>
                    I was always around music as I was growing up, even if it
                    was my mother singing in the kitchen while she was cooking,
                  </p>
                  <p>
                    I started to buy my own records at around 13 years old. I
                    would play them on the gram sometimes. My mother had her own
                    stereo system which I played my records on as well.
                  </p>
                  <p>
                    I didn't have any particular favourite artist above any
                    other, but my main preferences were Burning Spear, Aswad,
                    Black Uhuru, U-Roy, Ranking Joe, Yabby-U, Big Youth and
                    Junior Delgado, among many, many others, too numerous to
                    name here.
                  </p>
                  <p>
                    But one day, the course of my life changed when I was
                    listening to a sound system at Barnabas Church on Ladypool
                    Road in Birmingham. This was the early 1980's when I heard
                    this incredible music.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-secondary">
                  The Digital Evolution
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I remember the sound system was called "Jah Makka Tone",
                    they were the first sound system I had ever heard, and they
                    were playing a track off what I subsequently found out was
                    an album called "Strictly Dub Wize" by Blackbeard (otherwise
                    known as Dennis Bovell). Some will know him more as a member
                    of the band "Matumbi"
                  </p>
                  <p>
                    I wanted to know what the name of the album was but I was
                    too scared to ask the operator, I think his street name was
                    "Bull". But what I did was to look at the label when he had
                    his back turned, but because the record was spinning I
                    couldn't see the name properly and the LP cover was in the
                    record box. All I could remember was that It was a yellow
                    and blue label, so I went to the record shop which was also
                    on Ladypool Road and I described the album label and the man
                    knew right away what album I was talking about. I didn't
                    have any money to buy it at the time but they put it away
                    for me and promised they wouldn't sell it if I came back in
                    a week'
                  </p>
                  <p>
                    Fortunately, I did get the money together and bought the
                    album. I practically wore that LP out, and when I found out
                    Blackbeard had put out another album, I bought it without
                    even listening to it. It was called "Iwah Dub".
                  </p>
                  <p>
                    That was it. I was hooked. I very much liked other genres of
                    reggae, but 'dub' was my true love.
                  </p>
                  <p>
                    I then discovered "Scientist" he is my absolute hero. I used
                    to pretend to be him, and mess with the knobs on my mother's
                    stereo even though the stereo only had a tone control, a
                    volume control and a balance control. As far as I was
                    concerned I had a mixing desk nearly like Scientist's one.
                  </p>
                  <p>
                    There were other dub producers I liked, like Yabby-U (Vivian
                    Jackson), Lee 'Scratch" Perry, The Mad Professor, Bunny
                    'Striker' Lee and of course King Tubby.
                  </p>
                  <p>
                    But it was the dub album "A New Chapter Of Dub" by Aswad,
                    which really sealed my ambition to produce my own music,
                    especially dub. I had no idea how they produced some of
                    those sounds on the snare drum especially. It was over ten
                    years before I was able to figure out how they did it.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-accent">
                  <p>From Stage to Studio</p>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Over the years I got involved in the music business and
                    became the keyboard player for a band called "Crucial
                    Music", but I really didn't like performing in front of an
                    audience, but I wanted to stay in the music business, so I
                    built a studio at home and began to record local artists but
                    when I had the time, that was when I started to produce my
                    own dubs.
                  </p>
                  <p>
                    It was a few years later that I played one of my dubs to
                    Errol Arawak of King Earthquake.
                  </p>
                  <p>
                    But I wasn't sure if my music was good enough to be played
                    to the public. How wrong I was.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  <p>The Dub Alchemist Emerges</p>
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    King Earthquake was the first sound system to play my music
                    out on road, followed by Jah Voice, Iration Steppas among a
                    few others. And that was it. I haven't looked back.
                  </p>
                  <p>
                    And now I'm being asked directly to play my dubs and
                    specials myself as
                  </p>
                  <p>
                    "Angus Digital, The Dub Alchemist", it's a new and exciting
                    path my music has taken, but I could never have done it
                    without those sound systems who took a chance and chose to
                    play my music.
                  </p>
                  <p>
                    To them and the many others not mentioned here (too many), I
                    am eternally thankful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
