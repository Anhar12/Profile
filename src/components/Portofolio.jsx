import { HiArrowRight, HiExternalLink, HiMap } from 'react-icons/hi';
import pisImage from '../assets/pis.jpeg';
import sndImage from '../assets/snd.png';
import dishcoverImage from '../assets/dishcover.jpeg';
import ujangImage from '../assets/ujangtech.png';
import fireImage from '../assets/Fire.jpg';
import kukarImage from '../assets/logokukar.png';

// Portfolio entries are intentionally kept as data, so new work only needs one object.
const portfolioItems = [
  {
    title: 'SHIELD',
    subtitle: 'Shipping Health Integrated Electronic Data',
    description: 'A web-based Medical Check-Up system for seafarers, vendors, and company doctors. Enables registration, examination, result uploads, and verification for PT. Pertamina International Shipping.',
    image: pisImage,
    tags: ['ASP.Net', 'SQL Server', 'ASP.Net Maker'],
    link: 'https://apps.pertamina.com/shield/Login',
    color: '#c66a45',
  },
  {
    title: 'S&D One',
    subtitle: 'Integrated operational platform',
    description: 'A platform for recording and monitoring processes and activities at PT. Pertamina Patra Niaga, designed to improve operational transparency, accountability, and efficiency.',
    image: sndImage,
    tags: ['ASP.Net', 'SQL Server', 'ASP.Net Maker'],
    link: 'https://ppn.mitralapps.com/sndone/login',
    color: '#d9a441',
  },
  {
    title: 'DISHCOVER',
    subtitle: 'Recipe discovery through vision',
    description: 'An Android app that recommends cooking recipes from food ingredient images, using image recognition to identify ingredients and suggest suitable dishes.',
    image: dishcoverImage,
    tags: ['Node.js', 'Express.js', 'Kotlin', 'CNN', 'Google Cloud'],
    link: 'https://github.com/Project-Dishcover',
    color: '#6e8d4d',
  },
  {
    title: 'UjangsTech',
    subtitle: 'Live air-quality monitor',
    description: 'An Android IoT application for real-time air-quality monitoring using ESP32, Antares broker, and MQTT protocol with live environmental insights.',
    image: ujangImage,
    tags: ['Kodular', 'Antares', 'ESP 32', 'Google Cloud'],
    link: 'https://github.com/Anhar12/UAS-IOT',
    color: '#4b8794',
  },
  {
    title: 'Fire Alarm',
    subtitle: 'Early-warning IoT system',
    description: 'An Android IoT fire alarm that detects indoor fire and the presence of living beings, providing early warnings to improve safety.',
    image: fireImage,
    tags: ['Kodular', 'MQTT', 'ESP 32'],
    link: 'https://github.com/Anhar12/pa-praktikum-iot-unmul-b4',
    color: '#bb5b39',
  },
  {
    title: 'Village Profile',
    subtitle: 'Teluk Dalam Village Profile',
    description: 'A responsive public-information website for Kelurahan Teluk Dalam, offering news, services, and updates to support community engagement.',
    image: kukarImage,
    tags: ['Javascript', 'Tailwind', 'Vercel'],
    link: 'https://www.telukdalam.my.id/',
    color: '#6e8d4d',
  },
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
    <section id="portfolio" className="section-anchor relative overflow-hidden bg-[#dce3c1] py-20 md:py-32">
      <div className="absolute -right-24 top-1/4 h-[34rem] w-[34rem] rounded-full border-[35px] border-[#6e8d4d]/15" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_.85fr] md:items-end">
          <div>
            <p className="section-kicker">04 — Selected coordinates</p>
            <h2 className="section-title mt-3 text-[#13271d]">The project<br /><em>trail map.</em></h2>
          </div>
          <div className="border-l-2 border-[#c66a45] pl-5 text-[#35523d]"><p className="leading-7">A collection of six project routes across enterprise systems, mobile applications, IoT, and public-facing digital services.</p><span className="mono-label mt-4 inline-flex items-center gap-2 text-[.6rem] text-[#6e8d4d]"><HiMap size={16} /> 06 MARKERS DISCOVERED</span></div>
        </div>

        <div className="relative mt-14 grid gap-10 lg:grid-cols-2">
          <div className="absolute bottom-2 left-1/2 top-2 hidden border-l-2 border-dashed border-[#6e8d4d]/40 lg:block" />
          {portfolioItems.map((item, index) => <TrailCard key={item.title} item={item} index={index} />)}
        </div>
        <a href="#contact" className="forest-button mx-auto mt-14 w-fit">Start a new expedition <HiArrowRight /></a>
      </div>
    </section>
  );
}
