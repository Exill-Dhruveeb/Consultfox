"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutCredibilitySection() {
  const { lang } = useLanguage();

  return (
    <div className="rounded-card border border-line bg-white p-6 sm:p-10 shadow-xs">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-royal">
            {lang === "de" ? "Engineering & Verantwortung" : "Engineering & Accountability"}
          </span>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
            {lang === "de"
              ? "Erfahrene Senior-Engineers. Keine Weitergabe an Junioren."
              : "Senior Engineers Only. No Junior Handoffs."}
          </h3>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-secondary">
            {lang === "de"
              ? "ConsultFox wurde auf einem einfachen Grundsatz gegründet: Unternehmen brauchen keine Foliensätze, sondern funktionierende Produktionssysteme. Jedes Projekt wird von erfahrenen Daten- und KI-Architekten konzipiert und direkt in Ihrer Infrastruktur entwickelt."
              : "ConsultFox was built on a straightforward principle: businesses don't need slide decks; they need dependable production systems. Every engagement is led, architected, and coded by seasoned data and AI engineers directly inside your cloud tenant."}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 border-t border-line pt-6 text-xs text-ink">
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary">
                {lang === "de" ? "Standort & Rechtssitz" : "Location & Headquarters"}
              </span>
              <p className="font-medium text-ink">Wilmersdorfer Str. 60, 10627 Berlin</p>
              <p className="text-secondary">Bezirk Charlottenburg-Wilmersdorf, Deutschland</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-secondary">
                {lang === "de" ? "Eigentum & Governance" : "IP Ownership & Governance"}
              </span>
              <p className="font-medium text-ink">100% Code- & Repository-Übergabe</p>
              <p className="text-secondary">Null Vendor Lock-in, DSGVO-konforme Prozesse</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              {lang === "de" ? "Erstgespräch vereinbaren" : "Discuss Your Architecture"}
            </Link>
            <a
              href="mailto:info@consultfox.de"
              className="text-sm font-semibold text-royal hover:underline"
            >
              info@consultfox.de
            </a>
          </div>
        </div>

        {/* Fact Sheet Column — Transparent Delivery Guarantees */}
        <div className="rounded-card border border-line bg-canvas p-6 space-y-5">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-secondary border-b border-line pb-3">
            {lang === "de" ? "Projekt-Rahmenbedingungen" : "Delivery Framework"}
          </p>

          <div className="space-y-4 text-xs">
            <div>
              <span className="font-semibold text-ink block">
                {lang === "de" ? "Direkter Draht zu Entwicklern" : "Direct Engineering Access"}
              </span>
              <span className="text-secondary mt-0.5 block leading-relaxed">
                {lang === "de"
                  ? "Kommunikation direkt über Slack, Teams oder wöchentliche Standups ohne zwischengeschaltete Account Manager."
                  : "Collaborate directly via Slack, Teams, or structured weekly syncs without intermediary sales layers."}
              </span>
            </div>

            <div className="border-t border-line pt-3">
              <span className="font-semibold text-ink block">
                {lang === "de" ? "Transparente Festpreise" : "Milestone-Based Fixed Scopes"}
              </span>
              <span className="text-secondary mt-0.5 block leading-relaxed">
                {lang === "de"
                  ? "Jedes Arbeitspaket wird mit klarem Leistungsumfang und verbindlichem Zeitplan definiert."
                  : "Every sprint is defined with explicit deliverables and a transparent scope before work commences."}
              </span>
            </div>

            <div className="border-t border-line pt-3">
              <span className="font-semibold text-ink block">
                {lang === "de" ? "Lückenlose Dokumentation" : "Complete Runbooks & Tests"}
              </span>
              <span className="text-secondary mt-0.5 block leading-relaxed">
                {lang === "de"
                  ? "Jede Pipeline wird mit Schema-Tests, dbt-Docs und Betriebshandbüchern übergeben."
                  : "Every pipeline is handed over with automated tests, dbt documentation, and operational runbooks."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
