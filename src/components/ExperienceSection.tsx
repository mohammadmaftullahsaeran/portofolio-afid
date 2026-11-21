import {BadgeCheck, Rocket} from 'lucide-react';
import {EXPERIENCES} from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative w-full py-20 lg:py-28 bg-[#0e0e10]/70 scroll-mt-20"
    >
      <div className="w-full max-w-[1240px] px-[5vw] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.2em] mb-2">
            02 // EXPERIENCE
          </span>
          <div className="flex items-center gap-6 w-full">
            <h2 className="font-display text-[40px] sm:text-[64px] leading-none uppercase text-white tracking-[0.02em]">
              ACTIVITIES &amp; EXPERIENCE
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#E61919] to-transparent opacity-60 hidden sm:block" />
          </div>
        </div>

        {/* 2 Cards Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.title}
              className="bg-[#201f21] p-7 sm:p-8 rounded-3xl border border-white/12 hover:border-[#E61919]/70 hover:-translate-y-1.5 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#E61919]/15 text-[#ffb4aa] text-[11px] font-bold uppercase tracking-[0.16em] border border-[#E61919]/30 whitespace-nowrap">
                    {exp.category}
                  </span>
                  <span
                    className={`text-[12px] font-mono tracking-wider tabular-nums whitespace-nowrap ${
                      exp.highlightPeriod ? 'text-[#E61919] font-bold' : 'text-white/50'
                    }`}
                  >
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-[22px] font-bold text-white group-hover:text-[#ffb4aa] transition-colors mb-6 tracking-[-0.01em]">
                  {exp.title}
                </h3>

                <ul className="space-y-4">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="text-[#E61919] font-bold leading-none mt-1.5 shrink-0"
                        aria-hidden="true"
                      >
                        ◆
                      </span>
                      <span className="text-[15px] text-white/75 leading-[1.6]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/12 flex items-center justify-between text-white/50">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                  {exp.footerLabel}
                </span>
                {exp.icon === 'verified' ? (
                  <BadgeCheck className="w-5 h-5 text-[#E61919]" />
                ) : (
                  <Rocket className="w-5 h-5 text-[#f6be39]" />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
