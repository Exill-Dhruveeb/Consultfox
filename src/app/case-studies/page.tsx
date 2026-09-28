import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real data and AI systems consultfox has delivered, from automated ETL pipelines to AI-powered outbound calling engines.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Case studies</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            The work speaks for itself
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            Real systems that eliminated manual work, surfaced real-time insights, and helped
            businesses scale.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading title="Recent engagements" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>

      <CTASection ctaLabel="Book a Discovery Call" />
    </>
  );
}
