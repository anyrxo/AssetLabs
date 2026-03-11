"use client";

import { useEffect, useState, useCallback } from "react";
import { X } from "lucide-react";

export function TypeformModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    /** Any component can open the modal by dispatching this event */
    window.addEventListener("openTypeform", open);

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("openTypeform", open);
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, close]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Blurred backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl h-[85vh] mx-4 bg-background border border-foreground/10 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={close}
          className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Typeform iframe */}
        <iframe
          src="https://ssccmannan172794.typeform.com/to/lqsJCsCw"
          className="w-full h-full border-0"
          title="Get in touch with Asset Lab"
          allow="camera; microphone; autoplay; encrypted-media;"
        />
      </div>
    </div>
  );
}

/** Helper to open the modal from any component */
export function openTypeformModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("openTypeform"));
  }
}
