"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
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
  Code,
  Laptop
} from "lucide-react";

// --- Project Types & Mock Data ---
interface Project {
  id: string;
  name: string;
  category: "Custom Themes" | "CRO & Audits" | "Headless Next.js";
  challenge: string;
  solution: string;
  keyResult: string;
  metricLabel: string;
  brandColor: string; // Tailwind gradient classes
  accentColor: string;
  mockupText: string;
}

const PROJECTS: Project[] = [
  {
    id: "malabar-spice",
    name: "Malabar Spice Co.",
    category: "Custom Themes",
    challenge: "Traditional organic spice exporter needed custom localization, multi-currency support, and optimized loading speeds for global buyers on high-latency mobile networks.",
    solution: "Designed a clean, custom Shopify Liquid theme using micro-assets, replacing heavy app plugins with native schemas. Configured multi-market setups and international checkouts.",
    keyResult: "+140%",
    metricLabel: "Mobile Conversions",
    brandColor: "from-amber-600 to-amber-900",
    accentColor: "#f59e0b",
    mockupText: "MALABAR SPICES"
  },
  {
    id: "kallai-threads",
    name: "Kallai Threads",
    category: "Custom Themes",
    challenge: "High-volume Kerala designer textile boutique struggled with collection filtering lags, causing search bounces and high cart abandonment rates.",
    solution: "Coded a reactive, sub-second search and custom drawer filter architecture using pure CSS and optimized Liquid loops. Reduced visual layout shifts to zero.",
    keyResult: "99/100",
    metricLabel: "Lighthouse Speed Score",
    brandColor: "from-purple-600 to-indigo-900",
    accentColor: "#8b5cf6",
    mockupText: "KALLAI TEXTILES"
  },
  {
    id: "ayurveda-essentials",
    name: "AyurVeda Essentials",
    category: "CRO & Audits",
    challenge: "A premium D2C wellness brand wanted to launch subscription plans, but suffered from high drop-offs on the cart page and checkout steps.",
    solution: "Integrated Shopify subscriptions natively, redesigned the cart to feature sticky subscription/one-time toggles, and added progress badges to gamify free shipping milestones.",
    keyResult: "3.2x",
    metricLabel: "Return on Ad Spend (ROAS) Increase",
    brandColor: "from-emerald-600 to-teal-900",
    accentColor: "#10b981",
    mockupText: "AYURVEDA SHOP"
  },
  {
    id: "nova-gear",
    name: "Nova Gear Global",
    category: "Headless Next.js",
    challenge: "Global tech accessories brand needed global sub-second routing, instant catalog searching, and customized CMS pages beyond Shopify limits.",
    solution: "Engineered a headless storefront using Next.js App Router on Vercel, querying the Shopify Storefront GraphQL API. Implemented edge-cached ISR builds.",
    keyResult: "0.4s",
    metricLabel: "Page Load Time",
    brandColor: "from-blue-600 to-slate-900",
    accentColor: "#3b82f6",
    mockupText: "NOVA GEAR HEADLESS"
  }
];

