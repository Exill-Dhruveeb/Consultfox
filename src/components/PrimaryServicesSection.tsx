"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { services, serviceGroups } from "@/data/services";
import { serviceTranslations } from "@/data/translations";

interface PrimaryService {
  number: string;
  slug: string;
  titleDe: string;
  titleEn: string;
  problemDe: string;
  problemEn: string;
  whatWeBuildDe: string;
  whatWeBuildEn: string;
  technologies: string[];
  deliverablesDe: string[];
  deliverablesEn: string[];
  image: string;
  imageAlt: string;
}

const primaryServices: PrimaryService[] = [
  {
    number: "01",
    slug: "data-engineering",
    titleDe: "Data Engineering",
    titleEn: "Data Engineering",
    problemDe:
      "Fragile ETL-Skripte, unzuverlässige Datenpipelines und isolierte Silos zwischen ERPs und CRMs führen zu Dateninkonsistenzen und ständigen Ausfällen bei nachgelagerten Analysen.",
    problemEn:
      "Brittle ETL scripts, delayed batch syncs, and disconnected silos across operational ERPs and CRMs result in inconsistent numbers and broken downstream reporting.",
    whatWeBuildDe:
      "Wir konzipieren und implementieren produktionsreife Cloud-Data-Warehouses und Lakehouses (Snowflake, Databricks, Microsoft Fabric) mit modularer dbt-Transformation, automatisierter Schemavalidierung und robustem Fehlermanagement.",
    whatWeBuildEn:
      "We design and deploy production-hardened cloud data warehouses and lakehouses (Snowflake, Databricks, Microsoft Fabric) featuring modular dbt modeling, automated schema validation, and self-healing ingestion.",
    technologies: ["Snowflake", "dbt Core", "Microsoft Fabric", "Databricks", "Apache Spark", "Airflow"],
    deliverablesDe: [
      "Produktions-Data-Warehouse / Lakehouse",
      "Automatisierte ELT-Pipelines mit Alerting",
      "Versionskontrollierte dbt-Transformationsschichten",
      "Vollständige Runbooks & 100% Code-Übergabe",
    ],
    deliverablesEn: [
      "Production-ready Data Warehouse / Lakehouse",
      "Automated ELT pipelines with alerting",
      "Version-controlled dbt data models",
      "Complete runbooks & 100% code handover",
    ],
    image: "/images/data-engineering-1.png",
    imageAlt: "consultfox data engineering pipeline architecture",
  },
  {
    number: "02",
    slug: "data-visualization",
    titleDe: "Analytics & Business Intelligence",
    titleEn: "Analytics & Business Intelligence",
    problemDe:
      "Langsame Ladezeiten (oft über 5 Minuten), widersprüchliche Kennzahlen zwischen Abteilungen und statische Tabellen, die Entscheidungsträger im Tagesgeschäft nicht weiterbringen.",
    problemEn:
      "Lethargic report refresh times (frequently over 5 minutes), conflicting metric definitions across departments, and clunky spreadsheets that slow down executive decision-making.",
    whatWeBuildDe:
      "Wir entwickeln einheitliche semantische Datenmodelle und intuitive, hochperformante Power BI- und Tableau-Dashboards. Entscheidungsrelevante Kennzahlen stehen sekundenschnell, verlässlich und rollenbasiert zur Verfügung.",
    whatWeBuildEn:
      "We build unified semantic models and responsive, high-performance Power BI and Tableau dashboards that deliver trusted KPIs with sub-second response times and strict row-level security.",
    technologies: ["Power BI", "DAX & Tabular Models", "Tableau", "Looker", "Microsoft Fabric BI"],
    deliverablesDe: [
      "Optimierte Executive- & Abteilungs-Dashboards",
      "Einheitliche semantische Datenschicht (Single Source of Truth)",
      "Automatisierte Berichtsaktualisierung",
      "Mitarbeiter-Schulung für Self-Service-Analytics",
    ],
    deliverablesEn: [
      "Optimized executive & operational dashboards",
      "Unified semantic metric layer (Single Source of Truth)",
      "Automated refresh pipelines & scheduled distribution",
      "Internal team enablement for self-service analytics",
    ],
    image: "/images/business-intelligence-1.png",
    imageAlt: "consultfox analytics and BI dashboard interface",
  },
  {
    number: "03",
    slug: "ai-agent-development",
    titleDe: "KI & Intelligente Automatisierung",
    titleEn: "AI & Intelligent Automation",
    problemDe:
      "Manuelle Fleißarbeit bei Dokumentenprüfungen, zeitraubende Routinekommunikation und unstrukturierte Wissensdatenbanken, die wertvolles Expertenwissen unauffindbar machen.",
    problemEn:
      "Manual document processing backlogs, repetitive voice/text qualification overhead, and unindexed internal knowledge bases that keep critical precedents buried in silos.",
    whatWeBuildDe:
      "Wir entwickeln private, DSGVO-konforme Retrieval-Augmented Generation (RAG)-Suchmaschinen und autonome Sprach- und Chat-Agenten mit direkter CRM- und ERP-Synchronisation ohne Blackbox-Verhalten.",
    whatWeBuildEn:
      "We build enterprise-grade, GDPR-compliant Retrieval-Augmented Generation (RAG) knowledge systems and autonomous voice/chat agents with bidirectional CRM/ERP integration and strict citation guardrails.",
    technologies: ["Python", "LangChain", "Pinecone Vector DB", "Claude / OpenAI LLMs", "Deepgram STT", "ElevenLabs"],
    deliverablesDe: [
      "Enterprise RAG-Suchmaschine mit exakten Quellenverweisen",
      "Autonome Sprach- oder Chat-Qualifizierungsagenten",
      "LLMOps-Infrastruktur mit Latenz- & Kostenüberwachung",
      "Dokumentierte APIs und rollenbasierte Zugriffskontrollen",
    ],
    deliverablesEn: [
      "Enterprise RAG engine with verifiable source citations",
      "Autonomous voice or text qualification agents",
      "LLMOps observability, cost caps & latency monitoring",
      "Documented API endpoints & role-based access controls",
    ],
    image: "/images/chatbot-development.png",
    imageAlt: "consultfox AI knowledge and conversational agent architecture",
  },
  {
    number: "04",
    slug: "data-strategy-consulting",
    titleDe: "Data & KI-Strategie",
    titleEn: "Data & AI Strategy",
    problemDe:
      "Unüberlegte Software-Käufe, ausufernde Cloud-Rechnungen und unklare Prioritäten bei Daten- und KI-Investitionen, die keinen messbaren ROI generieren.",
    problemEn:
      "Runaway cloud storage/compute bills, tool sprawl, vendor lock-in, and speculative AI experiments that fail to generate measurable operational return on investment.",
    whatWeBuildDe:
      "Wir prüfen Ihre bestehende Datenlandschaft, decken Kostentreiber auf und erarbeiten eine verbindliche 30/60/90-Tage-Architektur-Roadmap – ausgerichtet auf Ihre geschäftlichen Prioritäten und ohne Vendor Lock-in.",
    whatWeBuildEn:
      "We audit your existing data landscape, uncover hidden cloud cost drivers, and formulate an actionable 30/60/90-day architectural roadmap focused directly on your unit economics and long-term autonomy.",
    technologies: ["Cloud FinOps", "AWS / Azure / GCP", "Data Governance", "DSGVO / SOC2", "Reference Architecture"],
    deliverablesDe: [
      "Technologisches Reifegrad-Audit & Kostenanalyse",
      "30/60/90-Tage Ziel-Architektur-Roadmap",
      "Herstellerunabhängige Tool-Evaluation",
      "Datensicherheits- & DSGVO-Governance-Leitfaden",
    ],
    deliverablesEn: [
      "Technical maturity & cloud cost audit",
      "Prioritized 30/60/90-day target architecture roadmap",
      "Vendor-neutral technology evaluation & RFP support",
      "Data governance & GDPR security blueprint",
    ],
    image: "/images/data-strategy.png",
    imageAlt: "consultfox data and AI strategy roadmap",
  },
];

