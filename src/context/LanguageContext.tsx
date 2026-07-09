import React, { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "../types";
import { TRANSLATIONS } from "../constants";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof TRANSLATIONS[keyof typeof TRANSLATIONS];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("KR");

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: TRANSLATIONS[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
