import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroTexture from "@/assets/hero-texture.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRequest = () => {
    document.querySelector("#request")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroTexture}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Overline */}
          <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-up opacity-0 stagger-1">
            Palestinian Visual Artist
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] mb-8 animate-fade-up opacity-0 stagger-2">
            Art is a{" "}
            <span className="italic font-normal text-primary">bridge</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up opacity-0 stagger-3">
            No words, just a pencil and a little kindness—capturing people's stories
            through portraits, murals, and custom artwork.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-4">
            <Button variant="hero" onClick={scrollToRequest}>
              Request Artwork
            </Button>
            <Button variant="hero-outline" onClick={scrollToAbout}>
              Explore My Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-float"
        aria-label="Scroll to content"
      >
        <ArrowDown className="h-6 w-6" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/10 rounded-full animate-fade-in opacity-0 stagger-5" />
      <div className="absolute bottom-32 right-16 w-20 h-20 border border-primary/10 rounded-full animate-fade-in opacity-0 stagger-4" />
    </section>
  );
};

export default Hero;
