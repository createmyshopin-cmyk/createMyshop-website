"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
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
  Eye,
  Settings,
  ShoppingBag,
  Sliders
} from "lucide-react";
import SiteLogo from "../../components/SiteLogo";
import MobileHeaderTagline from "../../components/MobileHeaderTagline";

// --- Theme Types & Data ---
interface Theme {
  id: string;
  name: string;
  niche: string;
  lighthouseScore: number;
  loadTime: string;
  description: string;
  features: string[];
  gradient: string; // Tailwind class
  accentColor: string;
  textColor: string;
  darkBg: string;
  lightBg: string;
  neonBg: string;
  demoLayout: {
    title: string;
    tagline: string;
    buttonText: string;
    items: string[];
  };
}

const PREMIUM_THEMES: Theme[] = [
  {
    id: "apex",
    name: "Apex Theme",
    niche: "High-Volume Fashion & Apparel",
    lighthouseScore: 99,
    loadTime: "0.35s",
    description: "Coded for scale. Designed with clean, modular blocks, fly-out AJAX cart drawers, and instant swatch filtering to minimize friction.",
    features: [
      "Sections 2.0 Everywhere",
      "Interactive Quick-Add Cart",
      "Native Size & Fit Guides",
      "Collection Color Swatches"
    ],
    gradient: "from-rose-500 to-amber-500",
    accentColor: "#f43f5e",
    textColor: "#ffffff",
    darkBg: "bg-zinc-950",
    lightBg: "bg-zinc-100",
    neonBg: "bg-[#180828]",
    demoLayout: {
      title: "SUMMER DROP '26",
      tagline: "Vibrant styles for the warm season.",
      buttonText: "Shop Collection",
      items: ["Silk Slip Dress", "Linen Crop Top", "Woven Sandals"]
    }
  },
  {
    id: "solace",
    name: "Solace Theme",
    niche: "Beauty, Health & D2C Wellness",
    lighthouseScore: 99,
    loadTime: "0.40s",
    description: "Elegant, clean aesthetic tailored for storytellers. Features built-in ingredient glossary blocks, bundle builders, and subscription upsells.",
    features: [
      "Native Subscription Widgets",
      "Ingredient Highlight Blocks",
      "Dynamic Product Bundler",
      "Pre-integrated Review Stars"
    ],
    gradient: "from-emerald-500 to-teal-700",
    accentColor: "#10b981",
    textColor: "#ffffff",
    darkBg: "bg-stone-950",
    lightBg: "bg-stone-50",
    neonBg: "bg-[#051c14]",
    demoLayout: {
      title: "PURE BOTANICALS",
      tagline: "Organic care for glowing skin.",
      buttonText: "Buy Bundles",
      items: ["Rosewater Mist", "Vitamin C Serum", "Clay Mask"]
    }
  },
  {
    id: "vortex",
    name: "Vortex Theme",
    niche: "Electronics, Gadgets & Tech",
    lighthouseScore: 98,
    loadTime: "0.45s",
    description: "Engineered for technical specifications. Features expandable comparison tables, 3D model integrations, pre-order badges, and bulk pricing.",
    features: [
      "Specs Comparison Matrix",
      "3D Model & Video Support",
      "Quantity Tier Pricing Table",
      "Instant Predictive Search"
    ],
    gradient: "from-blue-600 to-indigo-900",
    accentColor: "#3b82f6",
    textColor: "#ffffff",
    darkBg: "bg-slate-950",
    lightBg: "bg-slate-50",
    neonBg: "bg-[#020b24]",
    demoLayout: {
      title: "NEXT-GEN CHARGING",
      tagline: "Uncompromising speed and power.",
      buttonText: "Explore Specs",
      items: ["MagSafe Pro Dock", "100W Travel Cube", "USB-C Braided Cable"]
    }
  },
  {
    id: "vibe",
    name: "Vibe Theme",
    niche: "Streetwear & Hype Drops",
    lighthouseScore: 99,
    loadTime: "0.38s",
    description: "High-energy layout optimized for flash sales and limited drops. Features sticky add-to-carts, live countdown timers, and animated video backgrounds.",
    features: [
      "Countdown Timer Sections",
      "Sticky Slide-up Add-to-Cart",
      "Stock Level Progress Bars",
      "SMS Lead Gen Integrations"
    ],
    gradient: "from-fuchsia-600 to-red-600",
    accentColor: "#d946ef",
    textColor: "#ffffff",
    darkBg: "bg-neutral-950",
    lightBg: "bg-neutral-100",
    neonBg: "bg-[#200018]",
    demoLayout: {
      title: "DROP 04: STREETS",
      tagline: "Limited edition. Never restocked.",
      buttonText: "Join Queue",
      items: ["Graffiti Oversized Tee", "Hype Utility Cargo", "Neon Beanie"]
    }
  }
];

