"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Cpu,
  Layers,
  Menu,
  Plus,
  Send,
  Smartphone,
  Sparkles,
  TrendingUp,
  X,
  Zap,
  CheckCircle2,
  Globe,
  Activity,
  Code,
  Laptop,
  Calculator,
  Calendar,
  Lock,
  Database
} from "lucide-react";

// --- Types & Data ---
interface AppFeature {
  id: string;
  name: string;
  price: number;
  weeks: number;
  description: string;
}

const APP_FEATURES: AppFeature[] = [
  {
    id: "admin-ui",
    name: "Shopify Polaris Admin UI",
    price: 35000,
    weeks: 2,
    description: "An embedded app interface directly inside the Shopify admin dashboard using Polaris design tokens."
  },
  {
    id: "checkout-ext",
    name: "Checkout Extensibility",
    price: 45000,
    weeks: 3,
    description: "Custom checkout blocks, post-purchase upsell widgets, and order status page customization."
  },
  {
    id: "webhook-sync",
    name: "Real-time Webhook Sync",
    price: 25000,
    weeks: 1.5,
    description: "Instant data syncing via Shopify Webhooks (Event bridge) to handle order, inventory, or cart events."
  },
  {
    id: "erp-crm",
    name: "External ERP / CRM Sync",
    price: 60000,
    weeks: 4,
    description: "Two-way integration to sync orders, inventory, and customers with SAP, Oracle, Zoho, or custom ERPs."
  },
  {
    id: "app-billing",
    name: "Shopify Billing API",
    price: 20000,
    weeks: 1,
    description: "Subscription recurring billing and usage charges integrated directly via Shopify Billing API."
  },
  {
    id: "ai-recs",
    name: "AI Product Recommender",
    price: 50000,
    weeks: 3,
    description: "Machine learning personalization engine suggesting cart upsells based on shopper behavior."
  }
];

const APP_FAQ = [
  {
    question: "What is the difference between a public app and a custom (private) app?",
    answer: "A custom (private) app is built specifically for your store to automate workflows, connect custom ERPs, or extend checkout features without being visible to others. A public app is published on the Shopify App Store and can be installed by any Shopify merchant. We develop both architectures using Node.js/Remix and the latest Shopify API versions."
  },
  {
    question: "Will our custom app be hosted by Shopify?",
    answer: "No. Unlike themes, Shopify apps run on external servers and communicate with Shopify via APIs. We set up robust, secure hosting on AWS, Heroku, or Fly.io, configuring auto-scaling to ensure your app stays online during high-traffic sales events like Black Friday or festival sales."
  },
  {
    question: "What is Checkout Extensibility and why is it important?",
    answer: "Shopify is deprecating `checkout.liquid` in favor of Checkout Extensibility for Shopify Plus merchants. This new secure framework allows us to add custom UI blocks (like gift wrapping, delivery notes, and trust badges) and post-purchase offers directly inside the checkout flow without breaking future security upgrades."
  },
  {
    question: "Do you handle the Shopify App Store submission process?",
    answer: "Yes. For public apps, we handle the entire submission, review, and approval process with Shopify's app review team. We ensure your app meets all security, performance, and UX requirements to guarantee approval on the first submission."
  }
];

