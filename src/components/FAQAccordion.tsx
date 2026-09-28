export default function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-ink marker:content-none">
            {item.q}
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
              className="shrink-0 transition-transform group-open:rotate-45"
            >
              <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
