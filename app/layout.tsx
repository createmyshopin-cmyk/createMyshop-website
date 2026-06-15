import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import LeadCapturePopup from "../components/LeadCapturePopup";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CreateMyshop | Premium Shopify Growth & Conversion Agency",
  description: "CreateMyshop.in is a premium Shopify growth agency. We build blazing-fast, high-converting custom Shopify stores, headless commerce Next.js sites, and custom themes engineered for scale and optimized for conversion.",
  keywords: [
    "Shopify Agency",
    "CRO Experts",
    "Custom Shopify Themes",
    "Shopify Plus Developers",
    "Headless Commerce",
    "Next.js Shopify",
    "Shopify Speed Optimization"
  ],
  openGraph: {
    title: "CreateMyshop | Premium Shopify Growth & Conversion Agency",
    description: "Engineered for Conversion. Built for Scale. Blazing-fast custom themes and headless Shopify development.",
    url: "https://createmyshop.in",
    siteName: "CreateMyshop.in",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreateMyshop | Premium Shopify Growth & Conversion Agency",
    description: "Engineered for Conversion. Built for Scale. Blazing-fast custom themes and headless Shopify development.",
  },
  icons: {
    icon: "/createmyshop-logo.png",
    apple: "/createmyshop-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <LeadCapturePopup />
        <WhatsAppButton />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x7m80nz2kx");`}
        </Script>
      </body>
    </html>
  );
}
