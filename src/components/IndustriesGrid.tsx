import Image from "next/image";
import { industries } from "@/data/content";

const industryDetails: Record<
  string,
  { tag: string; metric: string; icon: React.ReactNode }
> = {
  "Retail & E-Commerce": {
    tag: "Customer 360 & Forecasting",
    metric: "Inventory & Churn Optimization",
    icon: (
      <svg className="h-6 w-6 text-accent-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  "Healthcare": {
    tag: "HIPAA Compliant Lakehouses",
    metric: "Clinical Analytics & EHR",
    icon: (
      <svg className="h-6 w-6 text-accent-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  "Finance & Banking": {
    tag: "Real-time Telemetry & Risk",
    metric: "Audit-Ready Dashboards",
    icon: (
      <svg className="h-6 w-6 text-accent-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  "Real Estate & Construction": {
    tag: "Multi-site Consolidations",
    metric: "Cashflow & Project Analytics",
    icon: (
      <svg className="h-6 w-6 text-accent-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  "IoT & Technology": {
    tag: "High-throughput Streaming",
    metric: "Kafka / Spark Ingestion",
    icon: (
      <svg className="h-6 w-6 text-accent-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  "Manufacturing & Industrial": {
    tag: "Supply Chain Observability",
    metric: "OEE & Yield Optimization",
    icon: (
      <svg className="h-6 w-6 text-accent-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
};

export default function IndustriesGrid() {
  return (
    <div className="space-y-8">
      {/* Featured visual showcase banner */}
      <div className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-r from-mist/50 via-white to-mist/30 p-6 sm:p-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="eyebrow">Cross-Vertical Experience</span>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
              Engineered for specific operational complexities
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Every industry comes with its own schema realities, compliance hurdles, and cadence requirements. We don&apos;t apply cookie-cutter models; we map directly to your sector&apos;s unit economics.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-accent">
              <span className="rounded-full border border-accent/20 bg-white px-3 py-1">HIPAA &amp; SOC2</span>
              <span className="rounded-full border border-accent/20 bg-white px-3 py-1">Sub-second Streaming</span>
              <span className="rounded-full border border-accent/20 bg-white px-3 py-1">ERP &amp; CRM Unified</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-line bg-white/60 p-2 shadow-inner">
            <Image
              src="/images/industries-work.png"
              alt="consultfox multi-industry analytics solutions"
              width={600}
              height={240}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* Industry Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind) => {
          const detail = industryDetails[ind.name];
          return (
            <div
              key={ind.name}
              className="group relative flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-accent-icon hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist/70 transition-transform duration-300 group-hover:scale-110">
                    {detail?.icon}
                  </div>
                  {detail && (
                    <span className="rounded-full border border-accent/20 bg-mist/40 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
                      {detail.tag}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink transition-colors group-hover:text-primary">
                  {ind.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{ind.description}</p>
              </div>

              {detail && (
                <div className="mt-5 border-t border-line/70 pt-3 text-[11px] font-medium text-muted">
                  Focus: <span className="font-semibold text-ink">{detail.metric}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
