import { MapPin, Heart, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function DeliveryArea() {
  return (
    <section id="area" className="bg-soft-mixed py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="reveal">
          {/* Badge — with green shadow */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFD329]/30 text-[#08783E] text-xs font-semibold mb-4 tracking-wide border border-[#08783E]/10 shadow-[0_2px_4px_rgba(8,120,62,0.12)]">
            <span className="text-[#08783E] drop-shadow-[0_1px_1px_rgba(8,120,62,0.40)]">
              <MapPin size={14} weight="fill" />
            </span>
            <span>কোথায় ডেলিভারি করব?</span>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight tracking-tight">
            বর্তমানে <span className="text-[#08783E]">রংপুর শহর</span> এর নির্দিষ্ট
            এলাকায় আমাদের সেবা প্রদান শুরু হচ্ছে।
          </h2>

          <p className="text-[#111827]/60 mt-4 text-sm md:text-base leading-relaxed">
            খুব শীঘ্রই আরও এলাকায় আমাদের বিস্তার করব। ইনশাআল্লাহ।
          </p>

          {/* CTA Button — with layered shadow */}
          <a
            href="#notify"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#08783E] text-white text-sm font-semibold hover:bg-[#065f31] transition-all duration-300 shadow-[0_2px_6px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)] hover:shadow-[0_6px_16px_rgba(8,120,62,0.35),0_2px_4px_rgba(8,120,62,0.25)]"
          >
            <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]">
              <MapPin size={16} weight="fill" />
            </span>
            <span>ডেলিভারি এরিয়া দেখুন</span>
            <ArrowRight size={14} weight="bold" />
          </a>
        </div>

        {/* Right — Rangpur map placeholder */}
        <div className="reveal">
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-[#08783E] to-[#065f31] aspect-[4/3] shadow-[0_8px_24px_rgba(8,120,62,0.20),0_2px_6px_rgba(8,120,62,0.15)] border border-[#08783E]/10">
            {/* Rangpur symbolism */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <rect width="400" height="300" fill="#d6f0dd" />
                <rect y="200" width="400" height="100" fill="#08783E" />

                <g fill="#0a5d33">
                  <rect x="140" y="120" width="120" height="80" rx="3" />
                  <polygon points="200,60 230,120 170,120" />
                  <polygon points="130,120 150,90 170,120" />
                  <polygon points="230,120 250,90 270,120" />
                  <rect x="110" y="100" width="12" height="100" />
                  <rect x="278" y="100" width="12" height="100" />
                  <circle cx="200" cy="55" r="4" fill="#FFD329" />
                </g>

                <circle cx="80" cy="200" r="18" fill="#0a5d33" />
                <circle cx="320" cy="200" r="18" fill="#0a5d33" />

                <circle cx="340" cy="70" r="22" fill="#FFD329" />
              </svg>
            </div>

            {/* Overlay card */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur rounded-lg p-3 flex items-center gap-3 shadow-[0_6px_16px_rgba(17,24,39,0.15),0_2px_4px_rgba(17,24,39,0.08)] border border-[#08783E]/10">
              {/* 🎯 Icon box — GREEN shadow (visible on yellow bg) */}
              <div className="w-9 h-9 rounded-md bg-[#FFD329] flex items-center justify-center shrink-0 shadow-[0_3px_8px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)]">
                <MapPin
                  size={18}
                  weight="fill"
                  className="text-[#08783E] drop-shadow-[0_1px_1px_rgba(8,120,62,0.50)]"
                />
              </div>
              <div>
                <p className="text-[11px] text-[#111827]/55 tracking-wide">
                  আমাদের প্রিয় শহর
                </p>
                <p className="font-bold text-sm text-[#08783E] inline-flex items-center gap-1">
                  রংপুর{" "}
                  <Heart
                    size={14}
                    weight="fill"
                    className="text-[#08783E] drop-shadow-[0_1px_1px_rgba(8,120,62,0.50)]"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}