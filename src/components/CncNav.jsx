import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CncNav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  /* ---------------- Scroll Effect ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const NavItem = ({ label, to, go, activePath }) => {
    const isActive = activePath === to;

    return (
      <button
        onClick={() => go(to)}
        className={`
        cursor-pointer
        relative text-xs md:text-sm lg:text-lg font-medium
        transition-all duration-300
        ${isActive ? "text-sky-300" : "text-white hover:text-sky-300"}
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:bg-sky-300
        after:transition-all after:duration-300
        ${isActive ? "" : "after:w-0 hover:after:w-full"}
      `}
      >
        {label}
      </button>
    );
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 inset-x-0 z-[9999]
        transition-all duration-300
        ${scrolled ? "bg-[#091b32]/95 shadow-md" : "bg-[#091b32]"}`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16">

            {/* -------- LOGO -------- */}
            <div
              onClick={() => go("/")}
              className="flex items-center cursor-pointer shrink-0"
            >
              <img
                src="/Logo3.png"
                alt="Shree Industries"
                className="h-9 sm:h-16 md:h-13 lg:h-12 w-auto max-w-[120px] object-contain"
              />
            </div>
            {/* -------- DESKTOP MENU -------- */}
            <div className="hidden md:flex flex-1 justify-center gap-3 lg:gap-10">
              <div className="cursor-pointer"><NavItem label="Home" to="/" go={go} activePath={location.pathname}/></div>
              <NavItem label="About Us" to="/AboutUs" go={go} activePath={location.pathname} />
              <NavItem label="Infrastructure" to="/Infrastructure" go={go} activePath={location.pathname}/>
              <NavItem label="Quality" to="/Quality" go={go} activePath={location.pathname}/>
              <NavItem label="Capability" to="/capibility" go={go} activePath={location.pathname}/>
              <NavItem label="Industries We Serve" to="/valueablepartner" go={go} activePath={location.pathname}/>
              <NavItem label="Gallery" to="/Gallery" go={go} activePath={location.pathname}/>
            </div>

            {/* -------- DESKTOP CONTACT -------- */}
            <div className="hidden md:block shrink-0">
              <button
                onClick={() => go("/contact")}
                className="px-3 py-1.5 cursor-pointer text-xs md:text-sm font-semibold text-white bg-[#3a92d1]
                           rounded-md hover:bg-sky-700 transition"
              >
                Contact
              </button>
            </div>

            {/* -------- MOBILE MENU -------- */}
            <MobileMenu go={go} />
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}

/* ================= SUB COMPONENTS ================= */

/* ✅ DESKTOP MENU ITEM WITH UNDERLINE */
const NavItem = ({ label, to, go }) => (
  <button
    onClick={() => go(to)}
    className="
      relative text-white text-xs md:text-sm lg:text-lg font-medium
      transition-colors duration-300
      hover:text-sky-300
      after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-sky-300
      after:transition-all after:duration-300
      hover:after:w-full
    "
  >
    {label}
  </button>
);

/* -------- MOBILE MENU -------- */
const MobileMenu = ({ go }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden ml-auto text-white text-2xl">
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-16 bg-[#091b32]
        transition-all duration-200
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-center">
          <MobileItem label="Home" to="/" go={go} close={() => setOpen(false)} />
          <MobileItem label="About Us" to="/AboutUs" go={go} close={() => setOpen(false)} />
          <MobileItem label="Infrastructure" to="/Infrastructure" go={go} close={() => setOpen(false)} />
          <MobileItem label="Quality" to="/Quality" go={go} close={() => setOpen(false)} />
          <MobileItem label="Capability" to="/capibility" go={go} close={() => setOpen(false)} />
          <MobileItem label="Industries We Serve" to="/valueablepartner" go={go} close={() => setOpen(false)} />
          <MobileItem label="Gallery" to="/Gallery" go={go} close={() => setOpen(false)} />

          <button
            onClick={() => {
              setOpen(false);
              go("/contact");
            }}
            className="w-full bg-sky-400 text-white py-2 rounded-md hover:bg-sky-700 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

/* ✅ MOBILE MENU ITEM WITH UNDERLINE */
const MobileItem = ({ label, to, go, close }) => (
  <button
    onClick={() => {
      close();
      go(to);
    }}
    className="
      relative self-center text-white text-base
      hover:text-sky-300 transition
      after:block after:h-[2px] after:w-0 after:mx-auto
      after:bg-sky-300 after:transition-all after:duration-300
      hover:after:w-1/2
    "
  >
    {label}
  </button>
);
