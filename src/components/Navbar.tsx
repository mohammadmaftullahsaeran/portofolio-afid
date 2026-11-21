import {Menu, User, X} from 'lucide-react';
import {useState} from 'react';
import {NAV_ITEMS} from '../data/portfolio';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
  onOpenCv: () => void;
}

export function Navbar({activeSection, onNavigate, onOpenCv}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0A0A0C]/85 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.4)] border-b border-white/[0.06]">
      <div className="h-20 w-full max-w-[1440px] px-[5vw] mx-auto flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Lockup */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          className="flex items-center gap-3 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E61919] rounded-lg"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#E61919] via-[#8A0B0B] to-[#0e0e10] flex items-center justify-center shadow-[0_0_20px_rgba(230,25,25,0.4)] ring-1 ring-[#E61919]/40 shrink-0">
            <span className="font-display text-[28px] leading-none text-white tracking-wide">
              MS
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="border-[#ee0000] text-[16px] sm:text-[18px] font-bold text-white tracking-tight group-hover:text-[#ffb4aa] transition-colors leading-tight whitespace-nowrap">
              Maftullah Saeran
            </span>
            <span className="text-[10px] font-bold text-white/45 uppercase tracking-[0.18em] leading-tight whitespace-nowrap">
              S1 Teknik Informatika
            </span>
          </div>
        </a>

        {/* Zone 2: Center Pill Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1 rounded-full p-1 bg-[#201f21]/70 backdrop-blur-md border border-white/[0.08]"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-[0.14em] whitespace-nowrap shrink-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E61919] ${
                  isActive
                    ? 'bg-[#e61919] text-white shadow-[0_0_24px_rgba(230,25,25,0.4)]'
                    : 'text-[#e8bcb6] hover:text-white hover:bg-[#2a2a2c]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('contact');
            }}
            className="hidden sm:inline-flex items-center justify-center text-[12px] font-bold px-5 py-2.5 rounded-full bg-[#e61919] text-white uppercase tracking-[0.14em] shadow-[0_0_24px_rgba(230,25,25,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Get In Touch
          </a>
          <button
            type="button"
            onClick={onOpenCv}
            title="Open Curriculum Vitae Summary"
            aria-label="Open Curriculum Vitae Summary"
            className="w-10 h-10 rounded-full bg-[#ffb4aa] text-[#690003] flex items-center justify-center ring-1 ring-[#E61919]/40 hover:bg-white hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E61919]"
          >
            <User className="w-[18px] h-[18px]" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden w-10 h-10 rounded-full bg-[#201f21] border border-white/15 text-white flex items-center justify-center hover:border-[#E61919] transition-colors shrink-0"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0e0e10]/95 backdrop-blur-xl border-b border-white/10 px-[5vw] py-4">
          <div className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`px-4 py-3 rounded-xl text-[13px] font-bold uppercase tracking-[0.14em] transition-colors ${
                    isActive
                      ? 'bg-[#e61919] text-white'
                      : 'text-[#e8bcb6] hover:bg-[#201f21] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
