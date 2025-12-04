import AOS from "aos";
import { FaUserTie } from "react-icons/fa";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out", once: true });
  }, []);

  return (
    <div className="bg-[#f5f3ee] text-[#1a1a1a] overflow-x-hidden">

      {/* HERO SECTION */}
      <div
        data-aos="fade-zoom-in"
        className="min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/who2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <h1
          data-aos="zoom-in"
          className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide text-white drop-shadow-lg text-center px-4"
        >
          About <span className="text-blue-400">Us</span>
        </h1>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION 1 */}
        <section className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center overflow-visible">
          <div
            data-aos="fade-right"
            className="rounded-xl shadow-xl overflow-visible w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
          >
            <img
              src="/who4.jpg"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              alt="Who We Are"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl md:text-[35px] lg:text-[38px] font-bold text-[#0c2546] mb-4">
              Who We Are
            </h2>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              <p>Established in the year 2022 in Rajkot, Gujarat, “AeroPrecise”.</p>
              <p>
                Shree Bai Industries carries extensive experience in CNC machining,
                operating DX200-4AA & DX200-5A machines with high precision.
                We provide end-to-end machining solutions with industry-grade accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center overflow-visible">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-[35px] lg:text-[38px] font-bold text-[#0c2546] mb-4">
              Our Mission
            </h2>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              <p>We visualize a future fueled by innovation & global manufacturing excellence.</p>
              <p>
                Our mission is to deliver world-class engineering products with precise,
                safe, and globally competitive standards in machining.
              </p>
              <p>
                We aim to become a benchmark for manufacturing quality, reliability, and technical excellence.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-xl shadow-xl overflow-visible w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
          >
            <img
              src="/vision2.png"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              alt="Mission"
            />
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center overflow-visible">
          <div
            data-aos="fade-right"
            className="rounded-xl shadow-xl overflow-visible w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
          >
            <img
              src="/mission.jpg"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              alt="Vision"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="text-2xl sm:text-3xl md:text-[35px] lg:text-[38px] font-bold text-[#0c2546] mb-4">
              Our Vision
            </h2>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              <p>
                To lead industrial engineering through precision machining,
                automation, and unmatched reliability.
              </p>

              <p className="font-semibold">We strive to achieve excellence through:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Paramount Skills</li>
                <li>Modern Technology</li>
                <li>Economical Production</li>
                <li>Product Versatility</li>
              </ul>

              <p>We deliver engineering accuracy industries trust.</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center overflow-visible">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-[35px] lg:text-[38px] font-bold text-[#0c2546] mb-4">
              Why AeroPrecise?
            </h2>

            <div className="space-y-2 text-gray-700 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              <p>✔ High-accuracy production</p>
              <p>✔ Research-driven innovation</p>
              <p>✔ Experienced engineering team</p>
              <p>✔ Precision tooling assurance</p>
              <p>✔ Reliable on-time delivery</p>

              <p>
                AeroPrecise stands for trust, precision, and world-class industrial capability.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="rounded-xl shadow-xl overflow-visible w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
          >
            <img
              src="/why.JPG"
              className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
              alt="Why Choose Us"
            />
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="py-16 px-4 overflow-visible">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-center text-2xl sm:text-3xl font-bold text-[#091b32] mb-10"
              data-aos="fade-up"
            >
              Our Leadership
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
