import {Printer, X} from 'lucide-react';
import {useEffect} from 'react';
import {
  BIODATA_ROWS,
  CONTACT_INFO,
  EDUCATION_TIMELINE,
  EXPERIENCES,
  SKILLS,
} from '../data/portfolio';

interface CvModalProps {
  open: boolean;
  onClose: () => void;
}

export function CvModal({open, onClose}: CvModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#131317] border border-[#E61919]/40 rounded-3xl shadow-[0_24px_70px_rgba(0,0,0,0.85),0_0_60px_rgba(230,25,25,0.2)] p-6 sm:p-10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/12 pb-6 mb-6">
          <div>
            <span className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.2em] block mb-1">
              CURRICULUM VITAE
            </span>
            <h2
              id="cv-modal-title"
              className="font-display text-[34px] sm:text-[42px] leading-none uppercase tracking-wide"
            >
              MOHAMMAD MAFTULLAH SAERAN
            </h2>
            <p className="text-[14px] text-[#ffb4aa] font-medium mt-1.5">
              S1 Teknik Informatika · Institut Teknologi PLN · Jakarta Barat
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 no-print">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e61919] text-white text-[12px] font-bold uppercase tracking-wider hover:bg-[#c81515] transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print CV</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close Curriculum Vitae modal"
              className="w-9 h-9 rounded-full bg-[#201f21] border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:border-[#E61919] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-7 text-[14px]">
          {/* Biodata */}
          <div>
            <h3 className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.18em] mb-3">
              Personal Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 bg-[#1c1b1d] p-4 rounded-2xl border border-white/10">
              {BIODATA_ROWS.map((row) => (
                <div key={row.label} className="flex justify-between gap-3 py-1">
                  <span className="text-white/50">{row.label}</span>
                  <span className="text-white font-semibold text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.18em] mb-3">
              Education
            </h3>
            <div className="space-y-2.5">
              {EDUCATION_TIMELINE.map((edu) => (
                <div
                  key={edu.institution}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-[#1c1b1d] px-4 py-3 rounded-xl border border-white/10"
                >
                  <div>
                    <p className="font-bold text-white">{edu.institution}</p>
                    <p className="text-white/60 text-[13px]">
                      {edu.major ? `${edu.major} · ` : ''}
                      {edu.location}
                    </p>
                  </div>
                  <span className="text-[12px] font-mono text-[#ffb4aa] tabular-nums whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.18em] mb-3">
              Activities &amp; Readiness
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.title}
                  className="bg-[#1c1b1d] p-4 rounded-2xl border border-white/10"
                >
                  <p className="font-bold text-white mb-2">{exp.title}</p>
                  <ul className="space-y-1.5 text-[13px] text-white/75">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#E61919] mt-0.5">◆</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
            <div>
              <h3 className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.18em] mb-2">
                Core Strengths
              </h3>
              <p className="text-[13px] text-white/75 leading-relaxed">
                {SKILLS.map((s) => s.title).join(' · ')}
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold text-[#E61919] uppercase tracking-[0.18em] mb-2">
                Contact
              </h3>
              <p className="text-[13px] text-white/75">
                {CONTACT_INFO.email} · {CONTACT_INFO.whatsappDisplay} ·{' '}
                {CONTACT_INFO.instagramHandle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
