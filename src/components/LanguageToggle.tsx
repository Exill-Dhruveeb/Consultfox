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
      aria-label="DE/EN Sprachauswahl / Language Selector"
      className={`inline-flex items-center gap-1 rounded-full border border-line bg-white/90 p-1 shadow-2xs backdrop-blur transition-all ${className}`}
    >
      {/* Globe Icon */}
      <div className="pl-1.5 pr-0.5 text-muted" aria-hidden="true">
        <svg
          className={isSmall ? "h-3 w-3" : "h-3.5 w-3.5"}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      </div>

      {/* DE Button first */}
      <button
        type="button"
        onClick={() => setLang("de")}
        aria-pressed={lang === "de"}
        title="Deutsch (German)"
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

      {/* EN Button second */}
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        title="English"
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
    </div>
  );
}
