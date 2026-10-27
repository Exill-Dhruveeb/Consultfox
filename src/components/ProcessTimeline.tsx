"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ProcessTimeline() {
  const { lang } = useLanguage();
  const t = translations[lang].howWeWork;
  const steps = t.steps || [];

  return (
    <div className="space-y-16">
      {/* 5-Step Numbered Timeline */}
      <div className="relative border-l border-line ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-12">
        {steps.map((s) => (
          <div key={s.step} className="relative group">
            {/* Timeline node */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-0 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-white text-xs font-mono font-semibold text-royal shadow-xs">
              {s.step}
            </div>

            {/* Stage content */}
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <span className="font-mono text-xs font-semibold text-royal uppercase tracking-wider">
                  {lang === "de" ? `Phase ${s.step}` : `Stage ${s.step}`}
                </span>
                <h3 className="mt-1 font-display text-2xl font-semibold text-ink">
                  {s.title}
                </h3>
                <div className="mt-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary">
                    {lang === "de" ? "Ablauf & Methodik" : "What Happens"}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink">{s.whatHappens}</p>
                </div>
              </div>

              {/* What the client receives */}
              <div className="rounded-card border border-line bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lavender text-royal text-xs font-bold">
                    ✓
                  </span>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-ink">
                    {lang === "de" ? "Was Sie erhalten (Deliverable)" : "What You Receive (Deliverable)"}
                  </p>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-secondary font-medium">
                  {s.deliverable}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Principles (Transparent Standards) */}
      <div className="rounded-card border border-line bg-white p-6 sm:p-10">
        <div className="max-w-2xl mb-8">
          <span className="font-mono text-xs uppercase tracking-wider text-royal font-semibold">
            {lang === "de" ? "Engineering-Prinzipien" : "Engineering Principles"}
          </span>
          <h4 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
            {lang === "de"
              ? "Verbindliche Standards für jede Zusammenarbeit"
              : "Binding Standards Across Every Engagement"}
          </h4>
          <p className="mt-2 text-sm text-secondary">
            {lang === "de"
              ? "Wir verkaufen keine offenen Beraterstunden, sondern definierte Resultate mit voller Verantwortung für die Codebasis."
              : "We don't bill open-ended retainers to tell you what's broken; we engineer and deploy verified solutions into your environment."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
          {t.commitments.slice(0, 3).map((c, i) => (
            <div key={c.title} className={`${i > 0 ? "sm:pl-6" : ""} pt-4 sm:pt-0`}>
              <span className="font-mono text-xs font-semibold text-royal">0{i + 1}</span>
              <h5 className="mt-1.5 font-display text-base font-semibold text-ink">{c.title}</h5>
              <p className="mt-2 text-sm leading-relaxed text-secondary">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
