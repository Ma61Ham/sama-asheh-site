import { MapPin, Pencil, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Meet <span className="italic">Sama</span>
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="font-display text-2xl md:text-3xl leading-relaxed text-foreground font-light">
                I started drawing strangers in public places, gifting them their
                portraits without expecting anything in return.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed text-lg">
                For me, art is a bridge—no words, just a pencil and a little kindness.
                My work is inspired by real moments, human connections, and the beauty
                of everyday life.
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed text-lg">
                Now based in Atlanta, I continue to create portraits, murals, and
                custom artwork, sharing pieces of my heart with every stroke.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground">Based in</p>
                    <p className="font-sans text-sm text-muted-foreground">Atlanta, GA</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Pencil className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground">Focus</p>
                    <p className="font-sans text-sm text-muted-foreground">Portraits & Murals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans font-medium text-foreground">Origin</p>
                    <p className="font-sans text-sm text-muted-foreground">Palestine</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element - Artistic Quote */}
            <div className="relative">
              <div className="card-elevated rounded-2xl p-10 md:p-14">
                <div className="absolute -top-4 -left-4 text-8xl font-display text-primary/20 leading-none">
                  "
                </div>
                <blockquote className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed relative z-10">
                  Sharing pieces of my heart with every stroke.
                </blockquote>
                <p className="mt-6 font-sans text-muted-foreground">— Sama Asheh</p>
              </div>
              
              {/* Decorative circle */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-primary/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
