import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Layers, ShieldCheck, CheckCircle2, Hammer, Droplet } from "lucide-react";




export default function Capibility() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out", once: true });
  }, []);

  return (
    <div id="hero" className="bg-[#f5f3ee] min-h-screen">

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
            className="block justify-center items-center mb-14 text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                       font-extrabold text-white"
          >
            Our <span className="text-sky-400">Capabilities</span>
          </h1>

          {/* <p
            data-aos="fade-up"
            data-aos-delay="450"
            className="mt-2 text-sm sm:text-base md:text-lg text-[#e2e8f0] max-w-2xl mx-auto"
          >
            Precision CNC machining for small parts, heavy components,
            and long-term production with consistency.
          </p> */}
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
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
                           
                            hover:shadow-sky-400/30"
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

      {/* ================= CAPABILITIES PAGE ================= */}
      <section className="bg-white py-3 md:py-10">

        {/* HERO / PAGE TITLE */}
        {/* ================= TOP SERVICES ================= */}
        <section className="px-4 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-4 md:mb-12" data-aos="fade-up">
              <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-[#0c2546]">
                Top Services
              </h2>
            </div>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">

              {[
                { title: "CNC Milling", img: "CNC-Milling.png" },
                { title: "CNC Turning", img: "CNC-Turning2.jpg" },
                { title: "Forging", img: "Forging.jpg" },
                { title: "Casting", img: "Casting.webp" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="relative group rounded-2xl overflow-hidden shadow-xl"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 100}
                >
                  {/* IMAGE */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-[260px] object-cover
              transition-transform duration-700 ease-out
              group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t
              from-black/70 via-black/20 to-transparent
              opacity-90"
                  ></div>

                  {/* TEXT */}
                  <div
                    className="absolute bottom-0 left-0 right-0
              p-4 text-center"
                  >
                    <h3
                      className="text-white text-lg font-semibold
                tracking-wide"
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        <p className="mt-7 md:mt-15 text-gray-600 text-md md:text-lg leading-relaxed text-center px-10">
          " At <span className="font-semibold text-gray-900">Shree Industries</span> , quality is built into every process — from raw material selection to final inspection.
          We follow strict standards, advanced machining practices, and continuous quality checks to ensure precision, reliability, and consistency in every component we deliver."
        </p>

        {/* LEFT IMAGE / RIGHT DESCRIPTION */}
        <section className="w-full py-7 md:py-15 mt-4 md:mt-15 px-4 bg-[#f5f3ee]  min-h-screen">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">

            {/* Left Image */}
            <div className="w-full h-[200px] sm:h-[320px] md:h-[420px] lg:h-full overflow-hidden rounded-2xl">
              <img
                src="/Benefit.jpg"
                alt="Aeroprecise Benefits"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                Our Benefits
              </h2>

              <p className="text-gray-600 mb-4 md:mb-8 max-w-xl">
                Delivering precision, reliability, and value through every stage of manufacturing.
              </p>

              <div className="space-y-3 md:space-y-4">
                {[
                  {
                    title: "- Precision Engineering",
                    text: "Every component is manufactured with tight tolerances using advanced CNC technology, ensuring accuracy and repeatability."
                  },
                  {
                    title: "- Strict Quality Control",
                    text: "Quality checks are integrated at every stage, from raw material inspection to final validation."
                  },
                  {
                    title: "- Industry-Grade Infrastructure",
                    text: "Modern machinery and controlled environments support complex and high-volume production."
                  },
                  {
                    title: "- Skilled Technical Team",
                    text: "Experienced engineers and operators ensure efficiency, consistency, and process excellence."
                  },
                  {
                    title: "- Reliable & On-Time Delivery",
                    text: "Structured planning and disciplined workflows ensure dependable delivery timelines."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 p-5 rounded-xl transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>
      </section>

      {/* PORTFOLIOS */}
      <section className="w-full py-2 md:py-4 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-7 md:mb-15">
            <h2 className="flex items-center gap-3 text-xl md:text-3xl sm:text-4xl font-bold text-gray-900">
              <Layers className="md:w-8 md:h-8 text-gray-800" />
              Portfolios
            </h2>
            <p className="mt-2 md:text-lg text-gray-600">
              Our Material Portfolio
            </p>
          </div>
          {/* ================= Types of Materials ================= */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-18 mb-10">
            <div>
              <h4 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-8">
                <Hammer className="md:w-8 md:h-8 text-gray-700" />
                Steel
              </h4>

              <ul className="space-y-2 text-md md:text-xl md:pl-5 text-gray-600">
                {["En1A, 1141, 1144, S235, S355", "1018, 1020, 1040, 1045 12L15", "11SMnPb30, 20MnV6, 65-45-12", "20MnCr5, 16MnCr5, 4140, 4340, 8620"].map((item, i) => (
                  <li key={i} className="flex items-start  gap-2">
                    <CheckCircle2 className="md:w-5 w-5 h-5 text-white rounded-full bg-[#091b32] mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-8">
                <Droplet className="md:w-8 md:h-8 text-blue-600" />
                Aluminium
              </h4>

              <ul className="space-y-2 text-md md:text-xl md:pl-7 text-gray-600">
                {["Aluminium 6061 T6", "Aluminium 7075 T6", "Aluminium 2014", "Aluminium 2024"].map(
                  (item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="md:w-5 w-5 h-5 text-white rounded-full bg-[#091b32] mt-0.5" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* ================= Other Materials ================= */}
          <h4 className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
            <ShieldCheck className="md:w-8 md:h-8 text-gray-700" />
            Other Materials
          </h4>

          <div className="flex flex-col text-lg md:text-xl sm:flex-row md:gap-12 mb-6 lg:gap-56">
            {["Brass", "Copper", "Bronze", "Engineering Plastics"].map((item, index) => (
              <div
                key={index}
                className="py-1 md:py-4 rounded-xl flex items-center md:pl-5 gap-2 text-gray-700 md:font-medium"
              >
                <CheckCircle2 className="md:w-5 w-5 h-5 text-white rounded-full bg-[#091b32] mt-0.5" />
                {item}
              </div>
            ))}
          </div>

          {/* ================= Stainless Steel ================= */}
          <div className="mt-7 md:mt-0 mb-5 md:mb-0">
            <h3 className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              <Layers className="md:w-8 md:h-8 text-gray-700" />
              Stainless Steel
            </h3>

            <div className="flex text-lg md:text-xl flex-col sm:flex-row md:gap-12 lg:gap-77">
              {/* Column 1 */}
              <ul className="bg-white md:p-6 md:mt-3 mt-0 rounded-xl space-y-2 text-gray-600">
                {["SS 304", "SS 304L", "SS 316", "SS 316L"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="md:w-5 w-5 h-5 text-white rounded-full bg-[#091b32] mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Column 2 */}
              <ul className="bg-white md:p-6 mt-5 md:mt-0 rounded-xl space-y-2 text-gray-600">
                {["Hastellocy C20", "Inconel 625, 718", "Monel 400 & 500", "17-4 PH, 15-5 PH"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="md:w-5 w-5 h-5 text-white rounded-full bg-[#091b32] mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Column 3 */}
              <ul className="bg-white md:p-6 mt-5 md:mt-0 rounded-xl space-y-2 text-gray-600">
                {["AISI 400 Series", "Nitronic 50 & 60", "6Al-4V, CP Grades", "SS 316L",].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="md:w-5 w-5 h-5 text-white rounded-full bg-[#091b32] mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*1 LEFT DESCRIPTION / RIGHT IMAGE / */}
      <section className="w-full py-5 md:py-10 px-4 bg-[#f5f3ee]">
        <div className="max-w-7xl mx-auto">

          {/* FLEX WRAPPER */}

          <div className="flex flex-col-reverse lg:flex-row gap-5 md:gap-10 lg:gap-10 items-stretch">

            {/* LEFT: Heading + Points */}
            <div className="flex-1">

              {/* Section Heading (MOVED HERE) */}
              <div className="mb-6 md:mb-12">
                <h2 className=" text-xl md:text-3xl sm:text-4xl font-bold text-gray-900">
                  Our Core Strength
                </h2>
                <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
                  The pillars that drive precision, performance, and reliability in every solution we deliver.
                </p>
              </div>

              {/* Points */}
              <div className="space-y-3 md:space-y-6">
                {[
                  {
                    title: "- Advanced Manufacturing Capabilities",
                    desc: "Equipped with modern CNC machines and precision tools to handle complex and high-tolerance components."
                  },
                  {
                    title: "- Strong Quality Assurance System",
                    desc: "Multi-stage inspection processes ensure every part meets stringent quality and compliance standards."
                  },
                  {
                    title: "- Experienced Technical Team",
                    desc: "Skilled engineers and operators bring deep industry expertise and problem-solving capability."
                  },
                  {
                    title: "- Process Reliability & Consistency",
                    desc: "Standardized workflows and controlled environments deliver consistent , repeatable results."
                  },
                  {
                    title: "- On-Time Delivery Commitment",
                    desc: "Efficient planning and execution ensure dependable turnaround times without compromising quality."
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
              <div className=" w-full h-full pt-3 rounded-2xl overflow-hidden">
                <img
                  src="/Strenght.jpg"
                  alt="Our Core Strength"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/*2 LEFT IMAGE / RIGHT DESCRIPTION */}
      <section className="w-full py-5 md:py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* FLEX WRAPPER */}
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-10 items-stretch">

            {/* LEFT: Image */}
            <div className="flex-1 w-full">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="Why2.jpg"
                  alt="Why Choose AeroPrecise"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT: Heading + Description */}
            <div className="flex-1">

              {/* Section Heading */}
              <div className="mb-4 md:mb-8">
                <h2 className="text-xl md:text-3xl sm:text-4xl font-bold text-gray-900">
                  Why Choose Shree Industries?
                </h2>
                <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
                  Trusted for precision, reliability, and engineering excellence across demanding industries.
                </p>
              </div>

              {/* Points */}
              <div className="space-y-3 md:space-y-6">
                {[
                  {
                    title: "- High-Precision Manufacturing",
                    desc: "Advanced CNC technology enables tight tolerances and consistent accuracy across complex components."
                  },
                  {
                    title: "- Robust Quality Systems",
                    desc: "Comprehensive inspection and quality control processes ensure compliance with industry standards."
                  },
                  {
                    title: "- Experienced Engineering Team",
                    desc: "A skilled workforce delivers technical expertise, process optimization, and problem-solving capabilities."
                  },
                  {
                    title: "- Reliable Delivery Performance",
                    desc: "Structured planning and disciplined execution ensure on-time delivery without compromising quality."
                  },
                  {
                    title: "- Customer-Focused Approach",
                    desc: "We collaborate closely with customers to deliver solutions aligned with their specific requirements."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all"
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

      {/*4 LEFT IMAGE / RIGHT DESCRIPTION */}
      <section className="w-full py-5 md:py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">

          {/* FLEX WRAPPER */}
          <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-10 items-stretch">

            {/* LEFT: Image */}
            <div className="flex-1 w-full">
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="Casting2.jpeg"
                  alt="Why Choose AeroPrecise"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT: Heading + Description */}
            <div className="flex-1">

              {/* Section Heading */}
              <div className="mb-8">
                <h2 className="text-xl md:text-3xl sm:text-4xl font-bold text-gray-900">
                  Casting Capabilities
                </h2>
                <p className="mt-2 text-base sm:text-lg text-gray-600 max-w-2xl">
                  Reliable casting solutions delivering dimensional accuracy, material integrity,
                  and consistent quality for industrial applications.
                </p>
              </div>

              {/* Points */}
              <div className="space-y-3 md:space-y-6">
                {[
                  {
                    title: "- Sand & Precision Casting",
                    desc: "Expertise in sand casting and precision casting for complex geometries and varied component sizes."
                  },
                  {
                    title: "- Wide Material Range",
                    desc: "Capability to cast gray iron, ductile iron, carbon steel, alloy steel, and special grades."
                  },
                  {
                    title: "- Controlled Casting Processes",
                    desc: "Optimized melting, pouring, and cooling processes ensure sound structure and reduced defects."
                  },
                  {
                    title: "- Dimensional Accuracy & Finish",
                    desc: "Controlled molds and post-casting processes deliver consistent dimensions and surface finish."
                  },
                  {
                    title: "- Scalable Production Capacity",
                    desc: "Supports prototype development, low-volume batches, and high-volume production requirements."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all"
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
          </div>
        </div>
      </section>
    </div>
  );
}