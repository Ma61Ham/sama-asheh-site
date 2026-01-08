const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-2xl font-medium text-foreground tracking-wide hover:text-primary transition-colors"
          >
            Sama Asheh
          </a>

          {/* Tagline */}
          <p className="font-sans text-muted-foreground text-sm text-center">
            Visual Artist & Dreamweaver · Atlanta, GA
          </p>

          {/* Copyright */}
          <p className="font-sans text-muted-foreground text-sm">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
