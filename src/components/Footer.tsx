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
  { name: "Facebook", href: "#", Icon: FacebookLogo },
  { name: "Instagram", href: "#", Icon: InstagramLogo },
  { name: "YouTube", href: "#", Icon: YoutubeLogo },
  { name: "TikTok", href: "#", Icon: TiktokLogo },
];

export default function Footer() {
  return (
    <footer className="bg-[#08783E] text-white pt-16 pb-8 mt-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo variant="light" />

            <p className="text-white/70 text-sm leading-relaxed max-w-md mt-5">
              রংপুরের মানুষের পাশে, সবসময়। দৈনন্দিন প্রয়োজন এখন আপনার দরজায় —
              দ্রুত, নিরাপদ এবং নির্ভরযোগ্য ডেলিভারি সেবা।
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2.5 mt-6">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-9 h-9 rounded-md bg-white/10 hover:bg-[#FFD329] hover:text-[#08783E] flex items-center justify-center transition"
                >
                  <Icon size={18} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-[#FFD329] uppercase tracking-wider">
              যোগাযোগ
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Phone size={16} weight="fill" className="text-[#FFD329] mt-0.5 shrink-0" />
                <a href="tel:+8801XXXXXXXXX" className="hover:text-[#FFD329] transition">
                  +880 1XXX-XXXXXX
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={16} weight="fill" className="text-[#FFD329] mt-0.5 shrink-0" />
                <a href="mailto:hello@doorabo.com" className="hover:text-[#FFD329] transition">
                  hello@doorabo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-[#FFD329] uppercase tracking-wider">
              ঠিকানা
            </h4>
            <p className="text-sm text-white/75 flex items-start gap-2.5 leading-relaxed">
              <MapPin size={16} weight="fill" className="text-[#FFD329] mt-0.5 shrink-0" />
              রংপুর শহর, রংপুর, বাংলাদেশ
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