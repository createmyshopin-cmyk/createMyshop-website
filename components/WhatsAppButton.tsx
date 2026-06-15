"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "918848772371";
  const message = "hi, Goutham i need to know more about shopify website Developement";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setShowPopup(true), 2200);
    return () => window.clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showPopup || dismissed) return;

    const hideTimer = window.setTimeout(() => setShowPopup(false), 12000);
    return () => window.clearTimeout(hideTimer);
  }, [showPopup, dismissed]);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDismissed(true);
    setShowPopup(false);
  };

  const handleChatClick = () => {
    setDismissed(true);
    setShowPopup(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
    >
      <AnimatePresence>
        {showPopup && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.85, x: 8 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 12, scale: 0.9, x: 8 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="absolute bottom-[calc(100%+12px)] right-0 w-[min(280px,calc(100vw-3rem))]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white px-4 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.28)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366]" />

              <button
                type="button"
                onClick={handleDismiss}
                className="absolute top-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
                aria-label="Dismiss WhatsApp message"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-start gap-3 pr-5">
                <div className="relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                  <svg className="h-5 w-5 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.635-1.022-5.11-2.884-6.974C16.59 1.908 14.113.882 11.486.882c-5.44 0-9.863 4.42-9.867 9.858-.001 1.748.474 3.455 1.378 4.983l-1.085 3.963 4.135-1.072zm11.226-5.834c-.266-.134-1.57-.775-1.814-.863-.243-.089-.421-.133-.599.134-.179.267-.69.863-.846 1.041-.156.177-.311.2-.577.067-.266-.134-1.124-.414-2.141-1.321-.79-.705-1.324-1.576-1.48-1.843-.156-.267-.017-.411.116-.544.12-.12.267-.311.4-.467.13-.156.177-.267.266-.445.089-.178.045-.334-.022-.467-.067-.134-.599-1.446-.821-1.98-.217-.52-.454-.45-.626-.459-.162-.008-.348-.01-.533-.01-.185 0-.488.07-.743.348-.256.278-.977.956-.977 2.333 0 1.378.999 2.71 1.139 2.9.14.188 1.968 3.005 4.767 4.21.666.287 1.186.458 1.59.587.669.213 1.278.183 1.759.11.536-.08 1.57-.641 1.792-1.26.222-.619.222-1.151.156-1.26-.067-.109-.244-.177-.511-.311z" />
                  </svg>
                  <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500" />
                  </span>
                </div>

                <div>
                  <p className="text-sm font-bold leading-snug text-zinc-900">
                    Hey! We can chat on WhatsApp
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                    Free Shopify consultation — Goutham replies in minutes.
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-2.5 py-1 text-[11px] font-semibold text-[#128C7E]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Online now
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-2 right-7 h-4 w-4 rotate-45 border-r border-b border-zinc-200/80 bg-white" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleChatClick}
        onMouseEnter={() => !dismissed && setShowPopup(true)}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-shadow duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b] focus-visible:ring-[#25D366]"
        aria-label="Chat on WhatsApp with Goutham"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 blur-sm transition-opacity group-hover:opacity-50" />

        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-80" />
          <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#25D366] bg-red-500">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </span>
        </span>

        <svg
          className="relative h-7 w-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.635-1.022-5.11-2.884-6.974C16.59 1.908 14.113.882 11.486.882c-5.44 0-9.863 4.42-9.867 9.858-.001 1.748.474 3.455 1.378 4.983l-1.085 3.963 4.135-1.072zm11.226-5.834c-.266-.134-1.57-.775-1.814-.863-.243-.089-.421-.133-.599.134-.179.267-.69.863-.846 1.041-.156.177-.311.2-.577.067-.266-.134-1.124-.414-2.141-1.321-.79-.705-1.324-1.576-1.48-1.843-.156-.267-.017-.411.116-.544.12-.12.267-.311.4-.467.13-.156.177-.267.266-.445.089-.178.045-.334-.022-.467-.067-.134-.599-1.446-.821-1.98-.217-.52-.454-.45-.626-.459-.162-.008-.348-.01-.533-.01-.185 0-.488.07-.743.348-.256.278-.977.956-.977 2.333 0 1.378.999 2.71 1.139 2.9.14.188 1.968 3.005 4.767 4.21.666.287 1.186.458 1.59.587.669.213 1.278.183 1.759.11.536-.08 1.57-.641 1.792-1.26.222-.619.222-1.151.156-1.26-.067-.109-.244-.177-.511-.311z" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
