"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const commitmentIcons = [
  "/images/once-commit.svg",
  "/images/by-working-01.svg",
  "/images/by-working-02.svg",
  "/images/by-working-03.svg",
  "/images/by-working-04.svg",
  "/images/by-working-05.svg",
];

export default function CommitmentsGrid() {
  const { lang } = useLanguage();
  const commitments = translations[lang].howWeWork.commitments;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {commitments.map((c, i) => {
        const iconSrc = commitmentIcons[i] || commitmentIcons[0];
        return (
          <div
            key={c.title}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-royal hover:shadow-lg hover:shadow-royal/10"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-mist/60 p-1 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={iconSrc}
                    alt={c.title}
                    width={48}
                    height={48}
                    className="h-11 w-11"
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-royal">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink transition-colors group-hover:text-royal">
                {c.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{c.body}</p>
            </div>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-royal opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>{lang === "de" ? "Unser Versprechen" : "Our commitment"}</span>
              <svg className="h-3.5 w-3.5 translate-x-0 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
