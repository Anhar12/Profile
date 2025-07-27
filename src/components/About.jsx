import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

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

export default function About() {
  return (
    <section id="about" className="py-10 md:py-20 md:px-6 bg-white text-slate-800">
      <div className="md:flex justify-between">
        <div className="md:w-1/2 px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold md:mb-6 mb-2 text-sky-600 uppercase">About Me</h2>
          <p className="text-slate-600 leading-relaxed text-justify">
            I am a computer science student at the University of Mulawarman, with a keen interest in web development,
            back-end programming, cloud computing, machine learning, internet of things, and augmented reality. 
            Throughout my studies, I have gained valuable experience working on a variety of projects, including websites, 
            back-end applications, cloud-based solutions, IoT systems, desktop applications, and augmented reality applications. 
            What drives me is a deep passion for technology and a constant desire to learn about the latest advancements in the field 
            of information technology.
          </p>
        </div>

        <div id="contact" className="md:w-1/2 px-6 mt-8 md:mt-0">
          <h2 className="text-2xl md:text-4xl font-extrabold md:mb-6 mb-2 text-sky-600">Feel Free to Reach Out</h2>
          <p className="text-slate-600 text-base leading-relaxed md:mb-6 mb-4 text-justify">
            As I continue my educational journey, I am excited to delve deeper into the realms of web development, cloud computing, 
            machine learning, and augmented reality, with the ultimate goal of leveraging these technologies to solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
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
