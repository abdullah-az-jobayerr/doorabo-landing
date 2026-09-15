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
    <section
      id="how"
      className="bg-soft-yellow py-16 md:py-24"
    >
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
          <div className="hidden md:block absolute top-12 left-[18%] right-[18%] h-px bg-[#08783E]/15" />

          {howItWorks.map((s) => (
            <div
              key={s.step}
              className="reveal relative bg-white rounded-xl p-7 border border-[#08783E]/10 hover:border-[#08783E]/20 hover:shadow-[0_4px_16px_rgba(8,120,62,0.08)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-3.5 -left-3.5 w-9 h-9 rounded-md bg-[#FFD329] text-[#08783E] font-bold text-sm flex items-center justify-center shadow-[0_1px_3px_rgba(17,24,39,0.08)] border border-[#08783E]/5">
                {s.step}
              </div>

              <div className="w-14 h-14 rounded-lg bg-[#08783E]/8 flex items-center justify-center mb-5 text-[#08783E]">
                {iconMap[s.iconKey] ?? iconMap.cart}
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

        {/* Quote card */}
        <div className="mt-14 reveal">
          <div className="relative rounded-xl bg-[#08783E] text-white p-8 md:p-12 overflow-hidden shadow-[0_2px_8px_rgba(8,120,62,0.10)]">
            <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-[#FFD329]/10 blur-3xl" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="text-6xl md:text-7xl text-[#FFD329] font-serif leading-none">
                &ldquo;
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold leading-snug tracking-tight">
                  আপনার সময় বাঁচালে আমাদের দায়িত্ব
                </p>
                <p className="text-white/65 mt-3 text-sm">— Doorabo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}