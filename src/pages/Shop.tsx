import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.png";
import artwork4 from "@/assets/artwork-4.jpg";

interface ShopItem {
  id: number;
  src: string;
  title: string;
  price: number;
  soldOut?: boolean;
  description: string;
}

const originals: ShopItem[] = [
  {
    id: 1,
    src: artwork1,
    title: "Blind World, Bleeding Land",
    price: 2500,
    description: "Original oil on canvas, 24\" x 36\"",
  },
  {
    id: 2,
    src: artwork2,
    title: "Orphaned",
    price: 1800,
    soldOut: true,
    description: "Original oil on canvas, 20\" x 30\"",
  },
  {
    id: 3,
    src: artwork3,
    title: "Mister",
    price: 2200,
    soldOut: true,
    description: "Original oil on canvas, 18\" x 24\"",
  },
  {
    id: 4,
    src: artwork4,
    title: "Surviving Hands",
    price: 3000,
    description: "Original oil on canvas, 30\" x 40\"",
  },
];

const prints: ShopItem[] = [
  {
    id: 101,
    src: artwork1,
    title: "Blind World, Bleeding Land - Print",
    price: 150,
    description: "Archival giclée print, 12\" x 18\"",
  },
  {
    id: 102,
    src: artwork2,
    title: "Orphaned - Print",
    price: 120,
    description: "Archival giclée print, 10\" x 15\"",
  },
  {
    id: 103,
    src: artwork3,
    title: "Mister - Print",
    price: 130,
    description: "Archival giclée print, 9\" x 12\"",
  },
  {
    id: 104,
    src: artwork4,
    title: "Surviving Hands - Print",
    price: 180,
    description: "Archival giclée print, 15\" x 20\"",
  },
];

type Category = "originals" | "prints";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("originals");
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);

  const items = activeCategory === "originals" ? originals : prints;

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-sm py-4">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <Link
              to="/"
              className="font-display text-2xl md:text-3xl font-medium text-foreground tracking-wide hover:text-primary transition-colors"
            >
              Sama Asheh
            </Link>
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Gallery
              </Button>
            </Link>
          </div>
        </header>

        <main className="pt-32 pb-24">
          <div className="container mx-auto px-6">
            {/* Page Header */}
            <div className="text-center mb-12">
              <p className="font-sans text-sm tracking-[0.3em] uppercase text-primary mb-4">
                Collection
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
                Shop <span className="italic">Artwork</span>
              </h1>
              <p className="font-sans text-muted-foreground max-w-xl mx-auto">
                Bring home a piece of original art or a high-quality print to cherish forever.
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveCategory("originals")}
                className={`font-sans text-sm tracking-[0.2em] uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === "originals"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Original Paintings
              </button>
              <button
                onClick={() => setActiveCategory("prints")}
                className={`font-sans text-sm tracking-[0.2em] uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === "prints"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Prints
              </button>
            </div>

            {/* Shop Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group text-left bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        item.soldOut ? "opacity-60" : ""
                      }`}
                    />
                    {item.soldOut && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-sans text-sm tracking-[0.2em] uppercase bg-charcoal/90 text-warm-white px-4 py-2 rounded">
                          Sold Out
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-display text-lg text-foreground mb-1 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground mb-2">
                      {item.description}
                    </p>
                    <p className={`font-sans text-lg ${item.soldOut ? "text-muted-foreground line-through" : "text-primary"}`}>
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="font-sans text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sama Asheh. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
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
              src={selectedItem.src}
              alt={selectedItem.title}
              className="max-h-[85vh] w-auto object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/90 to-transparent rounded-b-lg">
              <h3 className="font-display text-2xl text-warm-white">
                {selectedItem.title}
              </h3>
              <p className="font-sans text-sm text-warm-white/70 mt-1">
                {selectedItem.description}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <p className={`font-sans text-xl ${selectedItem.soldOut ? "text-muted-foreground line-through" : "text-primary"}`}>
                  ${selectedItem.price.toLocaleString()}
                </p>
                {selectedItem.soldOut && (
                  <span className="font-sans text-sm tracking-[0.15em] uppercase bg-destructive/80 text-destructive-foreground px-3 py-1 rounded">
                    Sold Out
                  </span>
                )}
              </div>
              {!selectedItem.soldOut && (
                <Button className="mt-4" variant="hero">
                  Inquire to Purchase
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
