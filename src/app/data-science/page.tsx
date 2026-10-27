"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import PrimaryServicesSection from "@/components/PrimaryServicesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechStack from "@/components/TechStack";
import ComparisonTable from "@/components/ComparisonTable";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import IndustriesGrid from "@/components/IndustriesGrid";
import AboutCredibilitySection from "@/components/AboutCredibilitySection";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function DataSciencePlatformPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      {/* Return to Consultfox Overview Banner */}
      <div className="border-b border-line bg-white py-2.5 text-center">
        <div className="container-page flex items-center justify-between text-xs">
          <Link href="/" className="inline-flex items-center gap-1.5 font-semibold text-royal hover:underline">
            <span>←</span>
            <span>{lang === "de" ? "Zurück zur Consultfox Gesamtübersicht" : "Back to Consultfox Overview"}</span>
          </Link>
          <span className="hidden font-mono text-secondary sm:inline-block">
            {lang === "de" ? "Enterprise Data Science & KI Plattform" : "Enterprise Data Science & AI Platform"}
          </span>
        </div>
      </div>

      {/* Hero — editorial two-column layout with genuine engineering tone */}
      <section className="border-b border-line bg-canvas py-16 sm:py-24 lg:py-28">
        <div className="container-page">
          {/* Eyebrow */}
          <p className="eyebrow mb-5">{t.hero.badge}</p>

          {/* Headline + sub in editorial two-column layout */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[62px]">
                {t.hero.headline}
              </h1>
              {t.hero.supportingStatement && (
                <p className="mt-4 font-mono text-xs sm:text-sm text-royal font-medium tracking-wide">
                  {t.hero.supportingStatement}
                </p>
              )}
            </div>

            <div className="lg:pb-1">
              <p className="text-base leading-relaxed text-secondary sm:text-lg">
                {t.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn-primary">
                  {t.hero.ctaPrimary}
                </Link>
                <Link href="/case-studies" className="btn-secondary">
                  {t.hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>

          {/* Trust Checkpoints — clean bordered row */}
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-3 border-t border-line pt-6 sm:grid-cols-4">
            {[
              t.hero.checklist.delivery,
              t.hero.checklist.noLockIn,
              t.hero.checklist.handover,
              t.hero.checklist.euHosted,
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs font-medium text-ink">
                <svg className="h-4 w-4 shrink-0 text-royal" fill="none" viewBox="0 0 16 16">
                  <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentic Architecture & Dashboard Visual Strip */}
      <div className="border-b border-line bg-white py-6">
        <div className="container-page">
          <div className="overflow-hidden rounded-card border border-line bg-canvas">
            <Image
              src="/images/Homepage-feature.png"
              alt="consultfox production data analytics and AI interface"
              width={1160}
              height={560}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 4 Primary Services in Editorial Rows */}
      <Section id="services">
        <SectionHeading
          eyebrow={t.whatWeBuild.eyebrow}
          title={t.whatWeBuild.title}
          description={t.whatWeBuild.description}
        />
        <PrimaryServicesSection />
      </Section>

      {/* Numbered Process Timeline (01 to 05) */}
      <Section tint id="process">
        <SectionHeading
          eyebrow={t.howWeWork.eyebrow}
          title={t.howWeWork.title}
          description={t.howWeWork.description}
        />
        <ProcessTimeline />
      </Section>

      {/* Featured Case Studies (Detailed Engineering Proof) */}
      <Section id="case-studies">
        <SectionHeading
          eyebrow={t.caseStudiesSection.eyebrow}
          title={t.caseStudiesSection.title}
          description={t.caseStudiesSection.description}
        />
        <FeaturedCaseStudies />
      </Section>

      {/* Technology Stack (Reorganized into 6 Problem-Solving Groups) */}
      <Section tint id="tech-stack">
        <SectionHeading
          eyebrow={t.techStackSection.eyebrow}
          title={t.techStackSection.title}
          description={t.techStackSection.description}
        />
        <TechStack />
      </Section>

      {/* Comparison: Why ConsultFox */}
      <Section>
        <SectionHeading
          eyebrow={t.comparison.eyebrow}
          title={t.comparison.title}
          description={t.comparison.description}
        />
        <ComparisonTable />
      </Section>

      {/* Industry Challenges & Applicable Solutions */}
      <Section tint id="industries">
        <SectionHeading
          eyebrow={t.industriesSection.eyebrow}
          title={t.industriesSection.title}
          description={t.industriesSection.description}
        />
        <IndustriesGrid />
      </Section>

      {/* Human Credibility & Engineering Accountability */}
      <Section id="about">
        <AboutCredibilitySection />
      </Section>

      {/* FAQ */}
      <Section tint id="faq">
        <SectionHeading eyebrow={t.faqSection.eyebrow} title={t.faqSection.title} />
        <FAQAccordion items={t.faqSection.items} />
      </Section>

      {/* Final High-Contrast Dark CTA */}
      <CTASection />
    </>
  );
}
