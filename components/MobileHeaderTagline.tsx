"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORE_TYPES = [
  "Fashion",
  "B2B",
  "Dropshipping",
  "Ayurveda",
  "Car Accessories",
  "Kitchen Products",
  "Cosmetics",
  "Electronics",
];

const FULL_MESSAGES = [
  "We can Build Any E-commerce Need with Shopify",
  "We Build Shopify App Development",
];

const SLIDE_COUNT = STORE_TYPES.length + FULL_MESSAGES.length;

const textClassName =
  "text-[11px] min-[375px]:text-xs min-[414px]:text-sm leading-tight font-bold text-white text-center";

function HighlightShopify(text: string) {
  if (!text.includes("Shopify")) {
    return <span className="text-white">{text}</span>;
  }

  const [before, after] = text.split("Shopify");

  return (
    <>
      <span className="text-white">{before}</span>
      <span className="text-shopify-neon">Shopify</span>
      <span className="text-white">{after}</span>
    </>
  );
}

export default function MobileHeaderTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDE_COUNT);
    }, 2000);

    return () => window.clearInterval(timer);
  }, []);

  const isStoreSlide = index < STORE_TYPES.length;
  const storeType = isStoreSlide ? STORE_TYPES[index] : null;
  const fullMessage = !isStoreSlide ? FULL_MESSAGES[index - STORE_TYPES.length] : null;

  return (
    <div
      className="md:hidden flex flex-1 min-w-0 items-center justify-center mx-1.5 sm:mx-2 overflow-hidden"
      aria-live="polite"
      aria-atomic="true"
    >
      <AnimatePresence mode="wait">
        {isStoreSlide ? (
          <motion.p
            key={`store-${storeType}`}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={textClassName}
          >
            <span className="text-white">We Build </span>
            <span className="text-shopify-neon">{storeType}</span>
            <span className="text-white"> </span>
            <span className="text-shopify-neon">Shopify</span>
            <span className="text-white"> store</span>
          </motion.p>
        ) : (
          <motion.p
            key={`full-${fullMessage}`}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={textClassName}
          >
            {HighlightShopify(fullMessage ?? "")}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
