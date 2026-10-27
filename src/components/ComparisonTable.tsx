"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ComparisonTable() {
  const { lang } = useLanguage();
  const comparison = translations[lang].comparison;

  return (
    <div className="overflow-x-auto rounded-card border border-line bg-white shadow-2xs">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-line bg-canvas text-left">
            <th className="w-[28%] px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-secondary">
              {comparison.headers.criterion}
            </th>
            <th className="w-[36%] px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-royal">
              {comparison.headers.consultfox}
            </th>
            <th className="w-[36%] px-6 py-4 font-mono text-xs font-semibold uppercase tracking-wider text-secondary">
              {comparison.headers.typical}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {comparison.rows.map((row) => (
            <tr key={row.label} className="transition-colors hover:bg-canvas/50">
              <td className="px-6 py-4.5 align-top font-semibold text-ink text-sm">
                {row.label}
              </td>
              <td className="px-6 py-4.5 align-top text-ink text-sm leading-relaxed">
                <span className="font-medium">{row.consultfox}</span>
              </td>
              <td className="px-6 py-4.5 align-top text-secondary text-sm leading-relaxed">
                {row.typical}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
