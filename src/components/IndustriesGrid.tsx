"use client";

import { useLanguage } from "@/context/LanguageContext";

interface IndustryItem {
  nameDe: string;
  nameEn: string;
  challengeDe: string;
  challengeEn: string;
  solutionDe: string;
  solutionEn: string;
}

const industries: IndustryItem[] = [
  {
    nameDe: "Handel & E-Commerce",
    nameEn: "Retail & E-Commerce",
    challengeDe:
      "Fragmentierte Bestelldaten über Shopify, Amazon und ERP-Systeme; ungenaue Absatzprognosen und hohe Retourenquoten.",
    challengeEn:
      "Fragmented order streams across Shopify, Amazon, and ERP systems; inaccurate inventory forecasts and high return rates.",
    solutionDe:
      "Zentrales Snowflake-Lakehouse mit automatisierter Bestandssynchronisation, Kundenwertanalysen (CLV) und Nachfrageprognosen.",
    solutionEn:
      "Centralized Snowflake lakehouse with automated stock reconciliation, customer lifetime value modeling, and predictive demand forecasts.",
  },
  {
    nameDe: "Healthcare & MedTech",
    nameEn: "Healthcare & Life Sciences",
    challengeDe:
      "Strenge DSGVO- und Patientendatenschutz-Auflagen; unstrukturierte klinische Befunde und silobehaftete Laborsysteme.",
    challengeEn:
      "Stringent GDPR and HIPAA compliance mandates; unindexed clinical PDFs and siloed laboratory test records.",
    solutionDe:
      "Rollenbasierte, pseudonymisierte Datenpipelines mit privater RAG-Wissenssuche für medizinisches Fachpersonal und Audit-Logs.",
    solutionEn:
      "Role-governed pseudonymized data pipelines with private RAG knowledge retrieval for clinical staff and immutable audit trails.",
  },
  {
    nameDe: "Finanzdienstleistungen & Banking",
    nameEn: "Finance & Fintech",
    challengeDe:
      "Hohe Transaktionsvolumina mit Latenzdruck; manuelle Abstimmungsprozesse für behördliche Meldepflichten (BaFin/EZB).",
    challengeEn:
      "Sub-second streaming throughput requirements; error-prone manual spreadsheets for regulatory compliance and audit filings.",
    solutionDe:
      "Echtzeitfähige Streaming-Architekturen mit Spark und dbt; automatisierte Konsolidierung von Hauptbüchern und Risikoberichten.",
    solutionEn:
      "Low-latency streaming architectures with Spark and dbt; automated reconciliation of general ledgers and regulatory risk models.",
  },
  {
    nameDe: "Gastronomie & Systemverpflegung (QSR)",
    nameEn: "Restaurant & Multi-Unit QSR",
    challengeDe:
      "Datenbrüche zwischen Kassensystemen (POS), Lieferplattformen (Lieferando/UberEats) und Personaleinsatzplanung bei 50+ Filialen.",
    challengeEn:
      "Discrepancies between store POS terminals, delivery aggregators, and labor scheduling software across 50+ franchise sites.",
    solutionDe:
      "Konsolidierte Filial-Dashboards in Power BI mit minutengenauer Umsatz-zu-Personalkosten-Korrelation und Marketing-Attribution.",
    solutionEn:
      "Consolidated multi-unit Power BI dashboards correlating labor hours against hourly sales tickets and promotional ad spend.",
  },
  {
    nameDe: "Fertigung & Industrie",
    nameEn: "Manufacturing & Industrial Supply Chain",
    challengeDe:
      "Getrennte OT- und IT-Datenwelten; Maschinenausfälle ohne Frühwarnung und lückenhafte Chargen-Rückverfolgbarkeit.",
    challengeEn:
      "Disconnected operational technology (OT) and enterprise IT data; unpredicted machine downtime and fragmented batch traceability.",
    solutionDe:
      "IoT-Telemetrie-Ingestion mit Zeitreihendatenbanken, automatisierte Schwellenwert-Alarme und lückenlose Chargen-Stammbäume.",
    solutionEn:
      "High-throughput IoT telemetry ingestion pipelines, predictive maintenance anomaly alerts, and end-to-end lot genealogy.",
  },
  {
    nameDe: "B2B-Distribution & Großhandel",
    nameEn: "B2B Distribution & Wholesale",
    challengeDe:
      "Geringe Kontaktraten bei manueller Vertriebsakquise, veraltete CRM-Daten und mangelnde Transparenz über Margenverluste.",
    challengeEn:
      "Low SDR outbound connection rates, missing CRM updates, and zero real-time visibility into customer pricing erosion.",
    solutionDe:
      "Autonome Sprach- und E-Mail-Qualifizierungsagenten mit sub-sekundenschnellem CRM-Sync und dynamischen Deckungsbeitrags-Dashboards.",
    solutionEn:
      "Autonomous conversational outbound voice agents with real-time CRM sync and dynamic margin contribution analytics.",
  },
];

export default function IndustriesGrid() {
  const { lang } = useLanguage();

  return (
    <div className="grid gap-0 divide-y divide-line border-y border-line sm:grid-cols-2 sm:divide-y-0">
      {industries.map((ind, i) => {
        const name = lang === "de" ? ind.nameDe : ind.nameEn;
        const challenge = lang === "de" ? ind.challengeDe : ind.challengeEn;
        const solution = lang === "de" ? ind.solutionDe : ind.solutionEn;

        return (
          <div
            key={name}
            className={`p-6 sm:p-8 flex flex-col justify-between ${
              i % 2 === 0 ? "sm:border-r sm:border-line" : ""
            } ${i < industries.length - 2 ? "sm:border-b sm:border-line" : ""}`}
          >
            {/* Title with consistent height */}
            <div className="h-8 flex items-center gap-2.5">
              <span className="font-mono text-xs font-semibold text-royal">
                0{i + 1}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">{name}</h3>
            </div>

            {/* Relevant Data Challenge — uniform min-height */}
            <div className="mt-4 min-h-[96px] rounded-control bg-canvas p-3.5 border border-line flex flex-col justify-start">
              <span className="font-mono text-[11px] uppercase tracking-wider text-secondary font-semibold block">
                {lang === "de" ? "Typische Datenherausforderung" : "Operational Data Challenge"}
              </span>
              <p className="mt-1 text-xs text-secondary leading-relaxed">{challenge}</p>
            </div>

            {/* Applicable Solution — uniform min-height */}
            <div className="mt-3 min-h-[96px] rounded-control bg-lavender/30 p-3.5 border border-royal/10 flex flex-col justify-start">
              <span className="font-mono text-[11px] uppercase tracking-wider text-royal font-semibold block">
                {lang === "de" ? "Implementierte Lösung" : "Applicable Engineering Solution"}
              </span>
              <p className="mt-1 text-xs text-ink leading-relaxed">{solution}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
