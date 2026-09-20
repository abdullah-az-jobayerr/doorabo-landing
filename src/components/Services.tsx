import {
  ShoppingCart,
  FirstAid,
  Package,
  House,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  grocery: <ShoppingCart size={28} weight="duotone" />,
  medicine: <FirstAid size={28} weight="duotone" />,
  urgent: <Package size={28} weight="duotone" />,
  daily: <House size={28} weight="duotone" />,
};

export default function Services() {
  return (
    <section id="services" className="bg-soft-green py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 reveal">
          <div>
            <span className="text-xs font-semibold text-[#08783E] uppercase tracking-[0.15em]">
              আমাদের সেবা সমূহ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
              যা যা পাচ্ছেন <span className="text-[#08783E]">Doorabo</span> থেকে
            </h2>
          </div>
          <a
            href="#notify"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#08783E] hover:gap-2.5 transition-all"
          >
            <span>সব সেবা দেখুন</span>
            <ArrowRight
              size={14}
              weight="bold"
              className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.30)]"
            />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const isHighlight = s.highlight;

            return (
              <div
                key={s.title}
                className={`reveal group relative rounded-xl p-6 border transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${
                  isHighlight
                    ? "bg-gradient-to-l from-[#2b8d5b] via-[#116438] to-[#032714] text-white border-[#084e2a] shadow-[0_8px_20px_rgba(8,120,62,0.25),0_2px_6px_rgba(8,120,62,0.15)]"
                    : "bg-gradient-to-br from-white to-[#F0F9F4] border-[#08783E]/20 hover:border-[#08783E]/40 shadow-[0_2px_8px_rgba(8,120,62,0.06),inset_0_0_0_1px_rgba(255,255,255,0.8)] hover:shadow-[0_8px_20px_rgba(8,120,62,0.12),inset_0_0_0_1px_rgba(255,255,255,0.8)]"
                }`}
              >
                {/* Decorative glow (highlight only) */}
                {isHighlight && (
                  <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-[#FFD329]/15 blur-3xl pointer-events-none" />
                )}

                <div className="relative">
                  {/* Icon box with 3D shadow */}
                  <div
                    className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 ${
                      isHighlight
                        ? "bg-[#FFD329] text-[#08783E] shadow-[0_4px_12px_rgba(8,120,62,0.40),0_2px_4px_rgba(8,120,62,0.25)]"
                        : "bg-[#08783E]/10 text-[#08783E] border border-[#08783E]/10 shadow-[0_3px_8px_rgba(8,120,62,0.12),0_1px_2px_rgba(8,120,62,0.08)] group-hover:bg-[#08783E]/15 group-hover:shadow-[0_4px_12px_rgba(8,120,62,0.18)]"
                    }`}
                  >
                    <span className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.40)]">
                      {iconMap[s.iconKey ?? "grocery"]}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold tracking-tight ${
                      isHighlight ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`text-sm mt-2 leading-relaxed ${
                      isHighlight ? "text-white/85" : "text-[#111827]/65"
                    }`}
                  >
                    {s.subtitle}
                  </p>

                  <span
                    className={`inline-block mt-4 text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wide ${
                      isHighlight
                        ? "bg-[#FFD329] text-[#08783E] shadow-[0_2px_6px_rgba(255,211,41,0.40),0_1px_2px_rgba(255,211,41,0.25)]"
                        : "bg-[#FFD329]/40 text-[#08783E] border border-[#FFD329]/30 shadow-[0_2px_4px_rgba(8,120,62,0.06)]"
                    }`}
                  >
                    {s.statusText}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}