import { useEffect, useState } from 'react';
import { HiArrowNarrowUp, HiMenuAlt3, HiX } from 'react-icons/hi';

const links = ['Home', 'About', 'Experience', 'Portfolio', 'Contact'];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { threshold: 0.45 });
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-7">
      <div className="mx-auto flex max-w-7xl items-center justify-between border-2 border-[#202321] bg-[#f7f6f0] px-4 py-2 shadow-[2px_2px_0_#202321] md:px-5">
        <a href="#home" className="hand border-2 border-[#202321] bg-[#68bcb9] px-2 py-0.5 text-xl leading-none">anhar.dev</a>
        <nav className="hidden items-center md:flex">{links.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={`border-l-2 border-[#202321] px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide last:border-r-2 ${active === item.toLowerCase() ? 'bg-[#202321] text-[#f7f6f0]' : 'hover:bg-[#dfe1da]'}`}>{item}</a>)}</nav>
        <a href="#contact" className="scribble-button hidden items-center gap-1 bg-[#68bcb9] px-3 py-1.5 text-xs font-extrabold md:flex">Contact <HiArrowNarrowUp size={15} /></a>
        <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="text-2xl md:hidden">{open ? <HiX /> : <HiMenuAlt3 />}</button>
      </div>
      {open && <nav className="mx-auto mt-2 flex max-w-7xl flex-col border-2 border-[#202321] bg-[#f7f6f0] p-2 shadow-[2px_2px_0_#202321] md:hidden">{links.map((item) => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`} className="border-b border-dashed border-[#202321]/40 px-2 py-2 text-sm font-extrabold last:border-0">{item}</a>)}</nav>}
    </header>
  );
}
