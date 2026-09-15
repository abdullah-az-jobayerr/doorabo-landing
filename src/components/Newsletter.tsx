"use client";

import { useState } from "react";
import { PaperPlaneTilt, CheckCircle, User, Phone, Lock, ArrowRight } from "@phosphor-icons/react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    // TODO: hook up to your backend / API
    console.log({ name, phone });
    setSubmitted(true);
    setName("");
    setPhone("");
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="notify"
      className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20"
    >
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#08783E] to-[#065f31] p-8 md:p-14 reveal shadow-[0_2px_8px_rgba(8,120,62,0.10)]">
        {/* Decorative — softer */}
        <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#FFD329]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#FFD329]/5 blur-3xl" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFD329]/15 text-[#FFD329] text-xs font-semibold mb-4 tracking-wide border border-[#FFD329]/10">
              <PaperPlaneTilt size={14} weight="fill" />
              <span>লঞ্চের আপডেট পেতে</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              সবার আগে <span className="text-[#FFD329]">জানতে চান?</span>
            </h2>
            <p className="text-white/70 mt-3 max-w-md text-sm md:text-base leading-relaxed">
              আপনার নাম ও মোবাইল নম্বর দিয়ে যুক্ত হোন — লঞ্চের খবর সবার আগে
              পৌঁছে যাবে আপনার কাছে।
            </p>

            <div className="mt-6 flex flex-wrap gap-5 text-xs md:text-sm text-white/65">
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-[#FFD329]" />
                কোনো স্প্যাম নেই
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle size={16} weight="fill" className="text-[#FFD329]" />
                তথ্য ১০০% নিরাপদ
              </span>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-6 md:p-8 shadow-[0_2px_8px_rgba(17,24,39,0.06)] border border-[#08783E]/5 space-y-4"
          >
            <div>
              <label className="text-xs font-semibold text-[#111827] block mb-1.5 tracking-wide uppercase">
                আপনার নাম
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#08783E]">
                  <User size={18} weight="regular" />
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="আপনার নাম লিখুন"
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#FCFDF9] border border-[#08783E]/15 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#08783E] focus:ring-2 focus:ring-[#08783E]/15 transition"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-[#111827] block mb-1.5 tracking-wide uppercase">
                মোবাইল নম্বর
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#08783E]">
                  <Phone size={18} weight="regular" />
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="আপনার মোবাইল নম্বর"
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#FCFDF9] border border-[#08783E]/15 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#08783E] focus:ring-2 focus:ring-[#08783E]/15 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FFD329] text-[#08783E] text-sm font-bold hover:bg-[#f0c411] transition shadow-[0_1px_3px_rgba(255,211,41,0.4)] hover:shadow-[0_4px_12px_rgba(255,211,41,0.5)] disabled:opacity-80"
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} weight="fill" />
                  <span>ধন্যবাদ! আমরা জানাবো</span>
                </>
              ) : (
                <>
                  <span>আমাকে জানান</span>
                  <ArrowRight size={16} weight="bold" />
                </>
              )}
            </button>

            <p className="text-[11px] text-[#111827]/45 text-center flex items-center justify-center gap-1.5">
              <Lock size={12} weight="fill" />
              আপনার তথ্য ১০০% নিরাপদ
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}