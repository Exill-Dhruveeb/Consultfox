import Link from "next/link";
import Logo from "@/components/Logo";
import { footerCompanyLinks, footerLegalLinks } from "@/data/nav";
import { serviceGroups, services } from "@/data/services";
import { companyInfo } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              AI-first data company. We build pipelines, warehouses, dashboards, and AI systems that
              your team actually uses.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={companyInfo.socials.linkedin} aria-label="consultfox on LinkedIn" className="text-muted hover:text-royal">
                LinkedIn
              </a>
              <a href={companyInfo.socials.twitter} aria-label="consultfox on X" className="text-muted hover:text-royal">
                X
              </a>
              <a href={companyInfo.socials.instagram} aria-label="consultfox on Instagram" className="text-muted hover:text-royal">
                Instagram
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {serviceGroups.slice(0, 3).map((group) => (
              <div key={group}>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">{group}</p>
                <ul className="space-y-2">
                  {services
                    .filter((s) => s.group === group)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="text-sm text-ink hover:text-royal">
                          {s.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">Company</p>
            <ul className="space-y-2">
              {footerCompanyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink hover:text-royal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">Call us</p>
            <a href={companyInfo.phoneHref} className="mt-1 block text-sm text-ink hover:text-royal">
              {companyInfo.phone}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">Email us</p>
            <a href={`mailto:${companyInfo.email}`} className="mt-1 block text-sm text-ink hover:text-royal">
              {companyInfo.email}
            </a>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.06em] text-muted">Location</p>
            <a href={companyInfo.mapsUrl} className="mt-1 block text-sm text-ink hover:text-royal">
              {companyInfo.address}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} consultfox. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            {footerLegalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-royal">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
