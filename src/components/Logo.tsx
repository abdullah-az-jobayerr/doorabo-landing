import Image from "next/image";

type Props = {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
};

const sizeMap = {
  sm: { width: 120, height: 36 },
  md: { width: 150, height: 44 },
  lg: { width: 190, height: 56 },
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