"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/data/nav";
import { services, serviceGroups } from "@/data/services";
import Logo from "@/components/Logo";
import MobileNav from "@/components/MobileNav";

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" aria-label="consultfox home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-sm font-medium text-ink"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[720px] -translate-x-1/2 pt-4">
                <div className="grid grid-cols-3 gap-x-8 gap-y-6 rounded-card border border-line bg-white p-7 shadow-[0_16px_40px_-16px_rgba(23,22,27,0.18)]">
                  {serviceGroups.map((group) => (
                    <div key={group}>
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">
                        {group}
                      </p>
                      <ul className="space-y-2.5">
                        {services
                          .filter((s) => s.group === group)
                          .map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                className="text-sm text-ink transition-colors hover:text-royal"
                                onClick={() => setServicesOpen(false)}
                              >
                                {s.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-3 flex items-center justify-between border-t border-line pt-5">
                    <p className="text-sm text-muted">Not sure where to start?</p>
                    <Link href="/services" className="btn-text" onClick={() => setServicesOpen(false)}>
                      View all services
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                        <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {primaryNav
            .filter((item) => item.label !== "Services")
            .map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-ink transition-colors hover:text-royal">
                {item.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden sm:inline-flex">
            Contact
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-control border border-line lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
