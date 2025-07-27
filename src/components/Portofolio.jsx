import pisImage from '../assets/pis.jpeg';
import sndImage from '../assets/snd.png';
import dishcoverImage from '../assets/dishcover.jpeg';
import ujangImage from '../assets/ujangtech.png';
import fireImage from '../assets/Fire.jpg';
import kukarImage from '../assets/logokukar.png';

const portfolioItems = [
  {
    title: 'SHIELD',
    titleFull : 'Shipping Health Integrated Electronic Data (SHIELD)',
    description:
      "A web-based Medical Check-Up (MCU) system for seafarers, vendors, and company doctors. Enables registration, examination, result uploads, and verification - PT. Pertamina International Shipping.",
    image: pisImage,
    tags: ['ASP.Net', 'SQL Server', 'ASP.Net Maker'],
    link: 'https://apps.pertamina.com/shield/Login',
  },
  {
    title: 'S&D One',
    titleFull : 'S&D One',
    description:
      "An integrated platform for recording and monitoring all processes and activities within PT. Pertamina Patra Niaga. Designed to enhance operational transparency, accountability, and efficiency across departments.",
    image: sndImage,
    tags: ['ASP.Net', 'SQL Server', 'ASP.Net Maker'],
    link: 'https://ppn.mitralapps.com/sndone/login',
  },
  {
    title: 'DISHCOVER',
    titleFull : 'DISHCOVER',
    description:
      "An Android app that recommends cooking recipes based on food ingredient images. Uses image recognition to identify ingredients and suggest suitable dishes instantly.",
    image: dishcoverImage,
    tags: ['Node.js', 'Express.js', 'Kotlin', 'CNN', 'Google Cloud'],
    link: 'https://github.com/Project-Dishcover',
  },
  {
    title: 'UjangsTech',
    titleFull : 'UjangsTech',
    description:
      "An Android-based IoT application for real-time air quality monitoring using ESP32, Antares broker, and MQTT protocol. Provides live sensor data and environmental insights.",
    image: ujangImage,
    tags: ['Kodular', 'Antares', 'ESP 32', 'Google Cloud'],
    link: 'https://github.com/Anhar12/UAS-IOT',
  },
  {
    title: 'Fire Alarm',
    titleFull : 'Fire Alarm',
    description:
      "An Android-based IoT fire alarm system that detects indoor fire and identifies the presence of living beings in the room, ensuring early warnings and safety alerts.",
    image: fireImage,
    tags: ['Kodular', 'MQTT', 'ESP 32'],
    link: 'https://github.com/Anhar12/pa-praktikum-iot-unmul-b4',
  },
  {
    title: 'Village Profile',
    titleFull : 'Teluk Dalam Village Profile',
    description:
      "A responsive profile website for Kelurahan Teluk Dalam, providing public information, news, and services to support community engagement and transparency.",
    image: kukarImage,
    tags: ['Javascript', 'Tailwind', 'Vercel'],
    link: 'https://www.telukdalam.my.id/',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-10 md:py-20 px-6 bg-gray-100 text-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-sky-600">Portfolio</h2>
          <p className="mt-2 text-slate-500">Some of the projects I've built.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 cursor-pointer">
              {/* Gambar */}
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />

              {/* Judul (di luar overlay) */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-sky-800/70 via-sky-800/50 to-transparent px-4 pt-3 pb-1 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center px-4 text-white backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-2">{item.titleFull}</h3>
                <p className="text-xs text-slate-200 mb-4">{item.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/10 border border-white/30 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a
                  href={item.link}
                  className="relative inline-block border-b-[1.5px] border-white text-white flex gap-2 items-center transition-all duration-300 bg-gradient-to-r from-sky-300 to-sky-300 bg-[length:0%_100%] bg-left bg-no-repeat hover:bg-[length:100%_100%] hover:text-transparent bg-clip-text bg-white hover:border-sky-300"
                >
                  View Project <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}