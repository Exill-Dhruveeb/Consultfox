"use client";

import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";
import { useLanguage } from "@/context/LanguageContext";
import { translations, caseStudyTranslations } from "@/data/translations";

export default function FeaturedCaseStudies() {
  const { lang } = useLanguage();
  const t = translations[lang];

  // We display the top 3 verified case studies with comprehensive engineering breakdowns
  const featured = caseStudies.slice(0, 3);

  return (
    <div className="space-y-16">
      {featured.map((study, index) => {
        const localized = caseStudyTranslations[study.slug]?.[lang];
        const title = localized?.title || study.title;
        const industry = localized?.industry || study.industry;
        const summary = localized?.summary || study.summary;
        const challenge = localized?.challenge || study.challenge;
        const solution = localized?.solution || study.solution;
        const imageSrc = study.coverImage || "/images/Homepage-feature.png";

        return (
          <article
            key={study.slug}
            className="rounded-card border border-line bg-white p-6 sm:p-10 shadow-xs"
          >
            {/* Header: Project Context & Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-semibold text-royal">
                  PROJEKT 0{index + 1}
                </span>
                <span className="h-3 w-px bg-line" />
                <span className="rounded-control bg-canvas px-2.5 py-1 font-mono text-[11px] font-semibold text-secondary">
                  {industry}
                </span>
                <span className="text-xs text-secondary">
                  <span className="font-medium text-ink">
                    {lang === "de" ? "Kunde / Sektor:" : "Client / Sector:"}
                  </span>{" "}
                  {study.client}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-royal">
                <span className="h-1.5 w-1.5 rounded-full bg-royal" />
                {lang === "de" ? "Produktiv Verifiziert" : "Verified Production System"}
              </span>
            </div>

            {/* Main Layout: 2 Columns */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              {/* Left Column: Problem, Architecture & Solution */}
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-secondary">{summary}</p>

                {/* Problem vs Solution Split */}
                <div className="mt-6 space-y-4">
                  <div className="rounded-control border border-line bg-canvas p-4">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary">
                      {lang === "de" ? "Ausgangslage & Engpass" : "The Operational Bottleneck"}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">{challenge}</p>
                  </div>

                  <div className="rounded-control border border-royal/20 bg-lavender/40 p-4">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-royal">
                      {lang === "de" ? "Technische Architektur & Lösung" : "Engineered Architecture & Solution"}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">{solution}</p>
                  </div>
                </div>

                {/* Architecture Pillars */}
                {study.architectureDetails && study.architectureDetails.length > 0 && (
                  <div className="mt-6">
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary mb-3">
                      {lang === "de" ? "Architektur-Kernkomponenten" : "Core Architecture Pillars"}
                    </p>
                    <ul className="space-y-2 text-sm">
                      {study.architectureDetails.map((pillar) => (
                        <li key={pillar.title} className="flex items-start gap-2.5">
                          <span className="text-royal font-bold text-xs mt-0.5">•</span>
                          <div>
                            <strong className="font-semibold text-ink">{pillar.title}: </strong>
                            <span className="text-secondary">{pillar.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="mt-6">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary mb-2">
                    {lang === "de" ? "Eingesetzte Technologien" : "Technologies Deployed"}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {study.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-control border border-line bg-white px-2.5 py-1 font-mono text-xs text-ink"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link to Detail Page */}
                <div className="mt-8">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-royal hover:underline"
                  >
                    <span>
                      {lang === "de"
                        ? "Vollständige Fallstudie & Architektur analysieren"
                        : "Read detailed case study & architecture breakdown"}
                    </span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Preview & Actual Metrics */}
              <div className="space-y-6">
                {/* Project Image Preview */}
                <div className="overflow-hidden rounded-card border border-line bg-canvas">
                  <Image
                    src={imageSrc}
                    alt={title}
                    width={600}
                    height={380}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Measurable Verified Outcomes Box */}
                <div className="rounded-card border border-line bg-canvas p-5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary mb-4">
                    {lang === "de" ? "Messbare Projektergebnisse" : "Verified Operational Outcomes"}
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                    {study.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="border-b border-line pb-3 last:border-b-0 last:pb-0"
                      >
                        <span className="block font-display text-2xl font-bold text-ink">
                          {metric.value}
                        </span>
                        <span className="block text-xs font-semibold text-royal mt-0.5">
                          {metric.label}
                        </span>
                        <span className="block text-xs text-secondary mt-0.5 leading-snug">
                          {metric.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}

      <div className="text-center">
        <Link href="/case-studies" className="btn-secondary">
          {t.caseStudiesSection.viewAllButton}
        </Link>
      </div>
    </div>
  );
}
