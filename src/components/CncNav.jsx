// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function CncNav() {
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();

//   /* ---------------- Scroll Effect ---------------- */
//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 8);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const go = (path) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: "auto" });
//   };

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <nav
//         className={`fixed top-0 inset-x-0 z-[9999]
//         transition-all duration-300
//         ${scrolled ? "bg-[#091b32]/95 shadow-md" : "bg-[#091b32]"}`}
//       >
//         <div className="max-w-7xl mx-auto px-4">
//           {/* ✅ Fixed Height for Mobile */}
//           <div className="flex items-center h-16">

//             {/* -------- LOGO -------- */}
//             <div
//               onClick={() => go("/")}
//               className="flex items-center cursor-pointer shrink-0"
//             >
//               <img
//                 src="/logo5.png"
//                 alt="Zenith CNC"
//                 className="
//                   h-9 sm:h-10 md:h-12 lg:h-14
//                   w-auto max-w-[140px]
//                   object-contain
//                 "
//               />
//             </div>

//             {/* -------- DESKTOP MENU -------- */}
//             <div className="hidden md:flex flex-1 justify-center gap-6">
//               <NavItem label="Home" to="/" go={go} />
//               <NavItem label="About Us" to="/AboutUs" go={go} />
//               <NavItem label="Quality" to="/Quality" go={go} />
//               <NavItem label="Infrastructure" to="/Infrastructure" go={go} />
//               <NavItem label="Capability" to="/capibility" go={go} />
//               <NavItem label="Valuable Partner" to="/valueablepartner" go={go} />
//             </div>

//             {/* -------- DESKTOP CONTACT -------- */}
//             <div className="hidden md:block shrink-0">
//               <button
//                 onClick={() => go("/contact")}
//                 className="px-4 py-2 text-sm font-semibold text-white bg-[#1158a3] rounded-md hover:bg-sky-700"
//               >
//                 Contact
//               </button>
//             </div>

//             {/* -------- MOBILE MENU -------- */}
//             <MobileMenu go={go} />
//           </div>
//         </div>
//       </nav>

//       {/* Spacer so content is not hidden */}
//       <div className="h-16"></div>
//     </>
//   );
// }

// /* ================= SUB COMPONENTS ================= */

// const NavItem = ({ label, to, go }) => (
//   <button
//     onClick={() => go(to)}
//     className="text-white text-sm font-medium hover:text-sky-300 transition-colors"
//   >
//     {label}
//   </button>
// );

// /* -------- MOBILE MENU -------- */
// const MobileMenu = ({ go }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* Hamburger Icon */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="md:hidden ml-auto text-white text-2xl"
//       >
//         {open ? "✕" : "☰"}
//       </button>

//       {/* Mobile Dropdown */}
//       <div
//         className={`md:hidden absolute left-0 right-0 top-16 bg-[#091b32]
//         transition-all duration-200
//         ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
//       >
//         <div className="flex flex-col px-6 py-4 gap-4 text-center">
//           <MobileItem label="Home" to="/" go={go} close={() => setOpen(false)} />
//           <MobileItem label="About Us" to="/AboutUs" go={go} close={() => setOpen(false)} />
//           <MobileItem label="Quality" to="/Quality" go={go} close={() => setOpen(false)} />
//           <MobileItem label="Infrastructure" to="/Infrastructure" go={go} close={() => setOpen(false)} />
//           <MobileItem label="Capability" to="/capibility" go={go} close={() => setOpen(false)} />
//           <MobileItem label="Valuable Partner" to="/valueablepartner" go={go} close={() => setOpen(false)} />

//           <button
//             onClick={() => {
//               setOpen(false);
//               go("/contact");
//             }}
//             className="w-full bg-[#1158a3] text-white py-2 rounded-md"
//           >
//             Contact
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// const MobileItem = ({ label, to, go, close }) => (
//   <button
//     onClick={() => {
//       close();
//       go(to);
//     }}
//     className="text-white text-base hover:text-sky-300"
//   >
//     {label}
//   </button>
// );
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CncNav() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
                alt="Aeroprecise"
                className="h-35 sm:h-20 md:h-25 lg:h-32 lg:mt-2 w-auto max-w-[140px] object-contain"
              />
            </div>

            {/* -------- DESKTOP MENU -------- */}
            <div className="hidden md:flex flex-1 justify-center gap-6">
              <NavItem label="Home" to="/" go={go} />
              <NavItem label="About Us" to="/AboutUs" go={go} />
              <NavItem label="Quality" to="/Quality" go={go} />
              <NavItem label="Infrastructure" to="/Infrastructure" go={go} />
              <NavItem label="Capability" to="/capibility" go={go} />
              <NavItem label="Valuable Partner" to="/valueablepartner" go={go} />
            </div>

            {/* -------- DESKTOP CONTACT -------- */}
            <div className="hidden md:block shrink-0">
              <button
                onClick={() => go("/contact")}
                className="px-4 py-2 text-sm font-semibold text-white bg-[#1158a3]
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
      relative text-white text-sm font-medium
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
        className="md:hidden ml-auto text-white text-2xl"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute left-0 right-0 top-16 bg-[#091b32]
        transition-all duration-200
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        <div className="flex flex-col px-6 py-4 gap-4 text-center">
          <MobileItem label="Home" to="/" go={go} close={() => setOpen(false)} />
          <MobileItem label="About Us" to="/AboutUs" go={go} close={() => setOpen(false)} />
          <MobileItem label="Quality" to="/Quality" go={go} close={() => setOpen(false)} />
          <MobileItem label="Infrastructure" to="/Infrastructure" go={go} close={() => setOpen(false)} />
          <MobileItem label="Capability" to="/capibility" go={go} close={() => setOpen(false)} />
          <MobileItem label="Valuable Partner" to="/valueablepartner" go={go} close={() => setOpen(false)} />

          <button
            onClick={() => {
              setOpen(false);
              go("/contact");
            }}
            className="w-full bg-[#1158a3] text-white py-2 rounded-md hover:bg-sky-700 transition"
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
