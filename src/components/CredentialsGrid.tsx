import { credentials } from "@/data/content";

export default function CredentialsGrid() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
      {credentials.map((c) => (
        <div key={c.label} className="bg-white p-6">
          <p className="font-mono text-2xl font-medium text-deep">{c.value}</p>
          <p className="mt-2 text-sm font-medium text-ink">{c.label}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted">{c.detail}</p>
        </div>
      ))}
    </div>
  );
}
