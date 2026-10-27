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
      className="group flex h-full flex-col justify-between overflow-hidden rounded-card border border-line bg-white shadow-2xs transition-all duration-200 hover:border-royal"
    >
      <div className="relative h-44 w-full overflow-hidden border-b border-line bg-canvas">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-control bg-white/95 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-secondary shadow-2xs">
          {industry}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="font-mono text-xs text-royal font-medium">
            {lang === "de" ? "Kunde" : "Client"}: {study.client}
          </p>
          <div className="mt-2 min-h-[52px] flex items-center">
            <h3 className="font-display text-base font-semibold text-ink leading-snug transition-colors group-hover:text-royal line-clamp-2">
              {title}
            </h3>
          </div>
          <p className="mt-2 min-h-[60px] text-sm leading-relaxed text-secondary line-clamp-3">
            {summary}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-royal group-hover:underline">
            {t.caseStudiesSection.readCaseStudy}
            <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
