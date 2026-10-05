"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import ServiceCard from "@/components/ServiceCard";
import { Service } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { translations, serviceTranslations } from "@/data/translations";

const engagementIcons = [
  "/images/by-working-01.svg",
  "/images/by-working-02.svg",
  "/images/by-working-04.svg",
];

interface ServiceDetailContentProps {
  service: Service;
  related: Service[];
}

export default function ServiceDetailContent({ service, related }: ServiceDetailContentProps) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const localizedService = serviceTranslations[service.slug]?.[lang];

  const serviceName = localizedService?.name || service.name;
  const servicePitch = localizedService?.pitch || service.pitch;
  const serviceIntro = localizedService?.intro || service.intro;
  const imageSrc = service.image || "/images/data-warehouse.png";

  const talkToEngineerText =
    lang === "de"
      ? `Sprechen Sie mit einem ${serviceName}-Experten`
      : `Talk to a ${serviceName.toLowerCase()} engineer`;

  const seeApproachText = lang === "de" ? "Unser Vorgehen ansehen" : "See our approach";

  const ctaTitle =
    lang === "de"
      ? `Bereit, über ${serviceName} zu sprechen?`
      : `Ready to talk about ${serviceName.toLowerCase()}?`;

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
              {servicePitch}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {serviceIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                {talkToEngineerText}
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                {seeApproachText}
              </Link>
            </div>
          </div>

          {/* Right column illustration */}
          <div className="relative">
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-mist/60 to-white p-6 shadow-xl transition-all duration-300 hover:border-royal/50 hover:shadow-2xl sm:p-8 flex items-center justify-center min-h-[320px] sm:min-h-[380px]">
              <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-violet/15 blur-2xl transition-all duration-300 group-hover:scale-150 group-hover:bg-violet/25" />
              <div className="relative z-10 flex h-60 sm:h-72 w-full items-center justify-center">
                <img
                  src={imageSrc}
                  alt={serviceName}
                  className="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow={t.servicesPage.howWeEngageEyebrow}
          title={t.servicesPage.howWeEngageTitle}
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {t.servicesPage.steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-7 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-accent-icon hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist/70 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={engagementIcons[i] || "/images/by-working-01.svg"}
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
          <SectionHeading
            eyebrow={t.servicesPage.relatedEyebrow}
            title={`${t.servicesPage.relatedTitlePrefix} ${service.group}`}
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeading eyebrow={t.faqSection.eyebrow} title={t.faqSection.title} />
        <FAQAccordion items={t.faqSection.items} />
      </Section>

      <CTASection
        title={ctaTitle}
        ctaLabel={t.ctaSection.button}
      />
    </>
  );
}
