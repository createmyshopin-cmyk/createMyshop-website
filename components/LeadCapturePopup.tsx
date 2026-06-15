"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, MessageCircle, X } from "lucide-react";
import {
  COUNTRY_DIAL_CODES,
  DEFAULT_COUNTRY_ISO,
  countryFlag,
  getCountryByIso,
  isValidNationalNumber,
  normalizeNationalNumber,
} from "../lib/countryCodes";
import { playMessageNotification, setupMessageAudioUnlock } from "../lib/messageNotification";

const STORAGE_KEY = "cms-lead-capture-done";
const SHOW_DELAY_MS = 10_000;

type FormStatus = "idle" | "loading" | "success" | "error";

export default function LeadCapturePopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [countryIso, setCountryIso] = useState(DEFAULT_COUNTRY_ISO);
  const [geoLoading, setGeoLoading] = useState(true);
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const alertPlayedRef = useRef(false);
  const userChangedCountryRef = useRef(false);

  const selectedCountry = getCountryByIso(countryIso) ?? getCountryByIso(DEFAULT_COUNTRY_ISO)!;

  useEffect(() => setupMessageAudioUnlock(), []);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/geo")
      .then((response) => response.json())
      .then((data: { countryCode?: string }) => {
        if (cancelled || userChangedCountryRef.current) return;
        if (data.countryCode && getCountryByIso(data.countryCode)) {
          setCountryIso(data.countryCode);
        }
      })
      .catch(() => {
        // Keep default country when geo lookup fails.
      })
      .finally(() => {
        if (!cancelled) setGeoLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const timer = window.setTimeout(() => {
      setVisible(true);

      if (!alertPlayedRef.current) {
        alertPlayedRef.current = true;
        void playMessageNotification();
      }
    }, SHOW_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [visible]);

  const markDone = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const handleClose = () => {
    markDone();
    setVisible(false);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    userChangedCountryRef.current = true;
    setCountryIso(event.target.value);
    setWhatsapp("");
    setErrorMessage("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    const trimmedName = name.trim();
    const nationalNumber = normalizeNationalNumber(whatsapp, selectedCountry.dialCode);

    if (!trimmedName) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!isValidNationalNumber(selectedCountry, nationalNumber)) {
      setErrorMessage(
        `Please enter a valid ${selectedCountry.minLength === selectedCountry.maxLength ? `${selectedCountry.minLength}-digit` : `${selectedCountry.minLength}-${selectedCountry.maxLength} digit`} mobile number.`
      );
      return;
    }

    setFormStatus("loading");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          whatsapp: nationalNumber,
          countryCode: selectedCountry.iso,
          source: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to submit right now.");
      }

      markDone();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
      setErrorMessage("Something went wrong. Please try again or message us on WhatsApp.");
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-capture-title"
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close lead capture popup"
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-zinc-800 bg-[#0c0c0f] shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#25D366] via-shopify-neon to-[#25D366]" />
            <div className="absolute -bottom-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-shopify-neon/10 blur-3xl pointer-events-none" />

            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-shopify-neon"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative p-6 sm:p-8">
              {formStatus === "success" ? (
                <div className="space-y-5 pt-2 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-shopify-neon" />
                  <div className="space-y-2">
                    <h2 id="lead-capture-title" className="text-2xl font-extrabold text-white">
                      You&apos;re all set!
                    </h2>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      Thanks, {name.trim()}. Our team will contact you on WhatsApp within{" "}
                      <span className="font-semibold text-white">45 minutes</span>.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full rounded-xl bg-shopify-neon px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6 flex items-start gap-4 pr-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/10">
                      <MessageCircle className="h-6 w-6 text-[#25D366]" />
                    </div>
                    <div className="space-y-2 text-left">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-shopify-neon/10 px-2.5 py-1 text-[11px] font-semibold text-shopify-neon">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-shopify-neon" />
                        Quick callback
                      </span>
                      <h2 id="lead-capture-title" className="text-xl font-extrabold leading-snug text-white sm:text-2xl">
                        Hello! Share your WhatsApp number
                      </h2>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        Our team will contact you in{" "}
                        <span className="font-semibold text-white">45 mins</span>.
                        {!geoLoading && (
                          <span className="mt-1 block text-xs text-zinc-500">
                            Detected: {countryFlag(selectedCountry.iso)} {selectedCountry.name} — change below if needed
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="lead-name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                        Your Name
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your name"
                        autoComplete="name"
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all focus:border-shopify-neon focus:outline-none focus:ring-1 focus:ring-shopify-neon"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-whatsapp" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                        WhatsApp Number
                      </label>
                      <div className="flex overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 focus-within:border-shopify-neon focus-within:ring-1 focus-within:ring-shopify-neon">
                        <div className="relative shrink-0 border-r border-zinc-800">
                          <label htmlFor="lead-country" className="sr-only">
                            Country code
                          </label>
                          <select
                            id="lead-country"
                            value={countryIso}
                            onChange={handleCountryChange}
                            className="h-full min-w-[7.5rem] max-w-[9.5rem] appearance-none bg-zinc-900/80 py-3 pl-3 pr-8 text-sm font-semibold text-white focus:outline-none"
                          >
                            {COUNTRY_DIAL_CODES.map((country) => (
                              <option key={country.iso} value={country.iso} className="bg-zinc-900 text-white">
                                {countryFlag(country.iso)} +{country.dialCode}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="pointer-events-none absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                        </div>
                        <input
                          id="lead-whatsapp"
                          type="tel"
                          required
                          inputMode="numeric"
                          value={whatsapp}
                          onChange={(event) => setWhatsapp(event.target.value)}
                          placeholder={selectedCountry.placeholder}
                          autoComplete="tel-national"
                          className="w-full min-w-0 bg-transparent px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {errorMessage && (
                      <p className="text-sm font-medium text-red-400">{errorMessage}</p>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-shopify-neon px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {formStatus === "loading" ? "Submitting..." : "Get Callback in 45 Mins"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
