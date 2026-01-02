import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  const navigateAndScrollTop = (to) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "instant" });
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
                src="/logo5.png"
                alt="Zenith CNC"
                className="
                  h-24 sm:h-28 md:h-30 lg:h-36 lg:mt-2
                  w-auto max-w-[220px]
                  object-contain cursor-pointer
                  transition-transform duration-300
                  hover:scale-105
                "
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex flex-1 justify-center md:space-x-4 lg:space-x-8">
              <NavItem label="Home" to="/" onClick={navigateAndScrollTop} />
              <NavItem label="About Us" to="/AboutUs" onClick={navigateAndScrollTop} />
              <NavItem label="Quality" to="/Quality" onClick={navigateAndScrollTop} />
              <NavItem label="Infrastructure" to="/Infrastructure" onClick={navigateAndScrollTop} />
              <NavItem label="Capability" to="/capibility" onClick={navigateAndScrollTop} />
              <NavItem label="Valuable Partner" to="/valueablepartner" onClick={navigateAndScrollTop} />
            </div>

            {/* -------- DESKTOP CONTACT -------- */}
            <div className="hidden md:block shrink-0">
              <ContactButton onClick={() => navigateAndScrollTop("/contact")} />
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
      relative cursor-pointer text-blue-50 font-medium
      text-xs md:text-sm lg:text-base transition-colors duration-300 hover:text-white
      after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-sky-300
      after:transition-all after:duration-300 hover:after:w-full
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
      <div className="md:hidden ml-auto shrink-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-50 text-2xl leading-none cursor-pointer"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`md:hidden absolute left-0 right-0 top-16
          bg-[#091b32]/90 backdrop-blur-lg transition-all duration-300
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <div className="px-6 py-4 space-y-4 text-center">
          <MobileNavItem label="Home" to="/" close={navigateAndClose} />
          <MobileNavItem label="About Us" to="/AboutUs" close={navigateAndClose} />
          <MobileNavItem label="Quality" to="/Quality" close={navigateAndClose} />
          <MobileNavItem label="Infrastructure" to="/Infrastructure" close={navigateAndClose} />
          <MobileNavItem label="Capability" to="/capibility" close={navigateAndClose} />
          <MobileNavItem label="Valuable Partner" to="/valueablepartner" close={navigateAndClose} />
          <div className="pt-4">
            <ContactButton full onClick={() => navigateAndClose("/contact")} />
          </div>
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
