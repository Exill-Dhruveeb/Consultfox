"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface TechGroup {
  groupDe: string;
  groupEn: string;
  problemDe: string;
  problemEn: string;
  tools: {
    name: string;
    logo?: string;
  }[];
}

const techGroups: TechGroup[] = [
  {
    groupDe: "01. Datenplattformen & Lakehouses",
    groupEn: "01. Data Platforms & Lakehouses",
    problemDe:
      "Löst starre Speichersilos, langsame SQL-Abfragen auf Rohdaten und unkontrollierte Cloud-Compute-Kosten.",
    problemEn:
      "Eliminates storage silos, sluggish SQL queries against raw tables, and runaway cloud compute costs.",
    tools: [
      { name: "Snowflake", logo: "/images/tech/Snowflake-1.svg" },
      { name: "Microsoft Fabric", logo: "/images/tech/Microsoft-Fabric.svg" },
      { name: "Databricks", logo: "/images/tech/Databricks-2.svg" },
      { name: "Google BigQuery", logo: "/images/tech/BigQuery.svg" },
      { name: "Azure Synapse", logo: "/images/tech/Azure-Synapse-1.svg" },
    ],
  },
  {
    groupDe: "02. Datenintegration & Transformation",
    groupEn: "02. Data Integration & Transformation",
    problemDe:
      "Beseitigt manuelle CSV-Exporte, ungetestete SQL-Skripte und fehleranfällige Batch-Laufzeiten.",
    problemEn:
      "Replaces fragile CSV exports, unverified SQL snippets, and brittle scheduled syncs with automated ELT pipelines.",
    tools: [
      { name: "dbt Core", logo: "/images/tech/dbt.svg" },
      { name: "Apache Spark", logo: "/images/tech/Apache-Spark-1.svg" },
      { name: "Azure Data Factory", logo: "/images/tech/Azure-Data-Factory.svg" },
      { name: "Fivetran", logo: "/images/tech/Fivetran.svg" },
      { name: "n8n", logo: "/images/tech/N8N.svg" },
    ],
  },
  {
    groupDe: "03. Business Intelligence & Semantic Layers",
    groupEn: "03. Business Intelligence & Semantic Layers",
    problemDe:
      "Beendet widersprüchliche Kennzahlen in Abteilungen und liefert verlässliche Dashboards mit Sub-Sekunden-Reaktionszeit.",
    problemEn:
      "Ends conflicting metric calculations across departments and delivers sub-second dashboard rendering.",
    tools: [
      { name: "Power BI", logo: "/images/tech/Power-BI.svg" },
      { name: "Tableau", logo: "/images/tech/Tableau.svg" },
      { name: "Looker", logo: "/images/tech/Looker.svg" },
    ],
  },
  {
    groupDe: "04. KI & Retrieval (RAG)",
    groupEn: "04. AI & Retrieval (RAG)",
    problemDe:
      "Macht unstrukturierte Dokumente präzise durchsuchbar und automatisiert Sprach-/Chatprozesse ohne Halluzinationen.",
    problemEn:
      "Surfaces verified answers across unstructured corporate archives and automates conversational workflows without hallucinations.",
    tools: [
      { name: "OpenAI", logo: "/images/tech/OpenAI.svg" },
      { name: "Cohere", logo: "/images/tech/Cohere.svg" },
      { name: "LangChain", logo: "/images/tech/LangChain.svg" },
      { name: "Qdrant Vector DB", logo: "/images/tech/Qdrant-1.svg" },
      { name: "Bland AI", logo: "/images/tech/Bland-AI.svg" },
    ],
  },
  {
    groupDe: "05. Cloud-Infrastruktur & Hosting",
    groupEn: "05. Cloud Infrastructure & Hosting",
    problemDe:
      "Garantiert DSGVO-konformes Hosting in der EU, isolierte Mandantenfähigkeit und elastische Skalierbarkeit.",
    problemEn:
      "Provides strictly GDPR-compliant EU hosting, isolated tenant architectures, and autoscaling compute workloads.",
    tools: [
      { name: "Microsoft Azure", logo: "/images/tech/Azure.svg" },
      { name: "Amazon Web Services (AWS)", logo: "/images/tech/AWS.svg" },
      { name: "Google Cloud Platform (GCP)", logo: "/images/tech/GCP.svg" },
    ],
  },
  {
    groupDe: "06. Governance, Schemaschutz & Sicherheit",
    groupEn: "06. Governance, Schema Defense & Security",
    problemDe:
      "Schützt sensible Geschäftsdaten durch rollenbasierte Zugriffskontrollen, Audit-Logging und Schema-Regressionstests.",
    problemEn:
      "Protects sensitive business records with role-based access controls, automated schema tests, and audit trails.",
    tools: [
      { name: "dbt Tests & Great Expectations" },
      { name: "Role-Based Access Control (RBAC)" },
      { name: "DSGVO / GDPR Audit Logging" },
      { name: "Automated Data Lineage" },
    ],
  },
];

export default function TechStack() {
  const { lang } = useLanguage();

  return (
    <div className="space-y-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((g) => {
          const groupName = lang === "de" ? g.groupDe : g.groupEn;
          const problem = lang === "de" ? g.problemDe : g.problemEn;

          return (
            <div
              key={groupName}
              className="flex flex-col rounded-card border border-line bg-white p-6 shadow-2xs"
            >
              {/* Title with uniform min-height so 1-line and 2-line titles align */}
              <div className="min-h-[44px] flex items-center">
                <h4 className="font-display text-base font-semibold text-ink leading-snug">
                  {groupName}
                </h4>
              </div>

              {/* Problem box with uniform height across all cards */}
              <div className="mt-3 min-h-[108px] rounded-control bg-canvas p-3 border border-line flex flex-col justify-start">
                <p className="text-[11px] font-mono uppercase text-secondary font-semibold">
                  {lang === "de" ? "Gelöstes Problem" : "Problem Solved"}
                </p>
                <p className="mt-1 text-xs text-secondary leading-relaxed">
                  {problem}
                </p>
              </div>

              {/* Horizontal divider line — aligned at the EXACT same vertical position */}
              <div className="mt-5 border-t border-line pt-4 flex-1 flex flex-col justify-start space-y-2">
                {g.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="h-7 flex items-center gap-2.5 text-xs text-ink"
                  >
                    {tool.logo ? (
                      <div className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={16}
                          height={16}
                          className="max-h-4 max-w-4 object-contain"
                        />
                      </div>
                    ) : (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-royal font-bold text-xs">
                        •
                      </span>
                    )}
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-card border border-line bg-canvas p-5 text-center text-xs text-secondary">
        <p>
          {lang === "de"
            ? "Wir zwingen Ihnen keine proprietären Werkzeuge auf. Wir implementieren und optimieren ausschließlich etablierte Standard-Technologien direkt in Ihrer eigenen Cloud-Umgebung."
            : "We never force proprietary vendor locks. We architect and optimize standard, battle-tested modern data stack technologies directly within your own cloud tenant."}
        </p>
      </div>
    </div>
  );
}
