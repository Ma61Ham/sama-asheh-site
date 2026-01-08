import { useState } from "react";
import { X } from "lucide-react";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.png";
import artwork4 from "@/assets/artwork-4.jpg";

interface Artwork {
  id: number;
  src: string;
  title: string;
  category: string;
  price: number;
  soldOut?: boolean;
}

const artworks: Artwork[] = [
  {
    id: 1,
    src: artwork1,
    title: "Blind World, Bleeding Land",
    category: "Portrait",
    price: 2500,
  },
  {
    id: 2,
    src: artwork2,
    title: "Orphaned",
    category: "Portrait",
    price: 1800,
    soldOut: true,
  },
  {
    id: 3,
    src: artwork3,
    title: "Mister",
    category: "Portrait",
    price: 2200,
    soldOut: true,
  },
  {
    id: 4,
    src: artwork4,
    title: "Surviving Hands",
    category: "Portrait",
    price: 3000,
  },
];

const Gallery = () => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Portfolio
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
              Beyond the <span className="italic">Frame</span>
            </h2>
            <p className="font-sans text-muted-foreground max-w-xl mx-auto">
              Each piece tells a story of human connection, resilience, and the quiet
              beauty found in everyday moments.
            </p>
          </div>

          {/* Gallery Grid - Masonry-like */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {artworks.map((artwork, index) => (
              <button
                key={artwork.id}
                onClick={() => setSelectedArtwork(artwork)}
                className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                  index === 0 || index === 3 ? "md:row-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={artwork.src}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-warm-white/70 mb-2">
                    {artwork.category}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl text-warm-white">
                    {artwork.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <p className={`font-sans text-lg ${artwork.soldOut ? "text-muted-foreground line-through" : "text-primary"}`}>
                      ${artwork.price.toLocaleString()}
                    </p>
                    {artwork.soldOut && (
                      <span className="font-sans text-xs tracking-[0.15em] uppercase bg-destructive/80 text-destructive-foreground px-2 py-1 rounded">
                        Sold Out
                      </span>
                    )}
                  </div>
                </div>

                {/* Shadow */}
                <div className="absolute inset-0 artwork-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedArtwork(null)}
        >
          <button
            onClick={() => setSelectedArtwork(null)}
            className="absolute top-6 right-6 text-warm-white/70 hover:text-warm-white transition-colors"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          <div
            className="max-w-4xl max-h-[85vh] relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedArtwork.src}
              alt={selectedArtwork.title}
              className="max-h-[85vh] w-auto object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent rounded-b-lg">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-warm-white/60 mb-1">
                {selectedArtwork.category}
              </p>
              <h3 className="font-display text-2xl text-warm-white">
                {selectedArtwork.title}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <p className={`font-sans text-xl ${selectedArtwork.soldOut ? "text-muted-foreground line-through" : "text-primary"}`}>
                  ${selectedArtwork.price.toLocaleString()}
                </p>
                {selectedArtwork.soldOut && (
                  <span className="font-sans text-sm tracking-[0.15em] uppercase bg-destructive/80 text-destructive-foreground px-3 py-1 rounded">
                    Sold Out
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
