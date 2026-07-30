import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const social = [
  ['https://github.com/Anhar12', FaGithub],
  ['https://www.linkedin.com/in/anhar-khoirun-najib-96956621a/', FaLinkedin],
  ['https://www.instagram.com/anharrrrrr_', FaInstagram],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#090b10] px-5 py-8 text-[#e9edf4] md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">
        <a href="#home" className="font-extrabold tracking-[-.05em]">ANHAR<span className="text-[#86a9d8]">.DEV</span></a>
        <p className="text-[#9e9991]">© 2025 Anhar Khoirun Najib. Built with intention.</p>
        <div className="flex gap-3">
          {social.map(([url, Icon]) => <a key={url} href={url} target="_blank" rel="noreferrer" className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 text-[#c5d0ca] transition hover:border-[#86a9d8] hover:text-[#86a9d8]"><Icon size={14} /></a>)}
        </div>
        <div className="flex flex-col-reverse justify-between gap-5 pt-7 text-xs text-[#e8dfc9]/70 md:flex-row md:items-center"><p>© {year} Anhar Khoirun Najib. All rights reserved.</p><div className="flex gap-2">{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-8 w-8 place-items-center border border-[#f7f3e8]/30 text-[#f7f3e8] transition hover:border-[#a8bf77] hover:bg-[#a8bf77] hover:text-[#13271d]"><Icon size={14} /></a>)}</div></div>
      </div>
    </footer>
  );
}
