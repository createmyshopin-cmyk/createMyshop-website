"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cpu,
  Layers,
  Menu,
  Plus,
  Send,
  Smartphone,
  TrendingUp,
  X,
  Zap,
  Globe,
  Code,
  Laptop
} from "lucide-react";
import SiteLogo from "../components/SiteLogo";
import MobileHeaderTagline from "../components/MobileHeaderTagline";

// --- Types & Constants ---
interface FAQItem {
  question: string;
  answer: string;
}

interface PortfolioItem {
  client: string;
  role: string;
  lift: string;
  speed: string;
  tech: string;
  description: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Why should we build a custom Shopify theme instead of using an off-the-shelf one?",
    answer: "Off-the-shelf themes are packed with features you don't need, leading to heavy JS execution and bloated DOM size that slows down your site. Our custom liquid themes are hand-coded from scratch. They contain only the features your business needs, scoring 95+ on Google Lighthouse and boosting conversions by eliminating load-time dropoffs."
  },
  {
    question: "What is headless commerce, and do we need it?",
    answer: "Headless commerce decouples your frontend (the storefront) from your backend (Shopify admin). By using Next.js on the frontend and Shopify's Storefront API on the backend, you get instant page loads, sub-second search times, and full design freedom. It is ideal for brand-focused companies doing $1M+ in GMV looking to build a tailored customer experience."
  },
  {
    question: "How long does a typical custom Shopify build take?",
    answer: "A standard custom Shopify theme design and development project takes between 6 to 8 weeks. A headless commerce build using Next.js takes 8 to 12 weeks. Every project includes comprehensive CRO audits, wireframing, custom liquid engineering, automated testing, and pre-launch speed optimization."
  },
  {
    question: "Do you offer post-launch support and optimization?",
    answer: "Yes, we provide continuous monthly growth retainers. This includes split A/B testing, speed monitoring, new feature development, landing page builds for ad campaigns, and proactive conversion rate optimization (CRO) to ensure your store scales consistently."
  },
  {
    question: "Can you optimize our existing store without rebuilds?",
    answer: "Absolutely. We perform deep-dive code audits to locate bottleneck scripts, heavy images, and redundant apps. We optimize your existing liquid theme, compress assets, implement lazy-loading, and resolve layout shifts to restore speed and improve conversion rates."
  }
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    client: "Aura Home",
    role: "Custom Shopify Plus Theme",
    lift: "+48% Conversion Lift",
    speed: "98/100 Mobile Speed",
    tech: "Liquid / Tailwinds",
    description: "Re-engineered a slow furniture storefront from scratch. Cleaned out 14 third-party apps, replacing them with fast native liquid sections."
  },
  {
    client: "Zenith Wear",
    role: "Headless Next.js Storefront",
    lift: "2.8x Session Duration",
    speed: "99/100 Lighthouse",
    tech: "Next.js / Shopify API",
    description: "Built a fully decoupled, localized fashion store. Leveraged edge caching to load product pages in under 200ms globally."
  },
  {
    client: "ActiveFuel",
    role: "Conversion & Speed Revamp",
    lift: "+38% Add-to-Cart Rate",
    speed: "96/100 Page Speed",
    tech: "Shopify Core / Liquid",
    description: "Optimized the cart drawer, checkout page, and scripts for a high-growth wellness brand. Resolved key web vitals and layout shifts."
  }
];

