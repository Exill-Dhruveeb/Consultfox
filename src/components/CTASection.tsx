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

  const resolvedTitle = title || t.title;
  const resolvedBody = body || t.body;
  const resolvedCtaLabel = ctaLabel || t.button;

  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{resolvedTitle}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/70">{resolvedBody}</p>
        </div>
        <Link href={ctaHref} className="btn-primary shrink-0">
          {resolvedCtaLabel}
        </Link>
      </div>
    </section>
  );
}