export default function PremiumThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState<Theme>(PREMIUM_THEMES[0]);
  const [viewportMode, setViewportMode] = useState<"desktop" | "mobile">("desktop");
  const [colorScheme, setColorScheme] = useState<"dark" | "light" | "neon">("dark");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success">("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getPreviewBg = () => {
    if (colorScheme === "dark") return selectedTheme.darkBg;
    if (colorScheme === "light") return selectedTheme.lightBg;
    return selectedTheme.neonBg;
  };

  const getPreviewTextColor = () => {
    return colorScheme === "light" ? "text-zinc-950" : "text-zinc-50";
  };

  const getPreviewBorderColor = () => {
    return colorScheme === "light" ? "border-zinc-200" : "border-zinc-800";
  };

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
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="w-full max-w-5xl px-4">
          <nav
            className="w-full flex items-center justify-between px-6 py-3.5 rounded-full glass-panel bg-[#09090b]/60 border-white/5 shadow-lg"
            aria-label="Primary Navigation"
          >
            {/* Logo */}
            <SiteLogo />
            <MobileHeaderTagline />

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
              <a href="/#services" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Services</a>
              <a href="/portfolio" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Portfolio</a>
              <a href="#" className="text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Themes</a>
              <a href="/shopify_App_Developement_in_kerala" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">App Dev</a>
              <a href="/#performance" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Performance</a>
              <a href="/#faq" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">FAQ</a>
              <a href="/contact" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Contact</a>
            </div>

            {/* Glowing CTA Button */}
            <div className="flex items-center gap-3">
              <a
                href="/contact"
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
                  href="#"
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
      <section className="relative z-10 pt-36 pb-16 md:pt-44 md:pb-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Glow Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-shopify-neon/30 bg-shopify-neon/5 text-xs font-semibold text-shopify-neon shadow-[0_0_15px_rgba(0,240,118,0.08)] mb-6 animate-pulse"
        >
          <Settings className="w-3.5 h-3.5 text-shopify-neon" />
          <span>Shopify Online Store 2.0 Architecture</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-4xl"
        >
          High-Performance Shopify Themes.{" "}
          <span className="bg-gradient-to-r from-shopify-neon via-[#00c862] to-[#008060] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(0,240,118,0.15)]">
            Coded from Scratch.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 font-light max-w-3xl mb-12 leading-relaxed"
        >
          Elevate your storefront with lighting-fast, highly-converting templates. Built using semantic Liquid and cutting-edge web vitals optimization.
        </motion.p>
      </section>

      {/* --- LIVE THEME CUSTOMIZER PREVIEWER --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left Column: Theme Selector and Specs */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Select Theme Blueprint</span>
            
            {/* Theme list selectors */}
            <div className="space-y-3">
              {PREMIUM_THEMES.map((theme) => {
                const isSelected = selectedTheme.id === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedTheme(theme)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-zinc-900 border-shopify-neon/30 shadow-[0_0_15px_rgba(0,240,118,0.06)]"
                        : "bg-zinc-900/20 border-zinc-800/80 hover:border-zinc-700/60"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-white text-base">{theme.name}</div>
                      <div className="text-[10px] text-zinc-500 font-medium">{theme.niche}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-shopify-neon">{theme.lighthouseScore}/100</span>
                      <ChevronRight className={`w-4 h-4 text-zinc-500 transition-transform ${isSelected ? "rotate-90 text-shopify-neon" : ""}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Theme specifications breakdown */}
          <div className="glass-panel p-6 rounded-2xl border-white/5 bg-zinc-900/10 space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Core Features</span>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-black text-shopify-neon">{selectedTheme.loadTime}</span>
                <span className="text-[9px] text-zinc-500">load speed</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              {selectedTheme.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {selectedTheme.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                  <Check className="w-3.5 h-3.5 text-shopify-neon shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-900">
              <a
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-shopify-neon text-black hover:bg-white shadow-[0_0_12px_rgba(0,240,118,0.2)] hover:shadow-[0_0_20px_rgba(0,240,118,0.4)] transition-all cursor-pointer min-h-[44px]"
              >
                Inquire For Customization
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Live Customizer Mockup Previewer */}
        <div className="lg:col-span-7 flex flex-col justify-between glass-panel p-6 rounded-3xl border-white/5 bg-zinc-900/10 min-h-[450px]">
          
          {/* Customizer controls */}
          <div className="flex flex-wrap items-center justify-between border-b border-zinc-900 pb-4 mb-6 gap-4">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-shopify-neon" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Live Theme Customizer</span>
            </div>

            {/* Viewport Toggles and Color Schemes */}
            <div className="flex items-center gap-4">
              {/* Color Scheme Picker */}
              <div className="flex items-center gap-1.5 bg-zinc-950/60 p-1 rounded-lg border border-zinc-900">
                <button
                  onClick={() => setColorScheme("dark")}
                  className={`px-2 py-1 rounded text-[9px] font-bold tracking-wider ${
                    colorScheme === "dark" ? "bg-zinc-800 text-white" : "text-zinc-500"
                  }`}
                >
                  DARK
                </button>
                <button
                  onClick={() => setColorScheme("light")}
                  className={`px-2 py-1 rounded text-[9px] font-bold tracking-wider ${
                    colorScheme === "light" ? "bg-zinc-800 text-white" : "text-zinc-500"
                  }`}
                >
                  LIGHT
                </button>
                <button
                  onClick={() => setColorScheme("neon")}
                  className={`px-2 py-1 rounded text-[9px] font-bold tracking-wider ${
                    colorScheme === "neon" ? "bg-zinc-800 text-white" : "text-zinc-500"
                  }`}
                >
                  NEON
                </button>
              </div>

              {/* Viewport Width */}
              <div className="flex items-center gap-1 bg-zinc-950/60 p-1 rounded-lg border border-zinc-900">
                <button
                  onClick={() => setViewportMode("desktop")}
                  className={`p-1.5 rounded ${
                    viewportMode === "desktop" ? "bg-zinc-800 text-shopify-neon" : "text-zinc-500"
                  }`}
                  aria-label="Desktop View"
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewportMode("mobile")}
                  className={`p-1.5 rounded ${
                    viewportMode === "mobile" ? "bg-zinc-800 text-shopify-neon" : "text-zinc-500"
                  }`}
                  aria-label="Mobile View"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Theme Canvas Viewport */}
          <div className="flex-1 flex items-center justify-center bg-zinc-950/50 rounded-2xl border border-zinc-900/80 p-6 overflow-hidden relative">
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

            {/* Custom frame based on Viewport Selection */}
            <motion.div
              layout
              style={{ width: viewportMode === "desktop" ? "100%" : "300px" }}
              className={`h-[280px] rounded-xl border border-zinc-800 bg-[#09090b] shadow-2xl overflow-hidden flex flex-col ${getPreviewBg()} ${getPreviewTextColor()} ${getPreviewBorderColor()} transition-colors duration-300`}
            >
              {/* Fake Shop Top Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-inherit bg-black/10 select-none">
                <span className="text-[10px] font-black tracking-wider text-inherit uppercase">{selectedTheme.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[8px] font-semibold text-inherit opacity-75">Home</span>
                  <span className="text-[8px] font-semibold text-inherit opacity-75">Shop</span>
                  <ShoppingBag className="w-3 h-3 text-inherit opacity-85" />
                </div>
              </div>

              {/* Fake Shop Hero Banner */}
              <div className="flex-1 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none" />
                <motion.h4
                  key={selectedTheme.id + "-" + colorScheme}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg sm:text-2xl font-black uppercase tracking-tight text-inherit mb-1"
                >
                  {selectedTheme.demoLayout.title}
                </motion.h4>
                <p className="text-[9px] sm:text-xs opacity-75 max-w-xs font-light mb-4">
                  {selectedTheme.demoLayout.tagline}
                </p>
                <button
                  style={{ backgroundColor: selectedTheme.accentColor, color: selectedTheme.textColor }}
                  className="px-4 py-1.5 rounded-full text-[9px] font-bold shadow-md hover:scale-105 transition-transform"
                >
                  {selectedTheme.demoLayout.buttonText}
                </button>
              </div>

              {/* Fake Grid Products bottom bar */}
              <div className="px-4 py-2 border-t border-inherit bg-black/5 flex items-center justify-between text-[7px] font-bold select-none">
                <span>Featured items: {selectedTheme.demoLayout.items.join(", ")}</span>
                <span className="text-shopify-neon">99/100 Core Speed</span>
              </div>
            </motion.div>
          </div>
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
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold bg-shopify-neon text-black hover:bg-white shadow-[0_0_15px_rgba(0,240,118,0.3)] transition-all cursor-pointer min-h-[44px]"
              >
                Book a Free CRO Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
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
            <SiteLogo variant="footer" />
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
              <li><a href="#" className="hover:text-white transition-colors">Themes</a></li>
              <li><a href="/shopify_App_Developement_in_kerala" className="hover:text-white transition-colors">App Dev</a></li>
              <li><a href="/#performance" className="hover:text-white transition-colors">Performance</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
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
