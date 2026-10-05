"use client";

import Link from "next/link";
import { CaseStudy } from "@/data/caseStudies";
import { useLanguage } from "@/context/LanguageContext";
import { translations, caseStudyTranslations } from "@/data/translations";

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const localized = caseStudyTranslations[study.slug]?.[lang];

  const title = localized?.title || study.title;
  const industry = localized?.industry || study.industry;
  const summary = localized?.summary || study.summary;
  const imageSrc = study.coverImage || "/images/Homepage-feature.png";

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-card border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-royal/50 hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden bg-mist/60">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 backdrop-blur px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-deep shadow-sm">
          {industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-xs font-medium text-royal">
            {lang === "de" ? "Kunde" : "Client"}: {study.client}
          </p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink transition-colors group-hover:text-royal">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">{summary}</p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-line/50 pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors group-hover:text-deep">
            {t.caseStudiesSection.readCaseStudy}
            <svg
              width="14"
              height="12"
              viewBox="0 0 12 10"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M1 5H11M11 5L7 1M11 5L7 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-mist text-royal transition-colors group-hover:bg-royal group-hover:text-white">
            <svg width="10" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
              <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
