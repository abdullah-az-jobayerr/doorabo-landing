import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { roadmap } from "@/lib/data";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24"
    >
      <div className="text-center max-w-2xl mx-auto mb-14 reveal">
        <span className="text-xs font-semibold text-[#08783E] uppercase tracking-[0.15em]">
          আমাদের আগামী পরিকল্পনা
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 tracking-tight">
          আপাতত <span className="text-[#08783E]">Grocery</span>, আশা করি আরও অনেক
          কিছু…
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {roadmap.map((r) => {
          const isCurrent = r.status === "current";
          return (
            <div
              key={r.title}
              className={`reveal rounded-xl p-6 border transition-all duration-300 hover:-translate-y-0.5 ${
                isCurrent
                  ? "bg-[#08783E] text-white border-[#08783E] shadow-[0_2px_8px_rgba(8,120,62,0.15)]"
                  : "bg-white border-[#08783E]/10 hover:border-[#08783E]/20 hover:shadow-[0_4px_16px_rgba(8,120,62,0.08)]"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide ${
                    isCurrent
                      ? "bg-[#FFD329] text-[#08783E]"
                      : "bg-[#08783E]/8 text-[#08783E]"
                  }`}
                >
                  {r.phase}
                </span>

                <div
                  className={`w-9 h-9 rounded-md flex items-center justify-center ${
                    isCurrent ? "bg-[#FFD329]" : "bg-[#08783E]/8"
                  }`}
                >
                  <CheckCircle
                    size={18}
                    weight="fill"
                    className={isCurrent ? "text-[#08783E]" : "text-[#08783E]/70"}
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
    </section>
  );
}