import { HiArrowNarrowUp } from 'react-icons/hi';
import pisImage from '../assets/pis.jpeg';
import sndImage from '../assets/snd.png';
import dishcoverImage from '../assets/dishcover.jpeg';
import ujangImage from '../assets/ujangtech.png';
import fireImage from '../assets/Fire.jpg';
import kukarImage from '../assets/logokukar.png';

// Project content is data-driven so cards can be edited without changing layout logic.
const items = [
  { title: 'SHIELD', full: 'Shipping Health Integrated Electronic Data (SHIELD)', description: 'A web-based MCU system for seafarers, vendors, and company doctors — PT. Pertamina International Shipping.', image: pisImage, tags: ['ASP.Net', 'SQL Server', 'ASP.Net Maker'], link: 'https://apps.pertamina.com/shield/Login' },
  { title: 'S&D One', full: 'S&D One', description: 'An integrated platform for recording and monitoring processes across PT. Pertamina Patra Niaga.', image: sndImage, tags: ['ASP.Net', 'SQL Server', 'ASP.Net Maker'], link: 'https://ppn.mitralapps.com/sndone/login' },
  { title: 'DISHCOVER', full: 'DISHCOVER', description: 'An Android app that recommends cooking recipes from ingredient images using image recognition.', image: dishcoverImage, tags: ['Node.js', 'Kotlin', 'CNN'], link: 'https://github.com/Project-Dishcover' },
  { title: 'UjangsTech', full: 'UjangsTech', description: 'An IoT application for real-time air quality monitoring with ESP32, Antares, and MQTT.', image: ujangImage, tags: ['Kodular', 'Antares', 'ESP32'], link: 'https://github.com/Anhar12/UAS-IOT' },
  { title: 'Fire Alarm', full: 'Fire Alarm', description: 'An IoT fire alarm system designed for early warnings and indoor safety.', image: fireImage, tags: ['Kodular', 'MQTT', 'ESP32'], link: 'https://github.com/Anhar12/pa-praktikum-iot-unmul-b4' },
  { title: 'Village Profile', full: 'Teluk Dalam Village Profile', description: 'A public-information website for Kelurahan Teluk Dalam.', image: kukarImage, tags: ['Javascript', 'Tailwind', 'Vercel'], link: 'https://www.telukdalam.my.id/' },
];

function TrailCard({ item, index }) {
  return (
    <article className="group relative grid overflow-hidden border border-[#13271d]/25 bg-[#f7f3e8] shadow-[7px_7px_0_#13271d] transition-transform duration-300 hover:-translate-y-2 sm:grid-cols-[.8fr_1.2fr]">
      <div className="relative min-h-64 overflow-hidden bg-[#13271d] sm:min-h-full">
        <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#13271d]/70 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full border-2 border-[#f7f3e8] bg-[#13271d] font-bold text-[#f7f3e8]">0{index + 1}</span>
        <div className="absolute -right-7 -top-7 h-20 w-20 rounded-full border-[14px] border-[#f7f3e8]/80" />
      </div>

      <div className="relative p-5 sm:p-6">
        <span className="absolute right-0 top-0 h-4 w-4 [clip-path:polygon(100%_0,0_0,100%_100%)]" style={{ backgroundColor: item.color }} />
        <p className="mono-label text-[.58rem]" style={{ color: item.color }}>EXPEDITION MARKER / 0{index + 1}</p>
        <h3 className="display-face mt-2 text-3xl font-bold leading-none text-[#13271d]">{item.title}</h3>
        <p className="mt-2 text-xs font-bold uppercase tracking-[.1em] text-[#6e8d4d]">{item.subtitle}</p>
        <p className="mt-4 text-sm leading-6 text-[#35523d]">{item.description}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => <span key={tag} className="border border-[#13271d]/25 px-2 py-1 text-[.6rem] font-bold text-[#35523d]">{tag}</span>)}
        </div>
        <a href={item.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#13271d] pb-1 text-xs font-bold uppercase tracking-[.12em] text-[#13271d] no-underline transition-colors hover:border-[#c66a45] hover:text-[#c66a45]">
          Enter this route <HiExternalLink size={16} />
        </a>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-surface px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="mono text-xs uppercase tracking-[.18em] text-[#86a9d8]">02 / Selected work</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-[-.06em] md:text-6xl">Projects with<br />real-world impact.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#9ba4b7]">A selection of digital products spanning enterprise platforms, mobile apps, and connected devices.</p>
        </div>
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-12">
          {items.map((item, index) => <ProjectCard key={item.title} item={item} index={index} />)}
        </div>
        <a href="#contact" className="forest-button mx-auto mt-14 w-fit">Start a new expedition <HiArrowRight /></a>
      </div>
    </section>
  );
}

function ProjectCard({ item, index }) {
  const layouts = [
    'lg:col-span-7',
    'lg:col-span-5 lg:pt-16',
    'lg:col-span-5',
    'lg:col-span-7 lg:pt-16',
    'lg:col-span-6',
    'lg:col-span-6 lg:pt-12',
  ];

  return (
    <article className={`group ${layouts[index]}`}>
      <a href={item.link} target="_blank" rel="noreferrer" aria-label={`Open ${item.title}`} className="block">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151b25]">
          <div className="aspect-[1.2] overflow-hidden">
            <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover brightness-90 contrast-105 saturate-75 transition duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100" />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090b10]/60 via-transparent to-transparent opacity-80 transition group-hover:opacity-45" />
          <span className="absolute bottom-4 left-4 rounded-lg border border-white/15 bg-[#0b1019]/80 px-3 py-1.5 mono text-[10px] font-medium tracking-wider text-[#dce7f4] backdrop-blur">0{index + 1}</span>
          <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-lg bg-[#86a9d8] text-[#0b1019] transition duration-300 group-hover:-translate-y-1"><HiArrowNarrowUp /></span>
        </div>
      </a>

      <div className="mt-5 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-[1fr_auto]">
        <div>
          <p className="mono text-[10px] uppercase tracking-[.18em] text-[#86a9d8]">{item.title}</p>
          <h3 className="mt-2 text-xl font-bold tracking-[-.03em] text-white">{item.full}</h3>
          <p className="mt-2 max-w-xl text-sm leading-6 text-[#9ba4b7]">{item.description}</p>
        </div>
        <div className="flex flex-wrap content-start gap-1.5 sm:max-w-32">
          {item.tags.map((tag) => <span key={tag} className="h-fit rounded-md border border-white/10 px-2 py-1 mono text-[9px] uppercase tracking-wide text-[#a8b0c3]">{tag}</span>)}
        </div>
      </div>
    </article>
  );
}
