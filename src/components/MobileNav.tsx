"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { services, serviceGroups } from "@/data/services";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { translations, serviceTranslations } from "@/data/translations";

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();
  const isPortal = pathname === "/";
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  const content = (
    <div className="fixed inset-0 z-[100] lg:hidden" aria-modal="true" role="dialog">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-ink/60 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer panel */}
      <div className="fixed inset-y-0 right-0 z-10 flex h-full w-[85vw] max-w-sm flex-col bg-white shadow-2xl">
        {/* Header */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-5">
          <div className="flex items-center gap-3">
            <span className="font-display text-base font-bold text-ink">Menu</span>
            <LanguageToggle size="sm" />
          </div>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-control border border-line text-ink transition-colors hover:bg-canvas"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Scrollable navigation content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {isPortal ? (
            /* Portal Navigation on Mobile */
            <nav className="flex flex-col gap-1">
              <Link
                href="/data-science"
                className="py-3 text-base font-semibold text-royal border-b border-line flex items-center justify-between"
                onClick={onClose}
              >
                <span>{lang === "de" ? "Data Science & KI Plattform" : "Data Science & AI Platform"}</span>
                <span>→</span>
              </Link>
              <a
                href="#study-abroad"
                className="py-3 text-base font-medium text-ink border-b border-line"
                onClick={onClose}
              >
                Study Abroad
              </a>
              <a
                href="#solar-services"
                className="py-3 text-base font-medium text-ink border-b border-line"
                onClick={onClose}
              >
                Solar Services
              </a>
              <a
                href="#contact"
                className="py-3 text-base font-medium text-ink border-b border-line"
                onClick={onClose}
              >
                {lang === "de" ? "Standort & Kontakt" : "Location & Contact"}
              </a>
              <div className="mt-8">
                <a
                  href="#contact"
                  className="btn-primary w-full justify-center"
                  onClick={onClose}
                >
                  {lang === "de" ? "Erstgespräch anfragen" : "Book Discovery Call"}
                </a>
              </div>
            </nav>
          ) : (
            /* Platform Navigation on Mobile */
            <nav className="flex flex-col gap-1">
              <Link
                href="/"
                className="py-2.5 text-xs font-semibold text-royal bg-lavender/50 border border-royal/20 px-3 rounded-control mb-3 inline-flex items-center gap-1.5"
                onClick={onClose}
              >
                <span>←</span>
                <span>{lang === "de" ? "Zurück zur Gesamtübersicht" : "Back to Overview"}</span>
              </Link>

              {/* Services Collapsible Dropdown */}
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-base font-medium text-ink border-b border-line"
                  aria-expanded={servicesExpanded}
                  onClick={() => setServicesExpanded((v) => !v)}
                >
                  <span>{t.nav.services}</span>
                  <svg
                    width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"
                    className={`transition-transform duration-200 ${servicesExpanded ? "rotate-180" : ""}`}
                  >
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>

                {servicesExpanded && (
                  <div className="my-3 space-y-4 border-l-2 border-line pl-4">
                    {serviceGroups.map((group) => (
                      <div key={group} className="space-y-2">
                        <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary">
                          {group}
                        </p>
                        <ul className="space-y-2">
                          {services
                            .filter((s) => s.group === group)
                            .map((s) => {
                              const localizedName = serviceTranslations[s.slug]?.[lang]?.name || s.name;
                              return (
                                <li key={s.slug}>
                                  <Link
                                    href={`/services/${s.slug}`}
                                    className="text-sm text-ink hover:text-royal transition-colors block py-1"
                                    onClick={onClose}
                                  >
                                    {localizedName}
                                  </Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                className="border-b border-line py-3 text-base font-medium text-ink"
                onClick={onClose}
              >
                {t.nav.caseStudies}
              </Link>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-center"
                  onClick={onClose}
                >
                  {t.nav.contact}
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