const PARTNER_LOGOS = [
  { name: "Shopify Plus" },
  { name: "Klaviyo" },
  { name: "Next.js" },
  { name: "Stripe" },
  { name: "ReCharge" },
  { name: "Tailwind CSS" },
  { name: "Google Analytics 4" },
  { name: "Vercel" }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success">("idle");
  // Track page scroll to style Floating Navbar
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

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
      {/* Dynamic Background Overlays */}
      <div className="absolute inset-0 dot-grid pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] glow-mesh pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] glow-mesh-bottom pointer-events-none z-0" />

      {/* --- FLOATING NAVBAR --- */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
        <nav
          className={`w-full max-w-5xl flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? "glass-panel-glow bg-[#09090b]/80 border-shopify-neon/20 shadow-lg"
              : "glass-panel bg-[#09090b]/40 border-white/5"
          }`}
          aria-label="Primary Navigation"
        >
          {/* Logo */}
          <SiteLogo href="/" />
          <MobileHeaderTagline />

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Services</a>
            <a href="/portfolio" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Portfolio</a>
            <a href="/shopify-premium-themes" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Themes</a>
            <a href="/shopify_App_Developement_in_kerala" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">App Dev</a>
            <a href="#faq" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">FAQ</a>
            <a href="/contact" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Contact</a>
          </div>

          {/* Glowing CTA Button */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold bg-shopify-neon text-black hover:bg-white shadow-[0_0_15px_rgba(0,240,118,0.25)] hover:shadow-[0_0_25px_rgba(0,240,118,0.5)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] focus-visible:ring-shopify-neon"
            >
              Start Scaling
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

            {/* Mobile Hamburger Menu Toggle */}
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
      </header>

      {/* Mobile Menu Slide-over */}
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
                <SiteLogo
                  href="/"
                  variant="mobile"
                  onClick={() => setMobileMenuOpen(false)}
                />
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
                  href="#services"
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
                  href="/shopify_App_Developement_in_kerala"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  App Dev
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-shopify-neon transition-colors"
                >
                  Contact
                </a>
              </div>

              <div className="mt-auto pt-8 border-t border-zinc-900">
                <a
                  href="/contact"
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
      <section className="relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Centered Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-4xl"
        >
          Shopify Development Company{" "}
          <span className="bg-gradient-to-r from-shopify-neon via-[#00c862] to-[#008060] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(0,240,118,0.25)]">
            in Kerala
          </span>
        </motion.h1>

        {/* Centered Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-3xl mb-8 leading-relaxed"
        >
          We build blazing-fast, custom Shopify stores that dominate the market and maximize revenue for Kerala businesses. Engineered with sub-second page loads, custom liquid architectures, and scientific conversion strategies.
        </motion.p>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col-reverse sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <a
            href="/contact"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-shopify-neon text-black hover:bg-white shadow-[0_0_20px_rgba(0,240,118,0.3)] hover:shadow-[0_0_35px_rgba(0,240,118,0.6)] transition-all duration-300 cursor-pointer min-h-[48px]"
          >
            Scale Your Business
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://www.shopify.com/partners/directory/partner/tuttusky-soft"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 px-6 py-3 hover:border-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer min-h-[48px]"
            aria-label="View CreateMyShop on Shopify Partners Directory"
          >
            <img
              src="/shopify-partner.svg"
              alt="Shopify Partner"
              className="h-7 w-auto max-w-[180px] object-contain transition-transform group-hover:scale-[1.02]"
            />
          </a>
        </motion.div>
      </section>

      {/* --- TECH STACK MARQUEE --- */}
      <section className="relative z-10 py-10 border-t border-b border-zinc-900/60 bg-zinc-950/40 backdrop-blur-[1px] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-20 pointer-events-none" />

        <div className="flex w-[200%] md:w-[150%] animate-marquee">
          {/* Logo set 1 */}
          <div className="flex justify-around items-center w-1/2 shrink-0">
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex items-center gap-2 px-6 py-2 rounded-xl border border-zinc-800/40 bg-zinc-900/20 text-sm font-semibold tracking-wide text-zinc-500 select-none hover:text-zinc-300 hover:border-zinc-700/60 hover:bg-zinc-900/40 transition-all duration-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-shopify-neon/50" />
                {logo.name}
              </div>
            ))}
          </div>
          {/* Logo set 2 */}
          <div className="flex justify-around items-center w-1/2 shrink-0">
            {PARTNER_LOGOS.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex items-center gap-2 px-6 py-2 rounded-xl border border-zinc-800/40 bg-zinc-900/20 text-sm font-semibold tracking-wide text-zinc-500 select-none hover:text-zinc-300 hover:border-zinc-700/60 hover:bg-zinc-900/40 transition-all duration-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-shopify-neon/50" />
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES BENTO GRID --- */}
      <section id="services" className="relative z-10 py-24 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-shopify-neon" />
            Capabilities & Execution
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Advanced Architecture. Guaranteed Uplift.
          </h2>
          <p className="text-zinc-400 max-w-2xl font-light text-base md:text-lg leading-relaxed">
            We bypass template restrictions and standard integrations to build bespoke solutions structured entirely around speed and conversions.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Custom Theme & Liquid (2 cols wide) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-shopify-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-shopify-neon/10 border border-shopify-neon/20 text-shopify-neon shadow-[0_0_15px_rgba(0,240,118,0.1)]">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-400 uppercase tracking-widest border border-zinc-700/40">LIQUID CORE</span>
            </div>

            <div className="mt-8 mb-4">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-shopify-neon transition-colors">Custom Theme & Liquid Development</h3>
              <p className="text-zinc-400 font-light text-sm max-w-lg leading-relaxed">
                Lightweight, scalable Shopify themes hand-engineered without app bloat. Direct Liquid scripting combined with modern CSS results in faster loads and higher product conversion rates.
              </p>
            </div>

            {/* Embedded Code Visualizer Component */}
            <div className="mt-4 p-3 rounded-lg border border-zinc-800/60 bg-black/40 font-mono text-[11px] leading-relaxed text-zinc-400 flex flex-col overflow-x-auto select-none">
              <div className="flex items-center gap-1.5 border-b border-zinc-800/60 pb-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-[10px] text-zinc-500 font-sans ml-1 select-none">sections/custom-cart.liquid</span>
              </div>
              <div className="text-zinc-500 flex gap-4"><span className="w-3">1</span><span><span className="text-emerald-500">{"{%"}</span> schema <span className="text-emerald-500">{"%}"}</span></span></div>
              <div className="text-zinc-500 flex gap-4"><span className="w-3">2</span><span>  {"{"} &quot;name&quot;: &quot;Dynamic Slide Cart&quot;, &quot;settings&quot;: [</span></div>
              <div className="text-zinc-500 flex gap-4"><span className="w-3">3</span><span>    {"{"} &quot;type&quot;: &quot;checkbox&quot;, &quot;id&quot;: &quot;enable_upsell&quot;, &quot;label&quot;: &quot;Upsells&quot; {"}"}</span></div>
              <div className="text-zinc-500 flex gap-4"><span className="w-3">4</span><span>  ] {"}"}</span></div>
              <div className="text-zinc-500 flex gap-4"><span className="w-3">5</span><span><span className="text-emerald-500">{"{%"}</span> endschema <span className="text-emerald-500">{"%}"}</span></span></div>
            </div>
          </motion.div>

          {/* Card 2: CRO & Audits (1 col wide) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-shopify-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-shopify-neon/10 border border-shopify-neon/20 text-shopify-neon shadow-[0_0_15px_rgba(0,240,118,0.1)]">
                <BarChart3 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-400 uppercase tracking-widest border border-zinc-700/40">CRO + AUDIT</span>
            </div>

            <div className="mt-8 mb-4">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-shopify-neon transition-colors">CRO & Audits</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Scientific auditing to identify leaks in your checkout funnel. We target bounce rates, checkout friction, and load speeds to recover lost revenue.
              </p>
            </div>

            {/* Micro CRO gauge */}
            <div className="mt-4 p-4 rounded-lg border border-zinc-800/60 bg-black/40 flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Conversion Lift</span>
                <span className="text-lg font-black text-shopify-neon">+34.8%</span>
              </div>
              <div className="flex gap-1.5 items-end h-8">
                <div className="w-2 bg-zinc-800 h-3 rounded-full" />
                <div className="w-2 bg-zinc-800 h-5 rounded-full" />
                <div className="w-2 bg-shopify-neon h-8 rounded-full shadow-[0_0_8px_rgba(0,240,118,0.4)]" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Headless Commerce (1 col wide) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-shopify-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-shopify-neon/10 border border-shopify-neon/20 text-shopify-neon shadow-[0_0_15px_rgba(0,240,118,0.1)]">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-400 uppercase tracking-widest border border-zinc-700/40">HEADLESS</span>
            </div>

            <div className="mt-8 mb-4">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-shopify-neon transition-colors">Headless Commerce</h3>
              <p className="text-zinc-400 font-light text-sm leading-relaxed">
                Next.js decoupled storefront architectures. We deploy Shopify APIs via sub-second GraphQL routers for lightning-fast speeds and endless design freedom.
              </p>
            </div>

            {/* Connecting Nodes Visualizer */}
            <div className="mt-4 p-3 rounded-lg border border-zinc-800/60 bg-black/40 flex items-center justify-center gap-4 text-xs font-semibold select-none">
              <div className="px-2.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-white">Next.js</div>
              <div className="flex items-center text-shopify-neon animate-pulse">
                <span className="h-0.5 w-6 bg-shopify-neon" />
                <ArrowRight className="w-3.5 h-3.5 -ml-1.5" />
              </div>
              <div className="px-2.5 py-1.5 rounded bg-[#008060]/10 border border-[#008060]/30 text-shopify-neon">GraphQL API</div>
            </div>
          </motion.div>

          {/* Card 4: Mobile-First UX Revamps (2 cols wide) */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 flex flex-col justify-between min-h-[340px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-shopify-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-shopify-neon/10 border border-shopify-neon/20 text-shopify-neon shadow-[0_0_15px_rgba(0,240,118,0.1)]">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-400 uppercase tracking-widest border border-zinc-700/40">MOBILE-FIRST</span>
            </div>

            <div className="mt-8 mb-4">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-shopify-neon transition-colors">Mobile UX Revamps</h3>
              <p className="text-zinc-400 font-light text-sm max-w-lg leading-relaxed">
                With 80%+ traffic on mobile, ecommerce is won on small screens. We optimize your cart sliders, sticky CTA overlays, and checkout pages to yield frictionless conversions.
              </p>
            </div>

            {/* Mobile Shopping Cart Mockup */}
            <div className="mt-4 p-4 rounded-lg border border-zinc-800/60 bg-black/40 flex items-center justify-between gap-4 max-w-md w-full mx-auto select-none">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-zinc-500 text-xs font-bold font-sans">IMG</div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold text-white">Custom Leather Jacket</span>
                  <span className="text-[10px] text-zinc-500">Size: L / Color: Black</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-white">₹24,900</span>
                <span className="text-[10px] px-2.5 py-1 bg-shopify-neon text-black font-extrabold rounded-md shadow-md">ADD TO CART</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="relative z-10 py-24 max-w-7xl mx-auto px-6 lg:px-8 border-t border-zinc-900/60">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-4">
            <Laptop className="w-3.5 h-3.5 text-shopify-neon" />
            Client Case Studies & Releases
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Stores We Built & Scaled
          </h2>
          <p className="text-zinc-400 max-w-2xl font-light text-base md:text-lg leading-relaxed">
            Take a look at how custom development directly results in speed improvements and sales lifts for our global and local clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={`portfolio-${index}`}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 rounded-2xl flex flex-col justify-between border-white/5 bg-zinc-900/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-shopify-neon/5 blur-xl pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.client}</h3>
                    <span className="text-[10px] text-zinc-500 font-semibold">{item.role}</span>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/60 text-zinc-400 font-bold uppercase tracking-wider">
                    {item.tech}
                  </span>
                </div>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-6 pt-4 border-t border-zinc-900">
                <div className="p-2.5 bg-zinc-950/60 rounded-lg border border-zinc-900/80">
                  <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-wider block">Conversion</span>
                  <span className="text-sm font-extrabold text-shopify-neon">{item.lift}</span>
                </div>
                <div className="p-2.5 bg-zinc-950/60 rounded-lg border border-zinc-900/80">
                  <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-wider block">Speed Score</span>
                  <span className="text-sm font-extrabold text-[#00c862]">{item.speed}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PERFORMANCE METRICS --- */}
      <section id="performance" className="relative z-10 py-24 bg-zinc-950/20 border-t border-b border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Texts */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-[10px] font-bold tracking-wider text-zinc-400 uppercase">
                <TrendingUp className="w-3.5 h-3.5 text-shopify-neon" />
                Data-Driven Metrics
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Numbers That Directly Impact Your Profitability.
              </h2>
              <p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed">
                Store speed is not just an aesthetic parameter—it is mathematically bound to conversion rates. A 100ms delay in load time can lower conversion rates by 7%.
              </p>
              <div className="pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-shopify-neon hover:text-white transition-colors group"
                >
                  Analyze your site speed
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Metrics Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Stat 1 */}
              <div className="glass-panel p-6 rounded-xl border-white/5 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Speed Performance</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">LIGHTHOUSE</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">99/100</span>
                  <span className="text-xs text-zinc-400 font-medium">Average Score</span>
                </div>
                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                  <div className="bg-shopify-neon h-full w-[99%] shadow-[0_0_8px_rgba(0,240,118,0.5)] rounded-full" />
                </div>
              </div>

              {/* Stat 2 */}
              <div className="glass-panel p-6 rounded-xl border-white/5 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Total Revenue Generated</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-shopify-neon/10 text-shopify-neon font-bold border border-shopify-neon/20">SCALED</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">+$140M</span>
                  <span className="text-xs text-zinc-400 font-medium">Store Revenue</span>
                </div>
                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                  <div className="bg-shopify-neon h-full w-[85%] shadow-[0_0_8px_rgba(0,240,118,0.5)] rounded-full" />
                </div>
              </div>

              {/* Stat 3 */}
              <div className="glass-panel p-6 rounded-xl border-white/5 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Average Conversion Lift</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">A/B TESTED</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">+42%</span>
                  <span className="text-xs text-zinc-400 font-medium">Conversion Lift</span>
                </div>
                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                  <div className="bg-shopify-neon h-full w-[78%] shadow-[0_0_8px_rgba(0,240,118,0.5)] rounded-full" />
                </div>
              </div>

              {/* Stat 4 */}
              <div className="glass-panel p-6 rounded-xl border-white/5 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">Client ROI</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-shopify-neon/10 text-shopify-neon font-bold border border-shopify-neon/20">GUARANTEED</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-white">3.2x</span>
                  <span className="text-xs text-zinc-400 font-medium">Average ROAS Lift</span>
                </div>
                <div className="w-full bg-zinc-900 h-2 rounded-full overflow-hidden">
                  <div className="bg-shopify-neon h-full w-[90%] shadow-[0_0_8px_rgba(0,240,118,0.5)] rounded-full" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section id="faq" className="relative z-10 py-24 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30 text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-4">
            <Globe className="w-3.5 h-3.5 text-shopify-neon" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Clear Answers. Zero Sales Fluff.
          </h2>
          <p className="text-zinc-400 max-w-2xl font-light text-base leading-relaxed">
            Everything you need to know about our technology stack, pricing models, and design process.
          </p>
        </div>

        {/* Minimal Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq, index) => {
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

                {/* Animated accordion panel */}
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

      {/* --- CONTACT CTA --- */}
      <section className="relative z-10 py-20 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="relative glass-panel rounded-3xl border-white/5 shadow-2xl p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-shopify-neon/40 to-transparent" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-80 h-80 bg-shopify-neon/5 blur-[80px] pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Double Your Store Conversion Rate?
            </h2>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Book a free Shopify audit and get a custom growth roadmap from our Kerala-based experts.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-shopify-neon text-black hover:bg-white shadow-[0_0_20px_rgba(0,240,118,0.3)] hover:shadow-[0_0_35px_rgba(0,240,118,0.6)] transition-all duration-300 min-h-[48px]"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 border-t border-zinc-900/60 bg-zinc-950/20 pt-16 pb-12">
        {/* Subtle top glow divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-shopify-neon/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-zinc-900/80">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <SiteLogo variant="footer" />
            <p className="text-zinc-500 font-light text-sm max-w-sm leading-relaxed">
              We build custom Next.js frontends and high-performance Liquid templates engineered to increase average order value and boost conversion rates.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Navigation</span>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-500">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/shopify-premium-themes" className="hover:text-white transition-colors">Themes</a></li>
              <li><a href="/shopify_App_Developement_in_kerala" className="hover:text-white transition-colors">App Dev</a></li>
              <li><a href="#performance" className="hover:text-white transition-colors">Performance</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Newsletter Sign-up */}
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
            {newsletterStatus === "success" && (
              <span className="text-[10px] text-shopify-neon font-bold block animate-fade-in">
                ✓ Subscribed successfully! Check your inbox soon.
              </span>
            )}
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
