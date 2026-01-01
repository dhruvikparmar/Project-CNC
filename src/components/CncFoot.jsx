import { Link, useNavigate } from "react-router-dom";

export default function CncFoot() {
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const FooterLink = ({ title, to, onNavigate }) => (
    <li>
      <button
        onClick={() => onNavigate(to)}
        className="
        block
        cursor-pointer
        transition-colors
        duration-200
        hover:text-sky-400
      "
      >
        {title}
      </button>
    </li>
  );

  return (
    <footer className="bg-[#091b32] text-[#dbeafe]">
      <div className="max-w-8xl mx-auto px-4 md:px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        {/* TOP SECTION */}
        <div className="flex- md:flex-row md:justify-evenly md:flex gap-20">

          {/* COMPANY INFO */}
          <div className=" w-full sm:w-[48%] lg:w-[20%] flex md:flex-col gap-3">
            <img
              src="/Logo3.png"
              alt="Zenith CNC"
              className="h-9 w-13 sm:h-11 md:h-12 md:w-auto max-w-20"
            />
            <p className="text-[#9fb3c8] text-sm md:text-base leading-relaxed">
              Precision CNC machining solutions delivering reliable and
              high-quality industrial components.
            </p>
          </div>

          {/* QUICK LINKS + CAPABILITIES (MOBILE FLEX FIX) */}
          <div className="mt-10 md:mt-0 flex flex-row sm:flex-row gap-6 sm:gap-10 lg:gap-30 w-full sm:w-[48%] lg:w-auto">

            {/* QUICK LINKS */}
            <div className="flex flex-col w-1/2 lg:w-[45%]">
              <h4 className="text-sm md:text-base font-semibold mb-3 text-white">
                Quick Links
              </h4>

              <ul className="space-y-2 text-[#9fb3c8] text-sm md:text-base">
                {[
                  ["Home", "/"],
                  ["About Us", "/AboutUs"],
                  ["Quality", "/Quality"],
                  ["Infrastructure", "/Infrastructure"],
                  ["Capability", "/capibility"],
                  ["Indusries We Serve", "/valueablePartner"],
                  ["Gallery", "/Gallery"],
                ].map(([label, path]) => (
                  <li key={label} className="">
                    <div className="inline-block   hover:text-sky-400 transition">
                      <FooterLink title={label} to={path} onNavigate={handleNavigate} />
                    </div>
                  </li>
                ))}
              </ul>

            </div>

            {/* CAPABILITIES */}
            <div className="flex flex-col w-1/2 lg:w-[45%]">
              <h4 className="text-sm md:text-base font-semibold mb-3 text-white">
                Capabilities
              </h4>
              <ul className="space-y-2 text-[#9fb3c8] text-sm md:text-base">
                <li>CNC Turning</li>
                <li>CNC Milling</li>
                <li>Bearing Components</li>
                <li>Precision Grinding</li>
              </ul>
            </div>

          </div>

          {/* CONTACT */}
          <div className="mt-10 md:mt-0 flex flex-col sm:w-[48%] lg:w-[15%]">
            <h4 className="text-sm md:text-base font-semibold mb-3 text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-[#9fb3c8] text-sm md:text-base">
              <li>📍 Rajkot, Gujarat</li>
              <li>📞 +91 97375 48285</li>
              <li>✉️ info@zenithcnc.com</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#1e3358] my-8 md:my-10"></div>

        {/* BOTTOM SECTION */}
        <div
          className="
    text-center
    w-full
    flex justify-center flex-col md:flex-row
    items-center
    gap-2 md:gap-0
    text-xs md:text-sm
    text-[#9fb3c8]
  "
        >
          <div className="flex items-center gap-1 w-fit">
            <span>© {new Date().getFullYear()}</span>

            {/* CLICKABLE ONLY THIS */}
            <a
              href="https://pearlproduction.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:cursor-pointer hover:text-sky-400 transition w-fit"
            >
              PEARL PRODUCTION
            </a>

            {/* NOT CLICKABLE */}
            <span>. All rights reserved.</span>
          </div>
        </div>


      </div>
    </footer>

  );
}

/******** Quick Link Item ********/
const FooterLink = ({ title, to, onNavigate }) => (
  <li>
    <button
      onClick={() => onNavigate(to)}
      className="block transition-colors duration-200 hover:text-sky-400"
    >
      {title}
    </button>
  </li>
);