"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PortalMasterPage() {
  const { lang } = useLanguage();
  const [selectedTopic, setSelectedTopic] = useState("Data Science & KI");

  const portalContent = {
    de: {
      heroBadge: "BERLIN, DEUTSCHLAND",
      heroTitle1: "Jede Kompetenz für Ihr Wachstum. ",
      heroTitleHighlight: "Ein Partner.",
      heroSub:
        "Consultfox begleitet Unternehmen und Studierende: Von zukunftsweisenden Data & AI Lösungen über Study Abroad bis hin zu nachhaltigen Solarenergie-Konzepten.",
      heroCtaPrimary: "Data Science & KI Plattform öffnen →",
      heroCtaSecondary: "Fachbereiche ansehen",
      check1: "4-6 Wk Delivery",
      check2: "Zero Lock-in",
      check3: "100% Code Handover",
      check4: "Hosted in the EU",
      cardDsTitle: "Data & AI Engineering",
      cardDsDesc:
        "Vollständiger Data- & KI-Stack: Pipelines, Warehouses, Modern BI und produktive KI-Systeme ohne Vendor Lock-in.",
      cardDsAction: "Plattform öffnen →",
      cardSaTitle: "Study Abroad Consulting",
      cardSaDesc:
        "Begleitung für Studium in Deutschland: Hochschulauswahl, APS, Visum, Sperrkonto und Relocation.",
      cardSoTitle: "Solar & Clean Energy Solutions",
      cardSoDesc:
        "Wirtschaftliche Solaranlagen-Konzepte, Machbarkeitsstudien und verlässliche Fachpartner.",
      practicesEyebrow: "Unsere Fachbereiche",
      practicesTitle: "Drei Schwerpunkte. Ein vertrauensvoller Partner.",
      practicesDesc:
        "Maßgeschneiderte Beratung und technische Umsetzung in Data & AI, akademischer Bildung und sauberer Solarenergie.",
      dsBadge: "Enterprise Data & AI",
      dsTitle: "Data Science & AI Engineering",
      dsBody:
        "Enterprise Data Pipelines, Cloud Lakehouses (Snowflake, Databricks, Fabric), dbt, Modern BI Dashboards und Custom KI-Agenten. Entwickelt nach höchsten Sicherheitsstandards mit 100% Code-Übergabe.",
      dsF1: "Single Source of Truth Data Warehouses",
      dsF2: "dbt & Echtzeit-ETL/ELT Datenpipelines",
      dsF3: "Maßgeschneiderte KI-Agenten & LLMOps",
      dsF4: "Robuste Cloud-Architektur nach EU-Standards",
      dsCta: "Data Science & AI Plattform öffnen →",
      saBadge: "Higher Education",
      saTitle: "Study Abroad Consulting",
      saBody:
        "Gezielte akademische Beratung für Studierende aus aller Welt mit Ziel Deutschland und Europa. Von der Programmauswahl über das APS-Verfahren und Motivationsschreiben bis zum Visum.",
      saF1: "Unabhängige Universitäts- & Kursauswahl",
      saF2: "APS-Zertifizierung & Dokumentenprüfung",
      saF3: "Sperrkonto & Studentenvisum-Begleitung",
      saF4: "Persönliche Beratung vor Ort in Berlin",
      saCta: "Beratungstermin für Study Abroad anfragen",
      soBadge: "Clean Energy",
      soTitle: "Solar & Clean Energy Solutions",
      soBody:
        "Wirtschaftliche und technisch fundierte Solarenergielösungen für gewerbliche und private Liegenschaften. Von der ersten Machbarkeits- und Wirtschaftlichkeitsanalyse bis zum Fachpartner.",
      soF1: "Detaillierte Ertrags- & ROI-Berechnung",
      soF2: "Auswahl geprüfter Installationspartner",
      soF3: "Förderberatung & regulatorische Unterstützung",
      soF4: "Nachhaltige Energiekostensenkung",
      soCta: "Solar-Potenzialanalyse anfragen",
      locEyebrow: "Standort & Kontakt",
      locTitle: "Consultfox in Berlin",
      locDesc:
        "Ihr zentraler Ansprechpartner für strategische Beratung und technologische Umsetzung.",
      locHqBadge: "Hauptsitz Berlin",
      locStatus: "Direkter Kontakt",
      locAddressTitle: "Consultfox GmbH",
      locAddressSub: "Bezirk Charlottenburg-Wilmersdorf, Deutschland",
      locMapsLink: "Auf Google Maps anzeigen →",
      locPhoneLabel: "Telefon",
      locPhoneHours: "Mo–Fr, 09:00 – 18:00 Uhr MEZ",
      locPhoneCta: "Anrufen →",
      locEmailLabel: "E-Mail",
      locEmailNote: "Antwort garantiert innerhalb von 24h",
      locEmailCta: "Schreiben →",
      locWaLabel: "WhatsApp Business",
      locWaNote: "Direkter Kurznachrichtenservice",
      locWaCta: "Chat starten →",
      locTrustGdpr: "100% DSGVO-konform",
      locTrustEu: "Hosting & Server in der EU",
      locCard2Badge: "Direkte Beratung",
      locCard2Title: "Kostenloses Erstgespräch anfragen",
      locCard2Desc:
        "Wählen Sie Ihren Fachbereich für eine unverbindliche Erstberatung mit unseren Experten:",
      locChooseTopicLabel: "Fachbereich auswählen:",
      topics: [
        { id: "Data Science & KI", label: "Data Science & KI" },
        { id: "Study Abroad", label: "Study Abroad" },
        { id: "Solar Services", label: "Solar Services" },
        { id: "Allgemeine Beratung", label: "Allgemeine Beratung" },
      ],
      b1: "30 Min. kostenfreie Machbarkeits- & Bedarfsanalyse",
      b2: "Konkrete Roadmap & Aufwandsschätzung ohne Vendor Lock-in",
      b3: "Direkter Austausch mit erfahrenen Senior-Consultants",
      bookCta: "Erstgespräch anfragen →",
      directEmailText: "Oder direkt per E-Mail schreiben:",
    },
    en: {
      heroBadge: "BERLIN, GERMANY",
      heroTitle1: "Every capability your business needs. ",
      heroTitleHighlight: "One partner.",
      heroSub:
        "Consultfox guides ambitious businesses and students: from enterprise Data & AI engineering to Study Abroad and sustainable clean energy solutions.",
      heroCtaPrimary: "Open Data Science & AI Platform →",
      heroCtaSecondary: "View Practices",
      check1: "4-6 Wk Delivery",
      check2: "Zero Vendor Lock-in",
      check3: "100% Code Handover",
      check4: "Hosted in the EU",
      cardDsTitle: "Data & AI Engineering",
      cardDsDesc:
        "Full-stack data & AI systems: ETL pipelines, warehouses, modern BI, and production agents with zero vendor lock-in.",
      cardDsAction: "Open Platform →",
      cardSaTitle: "Study Abroad Consulting",
      cardSaDesc:
        "End-to-end guidance for university admissions in Germany: shortlisting, APS, visas, and blocked accounts.",
      cardSoTitle: "Solar & Clean Energy Solutions",
      cardSoDesc:
        "Economically viable clean energy systems, feasibility studies, and certified installation partners.",
      practicesEyebrow: "Our Practices",
      practicesTitle: "Three Core Practices. One Trusted Partner.",
      practicesDesc:
        "Tailored advisory and engineering execution across Data & AI, higher education, and clean solar energy.",
      dsBadge: "Enterprise Data & AI",
      dsTitle: "Data Science & AI Engineering",
      dsBody:
        "Enterprise data pipelines, cloud lakehouses (Snowflake, Databricks, Fabric), dbt transformations, modern BI dashboards, and custom AI agents built with 100% code handover.",
      dsF1: "Single Source of Truth Data Warehouses",
      dsF2: "dbt & Real-time ETL/ELT Ingestion Pipelines",
      dsF3: "Production AI Agents & LLMOps Workflows",
      dsF4: "Robust Cloud Architecture under EU Standards",
      dsCta: "Open Data Science & AI Platform →",
      saBadge: "Higher Education",
      saTitle: "Study Abroad Consulting",
      saBody:
        "Expert admissions guidance for students worldwide heading to Germany and Europe. From program shortlisting and APS verification to SOP review and student visa filing.",
      saF1: "Independent University & Course Selection",
      saF2: "APS Certification & Credential Verification",
      saF3: "Blocked Account & Student Visa Assistance",
      saF4: "In-person Advisory and Support in Berlin",
      saCta: "Book a Free Study Abroad Session",
      soBadge: "Clean Energy",
      soTitle: "Solar & Clean Energy Solutions",
      soBody:
        "Economically viable clean energy systems, feasibility studies, and certified installation partners.",
      soF1: "Detailed Yield, Radiation & ROI Modeling",
      soF2: "Vetted Installer and Vendor Shortlisting",
      soF3: "Subsidies, Incentives & Permit Filing Support",
      soF4: "Long-term Energy Cost Reduction",
      soCta: "Request Solar Feasibility Study",
      locEyebrow: "Location & Contact",
      locTitle: "Consultfox in Berlin",
      locDesc:
        "Your primary contact for strategic advisory and technical execution.",
      locHqBadge: "Headquarters Berlin",
      locStatus: "Direct Contact",
      locAddressTitle: "Consultfox GmbH",
      locAddressSub: "Charlottenburg-Wilmersdorf District, Germany",
      locMapsLink: "View on Google Maps →",
      locPhoneLabel: "Phone",
      locPhoneHours: "Mon–Fri, 9:00 AM – 6:00 PM CET",
      locPhoneCta: "Call now →",
      locEmailLabel: "Email",
      locEmailNote: "Response guaranteed within 24 hours",
      locEmailCta: "Write email →",
      locWaLabel: "WhatsApp Business",
      locWaNote: "Instant direct messaging",
      locWaCta: "Start chat →",
      locTrustGdpr: "100% GDPR Compliant",
      locTrustEu: "Hosted & Servers in the EU",
      locCard2Badge: "Direct Advisory",
      locCard2Title: "Schedule a Free Discovery Call",
      locCard2Desc:
        "Select your practice area for a targeted initial consultation with our senior team:",
      locChooseTopicLabel: "Select practice area:",
      topics: [
        { id: "Data Science & KI", label: "Data Science & AI" },
        { id: "Study Abroad", label: "Study Abroad" },
        { id: "Solar Services", label: "Solar Services" },
        { id: "Allgemeine Beratung", label: "General Consultation" },
      ],
      b1: "30-minute free feasibility & requirements assessment",
      b2: "Clear roadmap & scope estimate with zero vendor lock-in",
      b3: "Direct exchange with seasoned senior consultants",
      bookCta: "Request Discovery Call →",
      directEmailText: "Or email us directly:",
    },
  };

  const c = portalContent[lang] || portalContent.de;

  const mailSubjectPrefix =
    lang === "de" ? "Erstgespräch Anfrage - " : "Discovery Call Request - ";
  const mailSubject = encodeURIComponent(mailSubjectPrefix + selectedTopic);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-b from-white via-mist/20 to-white py-16 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-royal/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-violet/10 blur-3xl" />

        <div className="container-page relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-royal/20 bg-mist/50 px-3.5 py-1.5 text-xs font-semibold text-royal">
              <span className="h-2 w-2 rounded-full bg-royal animate-pulse" />
              <span>{c.heroBadge}</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.15] text-ink sm:text-5xl lg:text-[52px]">
              {c.heroTitle1}
              <span className="text-royal">{c.heroTitleHighlight}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {c.heroSub}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/data-science"
                className="btn-primary shadow-md hover:shadow-lg transition-all"
              >
                {c.heroCtaPrimary}
              </Link>
              <a href="#practices" className="btn-secondary">
                {c.heroCtaSecondary}
              </a>
            </div>

            {/* Trust Checklist */}
            <div className="mt-8 grid grid-cols-2 gap-3 border-t border-line/70 pt-6 sm:grid-cols-4">
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/10 font-bold text-royal">
                  ✓
                </span>
                <span>{c.check1}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/10 font-bold text-royal">
                  ✓
                </span>
                <span>{c.check2}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/10 font-bold text-royal">
                  ✓
                </span>
                <span>{c.check3}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-ink">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal/10 font-bold text-royal">
                  ✓
                </span>
                <span>{c.check4}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="relative">
            <div className="relative rounded-2xl border border-line bg-white p-6 shadow-xl space-y-4">
              {/* Practice 1: Data & AI (Flagship Card) */}
              <div className="rounded-xl border border-royal/30 bg-mist/60 p-5 transition-all hover:border-royal hover:shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-base font-bold text-ink">
                    {c.cardDsTitle}
                  </h3>
                  <Link
                    href="/data-science"
                    className="inline-flex items-center text-xs font-semibold text-white bg-royal hover:bg-royal-light px-3 py-1.5 rounded-full transition-colors shadow-xs"
                  >
                    {c.cardDsAction}
                  </Link>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  {c.cardDsDesc}
                </p>
              </div>

              {/* Practice 2: Study Abroad */}
              <div className="rounded-xl border border-line bg-white p-5 transition-all hover:border-royal/40">
                <h3 className="font-display text-base font-bold text-ink mb-2">
                  {c.cardSaTitle}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {c.cardSaDesc}
                </p>
              </div>

              {/* Practice 3: Solar Services */}
              <div className="rounded-xl border border-line bg-white p-5 transition-all hover:border-royal/40">
                <h3 className="font-display text-base font-bold text-ink mb-2">
                  {c.cardSoTitle}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {c.cardSoDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practices Section */}
      <section className="py-20 border-b border-line bg-white" id="practices">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-mono text-xs uppercase tracking-wider text-royal font-semibold mb-2">
              {c.practicesEyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              {c.practicesTitle}
            </h2>
            <p className="text-base text-muted">{c.practicesDesc}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* 1. DATA SCIENCE & AI (FLAGSHIP) */}
            <div className="rounded-2xl border-2 border-royal bg-gradient-to-b from-white to-mist/40 p-8 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all">
              <div>
                <span className="inline-block font-mono text-[11px] font-semibold text-royal uppercase tracking-wider mb-3 bg-royal-subtle px-2.5 py-1 rounded">
                  {c.dsBadge}
                </span>
                <h3 className="font-display text-2xl font-bold text-ink mb-3">
                  {c.dsTitle}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {c.dsBody}
                </p>
                <ul className="space-y-2.5 text-xs text-ink mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.dsF1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.dsF2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.dsF3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.dsF4}</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/data-science"
                className="btn-primary w-full justify-center text-center shadow-md hover:shadow-lg transition-all"
              >
                {c.dsCta}
              </Link>
            </div>

            {/* 2. STUDY ABROAD */}
            <div
              className="rounded-2xl border border-line bg-white p-8 shadow-sm flex flex-col justify-between hover:border-royal/40 hover:shadow-md transition-all"
              id="study-abroad"
            >
              <div>
                <span className="inline-block font-mono text-[11px] font-semibold text-royal uppercase tracking-wider mb-3 bg-mist px-2.5 py-1 rounded">
                  {c.saBadge}
                </span>
                <h3 className="font-display text-2xl font-bold text-ink mb-3">
                  {c.saTitle}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {c.saBody}
                </p>
                <ul className="space-y-2.5 text-xs text-ink mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.saF1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.saF2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.saF3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.saF4}</span>
                  </li>
                </ul>
              </div>
              <a
                href="mailto:info@consultfox.de?subject=Study%20Abroad%20Anfrage"
                className="btn-secondary w-full justify-center text-center"
              >
                {c.saCta}
              </a>
            </div>

            {/* 3. SOLAR SERVICES */}
            <div
              className="rounded-2xl border border-line bg-white p-8 shadow-sm flex flex-col justify-between hover:border-royal/40 hover:shadow-md transition-all"
              id="solar-services"
            >
              <div>
                <span className="inline-block font-mono text-[11px] font-semibold text-royal uppercase tracking-wider mb-3 bg-mist px-2.5 py-1 rounded">
                  {c.soBadge}
                </span>
                <h3 className="font-display text-2xl font-bold text-ink mb-3">
                  {c.soTitle}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-6">
                  {c.soBody}
                </p>
                <ul className="space-y-2.5 text-xs text-ink mb-8">
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.soF1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.soF2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.soF3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal font-bold">•</span>
                    <span>{c.soF4}</span>
                  </li>
                </ul>
              </div>
              <a
                href="mailto:info@consultfox.de?subject=Solar%20Services%20Anfrage"
                className="btn-secondary w-full justify-center text-center"
              >
                {c.soCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Berlin Location & Contact Executive Hub */}
      <section className="py-20 border-b border-line bg-mist/40" id="contact">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-mono text-xs uppercase tracking-wider text-royal font-semibold mb-2">
              {c.locEyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              {c.locTitle}
            </h2>
            <p className="text-base text-muted">{c.locDesc}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] max-w-5xl mx-auto items-stretch">
            {/* Card 1: Headquarters & Direct Channels */}
            <div className="rounded-2xl border border-line bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-line">
                  <span className="font-mono text-[11px] font-semibold text-royal uppercase tracking-wider bg-royal-subtle px-2.5 py-1 rounded">
                    {c.locHqBadge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    {c.locStatus}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-ink mb-3">
                  {c.locAddressTitle}
                </h3>

                <div className="flex items-start gap-3 p-4 bg-mist rounded-xl border border-line mb-6">
                  <svg
                    className="w-5 h-5 text-royal shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="text-sm">
                    <strong className="block text-ink font-semibold">
                      Wilmersdorfer Str. 60, 10627 Berlin
                    </strong>
                    <span className="block text-xs text-muted mt-0.5">
                      {c.locAddressSub}
                    </span>
                    <a
                      href="https://maps.google.com/?q=Wilmersdorfer+Str.+60,+10627+Berlin,+Deutschland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-royal mt-1.5 hover:underline"
                    >
                      {c.locMapsLink}
                    </a>
                  </div>
                </div>

                {/* Direct Channel Tiles */}
                <div className="space-y-3 mb-6">
                  {/* Phone */}
                  <a
                    href="tel:+491634253066"
                    className="flex items-center justify-between p-3.5 border border-line rounded-xl hover:border-royal hover:bg-mist/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-royal-subtle text-royal flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                          {c.locPhoneLabel}
                        </div>
                        <div className="text-sm font-semibold text-ink">
                          +49 1634253066
                        </div>
                        <div className="text-xs text-muted">
                          {c.locPhoneHours}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-royal group-hover:translate-x-1 transition-transform">
                      {c.locPhoneCta}
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@consultfox.de"
                    className="flex items-center justify-between p-3.5 border border-line rounded-xl hover:border-royal hover:bg-mist/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-royal-subtle text-royal flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                          {c.locEmailLabel}
                        </div>
                        <div className="text-sm font-semibold text-ink">
                          info@consultfox.de
                        </div>
                        <div className="text-xs text-muted">
                          {c.locEmailNote}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-royal group-hover:translate-x-1 transition-transform">
                      {c.locEmailCta}
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/491634253066"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 border border-line rounded-xl hover:border-royal hover:bg-mist/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-royal-subtle text-royal flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                          {c.locWaLabel}
                        </div>
                        <div className="text-sm font-semibold text-ink">
                          +49 1634253066
                        </div>
                        <div className="text-xs text-muted">
                          {c.locWaNote}
                        </div>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-royal group-hover:translate-x-1 transition-transform">
                      {c.locWaCta}
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust bar */}
              <div className="pt-4 border-t border-line flex flex-wrap gap-4 text-xs text-muted font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  {c.locTrustGdpr}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-royal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                  {c.locTrustEu}
                </span>
              </div>
            </div>

            {/* Card 2: Discovery Call Booking Hub */}
            <div className="rounded-2xl border-2 border-royal bg-gradient-to-b from-white to-mist/40 p-8 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-line">
                  <span className="font-mono text-[11px] font-semibold text-royal uppercase tracking-wider bg-royal-subtle px-2.5 py-1 rounded">
                    {c.locCard2Badge}
                  </span>
                  <span className="font-mono text-xs font-semibold text-royal">
                    30 MIN FREE
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-ink mb-2">
                  {c.locCard2Title}
                </h3>
                <p className="text-sm text-muted mb-5 leading-relaxed">
                  {c.locCard2Desc}
                </p>

                {/* Topic selector pills */}
                <span className="block text-xs font-semibold text-ink mb-2.5">
                  {c.locChooseTopicLabel}
                </span>
                <div className="flex flex-wrap gap-2 mb-6">
                  {c.topics.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTopic(t.id)}
                      className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all ${
                        selectedTopic === t.id
                          ? "bg-royal text-white border-royal shadow-sm"
                          : "bg-white text-muted border-line hover:border-royal"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Guarantees */}
                <ul className="space-y-2.5 text-xs text-ink mb-6">
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-royal-subtle font-bold text-royal text-[10px]">
                      ✓
                    </span>
                    <span>{c.b1}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-royal-subtle font-bold text-royal text-[10px]">
                      ✓
                    </span>
                    <span>{c.b2}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-royal-subtle font-bold text-royal text-[10px]">
                      ✓
                    </span>
                    <span>{c.b3}</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href={`mailto:info@consultfox.de?subject=${mailSubject}`}
                  className="btn-primary w-full justify-center text-center shadow-md hover:shadow-lg transition-all"
                >
                  {c.bookCta}
                </a>
                <p className="text-center text-xs text-muted mt-3">
                  <span>{c.directEmailText}</span>{" "}
                  <a
                    href="mailto:info@consultfox.de"
                    className="text-royal font-semibold hover:underline"
                  >
                    info@consultfox.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
