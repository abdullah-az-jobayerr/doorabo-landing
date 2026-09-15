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
        {/* Header */}
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
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const isHighlight = s.highlight;

            return (
              <div
                key={s.title}
                className={`reveal group rounded-xl p-6 border transition-all duration-300 hover:-translate-y-0.5 ${
                  isHighlight
                    ? "bg-[#08783E] text-white border-[#08783E] shadow-[0_2px_8px_rgba(8,120,62,0.15)]"
                    : "bg-white border-[#08783E]/10 hover:border-[#08783E]/20 hover:shadow-[0_4px_16px_rgba(8,120,62,0.08)]"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center mb-5 ${
                    isHighlight
                      ? "bg-[#FFD329] text-[#08783E]"
                      : "bg-[#08783E]/8 text-[#08783E]"
                  }`}
                >
                  {iconMap[s.iconKey ?? "grocery"]}
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
                    isHighlight ? "text-white/70" : "text-[#111827]/60"
                  }`}
                >
                  {s.subtitle}
                </p>

                <span
                  className={`inline-block mt-4 text-[11px] font-semibold px-2.5 py-1 rounded-md tracking-wide ${
                    isHighlight
                      ? "bg-[#FFD329] text-[#08783E]"
                      : "bg-[#FFD329]/35 text-[#08783E]"
                  }`}
                >
                  {s.statusText}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}