import {
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Star,
} from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs — softer */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#FFD329]/20 blur-3xl" />
      <div className="absolute top-40 -left-32 w-[380px] h-[380px] rounded-full bg-[#08783E]/8 blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Left */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08783E]/8 text-[#08783E] text-xs font-semibold mb-6 tracking-wide border border-[#08783E]/10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#08783E] animate-pulseSlow" />
            শীঘ্রই আসছে রংপুরে
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.12] tracking-tight text-[#111827]">
            রংপুরের মানুষের জন্য
            <br />
            <span className="text-[#08783E]">দৈনন্দিন প্রয়োজন</span> এখন
            <br />
            <span className="relative inline-block">
              আপনার দরজায়
              <span className="absolute left-0 -bottom-1.5 w-full h-2.5 bg-[#FFD329]/60 -z-10 rounded-sm" />
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#111827]/65 max-w-xl leading-relaxed">
            তাজা, প্রয়োজনীয়, নির্ভরযোগ্য এবং দ্রুত ডেলিভারি — সব এক জায়গায়।
            আপনার সময় বাঁচানোই আমাদের দায়িত্ব।
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#notify"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#08783E] text-white text-sm font-semibold hover:bg-[#065f31] transition shadow-[0_1px_3px_rgba(8,120,62,0.15)] hover:shadow-[0_4px_12px_rgba(8,120,62,0.2)]"
            >
              <span>Notify Me</span>
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#08783E]/20 text-[#08783E] text-sm font-semibold hover:border-[#08783E]/40 hover:bg-[#08783E]/5 transition"
            >
              সেবা দেখুন
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-10 flex flex-wrap items-center gap-5 text-xs md:text-sm text-[#111827]/65">
            {["৩০ মিনিটে ডেলিভারি", "১০০% যাচাইকৃত পণ্য", "Cash on Delivery"].map(
              (label, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <CheckCircle size={16} weight="fill" className="text-[#08783E]" />
                  <span>{label}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right — illustration */}
        <div className="relative reveal">
          <div className="relative rounded-xl bg-gradient-to-br from-[#08783E] to-[#065f31] p-8 md:p-12 aspect-square max-w-[520px] mx-auto shadow-[0_2px_8px_rgba(8,120,62,0.10)] overflow-hidden border border-[#08783E]/10">
            {/* Yellow accent — shopping cart */}
            <div className="absolute top-6 right-6 w-16 h-16 rounded-lg bg-[#FFD329] flex items-center justify-center rotate-3">
              <ShoppingCart size={28} weight="duotone" className="text-[#08783E]" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              {/* Delivery person illustration — same SVG */}
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-[360px]">
                <rect x="100" y="240" width="200" height="120" rx="10" fill="#FFD329" />
                <rect x="100" y="240" width="200" height="24" rx="10" fill="#e6b800" />
                <text x="200" y="300" textAnchor="middle" fontSize="14" fontWeight="700" fill="#08783E">
                  Doorabo
                </text>
                <text x="200" y="320" textAnchor="middle" fontSize="10" fill="#08783E">
                  Your Needs, Our Door
                </text>

                <circle cx="200" cy="140" r="42" fill="#f5d0b0" />
                <path d="M158 130 Q200 90 242 130 L242 118 Q200 76 158 118 Z" fill="#08783E" />
                <rect x="158" y="118" width="84" height="16" rx="4" fill="#065f31" />

                <path d="M150 210 Q150 180 200 180 Q250 180 250 210 L250 260 L150 260 Z" fill="#08783E" />
                <path d="M150 210 Q150 180 200 180 Q250 180 250 210 L250 230 L150 230 Z" fill="#FFD329" />

                <rect x="120" y="190" width="40" height="18" rx="9" fill="#08783E" />
                <rect x="240" y="190" width="40" height="18" rx="9" fill="#08783E" />

                <circle cx="80" cy="290" r="18" fill="#e63946" />
                <circle cx="320" cy="290" r="18" fill="#f4a261" />
                <ellipse cx="60" cy="340" rx="22" ry="14" fill="#2a9d8f" />
                <circle cx="345" cy="345" r="20" fill="#e76f51" />
              </svg>
            </div>
          </div>

          {/* Floating badge — sharp */}
          <div className="absolute -bottom-4 -left-4 md:bottom-6 md:left-6 bg-white rounded-lg shadow-[0_2px_8px_rgba(17,24,39,0.08)] border border-[#08783E]/8 p-3 flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-md bg-[#FFD329] flex items-center justify-center shrink-0">
              <Star size={20} weight="fill" className="text-[#08783E]" />
            </div>
            <div>
              <p className="text-[11px] text-[#111827]/55 tracking-wide">
                শীঘ্রই চালু হচ্ছে
              </p>
              <p className="font-bold text-sm text-[#08783E]">রংপুর শহরে</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}