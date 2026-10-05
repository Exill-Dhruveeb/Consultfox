import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import CaseStudyDetailContent from "@/components/CaseStudyDetailContent";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};
  return { title: `${study.title} | Case Study`, description: study.summary };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return <CaseStudyDetailContent study={study} others={others} />;
}
