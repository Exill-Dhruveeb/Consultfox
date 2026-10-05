"use client";

import { Section, SectionHeading } from "@/components/Section";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import { CaseStudy } from "@/data/caseStudies";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

interface CaseStudiesListContentProps {
  studies: CaseStudy[];
}

export default function CaseStudiesListContent({ studies }: CaseStudiesListContentProps) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow mb-4">{t.caseStudiesSection.eyebrow}</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            {t.caseStudiesSection.pageTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {t.caseStudiesSection.pageSubtitle}
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading title={t.caseStudiesSection.recentEngagements} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>

      <CTASection ctaLabel={t.ctaSection.button} />
    </>
  );
}
