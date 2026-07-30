import { HiBadgeCheck, HiBriefcase, HiChevronRight } from 'react-icons/hi';

const achievements = [
  'Built the SHIELD Medical Check-Up application end-to-end, including certificates and reporting datasets.',
  'Created Receiving, Storage, and Distribution workflows for S&D One with business rules and calculations.',
  'Integrated Azure Blob Storage, Face Recognition, Pertamina Idaman Login (SSO), and Hangfire jobs.',
];

export default function Experience() {
  return (
    <section id="experience" className="section-anchor relative overflow-hidden bg-[#13271d] py-20 text-[#f7f3e8] md:py-32">
      <div className="absolute inset-x-0 top-0 h-16 bg-[#f7f3e8] [clip-path:polygon(0_0,100%_0,100%_5%,95%_63%,89%_16%,82%_70%,73%_10%,65%_68%,54%_16%,45%_74%,34%_9%,24%_67%,14%_17%,4%_70%,0_14%)]" />
      <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full border-[45px] border-[#6e8d4d]/15" />
      <div className="relative mx-auto max-w-7xl px-5 pt-8 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="section-kicker text-[#a8bf77]">03 — Basecamp log</p>
            <h2 className="section-title mt-3 max-w-sm">Where the trail<br /><em>gets real.</em></h2>
            <p className="mt-6 max-w-sm leading-7 text-[#e8dfc9]/80">A record of the systems, responsibilities, and practical challenges that shaped my development journey.</p>
            <div className="mt-8 inline-flex items-center gap-3 border border-[#a8bf77]/40 bg-[#1d4532] px-4 py-3"><HiBriefcase className="text-[#c66a45]" size={20} /><span className="mono-label text-[.6rem] text-[#e8dfc9]">1 ACTIVE EXPEDITION</span></div>
          </div>

          <article className="relative border border-[#a8bf77]/35 bg-[#1d4532]/55 p-5 shadow-[10px_10px_0_#0c2419] md:p-8">
            <span className="absolute -top-3 right-5 bg-[#c66a45] px-3 py-2 text-[.6rem] font-bold tracking-[.15em] text-white">CURRENT</span>
            <div className="border-b border-[#a8bf77]/30 pb-6">
              <p className="mono-label text-[.62rem] text-[#a8bf77]">JULY 2024 — PRESENT / REMOTE</p>
              <h3 className="display-face mt-3 text-3xl font-bold md:text-4xl">.NET Developer</h3>
              <p className="mt-1 font-semibold text-[#e8dfc9]">PT. Mitra Transformasi Digital</p>
            </div>
            <div className="grid gap-8 py-7 md:grid-cols-2">
              <div><p className="mono-label text-[.6rem] text-[#c66a45]">MISSION 01</p><h4 className="mt-2 font-bold">SHIELD · PT. Pertamina International Shipping</h4><p className="mt-3 text-sm leading-6 text-[#e8dfc9]/80">Developed a web-based Medical Check-Up platform with bulk Excel validation, automated field mapping, final medical results, document generation, Power BI-ready data, and SSO.</p></div>
              <div><p className="mono-label text-[.6rem] text-[#c66a45]">MISSION 02</p><h4 className="mt-2 font-bold">S&amp;D One · PT. Pertamina Patra Niaga</h4><p className="mt-3 text-sm leading-6 text-[#e8dfc9]/80">Developed a full-stack operational logging system with dynamic workflows, Stored Procedures, reusable templates, Azure Blob Storage, dynamic APIs, Face Recognition, SSO, and scheduled jobs.</p></div>
            </div>
            <div className="border-t border-[#a8bf77]/30 pt-6">
              <p className="mono-label text-[.6rem] text-[#a8bf77]">TRAIL MARKERS</p>
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {achievements.map((achievement) => <li key={achievement} className="flex gap-2 text-sm leading-6 text-[#e8dfc9]/85"><HiChevronRight className="mt-1 shrink-0 text-[#c66a45]" />{achievement}</li>)}
              </ul>
            </div>
            <div className="mt-7 flex items-center gap-2 text-xs text-[#a8bf77]"><HiBadgeCheck size={17} /> Building production web systems for a national energy ecosystem.</div>
          </article>
        </div>
      </div>
    </section>
  );
}
