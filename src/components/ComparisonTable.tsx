import { comparisonRows } from "@/data/content";

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-card border border-line">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-line bg-mist text-left">
            <th className="w-[28%] px-5 py-4 font-medium text-muted">What you get</th>
            <th className="w-[36%] px-5 py-4 font-display font-semibold text-royal">consultfox</th>
            <th className="w-[36%] px-5 py-4 font-medium text-muted">Typical consulting firms</th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-0">
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
