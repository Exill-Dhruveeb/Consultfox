"use client";

import { Section, SectionHeading } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { serviceGroups, services } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <>
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow mb-4">{t.servicesPage.eyebrow}</p>
          <h1 className="max-w-2xl font-display text-4xl font-semibold text-ink sm:text-5xl">
            {t.servicesPage.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            {t.servicesPage.description}
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
        title={lang === "de" ? "Nicht sicher, welche Dienstleistung passt?" : "Not sure which service you need?"}
        body={
          lang === "de"
            ? "Erzählen Sie uns von Ihrem Engpass. Wir zeigen Ihnen den besten Einstiegspunkt - transparent und unkompliziert."
            : "Tell us what's broken. We'll point you at the right starting place, even if that means telling you it's smaller than you think."
        }
        ctaLabel={t.ctaSection.button}
      />
    </>
  );
}
