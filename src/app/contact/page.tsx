import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Book a free discovery call with consultfox's data and AI team. Our team responds within one business day.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
