import Link from "next/link";

export default function CTASection({
  title = "No contract. No commitment. Just a conversation.",
  body = "We build data systems that run clean, stay documented, and don't fall apart when someone goes on holiday. Then we hand them over to you completely.",
  ctaLabel = "Book a Call",
  ctaHref = "/contact",
}: {
  title?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="container-page flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{body}</p>
        </div>
        <Link href={ctaHref} className="btn-primary shrink-0">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
