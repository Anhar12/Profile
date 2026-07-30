import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const social = [
  {
    label: 'GitHub',
    href: 'https://github.com/Anhar12',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anhar-khoirun-najib-96956621a/',
    icon: FaLinkedin,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/anharrrrrr_',
    icon: FaInstagram,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#090b10] px-5 py-8 text-[#e9edf4] md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm md:flex-row md:items-center md:justify-between">

        <a
          href="#home"
          className="font-extrabold tracking-[-.05em]"
        >
          ANHAR<span className="text-[#86a9d8]">.DEV</span>
        </a>

        <p className="text-[#9ba4b7]">
          © {year} Anhar Khoirun Najib. Built with intention.
        </p>

        <div className="flex gap-3">
          {social.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/15 text-[#c5d0ca] transition hover:border-[#86a9d8] hover:text-[#86a9d8]"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}