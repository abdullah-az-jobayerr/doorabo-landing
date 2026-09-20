"use client";

import { useState } from "react";
import {
  PaperPlaneTilt,
  CheckCircle,
  User,
  Phone,
  Lock,
  ArrowRight,
} from "@phosphor-icons/react";

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
    <section id="notify" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Card — layered shadow */}
        <div className="relative rounded-xl px-7 py-10 md:py-12 bg-gradient-to-l from-[#2b8d5b] via-[#116438] to-[#032714] text-white border border-[#084e2a] shadow-[0_8px_24px_rgba(8,120,62,0.25),0_4px_8px_rgba(8,120,62,0.15)] overflow-hidden">
          {/* Decorative — softer */}
          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#FFD329]/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#FFD329]/5 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              {/* Badge — with shadow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFD329]/15 text-[#FFD329] text-xs font-semibold mb-4 tracking-wide border border-[#FFD329]/15 shadow-[0_2px_6px_rgba(255,211,41,0.15)]">
                <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.40)]">
                  <PaperPlaneTilt size={14} weight="fill" />
                </span>
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
                  <CheckCircle
                    size={16}
                    weight="fill"
                    className="text-[#FFD329] drop-shadow-[0_1px_1px_rgba(0,0,0,0.40)]"
                  />
                  কোনো স্প্যাম নেই
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle
                    size={16}
                    weight="fill"
                    className="text-[#FFD329] drop-shadow-[0_1px_1px_rgba(0,0,0,0.40)]"
                  />
                  তথ্য ১০০% নিরাপদ
                </span>
              </div>
            </div>

            {/* Right — form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-6 md:p-8 shadow-[0_8px_24px_rgba(17,24,39,0.10),0_2px_6px_rgba(17,24,39,0.06)] border border-[#08783E]/10 space-y-4"
            >
              <div>
                <label className="text-xs font-semibold text-[#111827] block mb-1.5 tracking-wide uppercase">
                  আপনার নাম
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#08783E] drop-shadow-[0_1px_1px_rgba(8,120,62,0.25)]">
                    <User size={18} weight="regular" />
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="আপনার নাম লিখুন"
                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#FCFDF9] border border-[#08783E]/15 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#08783E] focus:ring-2 focus:ring-[#08783E]/15 shadow-[inset_0_1px_2px_rgba(17,24,39,0.04)] transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[#111827] block mb-1.5 tracking-wide uppercase">
                  মোবাইল নম্বর
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#08783E] drop-shadow-[0_1px_1px_rgba(8,120,62,0.25)]">
                    <Phone size={18} weight="regular" />
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="আপনার মোবাইল নম্বর"
                    className="w-full pl-11 pr-4 py-3 rounded-lg bg-[#FCFDF9] border border-[#08783E]/15 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#08783E] focus:ring-2 focus:ring-[#08783E]/15 shadow-[inset_0_1px_2px_rgba(17,24,39,0.04)] transition"
                  />
                </div>
              </div>

              {/* Submit button — layered yellow shadow */}
              <button
                type="submit"
                disabled={submitted}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FFD329] text-[#08783E] text-sm font-bold hover:bg-[#f0c411] transition-all duration-300 shadow-[0_3px_10px_rgba(255,211,41,0.45),0_1px_3px_rgba(255,211,41,0.30)] hover:shadow-[0_6px_16px_rgba(255,211,41,0.55),0_2px_4px_rgba(255,211,41,0.35)] disabled:opacity-80"
              >
                {submitted ? (
                  <>
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.40)]"
                    />
                    <span>ধন্যবাদ! আমরা জানাবো</span>
                  </>
                ) : (
                  <>
                    <span>আমাকে জানান</span>
                    <ArrowRight
                      size={16}
                      weight="bold"
                      className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.30)]"
                    />
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#111827]/45 text-center flex items-center justify-center gap-1.5">
                <Lock
                  size={12}
                  weight="fill"
                  className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.20)]"
                />
                আপনার তথ্য ১০০% নিরাপদ
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}