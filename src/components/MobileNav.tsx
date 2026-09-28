"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/data/nav";
import { services, serviceGroups } from "@/data/services";

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        aria-label="Close menu"
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col overflow-y-auto bg-white pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] shadow-[0_0_40px_rgba(0,0,0,0.15)]">
        <div className="flex h-20 items-center justify-between border-b border-line px-5">
          <span className="font-display text-base font-bold">Menu</span>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-control border border-line"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-5 py-4">
          <button
            className="flex items-center justify-between py-3 text-base font-medium text-ink"
            aria-expanded={servicesExpanded}
            onClick={() => setServicesExpanded((v) => !v)}
          >
            Services
            <svg
              width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"
              className={`transition-transform ${servicesExpanded ? "rotate-180" : ""}`}
            >
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {servicesExpanded && (
            <div className="mb-2 flex flex-col gap-4 border-l border-line pb-2 pl-4">
              {serviceGroups.map((group) => (
                <div key={group}>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">{group}</p>
                  <ul className="space-y-2">
                    {services
                      .filter((s) => s.group === group)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} className="text-sm text-ink" onClick={onClose}>
                            {s.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {primaryNav
            .filter((item) => item.label !== "Services")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-t border-line py-3 text-base font-medium text-ink"
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}

          <Link href="/contact" className="btn-primary mt-4 w-full" onClick={onClose}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
