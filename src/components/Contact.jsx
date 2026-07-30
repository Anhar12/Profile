import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { HiArrowRight, HiPaperAirplane } from 'react-icons/hi';

const fields = [
  { id: 'name', type: 'text', label: 'Your name' },
  { id: 'email', type: 'email', label: 'Email address' },
  { id: 'title', type: 'text', label: 'Subject' },
];

export default function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  // EmailJS keeps the existing two-recipient delivery behavior from the original site.
  const sendEmail = async (event) => {
    event.preventDefault();
    const form = formRef.current;
    if (!form?.checkValidity()) return;

    setIsSending(true);
    try {
      await Promise.all([
        emailjs.sendForm('service_if86g2g', 'template_e8a7s2s', form, 'EnEeqx7BWGL1z34ia'),
        emailjs.sendForm('service_if86g2g', 'template_bc6yb2m', form, 'EnEeqx7BWGL1z34ia'),
      ]);
      form.reset();
      Swal.fire({ icon: 'success', title: 'Message sent!', text: 'Thanks for reaching out. I will get back to you soon.' });
    } catch (error) {
      console.error('EmailJS error:', error);
      Swal.fire({ icon: 'error', title: 'Message not sent', text: 'Please try again later.' });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section-anchor relative overflow-hidden bg-[#dce3c1] py-20 md:py-32">
      <div className="absolute -bottom-48 -left-32 h-[32rem] w-[32rem] rounded-full border-[50px] border-[#6e8d4d]/15" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[.85fr_1.15fr] md:px-8">
        <div className="md:pt-6">
          <p className="section-kicker">05 — Send a signal</p>
          <h2 className="section-title mt-3 max-w-md">Let’s make a<br /><em>new path.</em></h2>
          <p className="mt-7 max-w-sm leading-7 text-[#35523d]">Have a question or a collaboration opportunity? Leave a note at the trailhead and I’ll get back to you.</p>
          <a href="mailto:anharkhoirun@gmail.com" className="mt-9 inline-flex items-center gap-2 border-b-2 border-[#c66a45] pb-1 font-bold text-[#13271d] no-underline hover:text-[#c66a45]">anharkhoirun@gmail.com <HiArrowRight /></a>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="bg-[#f7f3e8] p-6 shadow-[9px_9px_0_#1d4532] md:p-10" autoComplete="on">
          <div className="mb-8 flex items-center justify-between border-b border-[#13271d]/20 pb-4"><span className="mono-label text-[.62rem] text-[#6e8d4d]">FIELD MESSAGE</span><HiPaperAirplane className="text-[#c66a45]" size={22} /></div>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {fields.slice(0, 2).map(({ id, type, label }) => <label key={id} htmlFor={id} className="text-sm font-bold text-[#35523d]">{label}<input id={id} name={id} type={type} required className="field-input mt-2" /></label>)}
          </div>
          <label htmlFor="title" className="mt-6 block text-sm font-bold text-[#35523d]">{fields[2].label}<input id="title" name="title" type="text" required className="field-input mt-2" /></label>
          <label htmlFor="message" className="mt-6 block text-sm font-bold text-[#35523d]">Your message<textarea id="message" name="message" rows="4" required className="field-input mt-2 resize-y" /></label>
          <button type="submit" disabled={isSending} className="forest-button mt-8 w-full justify-center disabled:cursor-wait disabled:opacity-70">{isSending ? 'Sending your signal…' : 'Send message'} <HiArrowRight /></button>
        </form>
      </div>
    </section>
  );
}
