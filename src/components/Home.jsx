import { HiArrowDown, HiArrowNarrowUp } from 'react-icons/hi';
import anharImg from '../assets/Anhar3.jpg';

export default function Home() {
  return (
    <section id="home" className="paper-dots relative flex min-h-screen items-center overflow-hidden px-5 pb-14 pt-28 md:px-10">
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
        <div className="enter">
          <p className="inline-block border-2 border-[#202321] bg-[#68bcb9] px-3 py-1 mono text-[10px] uppercase tracking-wider">Status / available for opportunities</p>
          <h1 className="mt-7 max-w-3xl text-5xl font-extrabold leading-[.88] tracking-[-.065em] sm:text-6xl md:text-8xl">Building digital systems <span className="hand block pt-3 text-[#4a9290]">that work.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 md:text-lg">I&apos;m Anhar Khoirun Najib — a web developer who turns ideas into practical, reliable digital products.</p>
          <div className="mt-8 flex flex-wrap gap-4"><a href="#portfolio" className="scribble-button inline-flex items-center gap-2 bg-[#202321] px-5 py-3 text-sm font-extrabold text-[#f7f6f0]">View projects <HiArrowNarrowUp size={18} /></a><a href="#about" className="inline-flex items-center gap-2 border-b-2 border-[#202321] px-1 py-3 text-sm font-extrabold">About me <HiArrowDown size={17} /></a></div>
          <div className="mt-14 grid max-w-md grid-cols-2 border-y-2 border-[#202321] py-4"><div className="border-r-2 border-[#202321]"><b className="hand block text-3xl leading-none">06+</b><span className="mono text-[9px] uppercase tracking-wider">Selected projects</span></div><div className="pl-5"><b className="hand block text-3xl leading-none">Full-stack</b><span className="mono text-[9px] uppercase tracking-wider">Developer focus</span></div></div>
        </div>
        <div className="enter enter-delay relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative border-2 border-[#202321] bg-[#dfe1da] p-3 shadow-[5px_5px_0_#202321] group">
            <div className="absolute -left-2 -top-2 border-2 border-[#202321] bg-[#68bcb9] px-2 py-1 mono text-[9px] uppercase">profile / 01</div>
            <img src={anharImg} alt="Anhar Khoirun Najib" className="aspect-[4/5] w-full border border-[#202321] object-cover object-top grayscale-50 contrast-125 group-hover:grayscale-0 transition-color duration-500" />
            <div className="mt-3 flex items-center justify-between border-t-2 border-[#202321] pt-2"><span className="mono text-[9px] uppercase tracking-wider">Based in Samarinda, ID</span><span className="hand text-lg">web dev</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
