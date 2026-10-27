"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { serviceGroups, services } from "@/data/services";
import { companyInfo } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { translations, serviceTranslations } from "@/data/translations";

export default function Footer() {
  const pathname = usePathname();
  const isPortal = pathname === "/";
  const { lang } = useLanguage();
  const t = translations[lang];

  if (isPortal) {
    return (
      <footer className="border-t border-line bg-mist">
        <div className="container-page py-16">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <Logo />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                {lang === "de"
                  ? "Ganzheitliche Beratung für Data & AI Engineering, internationale Bildung und saubere Solarenergie."
                  : "End-to-end consulting across Data & AI Engineering, international education, and clean solar energy."}
              </p>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
                {lang === "de" ? "Fachbereiche" : "Practices"}
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    href="/data-science"
                    className="font-semibold text-royal hover:underline"
                  >
                    {lang === "de" ? "Data Science & KI" : "Data Science & AI"}
                  </Link>
                </li>
                <li>
                  <a href="#study-abroad" className="text-ink hover:text-royal transition-colors">
                    Study Abroad
                  </a>
                </li>
                <li>
                  <a href="#solar-services" className="text-ink hover:text-royal transition-colors">
                    Solar Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
                {lang === "de" ? "Kontakt" : "Contact"}
              </p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="text-ink font-medium">Wilmersdorfer Str. 60</li>
                <li>10627 Berlin, Deutschland</li>
                <li>
                  <a href="tel:+491634253066" className="text-royal font-medium hover:underline">
                    +49 1634253066
                  </a>
                </li>
                <li>
                  <a href="mailto:info@consultfox.de" className="text-royal font-medium hover:underline">
                    info@consultfox.de
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} consultfox. {lang === "de" ? "Alle Rechte vorbehalten." : "All rights reserved."}</p>
            <div className="flex items-center gap-2">
              <span>Berlin, Deutschland</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  /* Full Platform Footer */
  return (
    <footer className="border-t border-line bg-mist">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="consultfox on LinkedIn" className="text-muted hover:text-royal transition-colors">
                LinkedIn
              </a>
              <a href={companyInfo.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="consultfox on X" className="text-muted hover:text-royal transition-colors">
                X
              </a>
              <a href={companyInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="consultfox on Instagram" className="text-muted hover:text-royal transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {serviceGroups.slice(0, 3).map((group) => (
              <div key={group}>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">{group}</p>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.group === group)
                    .map((s) => {
                      const localizedName = serviceTranslations[s.slug]?.[lang]?.name || s.name;
                      return (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="text-sm text-ink hover:text-royal transition-colors">
                            {localizedName}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              {lang === "de" ? "Unternehmen" : "Company"}
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-ink hover:text-royal transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-sm text-ink hover:text-royal transition-colors">
                  {t.nav.caseStudies}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-ink hover:text-royal transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              {lang === "de" ? "Anrufen" : "Call us"}
            </p>
            <a href={companyInfo.phoneHref} className="mt-1 block text-sm text-ink hover:text-royal transition-colors">
              {companyInfo.phone}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              {lang === "de" ? "E-Mail" : "Email us"}
            </p>
            <a href={`mailto:${companyInfo.email}`} className="mt-1 block text-sm text-ink hover:text-royal transition-colors">
              {companyInfo.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
              {lang === "de" ? "Standort" : "Location"}
            </p>
            <a href={companyInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-ink hover:text-royal transition-colors">
              {companyInfo.address}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} consultfox. {t.footer.copyright}</p>
          <div className="flex items-center gap-2">
            <span>Berlin, Deutschland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
