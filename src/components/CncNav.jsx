import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CncNav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Enable when scroll starts
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateAndScrollTop = (to) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <nav
      className={`
        fixed inset-x-0 top-0 z-[9999]
        transition-all duration-500 ease-in-out
        ${scrolled ? "bg-[#091b32]/95 backdrop-blur-md shadow-md " : "bg-transparent"}
      `}
    >
      <div className="w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16">

            {/* LOGO */}
            <div
              onClick={() => navigateAndScrollTop("/")}
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

            {/* CONTACT BUTTON */}
            <div className="hidden md:block shrink-0">
              <ContactButton onClick={() => navigateAndScrollTop("/contact")} />
            </div>

            {/* MOBILE MENU TOGGLE */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

/******** NAV ITEM ********/
const NavItem = ({ label, to, onClick }) => (
  <button
    onClick={() => onClick(to)}
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

/******** CONTACT BUTTON ********/
const ContactButton = ({ full, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center ${full ? "w-full" : ""}
      cursor-pointer shrink-0
      px-4 lg:px-6 py-1.5 lg:py-2
      text-xs md:text-sm lg:text-base font-semibold text-white
      bg-[#1158a3] rounded-md
      transition-all duration-300 hover:bg-sky-700 hover:scale-105 active:scale-95
      shadow hover:shadow-sky-200/40`}
  >
    Contact
  </button>
);

/******** MOBILE MENU ********/
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigateAndClose = (to) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "instant" });
    setIsOpen(false);
  };

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

const MobileNavItem = ({ label, to, close }) => (
  <button
    onClick={() => close(to)}
    className="block w-full cursor-pointer text-blue-50 font-medium text-base
      transition-colors duration-300 hover:text-sky-300"
  >
    {label}
  </button>
);