export default function PrimaryServicesSection() {
  const { lang } = useLanguage();
  const [catalogueOpen, setCatalogueOpen] = useState(false);

  return (
    <div className="space-y-16">
      {/* 4 Primary Services in Editorial Rows */}
      <div className="divide-y divide-line border-y border-line">
        {primaryServices.map((service, index) => {
          const isEven = index % 2 === 1;
          const title = lang === "de" ? service.titleDe : service.titleEn;
          const problem = lang === "de" ? service.problemDe : service.problemEn;
          const whatWeBuild = lang === "de" ? service.whatWeBuildDe : service.whatWeBuildEn;
          const deliverables = lang === "de" ? service.deliverablesDe : service.deliverablesEn;

          return (
            <div key={service.number} className="py-14 sm:py-20">
              <div
                className={`grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Column */}
                <div className={isEven ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-royal">
                      {service.number}
                    </span>
                    <span className="h-px w-8 bg-line" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-secondary">
                      {lang === "de" ? "Kernkompetenz" : "Core Discipline"}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {title}
                  </h3>

                  {/* Business Problem */}
                  <div className="mt-5 border-l-2 border-line pl-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                      {lang === "de" ? "Die Herausforderung" : "The Challenge"}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">{problem}</p>
                  </div>

                  {/* What ConsultFox Builds */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink">
                      {lang === "de" ? "Was wir entwickeln" : "What We Build"}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink">{whatWeBuild}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
                      {lang === "de" ? "Technologien & Methoden" : "Technologies & Methods"}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-control border border-line bg-white px-2.5 py-1 text-xs font-mono text-ink"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
                      {lang === "de" ? "Konkrete Ergebnisse" : "Key Deliverables"}
                    </p>
                    <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2 text-xs text-ink">
                      {deliverables.map((del) => (
                        <li key={del} className="flex items-start gap-2">
                          <span className="text-royal font-bold">✓</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service Link */}
                  <div className="mt-7">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-royal hover:underline"
                    >
                      <span>
                        {lang === "de"
                          ? `Details zu ${title} ansehen`
                          : `Explore ${title} architecture`}
                      </span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                {/* Visual Column */}
                <div className={isEven ? "lg:col-start-1" : ""}>
                  <div className="overflow-hidden rounded-card border border-line bg-white p-3 shadow-xs">
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded bg-mist/30">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        width={640}
                        height={400}
                        className="h-full w-full object-contain p-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Service Catalogue Index (Clean Accordion/Directory) */}
      <div className="border border-line rounded-card bg-white p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-royal font-semibold">
              {lang === "de" ? "Vollständiges Leistungsverzeichnis" : "Full Service Directory"}
            </span>
            <h4 className="mt-1 font-display text-lg font-semibold text-ink">
              {lang === "de"
                ? "Spezialisierte Module unseres Daten- & KI-Stacks"
                : "Specialized Modules Across Our Data & AI Stack"}
            </h4>
            <p className="mt-1 text-sm text-secondary">
              {lang === "de"
                ? "Entdecken Sie alle 20 spezialisierten Dienstleistungen in unserem detaillierten Katalog."
                : "Explore all 20 specialized engineering disciplines available across our practice."}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setCatalogueOpen(!catalogueOpen)}
              className="btn-secondary text-xs shrink-0"
            >
              {catalogueOpen
                ? lang === "de"
                  ? "Übersicht einklappen"
                  : "Collapse directory"
                : lang === "de"
                ? "Alle 20 Services einblenden"
                : "Browse all 20 services"}
            </button>
            <Link href="/services" className="btn-primary text-xs shrink-0">
              {lang === "de" ? "Katalogseite öffnen →" : "View service catalogue →"}
            </Link>
          </div>
        </div>

        {catalogueOpen && (
          <div className="mt-8 pt-8 border-t border-line grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceGroups.map((group) => (
              <div key={group} className="space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold border-b border-line pb-1.5">
                  {group}
                </p>
                <ul className="space-y-2 text-sm">
                  {services
                    .filter((s) => s.group === group)
                    .map((s) => {
                      const localizedName = serviceTranslations[s.slug]?.[lang]?.name || s.name;
                      return (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="text-ink hover:text-royal transition-colors flex items-center justify-between group"
                          >
                            <span>{localizedName}</span>
                            <span className="text-secondary group-hover:text-royal group-hover:translate-x-0.5 transition-all text-xs">
                              →
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
