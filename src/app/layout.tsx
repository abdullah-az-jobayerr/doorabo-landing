import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hind = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doorabo — Your Needs, Our Door",
  description:
    "রংপুরের মানুষের জন্য দৈনন্দিন প্রয়োজন এখন আপনার দরজায়। Grocery, Medicine, Urgent Essentials — সব এক জায়গায়।",
  keywords: ["Doorabo", "রংপুর", "ডেলিভারি", "Grocery", "Medicine"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={hind.variable}>
      <body
        className="font-hind bg-[#FCFDF9] text-[#111827] antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
} 