"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "de";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  setLang: () => {},
  toggleLang: () => {},
});

const STORAGE_KEY = "consultfox_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default language is German ("de")
  const [lang, setLangState] = useState<Language>("de");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved === "en" || saved === "de") {
        setLangState(saved);
        document.documentElement.lang = saved;
      } else {
        // Default to German
        setLangState("de");
        document.documentElement.lang = "de";
      }
    } catch {
      // localStorage not accessible
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    setLang(lang === "de" ? "en" : "de");
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
