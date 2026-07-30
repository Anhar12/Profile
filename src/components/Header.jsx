import { useEffect, useState } from 'react';
import { HiArrowDown, HiMenuAlt3, HiX } from 'react-icons/hi';

const navItems = ['Home', 'About', 'Experience', 'Portfolio', 'Contact'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { threshold: 0.4 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnResize = () => setMenuOpen(false);
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-[#f7f3e8]">
      {/* Layered edges mimic a canopy and keep the navigation visually distinct. */}
      <div className="absolute inset-0 -z-10 bg-[#0c2419]/95 shadow-[0_7px_0_#6e8d4d,0_11px_0_#13271d] backdrop-blur-md [clip-path:polygon(0_0,100%_0,100%_88%,96%_100%,89%_91%,81%_100%,71%_91%,61%_100%,50%_91%,40%_100%,29%_91%,17%_100%,8%_91%,0_100%)]" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="group flex items-center gap-3 no-underline text-inherit" aria-label="Back to home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#a8bf77] text-[#a8bf77] transition-transform group-hover:rotate-45"><HiArrowDown className="-rotate-45" /></span>
          <span><span className="block text-sm font-bold leading-none">ANHAR</span><span className="mono-label text-[.55rem] text-[#a8bf77]">FIELD NOTES</span></span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-[#a8bf77]/30 bg-[#1d4532]/70 p-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`mono-label rounded-full px-3 py-2 text-[.59rem] no-underline transition-all ${activeSection === id ? 'bg-[#a8bf77] text-[#13271d]' : 'text-[#f7f3e8] hover:bg-[#6e8d4d] hover:text-white'}`}
              >
                {item}
              </a>
            );
          })}
        </nav>

        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center border border-[#a8bf77]/60 text-[#f7f3e8] md:hidden" aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={23} />}
        </button>
      </div>

      {menuOpen && <nav className="mt-1 bg-[#0c2419] px-5 py-4 shadow-[0_7px_0_#6e8d4d] md:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl flex-col">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b border-[#f7f3e8]/15 py-3 text-sm font-semibold no-underline text-[#f7f3e8] hover:text-[#a8bf77]">{item}</a>)}
        </div>
      </nav>}
    </header>
  );
}
