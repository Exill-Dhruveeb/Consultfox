import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";
import { homeFaqs } from "@/data/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.name} | consultfox`,
    description: service.pitch,
  };
}

const engagementIcons = [
  "/images/by-working-01.svg",
  "/images/by-working-02.svg",
  "/images/by-working-04.svg",
];

const engagementSteps = [
  {
    title: "Discovery and audit",
    body: "We start with a discovery session, understanding your source systems, current setup, and what downstream teams actually need before recommending anything.",
  },
  {
    title: "Design and build in layers",
    body: "We design the target architecture, agree on conventions, and build in layers, with cost controls, observability, and documentation included from the first commit, not optional.",
  },
  {
    title: "Handover, documented",
    body: "We hand over with full documentation, including runbooks and a clear path for your team to extend what's been built without breaking it.",
  },
];

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  const related = services.filter((s) => s.group === service.group && s.slug !== service.slug).slice(0, 3);
  const imageSrc = service.image || "/images/data-warehouse.png";

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white via-mist/20 to-white py-16 sm:py-24">
        {/* Subtle purple ambient gradient */}
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-royal/10 blur-3xl" />

        <div className="container-page relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-mist/60 px-3 py-1 font-mono text-xs font-semibold text-royal">
              <span>{service.group}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              {service.pitch}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Talk to a {service.name.toLowerCase()} engineer
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See our approach
              </Link>
            </div>
          </div>

          {/* Right column illustration */}
          <div className="relative">
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-mist/60 to-white p-6 shadow-xl transition-all duration-300 hover:border-royal/50 hover:shadow-2xl sm:p-8 flex items-center justify-center min-h-[320px] sm:min-h-[380px]">
              {/* Subtle ambient purple glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-violet/15 blur-2xl transition-all duration-300 group-hover:scale-150 group-hover:bg-violet/25" />
              <div className="relative z-10 flex h-60 sm:h-72 w-full items-center justify-center">
                <img
                  src={imageSrc}
                  alt={service.name}
                  className="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading eyebrow="How we engage" title="A predictable, three-step process" />
        <div className="grid gap-6 sm:grid-cols-3">
          {engagementSteps.map((step, i) => (
            <div
              key={step.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-accent-icon hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist/70 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={engagementIcons[i]}
                      alt={step.title}
                      width={40}
                      height={40}
                      className="h-9 w-9"
                    />
                  </div>
                  <span className="font-mono text-xs font-semibold text-accent-icon">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink transition-colors group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {related.length > 0 && (
        <Section tint>
          <SectionHeading eyebrow="Related" title={`More from ${service.group}`} />
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading eyebrow="Questions" title="Questions we hear most" />
        <FAQAccordion items={homeFaqs} />
      </Section>

      <CTASection
        title={`Ready to talk about ${service.name.toLowerCase()}?`}
        ctaLabel="Book a Discovery Call"
      />
    </>
  );
}
