import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Capability() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 900, easing: "ease-out", once: true });

    // Number animation function
    const animateValue = (id, start, end, duration, suffix = "") => {
      const el = document.getElementById(id);
      if (!el) return;

      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        el.innerText = value + suffix;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    // 🔥 Run animations when page loads
    animateValue("rangeLeft", 0, 10, 2000, "mm");
    animateValue("rangeRight", 0, 450, 2000, "mm");
    animateValue("outputCount", 0, 27, 1500, " Tonnes");
    animateValue("weightCount", 0, 120, 2000, " kg");
  }, []);

  return (
    <div className="bg-[#f5f3ee] min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative pt-20 w-full 
        min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:h-[350px]
        flex items-center justify-center overflow-hidden"
      >
        <img
          src="/capability.jpg"
          alt="CNC Capability"
          className="absolute inset-0 w-full h-full object-cover object-center"
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          data-aos="zoom-out"
          data-aos-delay="200"
        ></div>

        {/* TEXT */}
        <div className="relative text-center px-4">
          <h1
            data-aos="zoom-in"
            data-aos-delay="300"
            className="block justify-center items-center mb-14 
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                       font-extrabold text-white"
          >
            Our <span className="text-sky-400">Capabilities</span>
          </h1>
        </div>
      </section>

      {/* ================= CAPACITY AT A GLANCE ================= */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-center text-2xl sm:text-3xl font-bold text-[#091b32] mb-8"
          >
            Capacity at a Glance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Diameter Range */}
            <div
              data-aos="zoom-in"
              className="bg-[#091b32] border border-[#1e3358]
                         rounded-xl p-6 text-center shadow-lg
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-sky-400/30"
            >
              <p className="text-xs uppercase tracking-wide text-sky-300 mb-2">
                Diameter Range
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#dbeafe] mb-1">
                <span id="rangeLeft">0mm</span> –{" "}
                <span id="rangeRight">0mm</span>
              </h3>
              <p className="text-[#9fb3c8] text-sm">
                Handling from small precision parts to large rings.
              </p>
            </div>

            {/* Monthly Output */}
            <div
              data-aos="zoom-in"
              className="bg-[#091b32] border border-[#1e3358]
                         rounded-xl p-6 text-center shadow-lg
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-sky-400/30"
            >
              <p className="text-xs uppercase tracking-wide text-sky-300 mb-2">
                Monthly Output
              </p>
              <h3
                id="outputCount"
                className="text-2xl sm:text-3xl font-bold text-[#dbeafe] mb-1"
              >
                0 Tonnes
              </h3>
              <p className="text-[#9fb3c8] text-sm">
                Stable output for OEM and regular supply.
              </p>
            </div>

            {/* Maximum Job Weight */}
            <div
              data-aos="zoom-in"
              className="bg-[#091b32] border border-[#1e3358]
                         rounded-xl p-6 text-center shadow-lg
                         transition-all duration-300
                         hover:-translate-y-1 hover:shadow-sky-400/30"
            >
              <p className="text-xs uppercase tracking-wide text-sky-300 mb-2">
                Maximum Job Weight
              </p>
              <h3
                id="weightCount"
                className="text-2xl sm:text-3xl font-bold text-[#dbeafe] mb-1"
              >
                0 kg
              </h3>
              <p className="text-[#9fb3c8] text-sm">
                Supports medium to heavy components safely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILS SECTION ================= */}
      <section className="py-10 sm:py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT BOXES */}
          <div className="space-y-7">
            {[
              {
                h: "CNC Turning Capability",
                p: "Turning diameter from 10mm to 450mm enabling small precision components and large bearing rings.",
              },
              {
                h: "High Production Output",
                p: "Capable of managing 27 tonnes monthly with structured capacity planning.",
              },
              {
                h: "Heavy Job Handling",
                p: "Jobs up to 120kg with proper balancing and holding systems.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="fade-right"
                className="bg-white border border-[#e2e8f0]
                           rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg sm:text-xl font-bold text-[#091b32] mb-2">
                  {item.h}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item.p}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT INFO BLOCK */}
          <div
            data-aos="fade-left"
            className="bg-[#0c2546] border border-[#1e3358]
                       rounded-xl p-5 shadow-xl"
          >
            <h3 className="text-lg sm:text-xl font-bold text-[#dbeafe] mb-4">
              What This Means for Your Requirements
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  t: "Small Precision Parts",
                  d: "Ideal for bushes, sleeves & small custom CNC components.",
                },
                {
                  t: "Large Rings & Housings",
                  d: "Perfect for bearing rings & heavy automotive parts.",
                },
                {
                  t: "Batch Production",
                  d: "Supports repetitive machining with consistency.",
                },
                {
                  t: "Prototype to Mass",
                  d: "From samples to large production volumes.",
                },
                {
                  t: "Repeat Accuracy",
                  d: "Dimensional stability across batch production.",
                },
                {
                  t: "Reliable Delivery",
                  d: "Process planning ensures committed dispatch timelines.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#091b32] rounded-lg p-4
                             transition-all duration-300
                             hover:-translate-y-1 hover:shadow-sky-300/20"
                >
                  <p className="text-sky-300 font-semibold mb-1">
                    {item.t}
                  </p>
                  <p className="text-[#dbeafe] text-sm leading-relaxed">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-12 px-4">
        <div
          data-aos="fade-up"
          className="max-w-5xl mx-auto bg-[#0c2546]
                     border border-[#1e3358]
                     rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#dbeafe] mb-3">
            Need Custom Machined Parts?
          </h3>

          <p className="text-[#9fb3c8] max-w-xl mx-auto mb-5 text-sm sm:text-base">
            Share your drawings or requirements. Our engineering team will suggest
            the best machining approach for accuracy and cost-efficiency.
          </p>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-sky-400 
                       text-[#091b32] rounded-md font-semibold
                       hover:bg-sky-300 transition-all"
          >
            Discuss Your Requirement
          </button>
        </div>
      </section>
    </div>
  );
}
