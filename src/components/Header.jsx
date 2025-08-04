import { useState, useEffect } from "react";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      closeSidebar();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 md:bg-white/70 backdrop-blur md:border-b border-gray-200 shadow-md ${
        isSidebarOpen ? 'bg-white' : 'bg-white/70'
      }`}>
        <div className="md:px-12 px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-extrabold tracking-tight z-50">
            <span className="text-sky-600">Anhar's</span>
            <span className="text-slate-800"> Profile</span>
          </a>

          <nav className="hidden md:flex items-center gap-12 font-semibold">
            {["Home", "About", "Portfolio", "Contact"].map((item, idx) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;

              return (
                <a
                  key={idx}
                  href={`#${id}`}
                  className='relative group no-underline transition duration-300'
                >
                  <span
                    className={`transition-all duration-300 ${
                      isActive ? 
                        'bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 bg-clip-text text-transparent' 
                        : 
                        'group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:via-sky-500 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent'
                    }`}
                  >
                    {item}
                  </span>
                  <span
                    className={`absolute -bottom-1 h-0.5 w-0 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 transition-all duration-300 rounded ${
                      isActive ? 
                        'w-full left-0' 
                        : 
                        'left-1/2 group-hover:w-full group-hover:left-0'
                    }`}
                  ></span>
                </a>
              );
            })}
          </nav>

          <button id="hamburger" type="button" onClick={toggleSidebar} className={`md:hidden z-50 h-[18px] flex flex-col justify-between ${
            isSidebarOpen ? 'hamburger-active' : ''
          }`}>
            <span class={`hamburger-line transition-all duration-300 ease-in-out origin-top-left ${
              isSidebarOpen ? 'bg-sky-600' : 'bg-slate-800'
            }`}></span>
            <span class={`hamburger-line transition-all duration-300 ease-in-out ${
              isSidebarOpen ? 'bg-sky-600' : 'bg-slate-800'
            }`}></span>
            <span class={`hamburger-line transition-all duration-300 ease-in-out origin-bottom-left ${
              isSidebarOpen ? 'bg-sky-600' : 'bg-slate-800'
            }`}></span>
          </button>
        </div>
      </header>

      {isSidebarOpen && (
        <div onClick={closeSidebar} className="fixed inset-0 bg-black/50 z-40"></div>
      )}

      <aside
        className={`fixed top-[64px] bg-white backdrop-blur left-0 h-full w-48 z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 font-semibold">
          {["Home", "About", "Portfolio", "Contact"].map((item, idx) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;

            return (
              <a
                key={idx}
                href={`#${id}`}
                className='group border-b border-slate-400 py-4 px-2'
                onClick={closeSidebar}
              >
                <span
                  className={`transition-all duration-300 ${
                    isActive ? 
                      'bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 bg-clip-text text-transparent' 
                      : 
                      'group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:via-sky-500 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent'
                  }`}
                >
                  {item}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
