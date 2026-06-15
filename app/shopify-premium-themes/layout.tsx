import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Shopify Themes 2.0 | High-Performance & Fast | CreateMyshop",
  description: "Supercharge your online store with custom, blazing-fast Shopify themes coded from scratch by CreateMyshop.in. Score 99/100 on Google Lighthouse. Section 2.0 architecture.",
  keywords: [
    "Fastest Shopify Themes",
    "Premium Shopify Themes",
    "Custom Shopify Themes 2.0",
    "Clean Shopify Templates",
    "Shopify Speed Optimization",
    "Kerala Shopify Developers"
  ],
  openGraph: {
    title: "Premium Shopify Themes 2.0 | High-Performance & Fast | CreateMyshop",
    description: "Supercharge your online store with custom, blazing-fast Shopify themes coded from scratch by CreateMyshop.in. Score 99/100 on Google Lighthouse.",
    url: "https://createmyshop.in/shopify-premium-themes",
    type: "website",
  }
};

export default function ThemesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
