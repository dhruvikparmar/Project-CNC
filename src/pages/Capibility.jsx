import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layers, ShieldCheck, CheckCircle2, Hammer, Droplet } from "lucide-react";

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
         data-aos-offset="0"
        data-aos-easing="ease-in-out"
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
      <section className="py-6 md:py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            data-aos="fade-up"
            className="text-center text-2xl sm:text-3xl font-bold text-[#091b32] mb-5 md:mb-10"
          >
            Capacity at a Glance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                t: "Diameter Range",
                v: "10mm – 450mm",
                d: "Handling from small precision parts to large rings.",
              },
              {
                t: "Monthly Output",
                v: "27 Tonnes",
                d: "Stable output for OEM and regular supply.",
              },
              {
                t: "Maximum Job Weight",
                v: "120 kg",
                d: "Supports medium to heavy components safely.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                className="bg-[#091b32] border border-[#1e3358]
                           rounded-xl p-6 text-center shadow-lg
                           transition-all duration-300
                           hover:-translate-y-1 hover:shadow-sky-400/30"
              >
                <p className="text-xs uppercase tracking-wide text-sky-300 mb-2">
                  {item.t}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#dbeafe] mb-1">
                  {item.v}
                </h3>
                <p className="text-[#9fb3c8] text-sm">{item.d}</p>
              </div>
            ))}
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

          {/* ================= Stainless Steel ================= */}
          <div className="mt-7 md:mt-0 mb-5 md:mb-0">
            <h3 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              <Layers className="md:w-8 md:h-8 text-gray-700" />
              Stainless Steel
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "Small Precision Parts", d: "Ideal for bushes, sleeves & small custom CNC components." },
                { t: "Large Rings & Housings", d: "Perfect for bearing rings & heavy automotive parts." },
                { t: "Batch Production", d: "Supports repetitive machining with consistency." },
                { t: "Prototype to Mass", d: "From samples to large production volumes." },
                { t: "Repeat Accuracy", d: "Dimensional stability across batch production." },
                { t: "Reliable Delivery", d: "Process planning ensures committed dispatch timelines." },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#091b32] rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-300/20"
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

      {/*3 LEFT DESCRIPTION / RIGHT IMAGE / */}
      <section className="w-full py-2 md:py-10 pb-5 md:pb-10 px-4 bg-[#f5f3ee]">
        <div className="max-w-7xl mx-auto">

          {/* FLEX WRAPPER */}

          <div className="flex flex-col-reverse lg:flex-row gap-5 md:gap-10 lg:gap-10 items-stretch">

            {/* LEFT: Heading + Points */}
            <div className="flex-1">

              {/* Section Heading (MOVED HERE) */}
              <div className="mb-6 md:mb-12">
                <h2 className="text-xl md:text-3xl sm:text-4xl font-bold text-gray-900">
                  Forging Capabilities
                </h2>
                <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
                  High-strength forged components engineered for durability, performance, and demanding industrial applications.
                </p>
              </div>

              {/* Points */}
              <div className="space-y-3 md:space-y-6">
                {[
                  {
                    title: "- Closed Die & Open Die Forging",
                    desc: "Expertise in both closed and open die forging processes to meet diverse component requirements."
                  },
                  {
                    title: "- High Strength & Structural Integrity",
                    desc: "Forged parts deliver superior grain flow, strength, and fatigue resistance compared to cast or machined parts."
                  },
                  {
                    title: "- Wide Material Compatibility",
                    desc: "Capability to forge carbon steel, alloy steel, stainless steel, and special engineering alloys."
                  },
                  {
                    title: "- Precision Dimensional Control",
                    desc: "Controlled forging processes ensure consistent dimensions and reduced post-machining requirements."
                  },
                  {
                    title: "- Scalable Production Capacity",
                    desc: "Flexible setups support prototypes, low-volume batches, and high-volume production runs."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white md:w-[96vh] p-5 rounded-xl shadow-md hover:shadow-xl transition-all"
                  >
                    <h4 className="md:text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT: Image (same height as LEFT from heading) */}
            <div className="flex-1">
              <div className="w-full h-full pt-3 rounded-2xl overflow-hidden">
                <img
                  src="/Forging.jpg"
                  alt="Our Core Strength"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}