interface FooterProps {
  onNavigate: (id: string) => void;
  onOpenCv: () => void;
}

export function Footer({onNavigate, onOpenCv}: FooterProps) {
  return (
    <footer className="relative z-10 w-full bg-[#0e0e10]">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E61919] to-transparent opacity-60" />
      <div className="w-full max-w-[1440px] px-[5vw] py-12 mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <p className="text-[15px] text-white/75">
            © 2026 Mohammad Maftullah Saeran. All rights reserved.
          </p>
          <p className="text-[13px] text-white/45 flex items-center justify-center md:justify-start gap-2">
            <span className="text-[#e61919]" aria-hidden="true">
              ◆
            </span>
            <span>S1 Teknik Informatika · Institut Teknologi PLN</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="text-[11px] font-bold text-[#e8bcb6] hover:text-[#ffb4aa] transition-colors uppercase tracking-[0.18em] whitespace-nowrap cursor-pointer"
          >
            Jakarta, Indonesia
          </button>
          <span className="text-white/40" aria-hidden="true">
            /
          </span>
          <button
            type="button"
            onClick={onOpenCv}
            className="text-[11px] font-bold text-[#e8bcb6] hover:text-[#ffb4aa] transition-colors uppercase tracking-[0.18em] whitespace-nowrap cursor-pointer"
          >
            Curriculum Vitae
          </button>
        </div>
      </div>
    </footer>
  );
}
