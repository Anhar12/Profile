import { HiBadgeCheck, HiBriefcase, HiChevronRight } from 'react-icons/hi';

const projects = [
  {
    label: 'Project 01',
    title: 'SHIELD',
    client: 'PT. Pertamina International Shipping',
    details: [
      'Built the web-based Medical Check-Up application end-to-end.',
      'Added bulk Excel upload, validation, automated field mapping, and certificate generation.',
      'Prepared reporting datasets and integrated Pertamina Idaman Login (SSO).',
    ],
  },
  {
    label: 'Project 02',
    title: 'S&D One',
    client: 'PT. Pertamina Patra Niaga',
    details: [
      'Developed a full-stack system for supply and distribution activity logging.',
      'Implemented Receiving, Storage, and Distribution workflows with business rules.',
      'Integrated Azure Blob Storage, Face Recognition, SSO, and Hangfire synchronization jobs.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#11141c] px-5 py-20 text-[#e9edf4] md:px-10 md:py-28">
      <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-[#3f6fa8]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="mono text-xs uppercase tracking-[.18em] text-[#86a9d8]">02 / Experience</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[.95] tracking-[-.06em] md:text-6xl">Building systems<br />that matter.</h2>
            <p className="mt-6 max-w-sm leading-7 text-[#a8b0c3]">Delivering production web applications for enterprise operations in Indonesia&apos;s energy ecosystem.</p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#171b26] px-4 py-3">
              <HiBriefcase className="text-[#86a9d8]" size={19} />
              <span className="mono text-[10px] uppercase tracking-wider text-[#c5d0ca]">July 2024 — Present / Remote</span>
            </div>
          </div>

          <article className="rounded-2xl border border-white/10 bg-[#171b26] p-5 shadow-xl shadow-black/20 md:p-8">
            <div className="flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="mono text-[10px] uppercase tracking-[.18em] text-[#86a9d8]">Current role</p>
                <h3 className="mt-2 text-3xl font-bold tracking-[-.04em]">.NET Developer</h3>
                <p className="mt-1 text-[#c5d0ca]">PT. Mitra Transformasi Digital</p>
              </div>
              <span className="w-fit rounded-full border border-[#86a9d8]/30 bg-[#3f6fa8]/15 px-3 py-1 mono text-[10px] uppercase tracking-wider text-[#a9c9f4]">Current</span>
            </div>

            <div className="divide-y divide-white/10">
              {projects.map((project) => (
                <div key={project.title} className="py-6 first:pt-6 last:pb-0">
                  <p className="mono text-[10px] uppercase tracking-[.18em] text-[#86a9d8]">{project.label}</p>
                  <h4 className="mt-2 text-xl font-bold">{project.title} <span className="font-medium text-[#a8b0c3]">/ {project.client}</span></h4>
                  <ul className="mt-4 grid gap-2">
                    {project.details.map((detail) => <li key={detail} className="flex gap-2 text-sm leading-6 text-[#a8b0c3]"><HiChevronRight className="mt-1 shrink-0 text-[#86a9d8]" />{detail}</li>)}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-7 flex items-center gap-2 text-sm text-[#c5d0ca]"><HiBadgeCheck className="text-[#86a9d8]" size={18} /> Focused on reliable, scalable operational systems.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
