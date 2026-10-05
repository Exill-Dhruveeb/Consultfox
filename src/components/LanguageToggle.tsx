"use client";

import { useLanguage } from "@/context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export default function LanguageToggle({ className = "", size = "md" }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  const isSmall = size === "sm";

  return (
    <div
      role="group"
      aria-label="Select language / Sprache wählen"
      className={`inline-flex items-center rounded-full border border-line bg-mist/70 p-1 shadow-2xs backdrop-blur transition-all ${className}`}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded-full font-mono transition-all duration-200 ${
          isSmall ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs"
        } ${
          lang === "en"
            ? "bg-royal text-white font-semibold shadow-xs"
            : "text-muted hover:text-ink font-medium"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
        className={`rounded-full font-mono transition-all duration-200 ${
          isSmall ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs"
        } ${
          lang === "de"
            ? "bg-royal text-white font-semibold shadow-xs"
            : "text-muted hover:text-ink font-medium"
        }`}
      >
        DE
      </button>
    </div>
  );
}
