import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { HiArrowNarrowUp } from 'react-icons/hi';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const send = (event) => {
    event.preventDefault(); setLoading(true);
    Promise.all([emailjs.sendForm('service_if86g2g', 'template_e8a7s2s', form.current, 'EnEeqx7BWGL1z34ia'), emailjs.sendForm('service_if86g2g', 'template_bc6yb2m', form.current, 'EnEeqx7BWGL1z34ia')]).then(() => { form.current.reset(); Swal.fire({ icon: 'success', title: 'Message sent successfully!', confirmButtonColor: '#4a9290' }); }).catch(() => Swal.fire({ icon: 'error', title: 'Failed to send email', text: 'Please try again later.', confirmButtonColor: '#4a9290' })).finally(() => setLoading(false));
  };
  return (
    <section id="contact" className="paper-dots px-5 py-20 md:px-10 md:py-28"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="mono text-xs uppercase tracking-[.18em]">04 / Contact</p><h2 className="mt-4 text-5xl font-extrabold leading-[.88] tracking-[-.065em] md:text-7xl">Have an idea?<br /><span className="hand text-[#4a9290]">Let&apos;s talk.</span></h2><div className="sketch-rule mt-7 max-w-sm" /><p className="mt-6 max-w-sm leading-7">Whether it&apos;s a collaboration, an exciting opportunity, or simply a hello, my inbox is open.</p><a href="mailto:anharkhoirun@gmail.com" className="mt-7 inline-block border-b-2 border-[#202321] pb-1 text-sm font-extrabold">anharkhoirun@gmail.com</a></div><form ref={form} onSubmit={send} className="scribble-border bg-[#f7f6f0] p-5 md:p-7"><div className="mb-6 flex items-center justify-between border-b-2 border-[#202321] pb-3"><span className="hand text-xl">Send a message</span><span className="mono text-[9px] uppercase">form / 04</span></div><div className="grid gap-5 sm:grid-cols-2"><Field label="Your name" name="name" placeholder="How should I call you?" /><Field label="Email address" name="email" type="email" placeholder="you@email.com" /></div><Field label="Subject" name="title" placeholder="What's this about?" /><label className="mt-6 block text-sm font-extrabold">Your message<textarea required name="message" rows="4" className="mt-2 w-full resize-none border-2 border-[#202321] bg-[#f7f6f0] p-3 outline-none focus:bg-[#dfe1da]" placeholder="Tell me a little bit about your project..." /></label><button disabled={loading} className="scribble-button mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#68bcb9] px-6 py-3.5 text-sm font-extrabold disabled:opacity-60">{loading ? 'Sending...' : 'Send message'} <HiArrowNarrowUp size={18} /></button></form></div></section>
  );
}
function Field({ label, name, type = 'text', placeholder }) { return <label className="mt-6 block text-sm font-extrabold first:mt-0"><span>{label}</span><input required type={type} name={name} className="mt-2 w-full border-2 border-[#202321] bg-[#f7f6f0] px-3 py-2.5 outline-none focus:bg-[#dfe1da]" placeholder={placeholder} /></label>; }
