import {
  ShoppingCart,
  CheckCircle,
  Package,
} from "@phosphor-icons/react/dist/ssr";
import { howItWorks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  cart: <ShoppingCart size={28} weight="duotone" />,
  check: <CheckCircle size={28} weight="duotone" />,
  delivery: <Package size={28} weight="duotone" />,
};

export default function HowItWorks() {
  return (
    <section id="how" className="bg-soft-yellow py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs font-semibold text-[#08783E] uppercase tracking-[0.15em]">
            কিভাবে কাজ করবে?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            মাত্র <span className="text-[#08783E]">৩টি সহজ ধাপে</span> পৌঁছে যাবে
            আপনার দরজায়
          </h2>
          <p className="text-[#111827]/60 mt-3 text-sm md:text-base leading-relaxed">
            মাত্র ৩টি সহজ ধাপ — আপনার প্রয়োজনীয় পণ্য আপনার দরজায়!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 relative">
          {/* connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[18%] right-[18%] h-px bg-[#08783E]/20" />

          {howItWorks.map((s) => (
            <div
              key={s.step}
              className="reveal group relative bg-gradient-to-br from-white to-[#F0F9F4] rounded-xl p-7 border border-[#08783E]/20 hover:border-[#08783E]/40 shadow-[0_2px_8px_rgba(8,120,62,0.06),inset_0_0_0_1px_rgba(255,255,255,0.8)] hover:shadow-[0_8px_20px_rgba(8,120,62,0.12),inset_0_0_0_1px_rgba(255,255,255,0.8)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="absolute -top-3.5 -left-3.5 w-9 h-9 rounded-md bg-[#FFD329] text-[#08783E] font-bold text-sm flex items-center justify-center border border-[#08783E]/10 shadow-[0_3px_8px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)]">
                <span className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.40)]">
                  {s.step}
                </span>
              </div>

              {/* Icon box */}
              <div className="w-14 h-14 rounded-lg bg-[#08783E]/10 flex items-center justify-center mb-5 text-[#08783E] border border-[#08783E]/10 shadow-[0_3px_8px_rgba(8,120,62,0.12),0_1px_2px_rgba(8,120,62,0.08)] group-hover:bg-[#08783E]/15 group-hover:shadow-[0_4px_12px_rgba(8,120,62,0.18)] transition-all duration-300">
                <span className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.30)]">
                  {iconMap[s.iconKey] ?? iconMap.cart}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#111827] tracking-tight">
                {s.title}
              </h3>
              <p className="text-sm text-[#111827]/60 mt-2 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote card — opening + closing quote marks */}
        <div className="mt-14 reveal">
          <div className="relative rounded-xl px-6 py-10 md:px-10 md:py-14 bg-gradient-to-l from-[#2b8d5b] via-[#116438] to-[#032714] text-white border border-[#084e2a] shadow-[0_8px_24px_rgba(8,120,62,0.25),0_4px_8px_rgba(8,120,62,0.15)] overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-[#FFD329]/10 blur-3xl pointer-events-none" />

            {/* 🎯 Quote text with opening + closing marks */}
            <p className="relative text-lg md:text-xl lg:text-2xl font-bold leading-relaxed md:leading-relaxed lg:leading-relaxed tracking-tight">
              <span className="text-[#FFD329] text-3xl md:text-4xl lg:text-5xl font-serif leading-none mr-1 md:mr-2 align-top drop-shadow-[0_2px_4px_rgba(0,0,0,0.30)] select-none">
                &ldquo;
              </span>
              দীর্ঘদিন এই সেক্টরে কাজ করার অভিজ্ঞতা থেকে বলতে পারি, রংপুরবাসী ভালো কিছুই পেতে যাচ্ছে ইনশাআল্লাহ
              <span className="text-[#FFD329] text-3xl md:text-4xl lg:text-5xl font-serif leading-none ml-1 md:ml-2 align-top drop-shadow-[0_2px_4px_rgba(0,0,0,0.30)] select-none">
                &rdquo;
              </span>
            </p>

            <p className="text-white/65 mt-5 text-sm">— CEO Doorabo</p>
          </div>
        </div>
      </div>
    </section>
  );
}