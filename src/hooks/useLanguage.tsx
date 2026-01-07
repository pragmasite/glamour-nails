import { createContext, useContext, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  t: typeof translations.fr;
  otherLangs: { lang: Language; path: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  // Determine language from URL path
  let lang: Language = "fr"; // Default to French for Murten (Romandie)
  if (location.pathname.startsWith("/de")) {
    lang = "de";
  } else if (location.pathname.startsWith("/en")) {
    lang = "en";
  }

  const t = translations[lang];

  // Generate paths for other languages
  const otherLangs: { lang: Language; path: string }[] = [];
  const allLangs: Language[] = ["fr", "de", "en"];
  allLangs.forEach((l) => {
    if (l !== lang) {
      const path = l === "fr" ? "/" : `/${l}`;
      otherLangs.push({ lang: l, path });
    }
  });

  return (
    <LanguageContext.Provider value={{ lang, t, otherLangs }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
