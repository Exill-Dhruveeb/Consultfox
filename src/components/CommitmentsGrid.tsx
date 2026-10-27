"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function CommitmentsGrid() {
  const { lang } = useLanguage();
  const commitments = translations[lang].howWeWork.commitments;

  return (
    <div className="divide-y divide-line border-y border-line">
      {commitments.map((c, i) => (
        <div key={c.title} className="grid gap-4 py-8 sm:grid-cols-[80px_1fr] lg:grid-cols-[100px_1fr]">
          {/* Number */}
          <div className="flex items-start">
            <span className="font-mono text-3xl font-semibold leading-none text-line">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          {/* Content */}
          <div>
            <h3 className="font-display text-lg font-semibold text-ink">
              {c.title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-secondary">
              {c.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
