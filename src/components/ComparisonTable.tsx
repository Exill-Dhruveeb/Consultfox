"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ComparisonTable() {
  const { lang } = useLanguage();
  const comparison = translations[lang].comparison;

  return (
    <div className="overflow-x-auto rounded-card border border-line">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-line bg-mist text-left">
            <th className="w-[28%] px-5 py-4 font-medium text-muted">{comparison.headers.criterion}</th>
            <th className="w-[36%] px-5 py-4 font-display font-semibold text-royal">{comparison.headers.consultfox}</th>
            <th className="w-[36%] px-5 py-4 font-medium text-muted">{comparison.headers.typical}</th>
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-0 hover:bg-mist/30 transition-colors">
              <td className="px-5 py-4 align-top font-medium text-ink">{row.label}</td>
              <td className="px-5 py-4 align-top text-ink">{row.consultfox}</td>
              <td className="px-5 py-4 align-top text-muted">{row.typical}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
