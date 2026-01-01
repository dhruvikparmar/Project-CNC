import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Quality() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out", once: true });
  }, []);

  return (
    <div id="hero" className="bg-[#f5f3ee] text-[#1a1a1a] overflow-x-hidden">

      {/* HERO SECTION */}
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className="min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('quality2.jpg')",
        }}
      >
        <div
          data-aos="zoom-out"
          className="absolute inset-0 bg-black/60"
        ></div>

        <h1
          data-aos="zoom-in"
          className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-extrabold tracking-wide text-white drop-shadow-lg text-center px-4"
        >
          Quality <span className="text-blue-400">Assurance</span>
        </h1>
      </div>


      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* SECTION 1 — INTRO */}
        <section className="py-5 md:py-10" data-aos="fade-up">
          <h2 className="text-center text-xl md:text-[38px] font-bold text-[#0c2546] mb-8">
            Our Commitment to Quality
          </h2>

          <div className="max-w-8xl  mx-auto bg-[#0c2546] text-white p-8 rounded-2xl text-lg md:text-xl text-gray-700 leading-relaxed">
            <div className="flex"><p className="pr-3 text-lg md:text-2xl">•</p><p>At Shree Industries, Quality is built into every step of our manufacturing Process . We are committed to delivering components that meet global standards
              of precision, performance & reliability.<br /><br /></p></div>
            <p></p>
            <div className="flex"><p className="pr-3 text-lg md:text-2xl">•</p><p>Our goal is to exceed customer expectations through continuous improvement , disciplined processes & zero-defect thinking.

            </p></div>
          </div>
        </section>


        {/* ================= HOW WE CONTROL QUALITY ================= */}
        <section
          className="bg-white py-6 md:py-6 md:pb-10 px-4 shadow-xl rounded-2xl"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-7" data-aos="fade-up" data-aos-delay="100">
              <h2 className="text-xl sm:text-3xl lg:text-4xl
        font-bold text-[#0c2546] mb-3">
                How We Control Quality
              </h2>
              <p className="text-gray-600 md:text-lg text-sm">
                Quality assurance at every stage of the manufacturing process
              </p>
            </div>

            {/* FLOW */}
            <div className="relative">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 items-stretch">

                {/* CARD 1 */}
                <div
                  className="relative bg-[#0c2546] rounded-xl p-6 border border-[#d6dbe3]"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="flex h-10 mb-2 md:mb-5">
                    <p className="inline-flex items-center justify-center
            w-8 h-8 md:w-10 md:h-10  rounded-full bg-white text-[#0c2546] font-semibold mb-4">
                      1
                    </p>
                    <h3 className="pt-1 md:pt-1.5 pl-3 text-md md:text-xl font-semibold text-white mb-3">
                      Material Inspection
                    </h3>
                  </div>
                  <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                    All raw materials are verified through certificates, hardness
                    tests, and dimensional checks before entering production.
                  </p>

                  {/* ARROW */}
                  <div
                    className="hidden md:block absolute top-1/2 -right-10.5 -translate-y-1/2"
                    data-aos="fade-in"
                    data-aos-delay="300"
                  >
                    <svg width="40" height="20" fill="none" stroke="#0c2546" strokeWidth="3">
                      <line x1="0" y1="10" x2="30" y2="10" />
                      <polyline points="22,2 30,10 22,18" />
                    </svg>
                  </div>
                </div>

                {/* CARD 2 */}
                <div
                  className="relative bg-[#0c2546] rounded-xl p-6 border border-[#d6dbe3]"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="flex h-10 mb-2 md:mb-5">
                    <span className="inline-flex items-center justify-center
           w-8 h-8 md:w-10 md:h-10  rounded-full bg-white text-[#0c2546] font-semibold mb-4">
                      2
                    </span>
                    <h3 className="pt-1 md:pt-1.5 pl-3 text-md md:text-xl font-semibold text-white mb-3">
                      In-Process Inspection
                    </h3>
                  </div>

                  <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                    Real-time monitoring , sample checks , & machine - wise process
                    control ensure accuracy throughout machining.
                  </p>

                  {/* ARROW */}
                  <div
                    className="hidden md:block absolute top-1/2 -right-10.5 -translate-y-1/2"
                    data-aos="fade-in"
                    data-aos-delay="400"
                  >
                    <svg width="40" height="20" fill="none" stroke="#0c2546" strokeWidth="3">
                      <line x1="0" y1="10" x2="30" y2="10" />
                      <polyline points="22,2 30,10 22,18" />
                    </svg>
                  </div>
                </div>

                {/* CARD 3 */}
                <div
                  className="bg-[#0c2546] rounded-xl p-6 border border-[#d6dbe3]"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div className="flex h-10 mb-2 md:mb-5">
                    <span className="inline-flex items-center justify-center
            w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-[#0c2546] font-semibold mb-4">
                      3
                    </span>

                    <h3 className="pt-1 md:pt-1.5 pl-3 text-md md:text-xl font-semibold text-white mb-3">
                      Final Inspection
                    </h3>
                  </div>

                  <p className="text-gray-300 text-md md:text-lg leading-relaxed">
                    100% inspection using precision tools, gauges, and CMM
                    verification ensures components meet every specification.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ================= QC PROCESS (Left Title + Right Steps) */}
        <section className="md:py-8" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 md:gap-10 lg:grid-cols-2 max-w-8xl mx-auto">

            {/* LEFT CONTENT */}
            <div className=" md:w-[110vh] mt-5 md:mt-0 flex flex-col justify-center" data-aos="fade-right">
              <h2 className="text-xl md:text-[30px] text-center font-bold text-[#0c2546] mb-5 md:mb-8">
                Our Quality Control Process
              </h2>

              <div className="text-md md:text-xl bg-[#0c2546] 
       p-4 pt-6 md:pt-0 md:p-6 text-white rounded-2xl leading-relaxed">

                <div className="flex"> <p className="pr-3 text-lg md:text-2xl">•</p><p>At Shree Industries, our quality control process is engineered with a systematic and
                  multi-stage approach to ensure every component meets the highest levels of
                  accuracy, stability, and performance.
                  <br /><br /></p></div>
                <div className="flex"> <p className="pr-3 text-lg md:text-2xl">•</p><p> Each finished component undergoes a thorough final inspection where
                  dimensional accuracy, surface finish, and functional tolerances are validated.
                  <br /><br /></p></div>
              </div>

            </div>

            {/* RIGHT LIST */}
            <div className="space-y-4 items-center pt-2 pb-3 md:pb-0" data-aos="fade-left">
              {[
                "Estimating",
                "Order Entry",
                "Process Planning",
                "Programming",
                "Inbound Inspection",
                "In Process Inspection",
                "Final Inspection",
                "Packaging",
              ].map((stage, i) => (
                <div
                  key={i}
                  data-aos="fade-left"
                  data-aos-delay={i * 80}
                  className="flex items-center md:ml-20 gap-3 p-2 pl-3 md:w-[83.5vh] rounded-xl bg-white 
                     shadow-md hover:shadow-xl transition md:"
                >
                  <div className="min-w-[32px] min-h-[32px] flex items-center justify-center 
                          bg-blue-100 text-blue-700 text-lg font-bold rounded-lg shadow">
                    ✔
                  </div>

                  <p className="text-gray-700 text-base md:text-lg">
                    {stage}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ================= SYSTEMS & DOCUMENTATION ================= */}
        <section
          className="bg-white py-4 md:py-6 md:pb-10 mt-3 px-4 shadow-xl rounded-2xl"
          data-aos="fade-up"
        >
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div
              className="text-center mb-4 md:mb-7"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2 className="text-xl sm:text-3xl lg:text-4xl
        font-bold text-[#0c2546] mb-3">
                Systems & Documentation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Structured processes backed by complete traceability
              </p>
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8">

              {/* SYSTEMS */}
              <div
                className="bg-[#0c2546] rounded-xl p-6
        border border-[#d6dbe3] shadow-sm"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h3 className="text-lg md:text-2xl font-semibold text-white mb-3">
                  - Systems
                </h3>

                <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                  Every manufacturing process is supported by well-defined SOPs,
                  inspection reports, calibration records, and fully traceable
                  quality documentation to maintain control and accountability.
                </p>
              </div>

              {/* DOCUMENTATION */}
              <div
                className="bg-[#0c2546] rounded-xl p-6
        border border-[#d6dbe3] shadow-sm"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h3 className="text-lg md:text-2xl font-semibold text-white mb-3">
                  - Documentation
                </h3>

                <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                  We follow structured documentation workflows that ensure
                  consistency, repeatability, and complete transparency across
                  all stages of manufacturing operations.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* TEAM */}
        <section className="py-8 md:py-10" data-aos="fade-up">

          <h2 className="text-center text-xl md:text-[30px] font-bold text-[#0c2546] mb-4 md:mb-8">
            Skilled & Dedicated Quality Team
          </h2>

          <p className="text-sm max-w-8xl mx-auto md:text-xl text-white 
                bg-[#0c2546] p-6 md:p-8 rounded-2xl leading-relaxed">
            <div className="flex"><p className="pr-3 text-lg md:text-2xl">•</p><p className="pt-1 md:pt-0">Our quality team is trained to maintain strict industrial standards and ensure every part meets customer expectations.
              With expertise in CMM measurement, GD&T interpretation, and root-cause analysis, they act as the backbone of our quality system.
            </p></div><br />
            <div className="flex"><p className="pr-3 text-lg md:text-2xl">•</p><p className="pt-1 md:pt-0">Their commitment to accuracy, discipline, and documentation ensures flawless output every time.
            </p></div>
          </p>

        </section>

        {/* ================= CUSTOMER CONFIDENCE ================= */}
        <section className="bg-white py-3 md:py-6 px-4 shadow-xl rounded-2xl">
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-6" data-aos="fade-up">
              <h2 className="text-xl sm:text-3xl lg:text-4xl
        font-bold text-[#0c2546] mb-3">
                Customer Confidence
              </h2>
              <p className="text-gray-600 text-sm md:text-lg">
                Trust built through consistency, quality, and performance
              </p>
            </div>

            {/* SINGLE CARD */}
            <div className="flex justify-center">
              <div
                className="bg-[#0c2546] rounded-xl p-6 mb-5
        border border-[#d6dbe3]
        max-w-6xl w-full"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <p className="text-white text-sm md:text-xl leading-relaxed">
                  <div className="flex"><p className="pr-3 text-xl md:text-2xl">•</p><p className="md:pt-0 pt-1">We deliver components with consistency, reliability, and
                    precision you can trust. Our strong quality systems enable
                    long-term partnerships built on dependable performance,
                    transparency, and customer satisfaction.
                  </p></div>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= CUSTOMER SATISFACTION =============== */}
        <h2
          className="text-center text-2xl md:text-[38px] font-bold text-[#0c2546] md:mt-10 mt-5 md:mb-10 mb-5"
          data-aos="fade-up"
        >
          Our Key Strengths
        </h2>
        <section
          className="bg-[#0c2546] py-8 px-4 rounded-2xl mb-4 md:mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="max-w-7xl mx-auto
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
    gap-6 text-white"
          >

            {/* ITEM 1 */}
            <div
              className="flex items-center gap-4 lg:justify-center lg:border-r lg:border-white/20 pr-4"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <svg
                className="w-10 h-10 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">
                On Time Delivery
              </span>
            </div>

            {/* ITEM 2 */}
            <div
              className="flex items-center gap-4 lg:justify-center lg:border-r lg:border-white/20 pr-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <svg
                className="w-10 h-10 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 3v18h18" />
                <path d="M7 14l3-3 4 4 5-6" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">
                Improve Productivity
              </span>
            </div>

            {/* ITEM 3 */}
            <div
              className="flex items-center gap-4 lg:justify-center lg:border-r lg:border-white/20 pr-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <svg
                className="w-10 h-10 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="7" r="4" />
                <circle cx="17" cy="7" r="4" />
                <path d="M2 21v-2a4 4 0 014-4h6" />
                <path d="M14 15h4a4 4 0 014 4v2" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">
                Enhance Human Skills
              </span>
            </div>

            {/* ITEM 4 */}
            <div
              className="flex items-center gap-4 lg:justify-center"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <svg
                className="w-10 h-10 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l4 4-4 4-4-4z" />
                <path d="M4 12h16" />
                <path d="M6 16l-2 4" />
                <path d="M18 16l2 4" />
              </svg>
              <span className="font-semibold text-sm sm:text-base">
                Reduce Rejection & Wastage
              </span>
            </div>

          </div>
        </section>


      </div>
    </div>
  );
}