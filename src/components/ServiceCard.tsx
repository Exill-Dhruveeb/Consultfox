import Link from "next/link";
import { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const imageSrc = service.image || "/images/data-warehouse.png";

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col justify-between overflow-hidden rounded-card border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-royal/50 hover:shadow-lg"
    >
      <div className="relative flex h-48 w-full items-center justify-center border-b border-line/60 bg-gradient-to-b from-mist to-white p-5 overflow-hidden">
        {/* Subtle decorative purple glow in background */}
        <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet/10 blur-xl transition-all duration-300 group-hover:scale-150 group-hover:bg-violet/20" />
        <img
          src={imageSrc}
          alt={service.name}
          className="relative z-10 max-h-36 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <span className="inline-block rounded-full bg-lavender/40 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-deep">
            {service.group}
          </span>
          <h3 className="mt-2.5 font-display text-base font-semibold text-ink transition-colors group-hover:text-royal">
            {service.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">{service.pitch}</p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-line/50 pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors group-hover:text-deep">
            Explore service
            <svg
              width="14"
              height="12"
              viewBox="0 0 12 10"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M1 5H11M11 5L7 1M11 5L7 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-mist text-royal transition-colors group-hover:bg-royal group-hover:text-white">
            <svg width="10" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
              <path d="M1 5H11M11 5L7 1M11 5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
