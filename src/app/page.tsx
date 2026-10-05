"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import CommitmentsGrid from "@/components/CommitmentsGrid";
import TechStack from "@/components/TechStack";
import ComparisonTable from "@/components/ComparisonTable";
import CaseStudyCard from "@/components/CaseStudyCard";
import IndustriesGrid from "@/components/IndustriesGrid";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import { serviceGroups, services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function HomePage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white via-mist/20 to-white py-16 sm:py-24 lg:py-28">
        {/* Subtle purple ambient gradient glow */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-royal/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-violet/10 blur-3xl" />

        <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left Column: Copy & Actions */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-mist/50 px-3.5 py-1.5 text-xs font-semibold text-royal">
              <span className="h-2 w-2 rounded-full bg-royal animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-[54px]">
              {t.hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                {t.hero.ctaPrimary}
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                {t.hero.ctaSecondary}
              </Link>
            </div>

            {/* Value checklist with 4-6 wk delivery, zero lock in, 100% code handover, and Hosted in the EU */}
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-line/70 pt-6 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/10 font-bold text-royal">✓</span>
                <span>{t.hero.checklist.delivery}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/10 font-bold text-royal">✓</span>
                <span>{t.hero.checklist.noLockIn}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/10 font-bold text-royal">✓</span>
                <span>{t.hero.checklist.handover}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/10 font-bold text-royal">✓</span>
                <span>{t.hero.checklist.euHosted}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Platform Visual Frame */}
          <div className="relative">
            {/* Background decorative card / glass frame */}
            <div className="group relative rounded-2xl border border-line bg-white/80 p-3 shadow-xl backdrop-blur-xs transition-all duration-500 hover:border-royal/30 hover:shadow-2xl sm:p-4">
              {/* Window Header */}
              <div className="mb-3 flex items-center justify-between border-b border-line/70 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#E57373]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFB74D]" />
                  <span className="h-3 w-3 rounded-full bg-[#81C784]" />
                  <span className="ml-2 font-mono text-[11px] text-muted">consultfox-analytics-platform.internal</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mist/60 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-royal">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  {t.hero.stats.liveSystem}
                </span>
              </div>

              {/* Main Image Graphic */}
              <div className="relative overflow-hidden rounded-xl border border-line/60 bg-mist/30">
                <Image
                  src="/images/Homepage-feature.png"
                  alt="consultfox data and AI analytics dashboard interface"
                  width={1200}
                  height={675}
                  priority
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Floating Highlight Badge 1: 50+ Deployed */}
              <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-line bg-white p-3.5 shadow-lg sm:flex sm:items-center sm:gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-royal/10 text-royal">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-ink">{t.hero.stats.systems}</p>
                  <p className="text-[11px] text-muted">{t.hero.stats.systemsSubtitle}</p>
                </div>
              </div>

              {/* Floating Highlight Badge 2: Partner Stack */}
              <div className="absolute -top-5 -right-4 hidden rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-lg sm:flex sm:items-center sm:gap-2.5">
                <span className="h-2 w-2 rounded-full bg-royal animate-ping" />
                <span className="text-xs font-semibold text-ink">{t.hero.stats.stack}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we build: grouped pillars */}
      <Section>
        <SectionHeading
          eyebrow={t.whatWeBuild.eyebrow}
          title={t.whatWeBuild.title}
          description={t.whatWeBuild.description}
        />
        <div className="space-y-14">
          {serviceGroups.map((group) => (
            <div key={group}>
              <div className="mb-5 flex items-baseline justify-between">
                <h3 className="font-display text-lg font-semibold text-ink">{group}</h3>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => s.group === group)
                  .slice(0, 3)
                  .map((s) => (
                    <ServiceCard key={s.slug} service={s} />
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-secondary">
            {t.whatWeBuild.viewAllButton}
          </Link>
        </div>
      </Section>

      {/* How we work */}
      <Section tint>
        <SectionHeading
          eyebrow={t.howWeWork.eyebrow}
          title={t.howWeWork.title}
          description={t.howWeWork.description}
        />
        <CommitmentsGrid />
      </Section>

      {/* Tech Stack */}
      <Section>
        <SectionHeading
          eyebrow={t.techStackSection.eyebrow}
          title={t.techStackSection.title}
          description={t.techStackSection.description}
        />
        <TechStack />
      </Section>

      {/* Comparison */}
      <Section tint>
        <SectionHeading
          eyebrow={t.comparison.eyebrow}
          title={t.comparison.title}
          description={t.comparison.description}
        />
        <ComparisonTable />
      </Section>

      {/* Case studies */}
      <Section>
        <SectionHeading
          eyebrow={t.caseStudiesSection.eyebrow}
          title={t.caseStudiesSection.title}
          description={t.caseStudiesSection.description}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/case-studies" className="btn-secondary">
            {t.caseStudiesSection.viewAllButton}
          </Link>
        </div>
      </Section>

      {/* Industries */}
      <Section tint>
        <SectionHeading
          eyebrow={t.industriesSection.eyebrow}
          title={t.industriesSection.title}
          description={t.industriesSection.description}
        />
        <IndustriesGrid />
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow={t.faqSection.eyebrow} title={t.faqSection.title} />
        <FAQAccordion items={t.faqSection.items} />
      </Section>

      <CTASection />
    </>
  );
}