export default function ShopifyAppDevPage() {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["admin-ui", "webhook-sync"]);
  const [complexity, setComplexity] = useState<"standard" | "enterprise">("standard");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success">("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      if (selectedFeatures.length > 1) {
        setSelectedFeatures(selectedFeatures.filter((item) => item !== id));
      }
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  // Calculate totals
  const baseCost = selectedFeatures.reduce((acc, currentId) => {
    const feature = APP_FEATURES.find((f) => f.id === currentId);
    return acc + (feature ? feature.price : 0);
  }, 0);

  const baseWeeks = selectedFeatures.reduce((acc, currentId) => {
    const feature = APP_FEATURES.find((f) => f.id === currentId);
    return acc + (feature ? feature.weeks : 0);
  }, 0);

  const complexityMultiplier = complexity === "enterprise" ? 1.4 : 1.0;
  const estimatedCost = Math.round(baseCost * complexityMultiplier);
  const estimatedWeeks = Math.ceil(baseWeeks * complexityMultiplier);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus("loading");
    setTimeout(() => {
      setNewsletterStatus("success");
      setNewsletterEmail("");
    }, 1200);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-shopify-neon selection:text-black antialiased overflow-x-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 dot-grid pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] glow-mesh pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] glow-mesh-bottom pointer-events-none z-0" />

      {/* --- FLOATING NAVBAR --- */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
        <div className="w-full max-w-5xl">
          <nav
            className="w-full flex items-center justify-between px-6 py-3.5 rounded-full glass-panel bg-[#09090b]/60 border-white/5 shadow-lg"
            aria-label="Primary Navigation"
          >
            {/* Logo */}
            <a
              href="/"
              className="flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded-lg"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shopify-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-shopify-neon"></span>
              </span>
              Create<span className="text-shopify-neon">Myshop</span>
              <span className="text-xs text-zinc-500 font-medium px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900/50">.in</span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-5 lg:gap-6 text-sm font-medium text-zinc-400 whitespace-nowrap flex-nowrap shrink-0">
              <a href="/#services" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1 whitespace-nowrap">Services</a>
              <a href="/portfolio" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1 whitespace-nowrap">Portfolio</a>
              <a href="/shopify-premium-themes" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1 whitespace-nowrap">Themes</a>
              <a href="#" className="text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1 whitespace-nowrap">App Dev</a>
              <a href="/#performance" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1 whitespace-nowrap">Performance</a>
              <a href="/#faq" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1 whitespace-nowrap">FAQ</a>
              <a href="/#contact" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1 whitespace-nowrap">Contact</a>
            </div>

            {/* Glowing CTA Button */}
            <div className="flex shrink-0 items-center gap-3">
              <a
                href="/#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold bg-shopify-neon text-black hover:bg-white shadow-[0_0_12px_rgba(0,240,118,0.25)] hover:shadow-[0_0_20px_rgba(0,240,118,0.4)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] focus-visible:ring-shopify-neon"
              >
                Start Scaling
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-zinc-950 border-l border-zinc-800 p-8 flex flex-col z-50 md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-lg font-bold text-white">
                  Create<span className="text-shopify-neon">Myshop</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg font-medium text-zinc-400">
                <a
                  href="/#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  Services
                </a>
                <a
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="/shopify-premium-themes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  Themes
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  App Dev
                </a>
                <a
                  href="/#performance"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  Performance
                </a>
                <a
                  href="/#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  Contact
                </a>
              </div>

              <div className="mt-auto pt-8 border-t border-zinc-900">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 py-4 rounded-xl font-semibold bg-shopify-neon text-black hover:bg-white shadow-lg transition-all duration-300"
                >
                  Start Scaling
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-36 pb-16 md:pt-44 md:pb-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Glow Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-shopify-neon/30 bg-shopify-neon/5 text-xs font-semibold text-shopify-neon shadow-[0_0_15px_rgba(0,240,118,0.08)] mb-6 animate-pulse"
        >
          <Cpu className="w-3.5 h-3.5 text-shopify-neon" />
          <span>Shopify App Development Specialist</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-4xl"
        >
          Shopify App Development{" "}
          <span className="bg-gradient-to-r from-shopify-neon via-[#00c862] to-[#008060] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,240,118,0.15)]">
            in Kerala
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-3xl mb-12 leading-relaxed"
        >
          Automate operations, build custom checkouts, and connect your business systems with bespoke public and private Shopify apps engineered with Node.js, Remix, and GraphQL.
        </motion.p>
      </section>

      {/* --- INTERACTIVE APP COST & TIMELINE CALCULATOR --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Feature checklist */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Select App Features</span>
            
            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {APP_FEATURES.map((feature) => {
                const isSelected = selectedFeatures.includes(feature.id);
                return (
                  <button
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`text-left p-5 rounded-2xl border transition-all flex flex-col justify-between h-40 ${
                      isSelected
                        ? "bg-zinc-900 border-shopify-neon/30 shadow-[0_0_15px_rgba(0,240,118,0.06)]"
                        : "bg-zinc-900/20 border-zinc-800/80 hover:border-zinc-700/60"
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="font-bold text-white text-sm">{feature.name}</div>
                        <div className={`h-4.5 w-4.5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected ? "bg-shopify-neon border-shopify-neon text-black" : "border-zinc-700 text-transparent"
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      </div>
                      <div className="text-[11px] text-zinc-500 font-light line-clamp-3 leading-relaxed">{projectDescriptionReplacement(feature.description)}</div>
                    </div>
                    
                    <div className="flex justify-between items-center text-[10px] font-bold text-zinc-400 pt-2 border-t border-zinc-900">
                      <span>{feature.weeks} Weeks</span>
                      <span className="text-shopify-neon">₹{feature.price.toLocaleString("en-IN")}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Estimates & Complexity Toggles */}
        <div className="lg:col-span-5 flex flex-col justify-between glass-panel p-8 rounded-3xl border-white/5 bg-zinc-900/10">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-zinc-900 pb-4">
              <Calculator className="w-4 h-4 text-shopify-neon" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Estimate Calculator</span>
            </div>

            {/* Complexity Toggles */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase block">App Complexity</span>
              <div className="grid grid-cols-2 gap-3 bg-zinc-950/60 p-1 rounded-xl border border-zinc-900">
                <button
                  onClick={() => setComplexity("standard")}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${
                    complexity === "standard" ? "bg-zinc-800 text-white" : "text-zinc-500"
                  }`}
                >
                  Standard
                </button>
                <button
                  onClick={() => setComplexity("enterprise")}
                  className={`py-2 rounded-lg text-xs font-bold transition-all ${
                    complexity === "enterprise" ? "bg-zinc-800 text-white" : "text-zinc-500"
                  }`}
                >
                  Enterprise
                </button>
              </div>
              <p className="text-[10px] text-zinc-500 font-light leading-relaxed">
                *Enterprise mode includes advanced database caching, multi-tenant setups, and high-volume background queue workers.
              </p>
            </div>

            <hr className="border-zinc-900" />

            {/* Live Calculations */}
            <div className="space-y-5">
              
              {/* Cost Box */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Estimated Build Budget</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-black text-shopify-neon">₹{estimatedCost.toLocaleString("en-IN")}</span>
                  <span className="text-xs text-zinc-400 font-medium">INR</span>
                </div>
              </div>

              {/* Timeline Box */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Estimated Delivery Timeline</span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                  <span className="text-lg font-bold text-white">{estimatedWeeks} Weeks</span>
                </div>
              </div>

            </div>
          </div>

          <div className="pt-6 border-t border-zinc-900 mt-8">
            <a
              href="/#contact"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold bg-shopify-neon text-black hover:bg-white shadow-[0_0_15px_rgba(0,240,118,0.2)] hover:shadow-[0_0_25px_rgba(0,240,118,0.4)] transition-all cursor-pointer min-h-[44px]"
            >
              Consult On App Development
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </section>

      {/* --- APP CAPABILITIES / EMBEDDED DESIGN --- */}
      <section className="relative z-10 py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-zinc-900/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
              <Lock className="w-3.5 h-3.5 text-shopify-neon" />
              Secure API Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Polaris Standard UI & GraphQL Core.
            </h2>
            <p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed">
              We design admin interfaces that blend seamlessly with Shopify’s native design guidelines. Built with robust token security, encrypted databases, and webhook listeners.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-shopify-neon" />
                <span>Shopify App CLI</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-shopify-neon" />
                <span>Remix / Node.js</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-shopify-neon" />
                <span>GraphQL Storefront API</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-shopify-neon" />
                <span>Prisma ORM & PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Graphical Mockup of Polaris Embedded App */}
          <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border-white/5 bg-zinc-900/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-shopify-neon/5 blur-xl pointer-events-none" />
            
            {/* Fake Admin Dashboard */}
            <div className="w-full bg-[#0b0c10] border border-zinc-900 rounded-xl overflow-hidden shadow-2xl flex flex-col font-sans select-none">
              
              {/* Fake Top header */}
              <div className="bg-[#1a1c23] border-b border-zinc-900 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <span className="h-2 w-2 rounded-full bg-shopify-neon" />
                  <span>Shopify Store Admin</span>
                </div>
                <div className="h-4 w-24 bg-zinc-800 rounded" />
              </div>

              {/* Sidebar + Main Grid */}
              <div className="flex min-h-[220px]">
                {/* Left Mini Sidebar */}
                <div className="w-20 bg-[#12141a] border-r border-zinc-900 p-2 space-y-2.5">
                  <div className="h-2 w-full bg-zinc-800 rounded" />
                  <div className="h-2 w-4/5 bg-zinc-800/60 rounded" />
                  <div className="h-2 w-full bg-shopify-neon/20 rounded" />
                  <div className="h-2 w-3/5 bg-zinc-800/60 rounded" />
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="h-3.5 w-32 bg-white rounded" />
                      <div className="h-2 w-24 bg-zinc-700 rounded" />
                    </div>
                    <div className="h-6 w-16 bg-shopify-neon text-black text-[9px] font-black rounded flex items-center justify-center">Active</div>
                  </div>

                  {/* Inside card */}
                  <div className="p-3 bg-zinc-950 border border-zinc-900 rounded-lg grid grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <span className="text-[8px] text-zinc-500 uppercase font-bold">Sync Status</span>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-shopify-neon" />
                        <span className="text-[10px] text-white font-bold">100% OK</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] text-zinc-500 uppercase font-bold">Processed Events</span>
                      <span className="text-[10px] text-white font-bold block mt-1">452,185</span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[8px] text-zinc-500 uppercase font-bold">Latency</span>
                      <span className="text-[10px] text-white font-bold block mt-1">12ms</span>
                    </div>
                  </div>

                  {/* Wave progress graph */}
                  <div className="h-14 w-full bg-zinc-950 border border-zinc-900 rounded-lg p-2 flex items-end">
                    <div className="flex justify-between w-full items-end h-8">
                      <div className="w-3 bg-zinc-900 h-2 rounded-t" />
                      <div className="w-3 bg-zinc-900 h-4 rounded-t" />
                      <div className="w-3 bg-shopify-neon/50 h-5 rounded-t" />
                      <div className="w-3 bg-shopify-neon/80 h-7 rounded-t" />
                      <div className="w-3 bg-shopify-neon h-8 rounded-t shadow-[0_0_8px_rgba(0,240,118,0.4)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="relative z-10 py-24 max-w-4xl mx-auto px-6 lg:px-8 border-t border-zinc-900/60">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-4">
            <Globe className="w-3.5 h-3.5 text-shopify-neon" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            App Development FAQs
          </h2>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-4">
          {APP_FAQ.map((faq, index) => {
            const isOpen = activeFAQ === index;
            return (
              <div
                key={`faq-${index}`}
                className="rounded-2xl border border-zinc-800/80 bg-zinc-900/10 hover:border-zinc-700/80 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setActiveFAQ(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full border border-zinc-800/80 flex items-center justify-center shrink-0 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-shopify-neon/20 text-shopify-neon" : ""
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-400 font-light leading-relaxed border-t border-zinc-900/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- BOTTOM CTA BLOCK --- */}
      <section className="relative z-10 py-12 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative glass-panel rounded-3xl border border-shopify-neon/20 shadow-2xl p-8 sm:p-12 md:p-16 overflow-hidden bg-zinc-950/90">
          {/* Neon Glow overlay */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-shopify-neon/40 to-transparent" />
          <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-96 h-96 bg-shopify-neon/5 blur-[80px] pointer-events-none" />

          <div className="flex flex-col items-center text-center space-y-6 relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
              <Sparkles className="w-3.5 h-3.5 text-shopify-neon" />
              Scale Your Stores Revenue
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Become Our Next Success Story?
            </h2>
            
            <p className="text-zinc-400 font-light text-sm sm:text-base max-w-2xl leading-relaxed">
              Partner with CreateMyshop to build custom Shopify liquid themes, integrate headless Next.js frontends, or run deep conversion rate optimization sprints that boost profitability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-shopify-neon text-black hover:bg-white shadow-[0_0_15px_rgba(0,240,118,0.3)] transition-all cursor-pointer min-h-[44px]"
              >
                Book a Free CRO Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-700 transition-colors cursor-pointer min-h-[44px]"
              >
                Talk to an Expert
                <ArrowUpRight className="w-4 h-4 text-zinc-500" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-zinc-900/60 bg-zinc-950/20 pt-16 pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-shopify-neon/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-zinc-900/80">
          {/* Col 1 */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-lg font-bold text-white">
              Create<span className="text-shopify-neon">Myshop</span>
              <span className="text-xs text-zinc-500 font-medium px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900/50 ml-1">.in</span>
            </span>
            <p className="text-zinc-500 font-light text-sm max-w-sm leading-relaxed">
              We build custom Next.js frontends and high-performance Liquid templates engineered to increase average order value and boost conversion rates.
            </p>
          </div>

          {/* Col 2 */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Navigation</span>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-500">
              <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/shopify-premium-themes" className="hover:text-white transition-colors">Themes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">App Dev</a></li>
              <li><a href="/#performance" className="hover:text-white transition-colors">Performance</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Shopify Insights Newsletter</span>
            <p className="text-zinc-500 font-light text-xs leading-relaxed">
              Weekly actionable optimization case studies, liquid performance scripts, and conversion hacks.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Newsletter Email</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="email@company.com"
                className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-800 bg-zinc-900/30 text-white placeholder-zinc-500 focus:outline-none focus:border-shopify-neon text-xs transition-all"
              />
              <button
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="flex items-center justify-center px-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-shopify-neon hover:text-shopify-neon text-zinc-400 transition-all cursor-pointer min-h-[38px] w-12 shrink-0"
                aria-label="Subscribe to newsletter"
              >
                {newsletterStatus === "loading" ? (
                  <span className="h-4 w-4 border-2 border-shopify-neon border-t-transparent rounded-full animate-spin" />
                ) : newsletterStatus === "success" ? (
                  <Check className="w-4 h-4 text-shopify-neon" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Sub bottom */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-zinc-600">
          <span>© {new Date().getFullYear()} CreateMyshop.in. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper to replace description text
function projectDescriptionReplacement(desc: string) {
  return desc;
}
