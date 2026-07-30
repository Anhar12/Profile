import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { HiArrowNarrowUp } from 'react-icons/hi';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const send = (event) => {
    event.preventDefault();
    setLoading(true);

    // Both EmailJS templates are sent from the same form payload.
    Promise.all([
      emailjs.sendForm('service_if86g2g', 'template_e8a7s2s', form.current, 'EnEeqx7BWGL1z34ia'),
      emailjs.sendForm('service_if86g2g', 'template_bc6yb2m', form.current, 'EnEeqx7BWGL1z34ia'),
    ])
      .then(() => {
        form.current.reset();
        Swal.fire({ icon: 'success', title: 'Message sent successfully!', confirmButtonColor: '#3f6fa8' });
      })
      .catch(() => Swal.fire({ icon: 'error', title: 'Failed to send email', text: 'Please try again later.', confirmButtonColor: '#3f6fa8' }))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#11141c] px-5 py-20 md:px-10 md:py-28">
      <div className="noise absolute inset-0 opacity-30" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="mono text-xs uppercase tracking-[.18em] text-[#86a9d8]">03 / Contact</p>
          <h2 className="mt-4 text-5xl font-extrabold leading-[.95] tracking-[-.07em] md:text-7xl">Have an idea?<br /><span className="text-[#86a9d8]">Let's talk.</span></h2>
          <p className="mt-6 max-w-sm leading-7 text-[#a8b0c3]">Whether it's a collaboration, an exciting opportunity, or simply a hello, my inbox is open.</p>
          <a href="mailto:anharkhoirun@gmail.com" className="mt-7 inline-block border-b-2 border-[#86a9d8] pb-1 text-sm font-bold">anharkhoirun@gmail.com</a>
        </div>
        <form ref={form} onSubmit={send} className="rounded-2xl border border-white/10 bg-[#171b26] p-6 shadow-xl shadow-black/20 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2"><Field label="Your name" name="name" placeholder="How should I call you?" /><Field label="Email address" name="email" type="email" placeholder="you@email.com" /></div>
          <Field label="Subject" name="title" placeholder="What's this about?" />
          <label className="mt-6 block text-sm font-bold">Your message<textarea required name="message" rows="4" className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-[#86a9d8]" placeholder="Tell me a little bit about your project..." /></label>
          <button disabled={loading} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#3f6fa8] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#5589c7] disabled:opacity-60">{loading ? 'Sending...' : 'Send message'} <HiArrowNarrowUp size={18} /></button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder }) {
  return <label className="mt-6 block text-sm font-bold first:mt-0"><span>{label}</span><input required type={type} name={name} className="mt-2 w-full border-b border-white/20 bg-transparent py-3 outline-none transition focus:border-[#86a9d8]" placeholder={placeholder} /></label>;
}
