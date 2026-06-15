import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact CreateMyshop | Free Shopify Audit & Consultation",
  description:
    "Get in touch with CreateMyshop.in for Shopify store development, theme customization, CRO audits, and app development in Kerala. Call, email, or WhatsApp us today.",
  keywords: [
    "Contact Shopify developer Kerala",
    "Shopify consultation Kochi",
    "CreateMyshop contact",
    "Shopify audit request",
    "Shopify agency Kerala",
  ],
  openGraph: {
    title: "Contact CreateMyshop | Free Shopify Audit & Consultation",
    description:
      "Schedule a free Shopify performance audit or talk to our Kerala-based Shopify experts.",
    url: "https://createmyshop.in/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
