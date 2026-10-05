import type { Metadata } from "next";
import { caseStudies } from "@/data/caseStudies";
import CaseStudiesListContent from "@/components/CaseStudiesListContent";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real data and AI systems consultfox has delivered, from automated ETL pipelines to AI-powered outbound calling engines.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesListContent studies={caseStudies} />;
}
