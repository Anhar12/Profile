import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import portrait from '../assets/Anhar3.jpg';

const contactDetails = [
  { label: 'Write a letter', value: 'anharkhoirun@gmail.com', icon: FaEnvelope, href: 'mailto:anharkhoirun@gmail.com' },
  { label: 'Make a call', value: '+62 858 4572 3207', icon: FaPhone, href: 'tel:+6285845723207' },
  { label: 'Find me', value: 'Samarinda, East Borneo', icon: HiLocationMarker },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anhar-khoirun-najib-96956621a/', icon: FaLinkedin },
  { label: 'GitHub', href: 'https://github.com/Anhar12', icon: FaGithub },
  { label: 'WhatsApp', href: 'https://wa.me/085845723207', icon: FaWhatsapp },
  { label: 'Instagram', href: 'https://www.instagram.com/anharrrrrr_', icon: FaInstagram },
  { label: 'Facebook', href: 'https://www.facebook.com/anhar.najib', icon: FaFacebookF },
];

export default function About() {
  return (
    <section id="about" className="section-anchor relative overflow-hidden bg-[#f7f3e8] py-20 md:py-32">
      <div className="absolute -left-36 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[#6e8d4d]/20" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[.72fr_1.28fr] md:px-8">
        <div className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="absolute inset-4 border border-[#6e8d4d]/50" />
          <div className="relative aspect-square overflow-hidden bg-[#dce3c1] p-5">
            <img src={portrait} alt="Anhar outdoors" className="h-full w-full object-cover object-[center_22%]" loading="lazy" />
          </div>
          <span className="mono-label absolute -bottom-3 -right-3 bg-[#13271d] px-4 py-3 text-[.6rem] text-[#f7f3e8]">TRAIL LOG / 01</span>
        </div>

        <div className="max-w-3xl">
          <p className="section-kicker">02 — Beyond the trailhead</p>
          <h2 className="section-title mt-3 text-[#13271d]">Curiosity is my<br /><em>north star.</em></h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#35523d] md:text-lg">I am a dedicated web developer with expertise in both frontend and backend development. As a .NET Developer, I played a key role in developing Shipping Health Integrated Electronic Data (SHIELD) for Pertamina International Shipping and Supply &amp; Distribution One (S&amp;D One) for Pertamina Patra Niaga.</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#35523d]">Skilled in frameworks such as ASP.NET, Django, and Laravel, I continually strive to expand my expertise. I am also deeply passionate about emerging technologies, including IoT, Augmented Reality (AR), Cloud Computing, and Machine Learning, which drive my curiosity and innovation in the tech field.</p>

          <div className="mt-10 grid gap-4 border-t border-[#13271d]/20 pt-7 sm:grid-cols-3">
            {contactDetails.map(({ label, value, icon: Icon, href }) => {
              const content = <><Icon className="mb-3 text-[#c66a45]" size={20} /><span className="mono-label block text-[.58rem] text-[#6e8d4d]">{label}</span><span className="mt-1 block text-sm font-semibold leading-5 text-[#13271d]">{value}</span></>;
              return href ? <a key={label} href={href} className="no-underline transition-transform hover:-translate-y-1">{content}</a> : <div key={label}>{content}</div>;
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" title={label} className="grid h-10 w-10 place-items-center border border-[#13271d]/30 text-[#13271d] transition-colors hover:border-[#13271d] hover:bg-[#13271d] hover:text-[#f7f3e8]"><Icon /></a>)}
          </div>
        </div>
      </div>
    </section>
  );
}
