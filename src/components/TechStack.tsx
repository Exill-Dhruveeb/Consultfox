"use client";

import Image from "next/image";
import { techStack } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

const toolLogos: Record<string, string> = {
  Snowflake: "/images/tech/Snowflake-1.svg",
  "Microsoft Fabric": "/images/tech/Microsoft-Fabric.svg",
  BigQuery: "/images/tech/BigQuery.svg",
  Databricks: "/images/tech/Databricks-2.svg",
  "Azure Synapse": "/images/tech/Azure-Synapse-1.svg",
  dbt: "/images/tech/dbt.svg",
  "Apache Spark": "/images/tech/Apache-Spark-1.svg",
  "Azure Data Factory": "/images/tech/Azure-Data-Factory.svg",
  n8n: "/images/tech/N8N.svg",
  Fivetran: "/images/tech/Fivetran.svg",
  "Power BI": "/images/tech/Power-BI.svg",
  Tableau: "/images/tech/Tableau.svg",
  Looker: "/images/tech/Looker.svg",
  OpenAI: "/images/tech/OpenAI.svg",
  "Bland AI": "/images/tech/Bland-AI.svg",
  Qdrant: "/images/tech/Qdrant-1.svg",
  LangChain: "/images/tech/LangChain.svg",
  Cohere: "/images/tech/Cohere.svg",
  Azure: "/images/tech/Azure.svg",
  AWS: "/images/tech/AWS.svg",
  GCP: "/images/tech/GCP.svg",
};

const flagshipPartners = [
  { name: "Snowflake", role: "Cloud Data Platform", roleDe: "Cloud-Datenplattform", logo: "/images/tech/Snowflake-1.svg" },
  { name: "Microsoft Fabric", role: "Unified Analytics", roleDe: "Einheitliche Analytik", logo: "/images/tech/Microsoft-Fabric.svg" },
  { name: "Databricks", role: "Data & AI Lakehouse", roleDe: "Data & KI Lakehouse", logo: "/images/tech/Databricks-2.svg" },
  { name: "OpenAI", role: "Enterprise LLMs", roleDe: "Enterprise LLMs", logo: "/images/tech/OpenAI.svg" },
  { name: "dbt", role: "Data Transformation", roleDe: "Datentransformation", logo: "/images/tech/dbt.svg" },
  { name: "Power BI", role: "Business Intelligence", roleDe: "Business Intelligence", logo: "/images/tech/Power-BI.svg" },
];

export default function TechStack() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-10">
      {/* Flagship partner tier */}
      <div className="rounded-2xl border border-line bg-gradient-to-b from-mist/50 to-white p-6 sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="eyebrow">{lang === "de" ? "Enterprise Ökosystem" : "Enterprise Ecosystem"}</span>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink sm:text-xl">
              {lang === "de" ? "Plattformen, die wir konzipieren, migrieren und skalieren" : "Platforms we architect, migrate, and scale"}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-royal/20 bg-royal/5 px-3 py-1 text-xs font-semibold text-royal">
            <span className="h-1.5 w-1.5 rounded-full bg-royal animate-pulse" />
            {lang === "de" ? "Zertifizierte Standards" : "Certified Standards"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {flagshipPartners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center rounded-xl border border-line bg-white p-4 text-center shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-royal hover:shadow-md"
            >
              <div className="relative mb-2.5 flex h-12 w-12 items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={40}
                  height={40}
                  className="max-h-10 max-w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="font-display text-sm font-semibold text-ink transition-colors group-hover:text-royal">
                {partner.name}
              </span>
              <span className="mt-0.5 text-[11px] text-muted">
                {lang === "de" ? partner.roleDe : partner.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Categorized stack breakdown */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((cat) => (
          <div
            key={cat.category}
            className="rounded-2xl border border-line bg-white p-6 shadow-2xs transition-all duration-300 hover:border-royal/50 hover:shadow-xs"
          >
            <div className="mb-4 flex items-center justify-between border-b border-line pb-3">
              <h4 className="font-display text-xs font-semibold uppercase tracking-[0.06em] text-ink">
                {cat.category}
              </h4>
              <span className="rounded-full bg-mist/60 px-2 py-0.5 font-mono text-[10px] font-semibold text-muted">
                {cat.tools.length} {lang === "de" ? "Tools" : "tools"}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.tools.map((tool) => {
                const logo = toolLogos[tool];
                return (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-mist/30 px-3 py-1.5 text-xs font-medium text-ink transition-all hover:border-royal/40 hover:bg-white hover:shadow-2xs"
                  >
                    {logo ? (
                      <Image
                        src={logo}
                        alt={tool}
                        width={16}
                        height={16}
                        className="h-4 w-4 object-contain"
                      />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-royal" />
                    )}
                    <span>{tool}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
