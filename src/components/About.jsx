import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaFacebookF, FaPhone, FaAddressBook } from "react-icons/fa";

const SocialIcon = [
    {
        href: "mailto:anharkhoirun@gmail.com",
        Icon: FaEnvelope,
    },
    {
        href: "https://www.linkedin.com/in/anhar-khoirun-najib-96956621a/",
        Icon: FaLinkedin,
    },
    {
        href: "https://github.com/anharkhoirun",
        Icon: FaGithub,
    },
    {
        href: "https://wa.me/6281234567890",
        Icon: FaWhatsapp,
    },
    {
        href: "https://www.instagram.com/anharkhoirun/",
        Icon: FaInstagram,
    },
    {
        href: "https://www.facebook.com/anharkhoirun/",
        Icon: FaFacebookF,
    },
]

const contact = [
  {
    description: 'anharkhoirun@gmail.com',
    icon: FaEnvelope,
  },
  {
    description: '+62 858 4572 3207',
    icon: FaPhone,
  },
  {
    description: 'Samarinda, East Borneo',
    icon: FaAddressBook,
  },
]

export default function About() {
  return (
    <section id="about" className="py-10 md:py-20 md:px-6 bg-white text-slate-800">
      <div className="md:flex justify-between">
        <div className="md:w-1/2 px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold md:mb-6 mb-2 text-sky-600 uppercase">About Me</h2>
          <p className="text-slate-600 leading-relaxed text-justify">
            I am a dedicated web developer with expertise in both frontend and backend development. As a .NET Developer, I played a key role in developing Shipping Health Integrated ELectronic Data (SHIELD) for Pertamina International Shipping and Supply & Distribution One (S&D One) fro Pertamina Patra Niaga. Skilled in frameworks such as ASP.NET, Django, and Laravel, I continually strive to expand my expertise. I am also deeply passionate about emerging technologies, including IoT, Augmented Reality (AR), Cloud Computing, and Machine Learning, which drive my curiosity and innovation in the tech field.
          </p>
        </div>

        <div className="md:w-1/2 px-6 mt-8 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-extrabold md:mb-6 mb-2 text-sky-600">Feel Free To Reach Out</h2>
          
          <div className="space-y-4 mb-6">
            {contact.map((item, index) => (
              <div key={index} className="flex items-center">
                <item.icon size={20} className="mr-2" />
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            {SocialIcon.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-500 text-slate-700 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
