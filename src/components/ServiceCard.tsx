"use client";

import Link from "next/link";
import { Service } from "@/data/services";
import { useLanguage } from "@/context/LanguageContext";
import { translations, serviceTranslations } from "@/data/translations";

export default function ServiceCard({ service }: { service: Service }) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const localized = serviceTranslations[service.slug]?.[lang];

  const name = localized?.name || service.name;
  const pitch = localized?.pitch || service.pitch;
  const imageSrc = service.image || "/images/data-warehouse.png";

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-card border border-line bg-white shadow-2xs transition-all duration-200 hover:border-royal"
    >
      <div className="relative flex h-44 w-full items-center justify-center border-b border-line bg-canvas p-5 overflow-hidden">
        <img
          src={imageSrc}
          alt={name}
          className="relative z-10 max-h-32 max-w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <span className="inline-block rounded-control bg-canvas px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-secondary">
            {service.group}
          </span>
          <div className="mt-2.5 min-h-[48px] flex items-center">
            <h3 className="font-display text-base font-semibold text-ink leading-snug transition-colors group-hover:text-royal">
              {name}
            </h3>
          </div>
          <p className="mt-2 min-h-[40px] text-sm leading-relaxed text-secondary line-clamp-2">
            {pitch}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-royal group-hover:underline">
            {t.servicesPage.exploreService}
            <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
