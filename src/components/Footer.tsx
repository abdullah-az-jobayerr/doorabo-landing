import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
  Phone,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import Logo from "./Logo";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/doorabobd",
    Icon: FacebookLogo,
  },
  { name: "Instagram", href: "#", Icon: InstagramLogo },
  { name: "YouTube", href: "#", Icon: YoutubeLogo },
  { name: "TikTok", href: "#", Icon: TiktokLogo },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-[#2b8d5b] via-[#116438] to-[#032714] text-white border-t border-[#084e2a] shadow-[0_-4px_16px_rgba(8,120,62,0.15)]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* 🎯 Chhoto logo — size="md" */}
            <Logo size="md" variant="light" src="/footer_logo.png" />

            <p className="text-white/70 text-sm leading-relaxed max-w-md mt-5">
              রংপুরের মানুষের পাশে, সবসময়। দৈনন্দিন প্রয়োজন এখন আপনার দরজায় —
              দ্রুত, নিরাপদ এবং নির্ভরযোগ্য ডেলিভারি সেবা।
            </p>

            {/* Socials — with 3D shadow */}
            <div className="flex items-center gap-2.5 mt-6">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-md bg-white/10 hover:bg-[#FFD329] hover:text-[#08783E] flex items-center justify-center transition-all duration-300 shadow-[0_3px_8px_rgba(0,0,0,0.20),0_1px_2px_rgba(0,0,0,0.15)] hover:shadow-[0_5px_12px_rgba(255,211,41,0.35),0_2px_4px_rgba(255,211,41,0.25)] hover:-translate-y-0.5"
                >
                  <Icon
                    size={18}
                    weight="fill"
                    className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.30)] group-hover:drop-shadow-[0_1px_1px_rgba(8,120,62,0.40)]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-[#FFD329] uppercase tracking-wider drop-shadow-[0_1px_1px_rgba(0,0,0,0.30)]">
              যোগাযোগ
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFD329] mt-0.5 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.40)]">
                  <Phone size={16} weight="fill" />
                </span>
                <a
                  href="tel:+8801577744073"
                  className="hover:text-[#FFD329] transition-colors"
                >
                  +8801577-744073
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#FFD329] mt-0.5 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.40)]">
                  <EnvelopeSimple size={16} weight="fill" />
                </span>
                <a
                  href="mailto:dooraboofficial@gmail.com"
                  className="hover:text-[#FFD329] transition-colors break-all text-xs md:text-sm"
                >
                  dooraboofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-[#FFD329] uppercase tracking-wider drop-shadow-[0_1px_1px_rgba(0,0,0,0.30)]">
              ঠিকানা
            </h4>
            <p className="text-sm text-white/75 flex items-start gap-2.5 leading-relaxed">
              <span className="text-[#FFD329] mt-0.5 shrink-0 drop-shadow-[0_1px_1px_rgba(0,0,0,0.40)]">
                <MapPin size={16} weight="fill" />
              </span>
              রংপুর সদর, রংপুর
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Doorabo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}