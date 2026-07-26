import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms placeholder for AbrahamArcade Wholeness Enterprise LLC.",
  alternates: {
    canonical: "/terms",
  },
};

const sections = [
  {
    title: "Website Use",
    body: "This website provides general information about AbrahamArcade Wholeness Enterprise LLC and its consulting services. Content is provided for informational purposes and may be updated without notice.",
  },
  {
    title: "No Professional Guarantee",
    body: "Program descriptions, sample models and outcome placeholders do not guarantee results. Final scopes, deliverables and obligations should be defined in written agreements with partner institutions.",
  },
  {
    title: "Intellectual Property",
    body: "Website text, layout and brand assets should not be copied or reused without permission, except where applicable law allows.",
  },
  {
    title: "External Services",
    body: "The website may use third-party hosting, form or analytics services after launch. Their terms may apply separately.",
  },
  {
    title: "Contact",
    body: "For questions about these terms, use the contact details provided on the website. Replace placeholder contact information before publication.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="This placeholder should be reviewed by qualified counsel before publication."
      sections={sections}
    />
  );
}
