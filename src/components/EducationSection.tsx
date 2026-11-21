import {MapPin} from 'lucide-react';
import {EDUCATION_TIMELINE} from '../data/portfolio';

export function EducationSection() {
  return (
    <section id="education" className="relative w-full py-20 lg:py-28 scroll-mt-20">
      <div className="w-full max-w-[1240px] px-[5vw] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.2em] mb-2">
            03 // ACADEMIC PATH
          </span>
          <div className="flex items-center gap-6 w-full">
            <h2 className="font-display text-[44px] sm:text-[64px] leading-none uppercase text-white tracking-[0.02em] whitespace-nowrap">
              EDUCATION
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#E61919] to-transparent opacity-60" />
          </div>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative pl-7 sm:pl-10 ml-2 sm:ml-4">
          {/* Vertical Crimson Guide Line */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#E61919] via-[#E61919]/70 to-[#2a2a2c] shadow-[0_0_12px_rgba(230,25,25,0.6)]" />

          <div className="space-y-8 sm:space-y-10">
            {EDUCATION_TIMELINE.map((node) => (
              <div key={node.institution} className="relative group">
                {/* Timeline Beacon Node */}
                {node.current ? (
                  <div className="absolute -left-[37px] sm:-left-[49px] top-6 w-5 h-5 rounded-full bg-[#201f21] border-2 border-[#E61919] flex items-center justify-center shadow-[0_0_16px_rgba(230,25,25,0.85)]">
                    <div className="w-2 h-2 rounded-full bg-[#E61919]" />
                  </div>
                ) : (
                  <div className="absolute -left-[37px] sm:-left-[49px] top-6 w-5 h-5 rounded-full bg-[#201f21] border-2 border-white/15 group-hover:border-[#E61919] transition-colors flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-[#E61919] transition-colors" />
                  </div>
                )}

                {/* Card */}
                <div
                  className={`bg-[#201f21] p-6 sm:p-7 rounded-3xl transition-all duration-200 ${
                    node.current
                      ? 'border border-[#E61919]/50 hover:border-[#E61919] shadow-[0_12px_36px_rgba(0,0,0,0.5)]'
                      : 'border border-white/12 hover:border-[#E61919]/50'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    {node.current ? (
                      <span className="px-3.5 py-1 bg-[#e61919] text-white text-[11px] rounded-full font-bold uppercase tracking-[0.16em] shadow-[0_0_12px_rgba(230,25,25,0.4)] whitespace-nowrap">
                        {node.badge}
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-white/50 uppercase tracking-[0.18em]">
                        {node.badge}
                      </span>
                    )}
                    <span
                      className={`text-[13px] font-mono tabular-nums whitespace-nowrap ${
                        node.current
                          ? 'text-[#ffb4aa] font-bold'
                          : 'text-white/70 font-medium'
                      }`}
                    >
                      {node.period}
                    </span>
                  </div>

                  <h3 className="text-[20px] sm:text-[22px] text-white font-bold tracking-[-0.01em]">
                    {node.institution}
                  </h3>

                  {node.major && (
                    <p className="text-[17px] sm:text-[18px] text-[#ffb4aa] font-medium mt-1">
                      {node.major}
                    </p>
                  )}

                  <p className="text-[13px] text-white/50 mt-2 flex items-center gap-1.5">
                    <MapPin
                      className={`w-4 h-4 shrink-0 ${
                        node.current ? 'text-[#E61919]' : 'text-white/45'
                      }`}
                    />
                    <span>{node.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
