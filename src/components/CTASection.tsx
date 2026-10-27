"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function CTASection({
  title,
  body,
  ctaLabel,
  ctaHref = "/contact",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const { lang } = useLanguage();
  const t = translations[lang].ctaSection;

  const resolvedTitle = title || (lang === "de" ? "Lassen Sie uns Ihre Datenherausforderung lösen." : "Let's solve your data challenge.");
  const resolvedBody = body || t.body;
  const resolvedCtaLabel = ctaLabel || t.button;

  return (
    <section className="border-t border-line bg-ink py-20 sm:py-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-white/40">
            {lang === "de" ? "Nächster Schritt" : "Next step"}
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {resolvedTitle}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            {resolvedBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-control bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-canvas"
            >
              {resolvedCtaLabel}
            </Link>
            <a
              href="mailto:info@consultfox.de"
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              info@consultfox.de
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
