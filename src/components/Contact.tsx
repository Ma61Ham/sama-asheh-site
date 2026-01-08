import { Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Let's Create <span className="italic">Together</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            Follow my journey, see behind-the-scenes, and reach out for collaborations
            or commissions.
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Email */}
            <a
              href="mailto:sama.asheh2@gmail.com"
              className="group flex items-center gap-4 px-8 py-5 rounded-xl card-elevated hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                  Email
                </p>
                <p className="font-sans font-medium text-foreground">
                  sama.asheh2@gmail.com
                </p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/sama_asheh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 rounded-xl card-elevated hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Instagram className="h-5 w-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                  Instagram
                </p>
                <p className="font-sans font-medium text-foreground">@sama_asheh</p>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@sama.asheh1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-5 rounded-xl card-elevated hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider">
                  TikTok
                </p>
                <p className="font-sans font-medium text-foreground">@sama.asheh1</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
