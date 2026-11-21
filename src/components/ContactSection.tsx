import {Camera, Check, Copy, Mail, MapPin, Phone} from 'lucide-react';
import {useState} from 'react';
import {CONTACT_INFO} from '../data/portfolio';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-20 lg:py-28 overflow-hidden scroll-mt-20"
    >
      {/* Ambient glow behind contact container */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#E61919]/15 blur-[140px] -z-10" />

      <div className="w-full max-w-[1040px] px-[5vw] mx-auto">
        <div className="bg-gradient-to-b from-[#18181E] to-[#0e0e10] p-8 sm:p-12 lg:p-16 rounded-[2rem] border border-[#E61919]/40 shadow-[0_24px_70px_rgba(0,0,0,0.8),0_0_60px_rgba(230,25,25,0.16)] text-center relative overflow-hidden">
          <span className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.24em] inline-block mb-3">
            05 // LET&apos;S CONNECT
          </span>

          <h2 className="font-display text-[40px] sm:text-[64px] leading-[1.02] uppercase text-white tracking-[0.02em] mb-4">
            READY TO COLLABORATE?
          </h2>

          <p className="text-[16px] sm:text-[18px] font-medium text-white/75 max-w-2xl mx-auto mb-10 leading-[1.6]">
            Terbuka untuk kolaborasi tim proyek, kegiatan kepanitiaan kampus IT-PLN, maupun diskusi seputar pengembangan teknologi Teknik Informatika.
          </p>

          {/* Interactive Contact Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl mx-auto">
            {/* Email Primary Pill */}
            <div className="inline-flex items-center rounded-full bg-[#e61919] shadow-[0_0_24px_rgba(230,25,25,0.45)] p-1">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex items-center gap-2.5 pl-5 pr-3 py-2.5 text-white text-[12px] sm:text-[13px] font-bold tracking-[0.08em] uppercase hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email address"
                aria-label="Copy email address"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/20 hover:bg-black/35 text-white transition-colors cursor-pointer shrink-0"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-[#f6be39]" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {/* WhatsApp Pill */}
            <a
              href={CONTACT_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#201f21] hover:bg-[#2a2a2c] text-[#e5e1e4] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.12em] border border-white/12 hover:border-[#E61919] transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{CONTACT_INFO.whatsappDisplay}</span>
            </a>

            {/* Instagram Pill */}
            <a
              href={CONTACT_INFO.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#201f21] hover:bg-[#2a2a2c] text-[#e5e1e4] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.12em] border border-white/12 hover:border-[#E61919] transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <Camera className="w-4 h-4 text-[#ffb4aa] shrink-0" />
              <span>{CONTACT_INFO.instagramHandle}</span>
            </a>
          </div>

          {copied && (
            <p className="mt-4 text-[12px] font-semibold text-[#f6be39] tracking-wide">
              Email copied to clipboard
            </p>
          )}

          {/* Geo Location Stamp */}
          <div className="mt-10 pt-6 border-t border-white/[0.08] flex items-center justify-center gap-2 text-white/50 text-[13px]">
            <MapPin className="w-4 h-4 text-[#E61919] shrink-0" />
            <span>{CONTACT_INFO.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
