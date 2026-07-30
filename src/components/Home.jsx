import { HiArrowDown, HiArrowRight, HiLocationMarker } from 'react-icons/hi';
import anharImage from '../assets/Anhar.png';

export default function Home() {
  return (
    <section id="home" className="section-anchor relative isolate min-h-screen overflow-hidden bg-[#13271d] pt-20 text-[#f7f3e8]">
      {/* Oversized organic forms create a forest canopy without adding new assets. */}
      <div className="absolute -right-24 top-14 h-[34rem] w-[34rem] rounded-full border border-[#a8bf77]/25" />
      <div className="absolute -right-12 top-36 h-[25rem] w-[25rem] rounded-full border border-[#a8bf77]/15" />
      <div className="absolute bottom-0 left-0 h-28 w-full bg-[#1d4532] [clip-path:polygon(0_100%,0_45%,10%_65%,20%_10%,31%_62%,43%_28%,54%_70%,68%_15%,81%_66%,92%_30%,100%_60%,100%_100%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-8 px-5 pb-24 pt-12 md:grid-cols-[1.05fr_.95fr] md:px-8 md:pt-16">
        <div className="max-w-2xl">
          <div className="mono-label mb-7 flex items-center gap-3 text-[.68rem] text-[#a8bf77]"><span className="h-px w-12 bg-[#a8bf77]" /> 01 — THE EXPLORER</div>
          <p className="mb-3 flex items-center gap-2 text-sm text-[#e8dfc9]"><HiLocationMarker className="text-[#c66a45]" /> Samarinda, East Kalimantan</p>
          <h1 className="display-face max-w-xl text-5xl font-bold leading-[.92] tracking-[-.055em] sm:text-6xl lg:text-8xl">Anhar<br /><em className="text-[#a8bf77]">Khoirun Najib.</em></h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#e8dfc9]/85 md:text-lg">Web developer and computer science student, mapping practical technology into tools that solve real-world problems.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#portfolio" className="forest-button">Explore the work <HiArrowRight /></a>
            <a href="#about" className="group inline-flex items-center gap-2 text-sm font-bold text-[#e8dfc9] no-underline hover:text-[#a8bf77]">My trail <HiArrowDown className="transition-transform group-hover:translate-y-1" /></a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md self-end md:max-w-none">
          <div className="absolute -left-5 top-[21%] z-10 bg-[#c66a45] px-3 py-2 text-[#fffdf5] shadow-lg"><span className="mono-label text-[.6rem]">WEB DEVELOPER</span></div>
          <div className="relative overflow-hidden border-x border-t border-[#a8bf77]/50 bg-[#1d4532] pt-6">
            <img src={anharImage} alt="Anhar Khoirun Najib" className="mx-auto block max-h-[630px] w-full object-contain object-bottom grayscale-[15%]" />
          </div>
          <p className="absolute -bottom-10 right-0 max-w-[13rem] text-right text-xs leading-5 text-[#e8dfc9]/70"><span className="mono-label text-[.57rem] text-[#a8bf77]">EST. 2025</span><br />A journal of code, curiosity, and craft.</p>
        </div>
      </div>
    </section>
  );
}
