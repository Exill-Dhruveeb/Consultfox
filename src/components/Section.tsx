import { ReactNode } from "react";

export function Section({
  children,
  tint = false,
  className = "",
  id,
}: {
  children: ReactNode;
  tint?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`${
        tint ? "bg-[#F5F4F0] border-y border-line" : "bg-canvas"
      } py-20 sm:py-24 ${className}`}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-secondary">{description}</p>}
    </div>
  );
}
