"use client";

import { companyInfo } from "@/data/content";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ContactPageContent() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="py-16 sm:py-20">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow mb-4">{t.contactPage.eyebrow}</p>
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            {t.contactPage.title}
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            {t.contactPage.description}
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
                {t.contactPage.phoneLabel}
              </p>
              <div className="mt-1 flex items-center gap-3">
                <a
                  href={companyInfo.phoneHref}
                  className="text-base font-medium text-ink hover:text-royal"
                >
                  {companyInfo.phone}
                </a>
                <a
                  href={companyInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-green-500/30 bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 hover:bg-green-100"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
                {t.contactPage.emailLabel}
              </p>
              <a
                href={`mailto:${companyInfo.email}`}
                className="mt-1 block text-base font-medium text-ink hover:text-royal"
              >
                {companyInfo.email}
              </a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
                {t.contactPage.addressLabel}
              </p>
              <a
                href={companyInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block max-w-xs text-base font-medium text-ink hover:text-royal"
              >
                {companyInfo.address}
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
