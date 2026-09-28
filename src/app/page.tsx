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
import { homeFaqs } from "@/data/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white via-mist/20 to-white py-16 sm:py-24 lg:py-28">
        {/* Subtle purple ambient gradient glow */}
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-accent-icon/10 blur-3xl" />

        <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left Column: Copy & Actions */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-mist/50 px-3.5 py-1.5 text-xs font-semibold text-accent">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>Enterprise Data &amp; AI Consultancy</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl lg:text-[54px]">
              Data, governed and unified. AI, scaled and trusted.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Most businesses are sitting on more data than they know what to do with. We build pipelines, warehouses, dashboards, and AI systems that your team actually uses.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Talk to our Data &amp; AI Team
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See our work
              </Link>
            </div>

            {/* Value checklist */}
            <div className="mt-8 grid grid-cols-1 gap-2.5 border-t border-line/70 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">✓</span>
                <span>4-6 wk delivery</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">✓</span>
                <span>Zero lock-in</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/10 font-bold text-accent">✓</span>
                <span>100% code handover</span>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Platform Visual Frame */}
          <div className="relative">
            {/* Background decorative card / glass frame */}
            <div className="group relative rounded-2xl border border-line bg-white/80 p-3 shadow-xl backdrop-blur-xs transition-all duration-500 hover:border-accent/30 hover:shadow-2xl sm:p-4">
              {/* Window Header */}
              <div className="mb-3 flex items-center justify-between border-b border-line/70 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#E57373]" />
                  <span className="h-3 w-3 rounded-full bg-[#FFB74D]" />
                  <span className="h-3 w-3 rounded-full bg-[#81C784]" />
                  <span className="ml-2 font-mono text-[11px] text-muted">consultfox-analytics-platform.internal</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mist/60 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Live System
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-base font-bold text-ink">50+ Systems</p>
                  <p className="text-[11px] text-muted">Delivered in production</p>
                </div>
              </div>

              {/* Floating Highlight Badge 2: Partner Stack */}
              <div className="absolute -top-5 -right-4 hidden rounded-xl border border-line bg-white px-3.5 py-2.5 shadow-lg sm:flex sm:items-center sm:gap-2.5">
                <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
                <span className="text-xs font-semibold text-ink">Microsoft &amp; Snowflake Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we build: grouped pillars */}
      <Section>
        <SectionHeading
          eyebrow="What we build"
          title="The full data and AI stack, from raw ingestion to production-ready AI"
          description="Pick where you're stuck. Every service links through to how we approach it, what it fixes, and what it costs to leave unfixed."
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
            View all 20 services
          </Link>
        </div>
      </Section>

      {/* How we work */}
      <Section tint>
        <SectionHeading
          eyebrow="How we work"
          title="Architecture and ownership, not just a delivery team"
          description="consultfox doesn't just start projects. consultfox finishes them."
        />
        <CommitmentsGrid />
      </Section>

      {/* Tech Stack */}
      <Section>
        <SectionHeading
          eyebrow="The Stack We Build On"
          title="Enterprise-grade tooling, configured for your ecosystem"
          description="We don't force proprietary tooling. We engineer, optimize, and scale the modern data stack your team already knows."
        />
        <TechStack />
      </Section>

      {/* Comparison */}
      <Section tint>
        <SectionHeading
          eyebrow="Why consultfox"
          title="What we have that others don't"
          description="Data firms sell promises. We try to sell results."
        />
        <ComparisonTable />
      </Section>

      {/* Case studies */}
      <Section>
        <SectionHeading
          eyebrow="Proof"
          title="The work speaks for itself"
          description="Real systems, real outcomes, across five industries."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/case-studies" className="btn-secondary">
            View all case studies
          </Link>
        </div>
      </Section>

      {/* Industries */}
      <Section tint>
        <SectionHeading
          eyebrow="Industries"
          title="Industries we've worked in"
          description="Every engagement shaped by domain knowledge, not just technical skills."
        />
        <IndustriesGrid />
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Questions" title="Questions we hear most" />
        <FAQAccordion items={homeFaqs} />
      </Section>

      <CTASection />
    </>
  );
}
