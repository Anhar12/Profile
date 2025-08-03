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
    if (isSidebarOpen) {
      $("header").removeClass("bg-white/70");
      $("header").addClass("bg-white");
      $('#hamburger').addClass('hamburger-active');
      $('.hamburger-line').removeClass('bg-slate-800')
                          .addClass('bg-sky-600');
    } else {
      $("header").removeClass("bg-white");
      $("header").addClass("bg-white/70");
      $('#hamburger').removeClass('hamburger-active');
      $('.hamburger-line').removeClass('bg-sky-600')
                          .addClass('bg-slate-800');
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      closeSidebar();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur md:border-b border-gray-200 shadow-md">
        <div className="md:px-12 px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-extrabold tracking-tight z-50">
            <span className="text-sky-600">Anhar's</span>
            <span className="text-slate-800"> Profile</span>
          </a>

          <nav className="hidden md:flex items-center gap-12 font-semibold">
            {["Home", "About", "Portfolio", "Contact"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase()}`}
                className="relative group text-slate-800 no-underline transition duration-300"
              >
                <span className="transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:via-sky-500 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent">
                  {item}
                </span>
                <span className="absolute left-1/2 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded"></span>
              </a>
            ))}
          </nav>

          <button id="hamburger" type="button" className="md:hidden z-50 h-[18px] flex flex-col justify-between" onClick={toggleSidebar}>
            <span class="bg-slate-800 hamburger-line transition-all duration-300 ease-in-out origin-top-left"></span>
            <span class="bg-slate-800 hamburger-line transition-all duration-300 ease-in-out"></span>
            <span class="bg-slate-800 hamburger-line transition-all duration-300 ease-in-out origin-bottom-left "></span>
          </button>
        </div>
      </header>

      {isSidebarOpen && (
        <div onClick={closeSidebar} className="fixed inset-0 bg-black/50 z-40"></div>
      )}

      <aside
        className={`fixed top-[64px] bg-white backdrop-blur left-0 h-full w-48 z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 font-semibold text-slate-800">
          {["Home", "About", "Portfolio", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase()}`}
              className="hover:text-sky-600 transition border-b border-slate-400 py-4 px-2"
              onClick={closeSidebar}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
