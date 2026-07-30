import { HiArrowDown, HiArrowNarrowUp } from 'react-icons/hi';
import anharImg from '../assets/Anhar4.jpg';

export default function Home() {
  return (
    <section id="home" className="grid-lines relative flex min-h-screen items-center overflow-hidden bg-[#090b10] px-5 pb-12 pt-28 md:px-10">
      <div className="pointer-events-none absolute -right-32 top-20 h-[32rem] w-[32rem] rounded-full bg-[#3f6fa8]/25 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div className="enter">
          <p className="mono mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[.18em] text-[#86a9d8]"><span className="h-2 w-2 rounded-full bg-[#86a9d8]" /> Available for opportunities</p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[.98] tracking-[-.075em] text-white sm:text-6xl md:text-8xl">Building digital systems that <span className="text-[#86a9d8]">deliver results.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-[#a8b0c3] md:text-lg">I'm Anhar Khoirun Najib — a professional web developer who turns ideas into thoughtful, reliable digital products.</p>
          <div className="mt-9 flex flex-wrap gap-3"><a href="#portfolio" className="inline-flex items-center gap-2 rounded-xl bg-[#3f6fa8] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#5589c7]">Explore my work <HiArrowNarrowUp size={18} /></a><a href="#about" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-[#e9edf4] transition hover:border-[#86a9d8]">About me <HiArrowDown size={17} /></a></div>
          <div className="mt-14 flex gap-8 border-t border-white/15 pt-5"><div><b className="block text-2xl tracking-tight">6+</b><span className="mono text-[10px] uppercase tracking-wider text-[#8791a8]">Selected projects</span></div><div><b className="block text-2xl tracking-tight">Full-stack</b><span className="mono text-[10px] uppercase tracking-wider text-[#8791a8]">Developer focus</span></div></div>
        </div>

        {/* Profile visual and location badge. */}
        <div className="enter enter-delay relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="float relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border border-[#5b789c]/35 bg-[#162131] p-3 shadow-2xl shadow-black/30">
            <img src={anharImg} alt="Anhar Khoirun Najib" className="h-full w-full rounded-[1.2rem] object-cover object-top grayscale-[18%] contrast-105" />
            <div className="absolute bottom-7 left-0 right-0 mx-auto flex w-[82%] items-center justify-between rounded-xl border border-white/15 bg-[#0c1119]/90 px-4 py-3 text-white backdrop-blur">
              <span><span className="mono block text-[9px] uppercase tracking-widest text-[#8f9db1]">Based in</span><b className="text-sm">Samarinda, ID</b></span>
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#86a9d8] text-[#0c1119]"><HiArrowNarrowUp /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
