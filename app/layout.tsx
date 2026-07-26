import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const siteUrl = "https://www.example.com";
const siteName = "AbrahamArcade Wholeness Enterprise LLC";
const siteDescription =
  "AbrahamArcade Wholeness Enterprise LLC develops practical STEM knowledge-transfer, graduate research and cultural exchange programs for institutions serving Nigeria and West Africa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Global STEM Knowledge Transfer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description:
      "Global STEM knowledge transfer, graduate research development and cultural exchange consulting.",
    type: "website",
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/assets/img/logo.jpeg",
        width: 1122,
        height: 272,
        alt: "AWE Consulting, AbrahamArcade Wholeness Enterprise logo",
      },
    ],
  },
  icons: {
    icon: "/assets/img/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#b10f1b",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      alternateName: "AWE Consulting",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/assets/img/logo.jpeg`,
      description:
        "Educational, technological and cultural exchange consulting for STEM knowledge transfer and graduate research development.",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#professional-service`,
      name: siteName,
      url: `${siteUrl}/`,
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: ["United States", "Nigeria", "West Africa"],
      serviceType: [
        "STEM knowledge-transfer program development",
        "Graduate research development consulting",
        "Cultural and institutional exchange coordination",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
