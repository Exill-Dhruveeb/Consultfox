import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { serviceGroups, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data engineering, analytics and BI, advanced AI, strategy and consulting, and operations: the full stack consultfox builds across 20 services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow mb-4">Services</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            The full data and AI stack
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            We work across the full data and AI stack, from raw ingestion to production-ready AI.
            Pick where you&apos;re stuck.
          </p>
        </div>
      </section>

      <Section>
        <div className="space-y-16">
          {serviceGroups.map((group) => (
            <div key={group} id={group.toLowerCase().replace(/\s+/g, "-")}>
              <SectionHeading title={group} align="left" />
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => s.group === group)
                  .map((s) => (
                    <ServiceCard key={s.slug} service={s} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Not sure which service you need?"
        body="Tell us what's broken. We'll point you at the right starting place, even if that means telling you it's smaller than you think."
        ctaLabel="Book a Discovery Call"
      />
    </>
  );
}
