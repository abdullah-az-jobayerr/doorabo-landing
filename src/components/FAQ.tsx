"use client";

import { useState } from "react";
import {
  CaretDown,
  ArrowRight,
  Question,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-soft-green py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* 🎯 Badge with 3D shadow */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08783E]/8 text-[#08783E] text-xs font-semibold uppercase tracking-[0.15em] mb-4 border border-[#08783E]/10 shadow-[0_2px_4px_rgba(8,120,62,0.10)]">
            <span className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.40)]">
              <Question size={12} weight="fill" />
            </span>
            সচরাচর জিজ্ঞাসা
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 tracking-tight">
            আপনার <span className="text-[#08783E]">প্রশ্নের উত্তর</span>
          </h2>
          <p className="text-[#111827]/60 mt-3 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Doorabo নিয়ে আপনার মনে যা যা প্রশ্ন আসতে পারে — সব এক জায়গায়।
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[#08783E]/25 bg-[#FCFDF9] shadow-[0_6px_16px_rgba(8,120,62,0.10),0_2px_4px_rgba(8,120,62,0.06)]"
                    : "border-[#08783E]/10 bg-white shadow-[0_2px_6px_rgba(8,120,62,0.04)] hover:border-[#08783E]/20 hover:shadow-[0_4px_12px_rgba(8,120,62,0.08)]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[#111827] text-sm md:text-base leading-snug pr-2">
                    {f.q}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`shrink-0 w-8 h-8 rounded-md flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-[#08783E] text-white shadow-[0_3px_8px_rgba(8,120,62,0.35),0_1px_2px_rgba(8,120,62,0.20)]"
                        : "bg-[#08783E]/8 text-[#08783E] shadow-[0_2px_4px_rgba(8,120,62,0.10)]"
                    }`}
                  >
                    <CaretDown
                      size={16}
                      weight="bold"
                      className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]"
                    />
                  </motion.span>
                </button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-5 md:px-6 pb-5">
                        <div className="border-t border-[#08783E]/10 pt-4">
                          <p className="text-[#111827]/65 text-sm md:text-[15px] leading-relaxed">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-xl bg-white border border-[#08783E]/10 px-6 py-5 shadow-[0_6px_16px_rgba(8,120,62,0.08),0_2px_4px_rgba(8,120,62,0.04)]">
            <div className="flex items-center gap-3">
              {/* 🎯 Yellow icon box — GREEN shadow (visible 3D) */}
              <div className="w-10 h-10 rounded-md bg-[#FFD329] flex items-center justify-center text-[#08783E] shrink-0 shadow-[0_3px_8px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)]">
                <EnvelopeSimple
                  size={20}
                  weight="fill"
                  className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.50)]"
                />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#111827]/55 tracking-wide">
                  আরও কিছু জানতে চান?
                </p>
                <p className="font-bold text-sm text-[#111827]">
                  আমাদের সাথে যোগাযোগ করুন
                </p>
              </div>
            </div>

            <a
              href="#notify"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#08783E] text-white text-xs font-semibold hover:bg-[#065f31] transition-all duration-300 shadow-[0_2px_6px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)] hover:shadow-[0_4px_12px_rgba(8,120,62,0.40)]"
            >
              <span>যোগাযোগ</span>
              <ArrowRight
                size={14}
                weight="bold"
                className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.20)]"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}