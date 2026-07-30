import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

const links = ['Home', 'About', 'Experience', 'Portfolio', 'Contact'];
const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anhar-khoirun-najib-96956621a/', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/Anhar12', icon: FaGithub },
  { label: 'WhatsApp', href: 'https://wa.me/085845723207', icon: FaWhatsapp },
  { label: 'Instagram', href: 'https://www.instagram.com/anharrrrrr_', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com/anhar.najib', icon: FaFacebookF },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#13271d] text-[#f7f3e8]">
      <div className="mx-auto max-w-7xl px-5 pb-7 pt-14 md:px-8 md:pt-20">
        <div className="grid gap-10 border-b border-[#f7f3e8]/20 pb-12 md:grid-cols-[1.3fr_.7fr_.7fr]">
          <div><p className="mono-label text-[.62rem] text-[#a8bf77]">END OF THE TRAIL</p><h2 className="display-face mt-4 max-w-md text-4xl font-bold leading-none md:text-5xl">Keep exploring,<br /><em>keep building.</em></h2></div>
          <div><p className="mono-label text-[.6rem] text-[#a8bf77]">NAVIGATE</p><nav className="mt-4 flex flex-col items-start gap-2">{links.map((link) => <a key={link} className="group flex items-center gap-1 text-sm text-[#f7f3e8] no-underline hover:text-[#a8bf77]" href={`#${link.toLowerCase()}`}>{link}<HiExternalLink className="opacity-0 transition group-hover:opacity-100" /></a>)}</nav></div>
          <div><p className="mono-label text-[.6rem] text-[#a8bf77]">EXPERTISE</p><ul className="mt-4 space-y-2 text-sm text-[#e8dfc9]"><li>Web Development</li><li>Cloud Computing</li><li>Internet of Things</li><li>Artificial Intelligence</li></ul></div>
        </div>
        <div className="flex flex-col-reverse justify-between gap-5 pt-7 text-xs text-[#e8dfc9]/70 md:flex-row md:items-center"><p>© {year} Anhar Khoirun Najib. All rights reserved.</p><div className="flex gap-2">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-8 w-8 place-items-center border border-[#f7f3e8]/30 text-[#f7f3e8] transition hover:border-[#a8bf77] hover:bg-[#a8bf77] hover:text-[#13271d]"><Icon size={14} /></a>)}</div></div>
      </div>
    </footer>
  );
}
