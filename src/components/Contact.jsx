import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import Wave1 from '../assets/wave1.png'
import Wave2 from '../assets/wave2.png'
import Wave3 from '../assets/wave3.png'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    $('#loading-spinner').removeClass('hidden').addClass('flex');

    const formData = new FormData(form.current);
    const formProps = Object.fromEntries(formData);

    if (!formProps.name || !formProps.email || !formProps.title || !formProps.message) {
      $('#loading-spinner').removeClass('flex').addClass('hidden');
      Swal.fire({
        icon: "error",
        title: "Failed to send email! Please fill all the fields."
      });
      return;
    }

    Promise.all([
      emailjs.sendForm(
        'service_if86g2g',
        'template_e8a7s2s',
        form.current,
        'EnEeqx7BWGL1z34ia'
      ),
      emailjs.sendForm(
        'service_if86g2g',
        'template_bc6yb2m',
        form.current,
        'EnEeqx7BWGL1z34ia'
      )
    ]).then(() => {
      $('#loading-spinner').removeClass('flex').addClass('hidden');
      form.current.reset();
      $('label').removeClass('top-0 px-1 text-xs left-[-4px]').addClass('top-1/2 text-sm left-0');
      Swal.fire({
        icon: "success",
        title: "Email sent successfully!"
      });
    }).catch((error) => {
      $('#loading-spinner').removeClass('flex').addClass('hidden');
      Swal.fire({
        icon: "error",
        title: "Failed to send email! Please try again later."
      });
      console.error(error);
    });
  };

  $(document).ready(function () {
    let inputMap = [
      '#name',
      '#email',
      '#title'
    ];

    inputMap.forEach(selector => {
      const input = $(selector);

      input.on('change', function () {
        const val = $(this).val();
        const label = $(this).prev();

        if (val) {
          label.addClass('top-0 px-1 text-xs left-[-4px]').removeClass('top-1/2 text-sm left-0');
        } else {
          label.removeClass('top-0 px-1 text-xs left-[-4px]').addClass('top-1/2 text-sm left-0');
        }
      });

      const icon = input.next();

      icon.on('click', function () {
        input.focus();
      });
    });
  });

  return (
    <section
      id="contact"
      className="bg-white text-slate-800 py-10 md:py-20 relative"
    >
      <div className='flex flex-col items-center relative z-30 md:w-1/2 w-[90%] mx-auto bg-white p-8 border border-slate-400 rounded'>
        <div className="flex flex-col justify-center text-center mb-6">
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-sky-600">CONTACT ME</h2>
          <p className="mt-2 text-slate-500">Get in touch with me for any questions or collaboration opportunities.</p>
        </div>

        <div className='w-full'>
          <form ref={form} onSubmit={sendEmail} autoComplete='off' className='space-y-4'>
            <div class="relative group">
              <label for="name" class="text-gray-500 text-md absolute transition-all duration-300 transform -translate-y-1/2 top-1/2 left-0 mx-4 bg-white group-focus-within:top-0 group-focus-within:left-[-4px] group-focus-within:text-xs group-focus-within:px-1 group-focus-within:text-sky-600">Name</label>
              <input required type="text" id="name" name="name" class="w-full py-2 px-4 ring-2 ring-gray-300 outline-none focus:ring-sky-500 text-md"></input>
              <span class="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-sky-600 p-2 cursor-pointer transition-all duration-300">
                <i class="fa-solid fa-user"></i>
              </span>
            </div>

            <div class="relative group">
              <label for="email" class="text-gray-500 text-md absolute transition-all duration-300 transform -translate-y-1/2 top-1/2 left-0 mx-4 bg-white group-focus-within:top-0 group-focus-within:left-[-4px] group-focus-within:text-xs group-focus-within:px-1 group-focus-within:text-sky-600">Email</label>
              <input required type="email" id="email" name="email" class="w-full py-2 px-4 ring-2 ring-gray-300 outline-none focus:ring-sky-500 text-md"></input>
              <span class="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-sky-600 p-2 cursor-pointer transition-all duration-300">
                <i class="fa-solid fa-at"></i>
              </span>
            </div>

            <div class="relative group">
              <label for="title" class="text-gray-500 text-md absolute transition-all duration-300 transform -translate-y-1/2 top-1/2 left-0 mx-4 bg-white group-focus-within:top-0 group-focus-within:left-[-4px] group-focus-within:text-xs group-focus-within:px-1 group-focus-within:text-sky-600">Title</label>
              <input required type="text" id="title" name="title" class="w-full py-2 px-4 ring-2 ring-gray-300 outline-none focus:ring-sky-500 text-md"></input>
              <span class="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-sky-600 p-2 cursor-pointer transition-all duration-300">
                <i class="fa-solid fa-pen-to-square"></i>
              </span>
            </div>

            <div class="relative group space-y-1">
              <label for="message" class="text-gray-500 text-md transition-all duration-300 transform group-focus-within:text-sky-600">Message</label>
              <textarea required id="message" name="message" class="w-full py-2 px-4 ring-2 ring-gray-300 outline-none focus:ring-sky-500 text-md" rows="3"></textarea>
            </div>

            <button
              type="submit"
              className='inline-flex w-full gap-4 justify-center relative md:px-6 md:py-3 px-4 py-2 font-semibold text-white
                bg-sky-500 transition-all duration-300 overflow-hidden group
                shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]
                ring-1 ring-sky-400/40 hover:ring-blue-500/50'
            >
              <span className="relative z-10">Send Message</span>

              <div className='relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'>
                <i class="fa-solid fa-paper-plane rotate-45 origin-center"></i>
              </div>

              <span
                className="absolute inset-0 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
              ></span>
            </button>
          </form>
        </div>
      </div>

      <div className='absolute bottom-0 w-full text-sky-300 z-20'>
        <img src={Wave1} className='w-full h-[300px] object-cover' />
      </div>

      <div className='absolute bottom-[30px] z-10 w-full text-sky-300'>
        <img src={Wave2} className='w-full h-[300px] object-cover' />
      </div>

      <div className='absolute bottom-[60px] z-0 w-full text-sky-300'>
        <img src={Wave3} className='w-full h-[300px] object-cover' />
      </div>

      <div id='loading-spinner' className="fixed top-0 left-0 w-full hidden h-full justify-center items-center bg-slate-900/50 z-[70]">
        <div role="status">
          <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-sky-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </section>
  );
}
