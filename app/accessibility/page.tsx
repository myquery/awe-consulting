import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "Accessibility statement placeholder for AbrahamArcade Wholeness Enterprise LLC.",
  alternates: {
    canonical: "/accessibility",
  },
};

const sections = [
  {
    title: "Current Measures",
    body: "This site includes semantic HTML, logical headings, keyboard-accessible navigation, visible focus states, labeled form fields, sufficient color contrast, a skip link and reduced-motion support.",
  },
  {
    title: "Ongoing Review",
    body: "Accessibility should be reviewed whenever content, integrations, documents or third-party services are added.",
  },
  {
    title: "Feedback",
    body: "If you encounter an accessibility barrier, use the contact details provided on the website and include the page, issue and assistive technology used if relevant. Replace placeholder contact information before publication.",
  },
];

export default function AccessibilityPage() {
  return (
    <LegalPage
      eyebrow="Accessibility"
      title="Accessibility Statement"
      intro="AbrahamArcade Wholeness Enterprise LLC aims to provide a website experience aligned with WCAG 2.2 AA expectations."
      sections={sections}
    />
  );
}
