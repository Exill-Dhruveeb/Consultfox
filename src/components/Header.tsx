"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { services, serviceGroups } from "@/data/services";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";
import LanguageToggle from "@/components/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { translations, serviceTranslations } from "@/data/translations";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isPortal = pathname === "/";
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="container-page flex h-20 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href={isPortal ? "/" : "/data-science"} aria-label="consultfox home" className="shrink-0">
            <Logo />
          </Link>
          {!isPortal && (
            <Link
              href="/"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-royal bg-royal-subtle hover:bg-royal/15 px-3 py-1 rounded-full transition-colors"
              title={lang === "de" ? "Zurück zur Consultfox Gesamtübersicht" : "Back to Consultfox Overview"}
            >
              <span>←</span>
              <span>{lang === "de" ? "Gesamtübersicht" : "All Practices"}</span>
            </Link>
          )}
        </div>

        {isPortal ? (
          /* Portal Navigation (Home, Study Abroad, Solar, Contact) */
          <nav aria-label="Portal Navigation" className="hidden items-center gap-8 lg:flex">
            <Link
              href="/data-science"
              className="text-sm font-semibold text-royal hover:text-royal-light transition-colors"
            >
              {lang === "de" ? "Data Science & KI" : "Data Science & AI"}
            </Link>
            <a
              href="#study-abroad"
              className="text-sm font-medium text-ink hover:text-royal transition-colors"
            >
              Study Abroad
            </a>
            <a
              href="#solar-services"
              className="text-sm font-medium text-ink hover:text-royal transition-colors"
            >
              Solar Services
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-ink hover:text-royal transition-colors"
            >
              {lang === "de" ? "Kontakt" : "Contact"}
            </a>
          </nav>
        ) : (
          /* Platform Navigation (Services Mega Menu, Case Studies) */
          <nav aria-label="Platform Navigation" className="hidden items-center gap-8 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-royal"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={() => setServicesOpen((v) => !v)}
              >
                {t.nav.services}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-6 rounded-card border border-line bg-white p-7 shadow-[0_16px_40px_-16px_rgba(23,22,27,0.18)]">
                    {serviceGroups.map((group) => (
                      <div key={group}>
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
                          {group}
                        </p>
                        <ul className="space-y-2.5">
                          {services
                            .filter((s) => s.group === group)
                            .map((s) => {
                              const localizedName = serviceTranslations[s.slug]?.[lang]?.name || s.name;
                              return (
                                <li key={s.slug}>
                                  <Link
                                    href={`/services/${s.slug}`}
                                    className="text-sm text-ink transition-colors hover:text-royal"
                                    onClick={() => setServicesOpen(false)}
                                  >
                                    {localizedName}
                                  </Link>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-3 flex items-center justify-between border-t border-line pt-5">
                      <p className="text-sm text-muted">{t.nav.notSureWhereToStart}</p>
                      <Link href="/services" className="btn-text" onClick={() => setServicesOpen(false)}>
                        {t.nav.viewAllServices}
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                          <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/case-studies" className="text-sm font-medium text-ink transition-colors hover:text-royal">
              {t.nav.caseStudies}
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <LanguageToggle />
          {isPortal ? (
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              {lang === "de" ? "Erstgespräch" : "Discovery Call"}
            </a>
          ) : (
            <Link href="/contact" className="btn-primary hidden sm:inline-flex">
              {t.nav.contact}
            </Link>
          )}
          <button
            className="grid h-10 w-10 place-items-center rounded-control border border-line lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
