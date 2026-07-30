import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiArrowNarrowUp, HiLocationMarker, HiPhone } from 'react-icons/hi';

// Centralised social links keep the rendered icon list simple to maintain.
const socials = [
  { href: 'mailto:anharkhoirun@gmail.com', Icon: FaEnvelope },
  { href: 'https://www.linkedin.com/in/anhar-khoirun-najib-96956621a/', Icon: FaLinkedin },
  { href: 'https://github.com/Anhar12', Icon: FaGithub },
  { href: 'https://wa.me/085845723207', Icon: FaWhatsapp },
  { href: 'https://www.instagram.com/anharrrrrr_', Icon: FaInstagram },
  { href: 'https://www.facebook.com/anhar.najib', Icon: FaFacebookF },
];

export default function About() {
  return (
    <section id="about" className="bg-[#11141c] px-5 py-20 text-[#e9edf4] md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mono text-xs uppercase tracking-[.18em] text-[#86a9d8]">01 / About me</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-none tracking-[-.06em] md:text-6xl">A developer with a curious mind.</h2>
          <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-bold transition hover:border-[#86a9d8] hover:text-[#86a9d8]">Let's collaborate <HiArrowNarrowUp size={17} /></a>
        </div>
        <div>
          <p className="max-w-2xl text-lg leading-8 text-[#c5d0ca] md:text-xl">I am a dedicated web developer with expertise across frontend and backend development. As a .NET Developer, I contributed to SHIELD for Pertamina International Shipping and S&D One for Pertamina Patra Niaga.</p>
          <p className="mt-5 max-w-2xl leading-7 text-[#91a39a]">Skilled in ASP.NET, Django, and Laravel, I continually expand my practice through IoT, Augmented Reality, Cloud Computing, and Machine Learning — bringing curiosity and a practical mindset to every build.</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            <InfoCard icon={HiLocationMarker} label="Location">Samarinda, ID</InfoCard>
            <InfoCard icon={HiPhone} label="Phone">+62 858 4572 3207</InfoCard>
            <InfoCard icon={FaEnvelope} label="Email">anharkhoirun@gmail.com</InfoCard>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">{socials.map(({ href, Icon }) => <a key={href} href={href} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-[#c5d0ca] transition hover:border-[#86a9d8] hover:bg-[#86a9d8] hover:text-[#11141c]"><Icon size={16} /></a>)}</div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, label, children }) {
  return <div className="bg-[#11141c] p-5"><Icon className="text-[#86a9d8]" /><p className="mt-4 mono text-[10px] uppercase tracking-wider text-[#91a39a]">{label}</p><b className="mt-1 block break-all text-sm">{children}</b></div>;
}
