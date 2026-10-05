"use client";
import { useState } from "react";
import { companyInfo } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

const field =
  "mt-1.5 block w-full rounded-control border border-line bg-white px-3.5 py-3 text-base text-ink placeholder:text-muted/80 focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20";

export default function ContactForm() {
  const { lang } = useLanguage();
  const f = translations[lang].contactPage.form;

  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") ?? "").trim();
    const phone = String(d.get("phone") ?? "").trim();
    const email = String(d.get("email") ?? "").trim();
    const notes = String(d.get("notes") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = f.fullNameError;
    if (!/^[+\d][\d\s\-()]{6,}$/.test(phone)) next.phone = f.mobileError;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = f.emailError;
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = `Name: ${name}\nMobile: ${phone}\nEmail: ${email}\n\n${notes}`;
    window.location.href = `mailto:${companyInfo.email}?subject=${encodeURIComponent(
      "Discovery call enquiry from " + name
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 sm:p-8" aria-label="Contact consultfox">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-ink">{f.fullName}</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          placeholder={f.fullNamePlaceholder}
          required
          className={field}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-err" : undefined}
        />
        {errors.name && <p id="name-err" className="mt-1.5 text-sm text-red-700">{errors.name}</p>}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">{f.mobile}</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder={f.mobilePlaceholder}
            required
            className={field}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-err" : undefined}
          />
          {errors.phone && <p id="phone-err" className="mt-1.5 text-sm text-red-700">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">{f.email}</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={f.emailPlaceholder}
            required
            className={field}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-err" : undefined}
          />
          {errors.email && <p id="email-err" className="mt-1.5 text-sm text-red-700">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="notes" className="text-sm font-medium text-ink">
          {f.notes} <span className="text-muted">{f.notesOptional}</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={5}
          className={field}
          placeholder={f.notesPlaceholder}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary">{f.submitButton}</button>
        <p className="text-sm text-muted" role="status">
          {sent ? f.sentNote : f.responseNote}
        </p>
      </div>
    </form>
  );
}
