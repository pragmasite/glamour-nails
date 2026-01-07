import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, otherLangs, lang } = useLanguage();

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10);
    });
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to={lang === "fr" ? "/" : `/${lang}`} className="flex flex-col gap-0.5">
          <img src="/images/logo.png" alt="Glamour Nails" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href={lang === "fr" ? "#about" : `/${lang}#about`}
            className={`text-sm transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.about}
          </a>
          <a
            href={lang === "fr" ? "#services" : `/${lang}#services`}
            className={`text-sm transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href={lang === "fr" ? "#gallery" : `/${lang}#gallery`}
            className={`text-sm transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href={lang === "fr" ? "#hours" : `/${lang}#hours`}
            className={`text-sm transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href={lang === "fr" ? "#contact" : `/${lang}#contact`}
            className={`text-sm transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Selector */}
          <div className="flex items-center gap-2 border-l border-current pl-8">
            <Globe className={`h-4 w-4 ${isScrolled ? "text-foreground" : "text-white"}`} />
            <select
              value={lang}
              onChange={(e) => {
                const newLang = e.target.value;
                const path = newLang === "fr" ? "/" : `/${newLang}`;
                window.location.href = path;
              }}
              className={`bg-transparent text-sm font-medium cursor-pointer outline-none ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* Call Button */}
          <Button
            asChild
            size="sm"
            className="rounded-full"
          >
            <a href="tel:+41792859150">
              <Phone className="h-4 w-4 mr-2" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#about" className="block text-sm text-foreground hover:text-primary">
              {t.nav.about}
            </a>
            <a href="#services" className="block text-sm text-foreground hover:text-primary">
              {t.nav.services}
            </a>
            <a href="#gallery" className="block text-sm text-foreground hover:text-primary">
              {t.nav.gallery}
            </a>
            <a href="#hours" className="block text-sm text-foreground hover:text-primary">
              {t.nav.hours}
            </a>
            <a href="#contact" className="block text-sm text-foreground hover:text-primary">
              {t.nav.contact}
            </a>
            <div className="border-t pt-4">
              <label className="block text-sm text-foreground mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {t.nav.profession}
              </label>
              <select
                value={lang}
                onChange={(e) => {
                  const newLang = e.target.value;
                  const path = newLang === "fr" ? "/" : `/${newLang}`;
                  window.location.href = path;
                }}
                className="w-full bg-muted text-sm p-2 rounded border border-input"
              >
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="en">English</option>
              </select>
            </div>
            <Button asChild className="w-full">
              <a href="tel:+41792859150">
                <Phone className="h-4 w-4 mr-2" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
