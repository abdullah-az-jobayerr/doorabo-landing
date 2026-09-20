"use client";

import { useEffect, useState } from "react";
import { Rocket } from "@phosphor-icons/react";

// 🔧 Change this to your real launch date
const LAUNCH_DATE = new Date("2026-10-16T00:00:00+06:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const calcTime = (): TimeLeft => {
  const diff = LAUNCH_DATE - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTime(calcTime());
    const timeoutId = setTimeout(tick, 0);
    const intervalId = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  const items = [
    { label: "দিন", value: time?.days ?? 0 },
    { label: "ঘণ্টা", value: time?.hours ?? 0 },
    { label: "মিনিট", value: time?.minutes ?? 0 },
    { label: "সেকেন্ড", value: time?.seconds ?? 0 },
  ];

  return (
    <section className="w-full overflow-hidden py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative rounded-xl px-7 py-5 bg-gradient-to-l from-[#2b8d5b] via-[#116438] to-[#032714] text-white border border-[#084e2a] shadow-[0_2px_8px_rgba(8,120,62,0.15)] overflow-hidden">
          {/* Decorative — softer */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#FFD329]/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#FFD329]/5 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFD329]/15 text-[#FFD329] text-xs font-semibold mb-4 tracking-wide">
                <Rocket size={14} weight="fill" />
                <span>আমাদের যাত্রা শুরু হতে আর</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                রংপুর <span className="text-[#FFD329]">প্রস্তুত তো?</span>
              </h2>
              <p className="mt-3 text-white/70 max-w-md text-sm leading-relaxed">
                খুব শীঘ্রই আপনার দরজায় পৌঁছে যাবে আপনার দৈনন্দিন প্রয়োজন।
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {items.map((it) => (
                <div
                  key={it.label}
                  className="bg-white/[0.08] backdrop-blur rounded-lg p-3 md:p-4 text-center border border-white/10"
                >
                  <div className="text-2xl md:text-4xl font-bold text-[#FFD329] tabular-nums">
                    {time ? String(it.value).padStart(2, "0") : "--"}
                  </div>
                  <div className="text-[11px] md:text-xs text-white/60 mt-1 tracking-wide">
                    {it.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}