const CATEGORIES = ["All Works", "Custom Themes", "CRO & Audits", "Headless Next.js"] as const;

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<typeof CATEGORIES[number]>("All Works");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success">("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeTab === "All Works") return true;
    return project.category === activeTab;
  });

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
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4>">
        <div className="w-full max-w-5xl px-4">
          <nav
            className="w-full flex items-center justify-between px-6 py-3.5 rounded-full glass-panel bg-[#09090b]/60 border-white/5 shadow-lg"
            aria-label="Primary Navigation"
          >
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded-lg"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-shopify-neon opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-shopify-neon"></span>
              </span>
              Create<span className="text-shopify-neon">Myshop</span>
              <span className="text-xs text-zinc-500 font-medium px-1.5 py-0.5 rounded border border-zinc-800 bg-zinc-900/50">.in</span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
              <a href="/#services" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Services</a>
              <a href="#" className="text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Recent Works</a>
              <a href="/shopify-premium-themes" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Themes</a>
              <a href="/shopify_App_Developement_in_kerala" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">App Dev</a>
              <a href="/#performance" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Performance</a>
              <a href="/#faq" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">FAQ</a>
              <a href="/#contact" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Contact</a>
            </div>

            {/* Glowing CTA Button */}
            <div className="flex items-center gap-3">
              <a
                href="/#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold bg-shopify-neon text-black hover:bg-white shadow-[0_0_12px_rgba(0,240,118,0.25)] hover:shadow-[0_0_20px_rgba(0,240,118,0.4)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] focus-visible:ring-shopify-neon"
              >
                Start Your Project
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
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  Recent Works
                </a>
                <a
                  href="/shopify-premium-themes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  Themes
                </a>
                <a
                  href="/shopify_App_Developement_in_kerala"
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
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-36 pb-16 md:pt-44 md:pb-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-4xl"
        >
          Proven Results.{" "}
          <span className="bg-gradient-to-r from-shopify-neon via-[#00c862] to-[#008060] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,240,118,0.15)]">
            Engineered to Scale.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-3xl mb-12 leading-relaxed"
        >
          Explore our recent Shopify success stories, custom Liquid themes, and high-performance e-commerce architectures designed for maximum ROI.
        </motion.p>

        {/* Macro Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full"
        >
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center border-white/5 bg-zinc-900/10">
            <span className="text-3xl sm:text-4xl font-black text-white">50+</span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Stores Launched Globally</span>
          </div>
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center border-white/5 bg-zinc-900/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-shopify-neon/5 blur-xl pointer-events-none" />
            <span className="text-3xl sm:text-4xl font-black text-shopify-neon tracking-wide">Avg. 35%</span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Conversion Rate Lift</span>
          </div>
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center border-white/5 bg-zinc-900/10">
            <span className="text-3xl sm:text-4xl font-black text-white">98+</span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">Average Speed Score</span>
          </div>
        </motion.div>
      </section>

      {/* --- INTERACTIVE CATEGORY FILTER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-12 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2.5 bg-zinc-950/60 p-1.5 rounded-full border border-zinc-900 max-w-fit">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-zinc-800 text-shopify-neon border border-shopify-neon/20 shadow-[0_0_15px_rgba(0,240,118,0.15)]"
                    : "text-zinc-500 hover:text-zinc-300 border border-transparent"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </section>

      {/* --- THE PROJECT GRID --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/15 p-6 sm:p-8 flex flex-col justify-between hover:border-shopify-neon/50 hover:shadow-[0_0_30px_rgba(0,240,118,0.15)] transition-all duration-300 cursor-pointer"
              >
                {/* Visual Accent Layer */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-shopify-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-6">
                  {/* Browser Mockup visualizer */}
                  <div className="relative w-full aspect-[16/10] bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden flex flex-col">
                    {/* Browser header */}
                    <div className="flex items-center justify-between border-b border-zinc-900 px-3.5 py-2 bg-zinc-900/40">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      </div>
                      <span className="text-[9px] text-zinc-600 font-semibold tracking-wider uppercase">{project.name.toLowerCase()} storefront</span>
                      <div className="h-1 w-4" />
                    </div>

                    {/* Styled Mock Content representing the brand niche */}
                    <div className={`flex-1 bg-gradient-to-br ${project.brandColor} p-6 flex flex-col justify-between relative`}>
                      {/* Grid background overlay inside mockup */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-0" />
                      
                      {/* Nav Mock */}
                      <div className="flex justify-between items-center relative z-10 border-b border-white/10 pb-2">
                        <span className="text-[10px] font-black text-white">{project.mockupText}</span>
                        <div className="flex gap-2">
                          <span className="h-1 w-4 bg-white/40 rounded" />
                          <span className="h-1 w-4 bg-white/40 rounded" />
                        </div>
                      </div>

                      {/* Custom themed details inside browser screen */}
                      {project.id === "malabar-spice" && (
                        <div className="relative z-10 grid grid-cols-3 gap-2">
                          <div className="p-1.5 bg-black/50 border border-amber-500/10 rounded flex flex-col items-center">
                            <span className="text-[7px] text-amber-300 font-bold">Turmeric</span>
                            <span className="text-[6px] text-zinc-500 mt-1">₹450 / kg</span>
                          </div>
                          <div className="p-1.5 bg-black/50 border border-amber-500/10 rounded flex flex-col items-center">
                            <span className="text-[7px] text-amber-300 font-bold">Cardamom</span>
                            <span className="text-[6px] text-zinc-500 mt-1">₹1,200 / kg</span>
                          </div>
                          <div className="p-1.5 bg-black/50 border border-amber-500/10 rounded flex flex-col items-center">
                            <span className="text-[7px] text-amber-300 font-bold">Cloves</span>
                            <span className="text-[6px] text-zinc-500 mt-1">₹850 / kg</span>
                          </div>
                        </div>
                      )}

                      {project.id === "kallai-threads" && (
                        <div className="relative z-10 flex gap-3">
                          <div className="w-1/3 p-2 bg-black/50 border border-purple-500/10 rounded space-y-1">
                            <div className="h-1 w-full bg-purple-500/30 rounded" />
                            <div className="h-1 w-4/5 bg-purple-500/20 rounded" />
                            <div className="h-1.5 w-full bg-zinc-800 rounded mt-2" />
                          </div>
                          <div className="flex-1 grid grid-cols-2 gap-1.5">
                            <div className="p-1 bg-black/50 border border-purple-500/10 rounded flex flex-col items-center">
                              <span className="text-[6px] text-zinc-400 font-bold">Silk Weave</span>
                            </div>
                            <div className="p-1 bg-black/50 border border-purple-500/10 rounded flex flex-col items-center">
                              <span className="text-[6px] text-zinc-400 font-bold">Linen Drape</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === "ayurveda-essentials" && (
                        <div className="relative z-10 flex flex-col items-center gap-2 max-w-[200px] mx-auto">
                          <div className="w-full p-2 bg-black/60 border border-emerald-500/10 rounded flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="h-4 w-4 bg-emerald-500/10 rounded border border-emerald-500/20 flex items-center justify-center text-[7px] text-emerald-400 font-black">✔</div>
                              <span className="text-[7px] text-white font-bold">Subscribe & Save 15%</span>
                            </div>
                            <span className="text-[7px] text-emerald-400 font-bold">Active</span>
                          </div>
                        </div>
                      )}

                      {project.id === "nova-gear" && (
                        <div className="relative z-10 grid grid-cols-2 gap-2">
                          <div className="p-2 bg-black/50 border border-blue-500/10 rounded space-y-1.5">
                            <span className="text-[6px] text-blue-400 font-bold">V1 Core Charger</span>
                            <div className="h-0.5 w-full bg-blue-500/30 rounded" />
                            <span className="text-[6px] text-zinc-500 block">GraphQL Edge Connected</span>
                          </div>
                          <div className="p-2 bg-black/50 border border-blue-500/10 rounded space-y-1.5">
                            <span className="text-[6px] text-blue-400 font-bold">MagSafe Pro Case</span>
                            <div className="h-0.5 w-full bg-blue-500/30 rounded" />
                            <span className="text-[6px] text-zinc-500 block">GraphQL Edge Connected</span>
                          </div>
                        </div>
                      )}

                      {/* Footer Mock */}
                      <div className="flex justify-between items-center relative z-10 text-[8px] text-white/50 border-t border-white/10 pt-2 font-medium">
                        <span>SHOP NEW RELEASES</span>
                        <span className="px-2 py-0.5 bg-white text-black font-extrabold rounded">VIEW</span>
                      </div>
                    </div>
                  </div>

                  {/* Badges & Title */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black px-2.5 py-1 rounded bg-[#09090b] border border-zinc-800 text-zinc-400 uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-zinc-500 font-medium">Shopify Optimized</span>
                  </div>

                  <div className="space-y-2 text-left">
                    <h3 className="text-2xl font-bold text-white group-hover:text-shopify-neon transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      <strong className="text-zinc-300 font-medium block mb-1">Challenge:</strong>
                      {project.challenge}
                    </p>
                    <p className="text-sm text-zinc-400 font-light leading-relaxed">
                      <strong className="text-zinc-300 font-medium block mb-1">Execution:</strong>
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Key Result Box and Case Study link */}
                <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* Result Metric */}
                  <div className="flex items-center gap-3 p-3 rounded-xl border border-zinc-800/80 bg-zinc-950/60 max-w-fit">
                    <div className="h-10 w-10 rounded-lg bg-shopify-neon/5 border border-shopify-neon/15 flex items-center justify-center text-shopify-neon shadow-[0_0_8px_rgba(0,240,118,0.1)]">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Key Result</span>
                      <span className="text-base font-black text-shopify-neon leading-none mt-0.5">{project.keyResult}</span>
                      <span className="text-[8px] font-bold text-zinc-400 tracking-tight mt-0.5">{project.metricLabel}</span>
                    </div>
                  </div>

                  {/* View case study slider trigger */}
                  <div className="flex items-center gap-1 text-sm font-semibold text-shopify-neon select-none h-10">
                    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 block">
                      View Case Study &rarr;
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
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
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/shopify-premium-themes" className="hover:text-white transition-colors">Themes</a></li>
              <li><a href="/shopify_App_Developement_in_kerala" className="hover:text-white transition-colors">App Dev</a></li>
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
