import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopify App Development in Kerala | Custom Public & Private Apps | CreateMyshop",
  description: "Build high-performance, secure custom Shopify apps with CreateMyshop.in. Specializing in Shopify Polaris, Checkout Extensions, ERP integrations, and custom webhooks for merchants in Kerala.",
  keywords: [
    "Shopify App Development in Kerala",
    "Custom Shopify Apps",
    "Shopify App Developers",
    "Shopify Polaris UI",
    "Shopify API Integrations",
    "Best Shopify Agency Kerala"
  ],
  openGraph: {
    title: "Shopify App Development in Kerala | Custom Public & Private Apps | CreateMyshop",
    description: "Build high-performance, secure custom Shopify apps with CreateMyshop.in. Specializing in Shopify Polaris, Checkout Extensions, ERP integrations, and custom webhooks for merchants in Kerala.",
    url: "https://createmyshop.in/shopify_App_Developement_in_kerala",
    type: "website",
  }
};

export default function AppDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
