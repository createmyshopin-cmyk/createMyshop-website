import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Recent Works & Shopify Case Studies | CreateMyshop",
  description: "Explore our custom Shopify Liquid themes, conversion rate optimization success stories, and headless commerce architectures built for scale. Best Shopify portfolio Kerala.",
  keywords: [
    "Best Shopify portfolio Kerala",
    "Shopify developer case studies",
    "Custom theme examples",
    "Shopify Portfolio",
    "Kerala Web Design",
    "Liquid Developers"
  ],
  openGraph: {
    title: "Our Recent Works & Shopify Case Studies | CreateMyshop",
    description: "Explore our custom Shopify Liquid themes, conversion rate optimization success stories, and headless commerce architectures built for scale.",
    url: "https://createmyshop.in/portfolio",
    type: "website",
  }
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
