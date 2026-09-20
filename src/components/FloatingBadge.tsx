"use client";

import { Star } from "@phosphor-icons/react";
import { motion } from "motion/react";

export default function FloatingBadge() {
  return (
    // 🎯 OUTER wrapper — pure div with `fixed` (no transform, no motion)
    <div
      className="fixed left-3 bottom-4 md:left-7 md:bottom-7 z-50"
      style={{
        maxWidth: "calc(100vw - 5.5rem)",
      }}
    >
      {/* INNER — motion.div only for entrance + wiggle animation */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-white rounded-lg border border-[#08783E]/10 p-2.5 md:p-3 flex items-center gap-2 md:gap-2.5 cursor-pointer shadow-[0_8px_20px_rgba(8,120,62,0.15),0_2px_6px_rgba(8,120,62,0.10)] hover:shadow-[0_12px_28px_rgba(8,120,62,0.22),0_4px_8px_rgba(8,120,62,0.15)] transition-shadow duration-300"
      >
        {/* Inner motion wrapper — only for the wiggle animation */}
        <motion.div
          animate={{
            x: [0, -4, 4, -3, 3, 0],
            rotate: [0, -1.5, 1.5, -1, 1, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: 3.8,
            ease: "easeInOut",
          }}
          className="flex items-center gap-2 md:gap-2.5"
        >
          {/* Yellow icon box — with 3D green shadow */}
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-[#FFD329] flex items-center justify-center shrink-0 shadow-[0_3px_8px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)]">
            <Star
              size={16}
              weight="fill"
              className="text-[#08783E] md:hidden drop-shadow-[0_1px_1px_rgba(8,120,62,0.50)]"
            />
            <Star
              size={20}
              weight="fill"
              className="text-[#08783E] hidden md:block drop-shadow-[0_1px_1px_rgba(8,120,62,0.50)]"
            />
          </div>

          {/* Text — with truncate to prevent overflow */}
          <div className="min-w-0">
            <p className="text-[10px] md:text-[11px] text-[#111827]/55 tracking-wide truncate">
              শীঘ্রই চালু হচ্ছে
            </p>
            <p className="font-bold text-xs md:text-sm text-[#08783E] truncate">
              রংপুর শহরে
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}