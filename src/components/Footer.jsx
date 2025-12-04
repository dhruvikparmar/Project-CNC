import { Link, useNavigate } from "react-router-dom";

export default function footer() {
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    navigate(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <footer className="bg-[#091b32] text-[#dbeafe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* COMPANY INFO */}
          <div className="flex flex-col gap-3">
            <img
              src="/logo5.png"
              alt="Zenith CNC"
              className="h-10 sm:h-11 md:h-12 w-auto max-w-40 object-cover"
            />
            <p className="text-[#9fb3c8] text-sm md:text-base leading-relaxed">
              Precision CNC machining solutions delivering reliable and
              high-quality industrial components.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 text-white">
              Quick Links
            </h4>

            <ul className="space-y-2 text-[#9fb3c8] text-sm md:text-base">
              <FooterLink title="Home" to="/" onNavigate={handleNavigate} />
              <FooterLink title="About Us" to="/AboutUs" onNavigate={handleNavigate} />
              <FooterLink title="Quality" to="/Quality" onNavigate={handleNavigate} />
              <FooterLink title="Infrastructure" to="/Infrastructure" onNavigate={handleNavigate} />
              <FooterLink title="Capability" to="/capibility" onNavigate={handleNavigate} />
              <FooterLink title="Valuable Partner" to="/valueablePartner" onNavigate={handleNavigate} />
            </ul>
          </div>

          {/* CAPABILITIES */}
          <div>
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

          {/* CONTACT */}
          <div>
            <h4 className="text-sm md:text-base font-semibold mb-3 text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-[#9fb3c8] text-sm md:text-base">
              <li>📍 Rajkot, Gujarat</li>
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@zenithcnc.com</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-[#1e3358] my-8 md:my-10"></div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0
                        text-xs md:text-sm text-[#9fb3c8]">

          <a
            href="https://pearlproduction.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center w-full md:text-left hover:cursor-pointer hover:text-sky-400 transition"
          >
            © {new Date().getFullYear()} PEARL PRODUCTION. All rights reserved.
          </a>

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
