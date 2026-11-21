import {IdCard, MapPin} from 'lucide-react';
import {BIODATA_ROWS, STORY_HIGHLIGHTS} from '../data/portfolio';

export function StorySection() {
  return (
    <section id="story" className="relative w-full py-20 lg:py-28 scroll-mt-20">
      <div className="w-full max-w-[1240px] px-[5vw] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.2em] mb-2">
            01 // STORY
          </span>
          <div className="flex items-center gap-6 w-full">
            <h2 className="font-display text-[44px] sm:text-[64px] leading-none uppercase text-white tracking-[0.02em] whitespace-nowrap">
              ABOUT ME
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#E61919] to-transparent opacity-60" />
          </div>
        </div>

        {/* 2-Column Asymmetric Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Narrative & Key Stat Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-[20px] sm:text-[22px] text-white leading-[1.45] font-semibold tracking-[-0.01em]">
              Mahasiswa baru S1 Teknik Informatika di{' '}
              <span className="text-[#ffb4aa] underline decoration-[#E61919] decoration-2 underline-offset-4">
                Institut Teknologi PLN
              </span>{' '}
              yang memiliki semangat belajar tinggi, mudah beradaptasi, dan antusias berkontribusi dalam tim.
            </p>
            <p className="text-[15px] text-white/75 leading-[1.7]">
              Memiliki ketertarikan mendalam pada bidang komunikasi publik, manajemen organisasi, serta kemauan kuat untuk memperoleh pengalaman nyata melalui kegiatan kepanitiaan. Bertekad mengembangkan keterampilan interpersonal dan teknis secara seimbang demi memberikan kontribusi positif yang nyata bagi lingkungan kampus dan masyarakat.
            </p>

            {/* 3 Quick Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {STORY_HIGHLIGHTS.map((card) => (
                <div
                  key={card.kicker}
                  className="bg-[#201f21] p-5 rounded-2xl border border-white/12 border-l-4 border-l-[#E61919] hover:-translate-y-1 transition-transform duration-200"
                >
                  <span className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.16em] block mb-1 whitespace-nowrap">
                    {card.kicker}
                  </span>
                  <p className="text-[18px] text-white font-bold tracking-tight">
                    {card.title}
                  </p>
                  <p className="text-[13px] text-white/50 mt-0.5">{card.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Elevated Biodata Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#201f21] p-7 rounded-3xl border border-white/12 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#E61919]/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/12 pb-4 mb-6 gap-3">
                <div className="flex items-center gap-2">
                  <IdCard className="w-5 h-5 text-[#E61919] shrink-0" />
                  <span className="text-[13px] font-bold text-[#E61919] uppercase tracking-[0.14em] whitespace-nowrap">
                    PERSONAL DETAILS
                  </span>
                </div>
                <span className="text-[11px] font-bold px-3 py-1 bg-[#2a2a2c] text-white/75 rounded-full uppercase tracking-[0.14em] whitespace-nowrap shrink-0">
                  BIODATA
                </span>
              </div>

              {/* Key-Value Rows */}
              <div className="space-y-4">
                {BIODATA_ROWS.map((row, idx) => (
                  <div
                    key={row.label}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 ${
                      idx < BIODATA_ROWS.length - 1
                        ? 'pb-3 border-b border-white/[0.08]'
                        : ''
                    }`}
                  >
                    <span className="text-[13px] text-white/50">{row.label}</span>
                    {row.isLocation ? (
                      <span className="text-[15px] text-[#ffb4aa] font-semibold text-left sm:text-right flex items-center sm:justify-end gap-1.5">
                        <MapPin className="w-4 h-4 text-[#E61919] shrink-0" />
                        <span>{row.value}</span>
                      </span>
                    ) : (
                      <span className="text-[15px] text-white font-semibold text-left sm:text-right">
                        {row.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
