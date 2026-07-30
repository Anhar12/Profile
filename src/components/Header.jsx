import { useEffect, useState } from 'react';
import { HiArrowNarrowUp, HiMenuAlt3, HiX } from 'react-icons/hi';

const links = ['Home', 'About', 'Portfolio', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    // Track the visible section to highlight the active navigation item.
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { threshold: 0.45 },
    );

    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#10131b]/85 px-5 py-3 backdrop-blur-xl md:px-6">
        <a href="#home" className="flex items-center gap-2 font-extrabold tracking-[-.06em]">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#3f6fa8] text-xs text-white">A</span>
          <span>ANHAR<span className="text-[#a8b0c3]">.DEV</span></span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-sm font-semibold transition-colors ${active === item.toLowerCase() ? 'text-[#86a9d8]' : 'text-[#9ba4b7] hover:text-white'}`}>
              {item}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden items-center gap-1 rounded-lg bg-[#3f6fa8] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#5589c7] md:flex">
          Let's talk <HiArrowNarrowUp size={16} />
        </a>
        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="text-2xl md:hidden">
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {open && (
        <nav className="mx-auto mt-2 flex max-w-7xl flex-col rounded-2xl border border-white/10 bg-[#10131b] p-4 shadow-xl md:hidden">
          {links.map((item) => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`} className="border-b border-[#d9ded8] px-3 py-3 text-sm font-bold last:border-0">{item}</a>)}
        </nav>
      )}
    </header>
  );
}
