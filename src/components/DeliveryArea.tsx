import Image from "next/image";
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

        {/* Right — Rangpur real image */}
        <div className="reveal">
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-[0_8px_24px_rgba(8,120,62,0.20),0_2px_6px_rgba(8,120,62,0.15)] border border-[#08783E]/10">
            {/* 🎯 Rangpur image */}
            <Image
              src="/rangpur.jpg"
              alt="রংপুর শহর"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Overlay gradient (subtle, for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

            {/* Overlay card */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur rounded-lg p-3 flex items-center gap-3 shadow-[0_6px_16px_rgba(17,24,39,0.15),0_2px_4px_rgba(17,24,39,0.08)] border border-[#08783E]/10">
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
