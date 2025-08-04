import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Categories = [
  'Programming',
  'Web Developer',
  'Cloud Computing',
  'Artificial Intelligence',
  'Technology'
]

const Links = [
  'Home',
  'About',
  'Portfolio',
  'Contact'
]

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
    href: "https://github.com/Anhar12",
    Icon: FaGithub,
  },
  {
    href: "https://wa.me/085845723207",
    Icon: FaWhatsapp,
  },
  {
    href: "https://www.instagram.com/anharrrrrr_",
    Icon: FaInstagram,
  },
  {
    href: "https://www.facebook.com/anhar.najib",
    Icon: FaFacebookF,
  },
]

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 text-white bg-sky-600">
      <div className="flex flex-wrap md:flex-row md:justify-between md:space-x-10 gap-8 mb-8">
        <div className="space-y-3 w-[90%] md:w-[28%]">
          <h1 className="text-2xl md:text-3xl font-bold underline underline-offset-4">
            Anhar Khoirun Najib
          </h1>
          <p className="text-md">Samarinda, East Kalimantan</p>
        </div>

        <div className="space-y-3 w-[60%] md:w-[28%]">
          <h1 className="text-xl md:text-2xl font-bold underline underline-offset-4">Categories</h1>
          <ul className="space-y-2">
            {Categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 w-[30%] md:w-[28%]">
          <h1 className="text-xl md:text-2xl font-bold underline underline-offset-4">Links</h1>
          <ul className="space-y-1">
            {Links.map((link, index) => (
              <li key={index}><a href={`#${link.toLowerCase()}`} className="hover:underline">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border border-white mb-8"></div>

      <div className="flex flex-col-reverse md:flex-row gap-6 items-center md:justify-between">
        <p className="text-md text-center md:text-left">
          &copy; 2025 Anhar Khoirun Najib. All rights reserved.
        </p>

        <div className="flex items-center space-x-5 justify-center md:justify-normal text-white">
          {SocialIcon.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="w-10 h-10 rounded-full flex justify-center items-center border border-white hover:shadow-lg hover:bg-white hover:text-sky-600 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
