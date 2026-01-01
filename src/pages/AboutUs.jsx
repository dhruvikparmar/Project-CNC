import AOS from "aos";
import { FaUserTie } from "react-icons/fa";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Target, Eye, HelpCircle, Factory } from "lucide-react";
import { FaC } from "react-icons/fa6";


export default function AboutUs() {
  /* ================= MILESTONE COMPONENT ================= */
  const Milestone = ({ year, title, points, align = "left", highlight }) => (
    <div
      data-aos={align === "left" ? "fade-right" : "fade-left"}
      className={`relative md:w-1/2 px-4 md:px-6
        ${align === "left"
          ? "md:pr-12 md:text-right"
          : "md:pl-12 md:text-left md:ml-auto"}`}
    >
      {/* DOT */}
      <div
        className={`hidden md:block absolute top-7
          ${align === "left" ? "right-[-8px]" : "left-[-8px]"}
          w-4 h-4 rounded-full
          ${highlight ? "bg-sky-400" : "bg-sky-500"}`}
      />

      {/* CARD */}
      <div className="bg-[#0c2546] border border-[#1e3358]
                      rounded-xl p-5 shadow-lg">
        <span className="text-sky-400 font-semibold text-sm">{year}</span>

        <h3 className="text-lg font-bold text-[#dbeafe] mb-2">
          {title}
        </h3>

        <ul className="text-[#9fb3c8] text-sm space-y-1">
          {points.map((item, idx) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out", once: true });
  }, []);

  return (
    <div id="hero" className="bg-[#f5f3ee] text-[#1a1a1a] overflow-x-hidden">

      {/* HERO SECTION */}
      <div
        data-aos="fade-zoom-in"
        className="min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/who2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1
          data-aos="zoom-in"
          className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide text-white drop-shadow-lg text-center px-4"
        >
          About <span className="text-blue-400">Us</span>
        </h1>
      </div>

      {/* ✅ ================= OUR MILESTONES (FIXED POSITION) ================= */}
      <section className="bg-[#f5f3ee] py-3 md:py-8 md:px-4">
        <h2
          className="text-center text-2xl sm:text-3xl font-bold
                 text-[#0c2546] mb-6 md:mb-10"
          data-aos="fade-up"
        >
          Our Milestones
        </h2>

        <div className="relative max-w-7xl md:mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 h-full
                          w-0.5 bg-sky-400/30 -translate-x-1/2" />

          <div className="space-y-2 md:space-y-12">
            <Milestone
              year="2022"
              title="Journey Began"
              points={[
                "Factory established",
                "Started with 1 CNC Machine",
                "Foundation set for precision manufacturing",
              ]}
            />

            <Milestone
              year="2023"
              title="Expansion Phase"
              align="right"
              points={[
                "Added 1 CNC Machine",
                "Production demand increased",
                "Team started expanding",
              ]}
            />

            <Milestone
              year="2024"
              title="Technological Growth"
              points={[
                "Acquired 1 VMC Machine",
                "Advanced machining capability",
                "Efficiency improved",
              ]}
            />
            <Milestone
              year="2025"
              title="Major Expansion & Leadership"
              align="right"
              highlight
              points={[
                "Total CNC Machines: 4",
                "Team strength: 12",
                "MD: Mehul P. Devaliya",
                "ED: Piyush P. Devaliya",
              ]}
            />
          </div>
        </div>
      </section>
      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* SECTION 1 */}
        <section className="py-1 md:py-5 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center overflow-visible">
          <div
            data-aos="fade-right"
            className="
                  rounded-xl shadow-xl
                  overflow-hidden   
                  w-full
                  h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]
                  order-2 md:order-1
                "
          >
            <img
              src="/who4.jpg"
              className="
                    w-full h-full
                    rounded-xl
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    hover:scale-110
                  "
              alt="Who We Are"
            />
          </div>


          <div data-aos="fade-left" className="order-1 md:order-2">
            <div className="flex gap-2 md:gap-4 md:h-12 md:mb-5 text-[#0c2546]"><HelpCircle className="mt-0.5 md:mt-2 md:w-8 md:h-8"/>
            <h2 className="text-xl sm:text-3xl md:text-[35px] lg:text-[38px] font-bold mb-4">
              Who We Are
            </h2></div>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              <p>Established in the year 2022 in Rajkot, Gujarat, “Shree Industries”.</p>
              <p>
                We are a trusted precision manufacturing partner delivering high-accuracy CNC components for every industry.
                Our focus is quality, reliability, and unmatched engineering excellence.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="py-4 md:py-5 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center overflow-visible">
          <div data-aos="fade-right" className="order-1 md:order-1">
            <div className="flex gap-2 md:gap-4 md:h-12 md:mb-5 text-[#0c2546]"><Target className="mt-0.5 md:mt-2 md:w-8 md:h-8"/>
            <h2 className="text-xl sm:text-3xl md:text-[35px] lg:text-[38px] font-bold  mb-4">
              Our Mission
            </h2></div>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              <p>We visualize a future fueled by innovation & global manufacturing excellence.</p>
              <p>
                Our mission is to deliver world-class precision components through advanced machining, strict quality control, and continuous innovation.
              </p>
              <p>
                We aim to be the most reliable manufacturing partner for industries that demand accuracy and excellence.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-xl shadow-xl overflow-hidden w-full
             h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] order-2 md:order-2">
            <img
              src="/vision2.png"
              className="w-full rounded-xl h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              alt="Mission"
            />
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="py-2 md:py-5 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center overflow-visible">
          <div
            data-aos="fade-right"
            className="rounded-xl shadow-xl overflow-hidden w-full
             h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] order-2 md:order-1">
            <img
              src="/mission.jpg"
              className="w-full rounded-xl h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              alt="Vision"
            />
          </div>

          <div data-aos="fade-left" className="order-1 md:order-2">
            <div className="flex gap-2 md:gap-4 md:h-12 md:mb-5 text-[#0c2546]"><Eye className="mt-0.5 md:mt-2 md:w-8 md:h-8"/>      
            <h2 className="text-xl sm:text-3xl md:text-[35px] lg:text-[38px] font-bold mb-4">
              Our Vision
            </h2></div>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              <p>
                Our vision is to become a global leader in precision engineering, known for unmatched accuracy, innovation, and reliability.
                We aim to build a future where world-class manufacturing is delivered with Indian excellence.
              </p>

              <p className="font-semibold">We are committed to excellence by combining:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Exceptional Expertise</li>
                <li>Advanced Technology</li>
                <li>Cost-Effective Production</li>
                <li>Versatile Manufacturing Capabilities</li>
              </ul>

              <p>We deliver engineering accuracy industries trust.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="py-3 md:py-5 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center overflow-visible">
          <div data-aos="fade-right" className="order-1 md:order-1">
            <div className="flex gap-2 md:gap-4 md:h-12 md:mb-5 text-[#0c2546]"><Factory className=" md:mt-2 md:w-8 md:h-8"/>         
              <h2 className="text-xl sm:text-3xl md:text-[35px] lg:text-[38px] font-bold mb-4">
              Why Shree Industries?
            </h2></div>

            <div className="space-y-2 text-gray-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              <p>✔ High-Precision Machining</p>
              <p>✔ Reliable Quality Control</p>
              <p>✔ Modern Manufacturing Technology</p>
              <p>✔ Custom Engineering Solutions</p>
              <p>✔ On-Time & Efficient Production: </p>
              <p>✔ Trusted Industry Partner</p>

              <p>
                Shree Industries stands for trust, precision, and world-class industrial capability.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-xl shadow-xl overflow-hidden w-full
             h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] order-2 md:order-2">
            <img
              src="/why.JPG"
              className="w-full rounded-xl h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              alt="Why Choose Us"
            />
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-2 mb-5 md:py-5  overflow-visible">
          <div className="max-w-9xl mx-auto">
            <h2
              className="text-center text-2xl sm:text-3xl font-bold text-[#091b32] mb-5 md:mb-10"
              data-aos="fade-up"
            >
              Our Leadership
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
              {/* Managing Director */}
              <div
                data-aos="fade-right"
                className="border-3 border-[#0c2546] rounded-xl p-6 text-center transition hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#091b32] p-4 rounded-full">
                    <FaUserTie className="text-sky-400 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0c2546]">
                  Mr. Mehul P. Devaliya
                </h3>
                <p className="text-sky-500 text-sm sm:text-base mt-1">
                  Managing Director
                </p>
                <p className="text-[#0c2546] font-semibold text-lg mt-4 leading-relaxed">
                  Provides strategic direction and leadership for growth & excellence.
                </p>
              </div>

              {/* Executive Director */}
              <div
                data-aos="fade-left"
                className="border-3 border-[#0c2546] rounded-xl p-6 text-center transition hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#091b32] p-4 rounded-full">
                    <FaUserTie className="text-sky-400 text-2xl" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0c2546]">
                  Mr. Piyush P. Devaliya
                </h3>
                <p className="text-sky-500 text-sm sm:text-base mt-1">
                  Executive Director
                </p>
                <p className="text-[#0c2546] font-semibold text-lg mt-4 leading-relaxed">
                  Oversees operations, quality control & client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
