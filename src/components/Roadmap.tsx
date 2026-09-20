import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { roadmap } from "@/lib/data";

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-soft-yellow-bottom py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-xs font-semibold text-[#08783E] uppercase tracking-[0.15em]">
            আমাদের আগামী পরিকল্পনা
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
            আপাতত <span className="text-[#08783E]">Grocery</span>, আশা করি আরও
            অনেক কিছু…
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roadmap.map((r) => {
            const isCurrent = r.status === "current";
            return (
              <div
                key={r.title}
                className={`reveal group relative rounded-xl p-6 border transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${
                  isCurrent
                    ? "bg-gradient-to-l from-[#2b8d5b] via-[#116438] to-[#032714] text-white border-[#084e2a] shadow-[0_8px_20px_rgba(8,120,62,0.25),0_2px_6px_rgba(8,120,62,0.15)]"
                    : "bg-gradient-to-br from-white to-[#F0F9F4] border-[#08783E]/20 hover:border-[#08783E]/40 shadow-[0_2px_8px_rgba(8,120,62,0.06),inset_0_0_0_1px_rgba(255,255,255,0.8)] hover:shadow-[0_8px_20px_rgba(8,120,62,0.12),inset_0_0_0_1px_rgba(255,255,255,0.8)]"
                }`}
              >
                {/* Decorative glow (current only) */}
                {isCurrent && (
                  <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-[#FFD329]/10 blur-3xl pointer-events-none" />
                )}

                <div className="relative flex items-center justify-between mb-4">
                  {/* Phase badge with shadow */}
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide ${
                      isCurrent
                        ? "bg-[#FFD329] text-[#08783E] shadow-[0_2px_6px_rgba(255,211,41,0.40),0_1px_2px_rgba(255,211,41,0.25)]"
                        : "bg-[#08783E]/10 text-[#08783E] border border-[#08783E]/10 shadow-[0_2px_4px_rgba(8,120,62,0.08)]"
                    }`}
                  >
                    {r.phase}
                  </span>

                  {/* Icon box with 3D shadow */}
                  <div
                    className={`w-9 h-9 rounded-md flex items-center justify-center ${
                      isCurrent
                        ? "bg-[#FFD329] shadow-[0_3px_8px_rgba(8,120,62,0.35),0_1px_2px_rgba(8,120,62,0.20)]"
                        : "bg-[#08783E]/10 border border-[#08783E]/10 shadow-[0_2px_6px_rgba(8,120,62,0.10)] group-hover:bg-[#08783E]/15 group-hover:shadow-[0_3px_8px_rgba(8,120,62,0.15)] transition-all duration-300"
                    }`}
                  >
                    <CheckCircle
                      size={18}
                      weight="fill"
                      className={`${
                        isCurrent ? "text-[#08783E]" : "text-[#08783E]/75"
                      } drop-shadow-[0_1px_1px_rgba(8,120,62,0.40)]`}
                    />
                  </div>
                </div>

                <h3
                  className={`text-xl font-bold tracking-tight ${
                    isCurrent ? "text-white" : "text-[#111827]"
                  }`}
                >
                  {r.title}
                </h3>

                <p
                  className={`text-xs font-semibold mt-2 tracking-wide ${
                    isCurrent ? "text-[#FFD329]" : "text-[#08783E]"
                  }`}
                >
                  {r.statusText}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}