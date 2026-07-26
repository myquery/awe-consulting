import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy notice placeholder for AbrahamArcade Wholeness Enterprise LLC.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Information We May Collect",
    body: "When a contact form or form service is connected, AbrahamArcade Wholeness Enterprise LLC may collect information you choose to provide, such as name, organization, work email, phone number, partnership interest and message content.",
  },
  {
    title: "How Information May Be Used",
    body: "Information may be used to respond to inquiries, discuss potential partnerships, coordinate program planning and maintain basic administrative records.",
  },
  {
    title: "Sharing",
    body: "Information should not be sold. Limited sharing may be needed with service providers that support website hosting, form processing, scheduling or program administration.",
  },
  {
    title: "Data Retention",
    body: "Retention periods should be defined before launch and aligned with legal, operational and partner requirements.",
  },
  {
    title: "Contact",
    body: "For privacy questions, use the contact details provided on the website. Replace placeholder contact information before publication.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Notice"
      intro="This placeholder should be reviewed by qualified counsel before publication."
      sections={sections}
    />
  );
}
