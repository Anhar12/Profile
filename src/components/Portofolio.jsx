import { HiArrowNarrowUp, HiArrowRight } from 'react-icons/hi';
import pisImage from '../assets/pis.jpeg';
import sndImage from '../assets/snd.png';
import dishcoverImage from '../assets/dishcover.jpeg';
import ujangImage from '../assets/ujangtech.png';
import fireImage from '../assets/Fire.jpg';
import kukarImage from '../assets/logokukar.png';

const items = [
  { title: 'SHIELD', full: 'Shipping Health Integrated Electronic Data', description: 'A web-based MCU system for seafarers, vendors, and company doctors — PT. Pertamina International Shipping.', image: pisImage, tags: ['ASP.Net', 'SQL Server', 'ASP.Net Maker'], link: 'https://apps.pertamina.com/shield/Login' },
  { title: 'S&D One', full: 'Supply & Distribution One', description: 'An integrated platform for recording and monitoring processes across PT. Pertamina Patra Niaga.', image: sndImage, tags: ['ASP.Net', 'SQL Server', 'ASP.Net Maker'], link: 'https://ppn.mitralapps.com/sndone/login' },
  { title: 'DISHCOVER', full: 'Image-based Recipe Discovery', description: 'An Android app that recommends cooking recipes from ingredient images using image recognition.', image: dishcoverImage, tags: ['Node.js', 'Kotlin', 'CNN'], link: 'https://github.com/Project-Dishcover' },
  { title: 'UjangsTech', full: 'Air Quality Monitor', description: 'An IoT application for real-time air quality monitoring with ESP32, Antares, and MQTT.', image: ujangImage, tags: ['Kodular', 'Antares', 'ESP32'], link: 'https://github.com/Anhar12/UAS-IOT' },
  { title: 'Fire Alarm', full: 'Early Warning System', description: 'An IoT fire alarm system designed for early warnings and indoor safety.', image: fireImage, tags: ['Kodular', 'MQTT', 'ESP32'], link: 'https://github.com/Anhar12/pa-praktikum-iot-unmul-b4' },
  { title: 'Village Profile', full: 'Teluk Dalam Village Profile', description: 'A public-information website for Kelurahan Teluk Dalam.', image: kukarImage, tags: ['Javascript', 'Tailwind', 'Vercel'], link: 'https://www.telukdalam.my.id/' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-[#dfe1da] px-5 py-20 md:px-10 md:py-28">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end"><div><p className="mono text-xs uppercase tracking-[.18em]">03 / Selected work</p><h2 className="mt-3 text-4xl font-extrabold leading-[.92] tracking-[-.05em] md:text-6xl">Projects with<br /><span className="hand text-[#4a9290]">real-world impact.</span></h2></div><p className="max-w-sm font-semibold leading-6">A handpicked collection of enterprise platforms, mobile apps, and connected devices.</p></div>
        <div className="grid gap-5 md:grid-cols-2">{items.map((item, index) => <ProjectCard key={item.title} item={item} index={index} />)}</div>
        <a href="#contact" className="scribble-button mx-auto mt-12 flex w-fit items-center gap-2 bg-[#68bcb9] px-5 py-3 text-sm font-extrabold">Start a new project <HiArrowRight /></a>
      </div>
    </section>
  );
}

function ProjectCard({ item, index }) {
  return (
    <article className="group flex gap-4 border-2 border-[#202321] bg-[#f7f6f0] p-3 shadow-[3px_3px_0_#202321] transition hover:-translate-y-1">
      <a href={item.link} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`} className="relative h-24 w-24 shrink-0 overflow-hidden border-2 border-[#202321] bg-[#dfe1da] sm:h-28 sm:w-28"><img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /><span className="absolute bottom-0 left-0 border-r-2 border-t-2 border-[#202321] bg-[#68bcb9] px-1.5 mono text-[9px] font-bold">0{index + 1}</span></a>
      <div className="min-w-0 py-1"><p className="mono text-[9px] font-medium uppercase tracking-[.15em] text-[#4a9290]">{item.title}</p><h3 className="mt-1 text-lg font-extrabold leading-tight">{item.full}</h3><p className="mt-1 line-clamp-2 text-xs leading-5">{item.description}</p><div className="mt-3 flex flex-wrap gap-1">{item.tags.map((tag) => <span key={tag} className="border border-[#202321] bg-[#dfe1da] px-1.5 py-0.5 mono text-[8px] uppercase">{tag}</span>)}</div></div>
      <a href={item.link} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`} className="mt-auto grid h-7 w-7 shrink-0 place-items-center border-2 border-[#202321] bg-[#68bcb9] transition group-hover:bg-[#202321] group-hover:text-[#f7f6f0]"><HiArrowNarrowUp size={16} /></a>
    </article>
  );
}
