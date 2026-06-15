"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  X,
} from "lucide-react";
import SiteLogo from "../../components/SiteLogo";
import MobileHeaderTagline from "../../components/MobileHeaderTagline";

const MAPS_PLACE_URL =
  "https://www.google.com/maps/place/CreateMyshop.in/data=!4m2!3m1!1s0x0:0xea216bd80c116f88?sa=X&ved=1t:2428&ictx=111";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=CreateMyshop.in&destination_place_id=0x0:0xea216bd80c116f88";

const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=CreateMyshop.in,Kochi,Kerala,India&hl=en&z=16&output=embed";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 88487 72371",
    href: "tel:+918848772371",
  },
  {
    icon: Mail,
    label: "Email",
    value: "createmyshop.in@gmail.com",
    href: "mailto:createmyshop.in@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/918848772371?text=hi%2C%20Goutham%20i%20need%20to%20know%20more%20about%20shopify%20website%20Developement",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "CreateMyshop.in — Kochi, Kerala",
    href: MAPS_PLACE_URL,
  },
  {
    icon: Globe,
    label: "Website",
    value: "createmyshop.in",
    href: "https://createmyshop.in",
  },
];

export default function ContactPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus("loading");
    setTimeout(() => {
      setNewsletterStatus("success");
      setNewsletterEmail("");
    }, 1200);
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("success");
  };

  return (
    <div className="relative w-full min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-shopify-neon selection:text-black antialiased overflow-x-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] glow-mesh pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] glow-mesh-bottom pointer-events-none z-0" />

      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8">
        <nav
          className="w-full max-w-5xl flex items-center justify-between px-6 py-3.5 rounded-full glass-panel-glow bg-[#09090b]/80 border-shopify-neon/20 shadow-lg"
          aria-label="Primary Navigation"
        >
          <SiteLogo />
          <MobileHeaderTagline />

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="/#services" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Services</a>
            <a href="/portfolio" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Portfolio</a>
            <a href="/shopify-premium-themes" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Themes</a>
            <a href="/shopify_App_Developement_in_kerala" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">App Dev</a>
            <a href="/#faq" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">FAQ</a>
            <a href="/contact" className="text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon rounded px-1">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918848772371?text=hi%2C%20Goutham%20i%20need%20to%20know%20more%20about%20shopify%20website%20Developement"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-semibold bg-shopify-neon text-black hover:bg-white shadow-[0_0_15px_rgba(0,240,118,0.25)] hover:shadow-[0_0_25px_rgba(0,240,118,0.5)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] focus-visible:ring-shopify-neon"
            >
              WhatsApp Us
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>

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
                <SiteLogo href="/" variant="mobile" onClick={() => setMobileMenuOpen(false)} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full border border-zinc-800 text-zinc-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg font-medium text-zinc-400">
                <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-shopify-neon transition-colors">Services</a>
                <a href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-shopify-neon transition-colors">Portfolio</a>
                <a href="/shopify-premium-themes" onClick={() => setMobileMenuOpen(false)} className="hover:text-shopify-neon transition-colors">Themes</a>
                <a href="/shopify_App_Developement_in_kerala" onClick={() => setMobileMenuOpen(false)} className="hover:text-shopify-neon transition-colors">App Dev</a>
                <a href="/#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-shopify-neon transition-colors">FAQ</a>
                <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-shopify-neon transition-colors">Contact</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section className="relative z-10 pt-36 pb-10 md:pt-44 md:pb-12 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 max-w-4xl mx-auto"
        >
          Let&apos;s Build Your{" "}
          <span className="bg-gradient-to-r from-shopify-neon via-[#00c862] to-[#008060] bg-clip-text text-transparent">
            Shopify Store
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Schedule a free audit, ask about pricing, or talk to Goutham directly. We reply within 12 hours on weekdays.
        </motion.p>
      </section>

      <section className="relative z-10 pb-24 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            {CONTACT_INFO.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 hover:border-shopify-neon/30 hover:bg-zinc-900/60 transition-all"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-shopify-neon/10 text-shopify-neon">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500">{item.label}</span>
                  <span className="mt-1 block text-sm font-semibold text-white group-hover:text-shopify-neon transition-colors">
                    {item.value}
                  </span>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">What you get</span>
              <div className="flex items-center gap-3 text-xs font-semibold text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-shopify-neon shrink-0" />
                <span>Complimentary performance audit report</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-shopify-neon shrink-0" />
                <span>30-minute growth roadmap session</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-shopify-neon shrink-0" />
                <span>English, Hindi & Tamil support</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative glass-panel rounded-3xl border-white/5 shadow-2xl p-8 sm:p-10 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-shopify-neon/40 to-transparent" />
              <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-96 h-96 bg-shopify-neon/5 blur-[80px] pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Schedule Audit</span>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                    Request Free Shopify Consultation
                  </h2>
                </div>

                {formStatus === "success" ? (
                  <div className="rounded-2xl border border-shopify-neon/20 bg-shopify-neon/5 p-8 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-shopify-neon mx-auto" />
                    <h3 className="text-xl font-bold text-white">Request Received!</h3>
                    <p className="text-sm text-zinc-400">
                      Our team will contact you within 12 hours. For faster response, message us on WhatsApp.
                    </p>
                    <a
                      href="https://wa.me/918848772371?text=hi%2C%20Goutham%20i%20need%20to%20know%20more%20about%20shopify%20website%20Developement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-shopify-neon text-black hover:bg-white transition-all"
                    >
                      Open WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="sr-only">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:border-shopify-neon focus:ring-1 focus:ring-shopify-neon text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="sr-only">Phone</label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          placeholder="Phone number"
                          className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:border-shopify-neon focus:ring-1 focus:ring-shopify-neon text-sm transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Work Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:border-shopify-neon focus:ring-1 focus:ring-shopify-neon text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="store-url" className="sr-only">Store URL</label>
                      <input
                        id="store-url"
                        type="url"
                        placeholder="yourstore.com (optional)"
                        className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:border-shopify-neon focus:ring-1 focus:ring-shopify-neon text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        placeholder="Tell us about your project, goals, or bottlenecks..."
                        className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/50 text-white placeholder-zinc-500 focus:outline-none focus:border-shopify-neon focus:ring-1 focus:ring-shopify-neon text-sm transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold bg-shopify-neon text-black hover:bg-white hover:shadow-[0_0_15px_rgba(0,240,118,0.3)] transition-all cursor-pointer min-h-[48px]"
                    >
                      Request Free Audit
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pb-24 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30 shadow-2xl glass-panel">
          <div className="flex flex-col gap-4 border-b border-zinc-800 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Find Us</span>
              <h2 className="text-2xl font-extrabold text-white">CreateMyshop.in Office</h2>
              <p className="text-sm text-zinc-400">Kochi, Kerala, India</p>
            </div>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-shopify-neon px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white hover:shadow-[0_0_15px_rgba(0,240,118,0.3)] min-h-[48px]"
            >
              Get Directions
              <Navigation className="h-4 w-4" />
            </a>
          </div>

          <div className="relative aspect-[16/10] min-h-[280px] w-full sm:aspect-[21/9]">
            <iframe
              src={MAPS_EMBED_URL}
              title="CreateMyshop.in location on Google Maps"
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-zinc-900/60 bg-zinc-950/20 pt-16 pb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-shopify-neon/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-zinc-900/80">
          <div className="md:col-span-5 space-y-4">
            <SiteLogo variant="footer" />
            <p className="text-zinc-500 font-light text-sm max-w-sm leading-relaxed">
              We build custom Next.js frontends and high-performance Liquid templates engineered to increase average order value and boost conversion rates.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Navigation</span>
            <ul className="space-y-2.5 text-sm font-medium text-zinc-500">
              <li><a href="/#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/shopify-premium-themes" className="hover:text-white transition-colors">Themes</a></li>
              <li><a href="/shopify_App_Developement_in_kerala" className="hover:text-white transition-colors">App Dev</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

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
