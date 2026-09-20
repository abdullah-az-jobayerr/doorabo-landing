import {
  Lightning,
  MapPin,
  ShieldCheck,
  Heart,
} from "@phosphor-icons/react/dist/ssr";
import { whyDoorabo } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  bolt: <Lightning size={24} weight="fill" />,
  pin: <MapPin size={24} weight="fill" />,
  shield: <ShieldCheck size={24} weight="fill" />,
  heart: <Heart size={24} weight="fill" />,
};

export default function WhyDoorabo() {
  return (
    <section id="why" className="bg-soft-green py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="text-xs font-semibold text-[#08783E] uppercase tracking-[0.15em]">
            কেন Doorabo?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            আমরা আছি <span className="text-[#08783E]">আপনার পাশে</span>
          </h2>
          <p className="text-[#111827]/60 mt-3 text-sm md:text-base leading-relaxed">
            আপনার সময় বাঁচানোই আমাদের দায়িত্ব — তাই প্রতিটি ধাপে যত্ন নিয়ে
            সাজানো।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyDoorabo.map((w) => (
            <div
              key={w.title}
              className="reveal group text-center p-6 rounded-xl bg-gradient-to-br from-white to-[#F0F9F4] border border-[#08783E]/20 hover:border-[#08783E]/40 shadow-[0_2px_8px_rgba(8,120,62,0.06),inset_0_0_0_1px_rgba(255,255,255,0.8)] hover:shadow-[0_8px_20px_rgba(8,120,62,0.12),inset_0_0_0_1px_rgba(255,255,255,0.8)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Yellow icon box — GREEN shadow (visible 3D) */}
              <div className="w-14 h-14 mx-auto rounded-lg bg-[#FFD329] text-[#08783E] flex items-center justify-center mb-4 shadow-[0_4px_12px_rgba(8,120,62,0.35),0_2px_4px_rgba(8,120,62,0.20)] group-hover:shadow-[0_5px_14px_rgba(8,120,62,0.45),0_2px_4px_rgba(8,120,62,0.25)] transition-all duration-300">
                <span className="drop-shadow-[0_1px_1px_rgba(8,120,62,0.50)]">
                  {iconMap[w.iconKey] ?? iconMap.bolt}
                </span>
              </div>

              <h3 className="text-lg font-bold text-[#111827] tracking-tight">
                {w.title}
              </h3>
              <p className="text-sm text-[#111827]/65 mt-2 leading-relaxed">
                {w.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}