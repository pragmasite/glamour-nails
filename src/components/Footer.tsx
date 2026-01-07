import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/images/logo.png" alt="Glamour Nails" className="h-8 w-auto invert" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#hours" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-4">{t.footer.about}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t.nav.contact}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+41792859150" className="text-white/70 hover:text-white transition-colors">
                  +41 79 285 91 50
                </a>
              </li>
              <li>
                <a href="mailto:glamour-nails@gmx.ch" className="text-white/70 hover:text-white transition-colors">
                  glamour-nails@gmx.ch
                </a>
              </li>
              <li className="text-white/70">Merlachfeld 215</li>
              <li className="text-white/70">3280 Murten, CH</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Glamour Nails. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
