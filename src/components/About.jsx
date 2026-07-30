import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiArrowNarrowUp, HiLocationMarker, HiPhone } from 'react-icons/hi';
import anharImage from '../assets/Anhar4.jpg';

const socials = [{ href: 'mailto:anharkhoirun@gmail.com', Icon: FaEnvelope, label: 'Email' }, { href: 'https://www.linkedin.com/in/anhar-khoirun-najib-96956621a/', Icon: FaLinkedin, label: 'LinkedIn' }, { href: 'https://github.com/Anhar12', Icon: FaGithub, label: 'GitHub' }, { href: 'https://wa.me/085845723207', Icon: FaWhatsapp, label: 'WhatsApp' }, { href: 'https://www.instagram.com/anharrrrrr_', Icon: FaInstagram, label: 'Instagram' }, { href: 'https://www.facebook.com/anhar.najib', Icon: FaFacebookF, label: 'Facebook' }];

export default function About() {
  return (
    <section id="about" className="relative bg-[#dfe1da] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <div className="relative mx-auto w-full max-w-sm border-2 border-[#202321] bg-[#f7f6f0] p-3 shadow-[5px_5px_0_#202321] group">
          <span className="absolute -right-2 -top-2 border-2 border-[#202321] bg-[#68bcb9] px-2 py-1 mono text-[9px] uppercase">bio / 02</span>
          <img src={anharImage} alt="Anhar Khoirun Najib" loading="lazy" className="w-full border border-[#202321] object-cover object-top grayscale-50 contrast-125 group-hover:grayscale-0 transition-color duration-500" />
          <p className="mt-3 border-t-2 border-[#202321] pt-2 mono text-[9px] uppercase tracking-wider">Developer’s field notes</p>
        </div>
        <div>
          <p className="mono text-xs uppercase tracking-[.18em]">01 / About me</p>
          <h2 className="mt-4 text-4xl font-extrabold leading-[.92] tracking-[-.05em] md:text-6xl">A developer with<br /><span className="hand text-[#4a9290]">a curious mind.</span></h2>
          <p className="mt-7 max-w-2xl text-justify text-lg leading-8 md:text-xl">I am a passionate web developer who enjoys transforming complex business requirements into clean, reliable, and maintainable web applications. I have a strong foundation in backend development, while continuously exploring modern frontend technologies to grow as a full-stack developer. I believe that good software is not only functional, but also efficient, scalable, and easy to maintain.</p>
          <p className="mt-5 max-w-2xl text-justify leading-7">Skilled in ASP.NET, Django, and Laravel, I continually explore IoT, Augmented Reality, Cloud Computing, and Machine Learning—bringing curiosity and a practical mindset to every build.</p>
          <a href="#contact" className="scribble-button mt-7 inline-flex items-center gap-2 bg-[#68bcb9] px-5 py-3 text-sm font-extrabold">Start a conversation <HiArrowNarrowUp size={17} /></a>
          <div className="mt-10 grid gap-3 sm:grid-cols-3"><InfoCard icon={HiLocationMarker} label="Location">Samarinda, ID</InfoCard><InfoCard icon={HiPhone} label="Phone">+62 858 4572 3207</InfoCard><InfoCard icon={FaEnvelope} label="Email">anharkhoirun@gmail.com</InfoCard></div>
          <div className="mt-7 flex flex-wrap gap-2">{socials.map(({ href, Icon, label }) => <a key={href} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center border-2 border-[#202321] bg-[#f7f6f0] transition hover:bg-[#68bcb9]"><Icon size={15} /></a>)}</div>
        </div>
      </div>
    </section>
  );
}
function InfoCard({ icon: Icon, label, children }) { return <div className="scribble-border-soft bg-[#f7f6f0] p-4"><Icon className="text-[#4a9290]" /><p className="mt-3 mono text-[9px] uppercase tracking-wider">{label}</p><b className="mt-1 block break-all text-sm">{children}</b></div>; }
