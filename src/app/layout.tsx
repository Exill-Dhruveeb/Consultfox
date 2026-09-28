import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://consultfox.com"),
  title: {
    default: "consultfox - Data, Governed and Unified. AI, Scaled and Trusted.",
    template: "%s | consultfox",
  },
  description:
    "consultfox is an AI-first data company. We build pipelines, warehouses, dashboards, and AI systems that your team actually uses, with 50+ systems delivered across financial services, healthcare, retail, and more.",
  openGraph: {
    title: "consultfox - Data, Governed and Unified. AI, Scaled and Trusted.",
    description:
      "We build pipelines, warehouses, dashboards, and AI systems that your team actually uses.",
    url: "https://consultfox.com",
    siteName: "consultfox",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-ink font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-royal focus:text-white focus:px-4 focus:py-2 focus:rounded-control"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
