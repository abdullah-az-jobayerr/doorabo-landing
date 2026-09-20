import Image from "next/image";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  src?: string;                    
};

const sizeMap = {
  sm: { width: 80, height: 28 },
  md: { width: 100, height: 36 },
  lg: { width: 130, height: 46 },
};

export default function Logo({
  size = "md",
  variant = "dark",
  src = "/logo.png",              
}: Props) {
  const dims = sizeMap[size];

  return (
    <div className="flex items-center shrink-0">
      <Image
        src={src}
        alt="Doorabo — Your Needs, Our Door"
        width={dims.width}
        height={dims.height}
        priority
        unoptimized
        className={`object-contain ${
          variant === "light" ? "brightness-0 invert" : ""
        }`}
        style={{ width: "auto", height: dims.height }}
      />
    </div>
  );
}