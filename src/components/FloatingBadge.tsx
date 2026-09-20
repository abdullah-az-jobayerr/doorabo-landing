"use client";

import { Star } from "@phosphor-icons/react";
import { motion } from "motion/react";

export default function FloatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed left-5 bottom-5 md:left-7 md:bottom-7 z-50"
    >
      <motion.div
        animate={{
          x: [0, -6, 6, -4, 4, 0],
          rotate: [0, -2, 2, -1, 1, 0],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatDelay: 3.8,
          ease: "easeInOut",
        }}
        className="bg-white rounded-lg shadow-[0_8px_20px_rgba(8,120,62,0.15),0_2px_6px_rgba(8,120,62,0.10)] border border-[#08783E]/10 p-3 flex items-center gap-2.5 hover:shadow-[0_12px_28px_rgba(8,120,62,0.22),0_4px_8px_rgba(8,120,62,0.15)] transition-all duration-300 cursor-pointer"
      >
        {/* 🎯 Yellow icon box — GREEN shadow (visible 3D) */}
        <div className="w-10 h-10 rounded-md bg-[#FFD329] flex items-center justify-center shrink-0 shadow-[0_3px_8px_rgba(8,120,62,0.30),0_1px_2px_rgba(8,120,62,0.20)]">
          <Star
            size={20}
            weight="fill"
            className="text-[#08783E] drop-shadow-[0_1px_1px_rgba(8,120,62,0.50)]"
          />
        </div>
        <div>
          <p className="text-[11px] text-[#111827]/55 tracking-wide">
            শীঘ্রই চালু হচ্ছে
          </p>
          <p className="font-bold text-sm text-[#08783E]">রংপুর শহরে</p>
        </div>
      </motion.div>
    </motion.div>
  );
}