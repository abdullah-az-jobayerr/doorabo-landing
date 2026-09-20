"use client";

import { useState } from "react";
import { MapPin, List, X } from "@phosphor-icons/react";
import Logo from "./Logo";

const navLinks = [
  { href: "#services", label: "সেবা" },
  { href: "#why", label: "কেন Doorabo" },
  { href: "#how", label: "কিভাবে কাজ করে" },
  { href: "#faq", label: "FAQ" },
];

const MARQUEE_TEXT =
  "Doorabo এর e-commerce website এর কাজ চলছে — খুব দ্রুতই আপনারা সেবা পাবেন! ইনশাআল্লাহ ✨";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ================= MARQUEE (top) ================= */}
      <div className="w-full bg-gradient-to-l from-[#2b8d5b] via-[#116438] to-[#032714] text-white overflow-hidden border-b border-[#084e2a]">
        <div className="relative flex overflow-hidden py-2">
          {/* Marquee track — duplicated for seamless loop */}
          <div className="flex shrink-0 animate-marquee whitespace-nowrap">
            <span className="mx-8 text-[11px] md:text-xs font-medium tracking-wide">
              {MARQUEE_TEXT}
            </span>
            <span className="mx-8 text-[11px] md:text-xs font-medium tracking-wide">
              {MARQUEE_TEXT}
            </span>
            <span className="mx-8 text-[11px] md:text-xs font-medium tracking-wide">
              {MARQUEE_TEXT}
            </span>
          </div>
          <div
            className="flex shrink-0 animate-marquee whitespace-nowrap"
            aria-hidden="true"
          >
            <span className="mx-8 text-[11px] md:text-xs font-medium tracking-wide">
              {MARQUEE_TEXT}
            </span>
            <span className="mx-8 text-[11px] md:text-xs font-medium tracking-wide">
              {MARQUEE_TEXT}
            </span>
            <span className="mx-8 text-[11px] md:text-xs font-medium tracking-wide">
              {MARQUEE_TEXT}
            </span>
          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER (below marquee) ================= */}
      <div className="bg-[#FCFDF9]/95 backdrop-blur-md border-b border-[#08783E]/10 shadow-[0_1px_3px_rgba(8,120,62,0.04)]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-[#111827]/80 hover:text-[#08783E] transition-colors group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#08783E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Location */}
            <button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 rounded-md bg-[#08783E]/8 text-[#08783E] text-xs font-semibold hover:bg-[#08783E]/12 transition border border-[#08783E]/10 shadow-[0_2px_4px_rgba(8,120,62,0.08)]">
              <MapPin
                size={12}
                weight="fill"
                className="md:w-3.5 md:h-3.5 drop-shadow-[0_1px_1px_rgba(8,120,62,0.30)]"
              />
              <span className="hidden sm:inline">রংপুর শহর</span>
              <span className="sm:hidden">রংপুর</span>
            </button>

            {/* CTA */}
            <a
              href="#notify"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-[#08783E] text-white text-xs font-semibold hover:bg-[#065f31] transition-all duration-300 shadow-[0_2px_6px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)] hover:shadow-[0_4px_12px_rgba(8,120,62,0.40),0_2px_4px_rgba(8,120,62,0.25)]"
            >
              Notify Me
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-9 h-9 rounded-md flex items-center justify-center hover:bg-[#08783E]/10 transition"
              aria-label="Toggle menu"
            >
              {open ? (
                <X
                  size={20}
                  weight="bold"
                  className="text-[#111827] drop-shadow-[0_1px_1px_rgba(17,24,39,0.20)]"
                />
              ) : (
                <List
                  size={20}
                  weight="bold"
                  className="text-[#111827] drop-shadow-[0_1px_1px_rgba(17,24,39,0.20)]"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — animated */}
        <div
          className={`lg:hidden overflow-hidden bg-[#FCFDF9] border-t transition-all duration-300 ease-in-out ${
            open
              ? "max-h-96 opacity-100 border-[#08783E]/10"
              : "max-h-0 opacity-0 border-transparent"
          }`}
        >
          <nav className="max-w-7xl mx-auto px-5 py-3 flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-[#111827]/80 hover:text-[#08783E] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#notify"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center px-4 py-2.5 rounded-md bg-[#08783E] text-white text-sm font-semibold hover:bg-[#065f31] transition-all duration-300 shadow-[0_2px_6px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)]"
            >
              Notify Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}