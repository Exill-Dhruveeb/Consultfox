import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import ServiceDetailContent from "@/components/ServiceDetailContent";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.name} | consultfox`,
    description: service.pitch,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  const related = services.filter((s) => s.group === service.group && s.slug !== service.slug).slice(0, 3);

  return <ServiceDetailContent service={service} related={related} />;
}
