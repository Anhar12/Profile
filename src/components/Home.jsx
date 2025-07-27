import anharImg from '../assets/Anhar.png';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center md:justify-between justify-around px-6 md:px-12 bg-gray-100 text-slate-800 pt-20 md:pb-20 pb-10 md:gap-20"
    >
      <div className="w-full md:w-2/3 text-left md:space-y-6 space-y-4">
        <h1 className="text-2xl md:text-4xl font-extrabold">
          Hi, I'm <span className="text-sky-600">
          Anhar Khoirun Najib
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-slate-600">Web Developer</h2>

        <p className="md:text-lg text-md text-slate-600 leading-relaxed text-justify">
          As a computer science student at the University of Mulawarman, I have a strong interest in web development,
          back-end development, cloud computing, machine learning, internet of things, and augmented reality.
          I am excited to further deepen my knowledge and experience in information technology to solve real-world problems.
        </p>

        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 relative md:px-6 md:py-3 px-4 py-2 font-semibold text-white
            bg-sky-500 transition-all duration-300 overflow-hidden group
            shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-lg hover:scale-105 active:scale-95
            ring-1 ring-sky-400/40 hover:ring-blue-500/50 no-underline"
        >
          <span className="relative z-10">View Portfolio</span>

          <svg
            className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>

          <span
            className="absolute inset-0 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          ></span>
        </a>
      </div>

      <div className="w-full md:w-1/3 flex justify-center">
        <div
          className="relative w-[85%] md:w-80 overflow-hidden md:shadow-xl shadow-md border-[6px] border-white"
        >
          <img
            src={anharImg}
            alt="Anhar Khoirun Najib"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
