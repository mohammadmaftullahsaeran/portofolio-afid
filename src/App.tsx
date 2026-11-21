/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useCallback, useEffect, useState} from 'react';
import {ContactSection} from './components/ContactSection';
import {CvModal} from './components/CvModal';
import {EducationSection} from './components/EducationSection';
import {ExperienceSection} from './components/ExperienceSection';
import {Footer} from './components/Footer';
import {HeroSection} from './components/HeroSection';
import {Navbar} from './components/Navbar';
import {SkillsSection} from './components/SkillsSection';
import {StorySection} from './components/StorySection';
import {NAV_ITEMS} from './data/portfolio';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [cvOpen, setCvOpen] = useState<boolean>(false);

  const handleNavigate = useCallback((id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#0A0A0C] text-[#e5e1e4] relative overflow-x-hidden min-h-screen">
      {/* Global Peripheral Ambient Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[10vw] top-0 h-[600px] w-[500px] rounded-full bg-[#f6be39]/10 blur-[130px]" />
        <div className="absolute -right-[10vw] top-1/4 h-[700px] w-[550px] rounded-full bg-[#e61919]/20 blur-[150px]" />
      </div>

      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenCv={() => setCvOpen(true)}
      />

      <main className="relative z-10 w-full pt-20 bg-transparent min-h-[calc(100vh-160px)]">
        <div className="flex flex-col w-full text-[#e5e1e4]">
          <HeroSection onNavigate={handleNavigate} />
          <StorySection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenCv={() => setCvOpen(true)}
      />

      <CvModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </div>
  );
}
