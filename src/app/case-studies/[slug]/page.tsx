import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  return { title: `${study.title} | Case Study`, description: study.summary };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);
  const imgSrc = study.coverImage || "/images/Homepage-feature.png";

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white via-mist/20 to-white py-16 sm:py-24">
        {/* Ambient purple glow */}
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-royal/10 blur-3xl" />

        <div className="container-page relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Link href="/case-studies" className="btn-text mb-6 inline-flex items-center gap-2 text-xs font-semibold text-royal">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true" className="rotate-180">
                <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All case studies
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-mist/60 px-3 py-1 font-mono text-xs font-semibold text-royal">
              <span>{study.industry}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {study.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-lg border border-line bg-white px-3 py-1.5 font-medium text-ink shadow-2xs">
                Client: <strong className="font-semibold text-royal">{study.client}</strong>
              </span>
              <span className="rounded-lg border border-line bg-white px-3 py-1.5 font-medium text-muted shadow-2xs">
                Industry: <span className="text-ink">{study.industry}</span>
              </span>
            </div>
          </div>

          {/* Right column: Case study cover */}
          <div className="relative">
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-white p-4 shadow-xl transition-all duration-300 hover:border-royal/50 hover:shadow-2xl sm:p-5 flex items-center justify-center min-h-[300px] sm:min-h-[360px]">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl border border-line/60 bg-mist/40">
                <img
                  src={imgSrc}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="border-b border-line bg-mist/30 py-12">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-3">
            {study.metrics.map((metric, idx) => (
              <div key={idx} className="rounded-2xl border border-line bg-white p-6 shadow-2xs">
                <div className="font-display text-3xl font-bold text-royal sm:text-4xl">
                  {metric.value}
                </div>
                <p className="mt-2 text-sm font-semibold text-ink">{metric.label}</p>
                <p className="mt-1 text-xs text-muted">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge and Solution */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-8 shadow-2xs">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-rose-600">
              The Challenge
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
              The Operational Bottleneck
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {study.challenge}
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-8 shadow-2xs">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-royal">
              The Architecture
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
              How consultfox Solved It
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {study.solution}
            </p>
          </div>
        </div>
      </Section>

      {/* Implementation Pillars */}
      <Section tint>
        <SectionHeading
          eyebrow="Implementation"
          title="Core system components"
          description="Engineered for high reliability, fault tolerance, and seamless handoff to internal teams."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {study.architectureDetails.map((pillar, idx) => (
            <div key={idx} className="rounded-2xl border border-line bg-white p-6 shadow-2xs">
              <span className="font-mono text-xs font-semibold text-royal">
                0{idx + 1} / COMPONENT
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech Stack pills */}
        <div className="mt-12 rounded-2xl border border-line bg-white p-6 shadow-2xs">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-royal">
            Technologies Deployed
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-line bg-mist/60 px-3 py-1.5 text-xs font-medium text-ink"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {others.length > 0 && (
        <Section>
          <SectionHeading eyebrow="More work" title="Other case studies" />
          <div className="grid gap-5 sm:grid-cols-3">
            {others.map((c) => (
              <CaseStudyCard key={c.slug} study={c} />
            ))}
          </div>
        </Section>
      )}

      <CTASection ctaLabel="Book a Discovery Call" />
    </>
  );
}
