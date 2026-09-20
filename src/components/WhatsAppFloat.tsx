"use client";

import Image from "next/image";

type Props = {
  phoneNumber?: string;
  message?: string;
};

export default function WhatsAppFloat({
  phoneNumber = "8801700000000", // 🔧 tomar number ekhane
  message = "আসসালামু আলাইকুম, Doorabo সম্পর্কে জানতে চাই।",
}: Props) {
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-3 bottom-4 md:right-7 md:bottom-7 z-50 group"
    >
      {/* Wrapper — holds wave rings + button */}
      <span className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
        {/* Wave ring 1 — 3.5s cycle */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
          style={{
            animation: "whatsappWave 3.5s ease-out infinite",
          }}
        />

        {/* Wave ring 2 — delayed 0.3s for double ripple */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
          style={{
            animation: "whatsappWave 3.5s ease-out infinite",
            animationDelay: "0.3s",
          }}
        />

        {/* Main button — static, on top of waves */}
        <span className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.5)] transition-shadow duration-300 overflow-visible">
          {/* Image — clipped to circle */}
          <span className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </span>

          {/* Tooltip — desktop only */}
          <span className="hidden md:block absolute right-full mr-3 px-3 py-1.5 rounded-md bg-[#111827] text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            WhatsApp এ চ্যাট করুন
          </span>
        </span>
      </span>
    </a>
  );
}