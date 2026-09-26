import Image from "next/image";
import {
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Star,
} from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden mt-4"
      style={{ backgroundColor: "#F5FBF7" }}
    >
      {/* Decorative blobs — green only, no yellow */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#08783E]/8 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-32 w-[380px] h-[380px] rounded-full bg-[#08783E]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-10 pb-10 md:pt-16 md:pb-14 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* Left */}
        <div className="reveal">
          {/* Badge with shadow */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#08783E]/8 text-[#08783E] text-xs font-semibold mb-6 tracking-wide border border-[#08783E]/10 shadow-[0_2px_4px_rgba(8,120,62,0.10)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#08783E] animate-pulseSlow shadow-[0_0_6px_rgba(8,120,62,0.50)]" />
            শীঘ্রই আসছে রংপুরে
          </span>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-[#111827]">
            রংপুরের মানুষের জন্য
            <br />
            <span className="text-[#08783E]">
              দৈনিক বাজার, মেডিসিন সহ সকল প্রয়োজন
            </span>{" "}
            এখন
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#08783E] text-white text-sm font-semibold hover:bg-[#065f31] transition-all duration-300 shadow-[0_2px_6px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)] hover:shadow-[0_6px_16px_rgba(8,120,62,0.35),0_2px_4px_rgba(8,120,62,0.25)]"
            >
              <span>Notify Me</span>
              <ArrowRight
                size={16}
                weight="bold"
                className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]"
              />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#08783E]/20 text-[#08783E] text-sm font-semibold hover:border-[#08783E]/40 hover:bg-[#08783E]/5 transition-all duration-300 shadow-[0_2px_4px_rgba(8,120,62,0.06)] hover:shadow-[0_4px_10px_rgba(8,120,62,0.10)]"
            >
              সেবা দেখুন
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-xs md:text-sm text-[#111827]/65">
            {[
              "৩০ মিনিটে হোম ডেলিভারি",
              "১০০% যাচাইকৃত পণ্য",
              "প্রিমিয়াম মেম্বারশিপ এ মাসের বাজার বাকি তে করার সুবিধা",
              "পণ্য হাতে বুঝে নিয়ে মূল্য পরিশোধ এর সুবিধা",
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <CheckCircle
                  size={16}
                  weight="fill"
                  className="text-[#08783E] drop-shadow-[0_1px_1px_rgba(8,120,62,0.40)]"
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Hero image */}
        <div className="relative reveal">
          <div className="relative rounded-xl aspect-square max-w-[400px] sm:max-w-[480px] md:max-w-[520px] mx-auto shadow-[0_8px_24px_rgba(8,120,62,0.25),0_4px_8px_rgba(8,120,62,0.15)] overflow-hidden border border-[#084e2a]">
            {/* 🎯 Hero image */}
            <Image
              src="/hero.jpeg"
              alt="Doorabo — রংপুরের মানুষের জন্য"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Yellow accent — shopping cart */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 md:w-16 md:h-16 rounded-lg bg-[#FFD329] flex items-center justify-center rotate-3 shadow-[0_4px_12px_rgba(8,120,62,0.40),0_2px_4px_rgba(8,120,62,0.25)]">
              <ShoppingCart
                size={24}
                weight="duotone"
                className="text-[#08783E] md:hidden drop-shadow-[0_1px_1px_rgba(8,120,62,0.50)]"
              />
              <ShoppingCart
                size={28}
                weight="duotone"
                className="text-[#08783E] hidden md:block drop-shadow-[0_1px_1px_rgba(8,120,62,0.50)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
