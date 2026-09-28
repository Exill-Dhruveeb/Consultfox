import type { Metadata } from "next";
import { companyInfo } from "@/data/content";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Book a free discovery call with consultfox's data and AI team. Our team responds within one business day.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
            We&apos;d love to hear from you
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Whether you have a project, a data challenge, or just an idea to explore, we&apos;re happy
            to talk. Our team responds within one business day, keeping every conversation focused,
            honest, and straight to the point.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">Phone / WhatsApp</p>
              <div className="mt-1 flex items-center gap-3">
                <a href={companyInfo.phoneHref} className="text-base font-medium text-ink hover:text-royal">
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">Email</p>
              <a href={`mailto:${companyInfo.email}`} className="mt-1 block text-base font-medium text-ink hover:text-royal">
                {companyInfo.email}
              </a>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">Address</p>
              <a href={companyInfo.mapsUrl} className="mt-1 block max-w-xs text-base font-medium text-ink hover:text-royal">
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
