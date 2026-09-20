import Image from "next/image";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

const sizeMap = {
  sm: { width: 160, height: 52 },   // 🎯 Age 140×44 → ekhon 150×48
  md: { width: 220, height: 72 },   // 🎯 Age 180×56 → ekhon 200×64
  lg: { width: 260, height: 84 },   // 🎯 Age 220×68 → ekhon 240×76
};

export default function Logo({ size = "md", variant = "dark" }: Props) {
  const dims = sizeMap[size];

  return (
    <div className="flex items-center shrink-0">
      <Image
        src="/logo.png"
        alt="Doorabo — Your Needs, Our Door"
        width={dims.width}
        height={dims.height}
        priority
        className={`object-contain w-auto h-auto ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
        style={{ height: dims.height, width: "auto" }}
      />
    </div>
  );
}