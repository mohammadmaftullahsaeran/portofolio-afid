import {
  Brain,
  Clock,
  MessageSquare,
  Mic,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react';
import {SKILLS, type SkillCard} from '../data/portfolio';

function SkillIcon({
  icon,
  wide,
}: {
  icon: SkillCard['icon'];
  wide?: boolean;
}) {
  const className = wide
    ? 'w-8 h-8 text-[#E61919] shrink-0'
    : 'w-6 h-6 text-white/45 group-hover:text-[#E61919] transition-colors shrink-0';

  switch (icon) {
    case 'users':
      return <Users className={className} />;
    case 'message':
      return <MessageSquare className={className} />;
    case 'clock':
      return <Clock className={className} />;
    case 'brain':
      return <Brain className={className} />;
    case 'wrench':
      return <Wrench className={className} />;
    case 'mic':
      return <Mic className={className} />;
    case 'shield':
      return <ShieldCheck className={className} />;
  }
}

export function SkillsSection() {
  const regularSkills = SKILLS.filter((s) => !s.wide);
  const wideSkill = SKILLS.find((s) => s.wide);

  return (
    <section
      id="skills"
      className="relative w-full py-20 lg:py-28 bg-[#0e0e10]/80 scroll-mt-20"
    >
      <div className="w-full max-w-[1240px] px-[5vw] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <span className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.2em] mb-2">
            04 // CAPABILITIES
          </span>
          <div className="flex items-center gap-6 w-full">
            <h2 className="font-display text-[40px] sm:text-[64px] leading-none uppercase text-white tracking-[0.02em]">
              SKILLS &amp; STRENGTHS
            </h2>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-[#E61919] to-transparent opacity-60 hidden sm:block" />
          </div>
        </div>

        {/* 7 Skill Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularSkills.map((skill) => (
            <div
              key={skill.number}
              className="bg-[#201f21] p-7 rounded-3xl border border-white/12 hover:border-[#E61919] hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-display text-[32px] text-[#E61919] leading-none tracking-[0.02em] tabular-nums whitespace-nowrap">
                  {skill.number}
                </span>
                <SkillIcon icon={skill.icon} />
              </div>
              <h3 className="text-[18px] text-white font-bold mb-2 group-hover:text-[#ffb4aa] transition-colors">
                {skill.title}
              </h3>
              <p className="text-[15px] text-white/75 leading-[1.6]">
                {skill.description}
              </p>
            </div>
          ))}

          {wideSkill && (
            <div className="bg-[#201f21] p-7 rounded-3xl border border-white/12 hover:border-[#E61919] hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden md:col-span-2 lg:col-span-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start sm:items-center gap-5">
                  <span className="font-display text-[32px] text-[#E61919] leading-none tracking-[0.02em] tabular-nums whitespace-nowrap shrink-0">
                    {wideSkill.number}
                  </span>
                  <div>
                    <h3 className="text-[18px] text-white font-bold group-hover:text-[#ffb4aa] transition-colors">
                      {wideSkill.title}
                    </h3>
                    <p className="text-[15px] text-white/75 mt-1 leading-[1.6]">
                      {wideSkill.description}
                    </p>
                  </div>
                </div>
                <div className="self-end sm:self-center">
                  <SkillIcon icon={wideSkill.icon} wide />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
