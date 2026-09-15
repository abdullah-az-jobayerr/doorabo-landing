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

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FCFDF9]/90 backdrop-blur-md border-b border-[#08783E]/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Logo/>
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#111827]/80 hover:text-[#08783E] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          {/* Location */}
          <button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 md:px-3 md:py-2 rounded-md bg-[#08783E]/8 text-[#08783E] text-xs font-semibold hover:bg-[#08783E]/12 transition border border-[#08783E]/10">
  <MapPin size={12} weight="fill" className="md:w-3.5 md:h-3.5" />
  <span className="hidden sm:inline">রংপুর শহর</span>
  <span className="sm:hidden">রংপুর</span>
</button>

          {/* CTA */}
          <a
            href="#notify"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-md bg-[#08783E] text-white text-xs font-semibold hover:bg-[#065f31] transition shadow-[0_1px_3px_rgba(8,120,62,0.12)] hover:shadow-[0_4px_12px_rgba(8,120,62,0.15)]"
          >
            Notify Me
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 rounded-md flex items-center justify-center hover:bg-[#08783E]/10 transition"
            aria-label="Toggle menu"
          >
            {open ? (
              <X size={20} weight="bold" className="text-[#111827]" />
            ) : (
              <List size={20} weight="bold" className="text-[#111827]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-[#08783E]/10 bg-[#FCFDF9]">
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
              className="mt-2 inline-flex justify-center items-center px-4 py-2.5 rounded-md bg-[#08783E] text-white text-sm font-semibold hover:bg-[#065f31] transition"
            >
              Notify Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}