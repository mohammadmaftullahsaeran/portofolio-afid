import {ArrowDown, ArrowRight, User} from 'lucide-react';
import {useState} from 'react';
import {MARQUEE_ITEMS, PORTRAIT_IMAGE_URL} from '../data/portfolio';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export function HeroSection({onNavigate}: HeroSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden pt-8 pb-16 lg:py-24"
    >
      {/* Ambient peripheral light washes */}
      <div className="pointer-events-none absolute -left-20 top-1/4 w-96 h-96 rounded-full bg-[rgba(212,160,23,0.14)] blur-[120px] -z-10" />
      <div className="pointer-events-none absolute -right-24 top-1/3 w-[500px] h-[500px] rounded-full bg-[#E61919]/20 blur-[150px] -z-10" />
      <div className="pointer-events-none absolute right-1/4 top-12 w-64 h-64 bg-[#e61919]/15 blur-[90px] rounded-full -z-10" />

      <div className="w-full max-w-[1240px] px-[5vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait Cut-out Box with 3D Overhang */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[390px] aspect-[4/4.4] group">
              {/* Back Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#8A0B0B] to-[#E61919] rounded-[18px_80px_18px_18px] opacity-40 blur-2xl transition duration-500 group-hover:opacity-75" />

              {/* Structural Box with Asymmetric Radii & Thick Rim */}
              <div className="relative w-full h-full rounded-[12px_72px_12px_12px] p-[14px] bg-[#8A0B0B]/60 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_50px_rgba(230,25,25,0.3)] backdrop-blur-sm overflow-hidden flex items-end justify-center">
                {/* Gradient Base Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF2A2A] via-[#E61919] to-[#6B0404] opacity-95" />

                {/* Interior Light Flare */}
                <div className="absolute -right-8 -top-8 w-44 h-44 bg-white/30 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -left-10 bottom-4 w-32 h-32 bg-[rgba(212,160,23,0.18)] blur-xl pointer-events-none" />

                {/* Graphic Dot Grid Trace */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
                  height="100%"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      height="24"
                      id="hero-pattern"
                      patternUnits="userSpaceOnUse"
                      width="24"
                    >
                      <circle cx="2" cy="2" fill="white" r="1.5" />
                    </pattern>
                  </defs>
                  <rect fill="url(#hero-pattern)" height="100%" width="100%" />
                </svg>

                {/* Portrait Subject */}
                <div className="relative z-10 w-[112%] h-[110%] -mb-2 flex items-end justify-center overflow-hidden rounded-[8px_60px_8px_8px] transform transition-transform duration-500 group-hover:scale-105">
                  {!imageError ? (
                    <>
                      <img
                        src={PORTRAIT_IMAGE_URL}
                        alt="Studio portrait of Mohammad Maftullah Saeran, S1 Teknik Informatika student at Institut Teknologi PLN"
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                        className="w-[385px] max-w-full h-full border-[#d3cdcd] object-cover object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] [mask-image:radial-gradient(ellipse_52%_82%_at_75%_62%,black_52%,rgba(0,0,0,0.75)_70%,transparent_94%)]"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_56%_82%_at_75%_62%,transparent_52%,rgba(138,11,11,0.35)_76%,rgba(10,10,12,0.75)_100%)]"
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/90 pb-8">
                      <div className="w-28 h-28 rounded-full bg-black/25 border border-white/25 flex items-center justify-center mb-4">
                        <User className="w-14 h-14 text-white/80" />
                      </div>
                      <span className="font-display text-3xl tracking-wider uppercase">
                        MAFTULLAH SAERAN
                      </span>
                      <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/75 mt-1">
                        IT-PLN INFORMATICS
                      </span>
                    </div>
                  )}
                </div>

                {/* Badge Floating on Card */}
                <div className="absolute bottom-4 left-4 z-20 px-3.5 py-1.5 bg-[#0e0e10]/85 backdrop-blur-md rounded-full border border-white/15 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#E61919] shadow-[0_0_8px_#E61919]" />
                  <span className="text-[11px] font-bold text-white uppercase tracking-[0.18em] whitespace-nowrap">
                    IT-PLN FRESHMAN
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Editorial Header Typography */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 lg:pl-4 min-w-0">
            {/* Eyebrow Sub-tag */}
            <div className="flex items-center gap-3">
              <span className="inline-block w-8 h-[2px] bg-[#E61919] shrink-0" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-white/75 uppercase">
                INSTITUT TEKNOLOGI PLN · S1 TEKNIK INFORMATIKA
              </span>
            </div>

            {/* Massive Title */}
            <div className="relative w-full">
              <h1 className="font-display text-[64px] sm:text-[96px] lg:text-[124px] leading-[0.88] text-white tracking-[0.02em] uppercase m-0 select-none whitespace-nowrap">
                PORTFOLIO
              </h1>
              <div className="pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 w-28 h-28 bg-white/15 rounded-full blur-2xl" />
            </div>

            {/* Bold Red Subtitle Ribbon Bar */}
            <div className="w-full py-3 px-5 sm:px-6 bg-gradient-to-r from-[#8A0B0B] via-[#E61919] to-[#8A0B0B] rounded-md shadow-[0_4px_24px_rgba(230,25,25,0.4)] flex items-center justify-between gap-4">
              <span className="text-[14px] sm:text-[18px] uppercase tracking-[0.16em] text-white font-extrabold truncate">
                MOHAMMAD MAFTULLAH SAERAN
              </span>
              <span className="hidden sm:inline-block text-[11px] font-bold text-white/85 tracking-[0.18em] uppercase whitespace-nowrap shrink-0">
                CLASS OF 2026
              </span>
            </div>

            {/* Brief Subtext Introduction */}
            <p className="text-[16px] sm:text-[18px] font-medium text-white/75 max-w-xl leading-[1.6]">
              Freshman Informatics Engineering student passionate about communication, teamwork, and campus organizational activities. Driven to develop impactful technological and leadership experience.
            </p>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#e61919] text-white text-[13px] font-bold uppercase tracking-[0.14em] shadow-[0_0_28px_rgba(230,25,25,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#story"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('story');
                }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#201f21]/70 hover:bg-[#2a2a2c] text-[#e5e1e4] text-[13px] font-bold uppercase tracking-[0.14em] border border-white/15 hover:border-[#E61919] transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>EXPLORE STORY</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Running Marquee Ticker */}
      <div className="w-full mt-16 lg:mt-24 py-3.5 bg-gradient-to-r from-[#8A0B0B] via-[#E61919] to-[#8A0B0B] border-y border-[#E61919]/40 overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center whitespace-nowrap animate-marquee w-max">
          {[0, 1].map((dupIndex) => (
            <div
              key={dupIndex}
              aria-hidden={dupIndex === 1}
              className="flex items-center text-[13px] font-extrabold text-white uppercase tracking-[0.22em] shrink-0"
            >
              {MARQUEE_ITEMS.map((item, idx) => (
                <span key={`${dupIndex}-${idx}`} className="inline-flex items-center">
                  <span className="mx-4">{item}</span>
                  <span className="text-[#f6be39] mx-2">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
