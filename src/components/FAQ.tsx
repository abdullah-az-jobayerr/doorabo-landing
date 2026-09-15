"use client";

import { useState } from "react";
import { CaretDown, ArrowRight } from "@phosphor-icons/react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-soft-green py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 reveal">
          <span className="text-xs font-semibold text-[#08783E] uppercase tracking-[0.15em]">
            সচরাচর জিজ্ঞাসা
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            আপনার <span className="text-[#08783E]">প্রশ্নের উত্তর</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`reveal rounded-lg border transition-all duration-200 ${
                  isOpen
                    ? "border-[#08783E]/25 bg-[#FCFDF9] shadow-[0_2px_8px_rgba(8,120,62,0.06)]"
                    : "border-[#08783E]/10 bg-white hover:border-[#08783E]/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#111827] text-sm md:text-base leading-snug">
                    {f.q}
                  </span>

                  <span
                    className={`shrink-0 w-7 h-7 rounded-md flex items-center justify-center transition-all duration-200 ${
                      isOpen
                        ? "bg-[#08783E] text-white rotate-180"
                        : "bg-[#08783E]/8 text-[#08783E]"
                    }`}
                  >
                    <CaretDown size={14} weight="bold" />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 md:px-6 pb-5 text-[#111827]/65 text-sm leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href="#notify"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#08783E] hover:gap-2.5 transition-all"
          >
            <span>আরও জানতে চান? আমাদের সাথে যোগাযোগ করুন</span>
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>
      </div>
    </section>
  );
}