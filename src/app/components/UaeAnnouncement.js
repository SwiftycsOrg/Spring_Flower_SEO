"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UAEFlag from "./UAEFlag";

const STORAGE_KEY = "uaeAnnouncementSeenAt";

const colors = {
  secondary: {
    yellow: "#ffc800",
    pink: "#ff2b5c",
    aqua: "#22e4db",
    mint: "#1dd8ad",
    orange: "#ff7100",
  },
  swiftycsExtended: {
    yellowShades: ["#FED357", "#FEC82E", "#FFEAA7", "#FFF4D3"],
    pinkShades: ["#FD527A", "#FD7E9C", "#FEA9BE", "#FFD4DE"],
    aquaShades: ["#47EAE3", "#77EFEA", "#A5F4F2", "#D2FAF8"],
    mintShades: ["#46E0BD", "#7BE7CE", "#A5EFDE", "#D2F7EF"],
    blueShades: ["#5278FC", "#7E9BFC", "#A9BDFD", "#D4DDFE"],
    orangeShades: ["#FD8D44", "#FEA974", "#FEC6A3", "#FFE2D1"],
    neutralShades: ["#484355", "#76727F", "#A3A1A9", "#D1D0D4"],
  },
};

export default function UaeAnnouncement() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) setOpen(true);
    } catch (_) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleClose = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "seen");
    } catch (_) {}
    setOpen(false);
  };

  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div
          aria-hidden={!open}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.4)", backdropFilter: "blur(6px)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="uae-ann-title"
            aria-describedby="uae-ann-desc"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative w-full max-w-xl rounded-2xl shadow-2xl p-6"
            style={{
              backgroundColor: "#fff",
              border: `1px solid ${colors.swiftycsExtended.neutralShades[2]}`,
            }}
          >
            {/* Close Button */}
            <button
              ref={closeBtnRef}
              onClick={handleClose}
              aria-label="Close"
              className="absolute end-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl transition hover:bg-gray-100 focus:outline-none focus:ring-2"
              style={{
                border: `1px solid ${colors.swiftycsExtended.neutralShades[1]}`,
                color: colors.swiftycsExtended.neutralShades[0],
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Badge */}
            <div
              className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium"
              style={{
                border: `1px solid ${colors.swiftycsExtended.aquaShades[0]}`,
                backgroundColor: colors.swiftycsExtended.aquaShades[2],
                color: colors.secondary.aqua,
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: colors.secondary.aqua }}
              />
              Now available in the UAE <UAEFlag />
            </div>

            {/* Title */}
            <h2 id="uae-ann-title" className="text-2xl font-bold tracking-tight text-neutral-900">
              Great News!
            </h2>

            {/* Content */}
            <div id="uae-ann-desc" className="mt-3 space-y-3 text-neutral-700">
              <p className="font-semibold">Swiftycs AI is now live in the United Arab Emirates!</p>
              <p>
                Our platform is now fully hosted in the UAE region. All data storage, model training,
                and deployments are localized for <strong>faster</strong> and <strong>more secure</strong> AI solutions in the GCC.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
              <button
                onClick={handleClose}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition"
                style={{
                  backgroundColor: colors.secondary.aqua,
                  color: "#fff",
                }}
              >
                Got it 👍
              </button>
              <button
                onClick={() => {
                  try {
                    localStorage.removeItem(STORAGE_KEY);
                  } catch (_) {}
                  setOpen(false);
                }}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition"
                style={{
                  border: `1px solid ${colors.swiftycsExtended.neutralShades[1]}`,
                  color: colors.swiftycsExtended.neutralShades[0],
                }}
              >
                Remind me later
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
