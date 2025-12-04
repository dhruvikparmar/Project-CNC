import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


/* ================= SLIDER IMAGES (BEARING / INDUSTRIAL) ================= */
const slides = [
  "slider6.jpg",
  "slider2.webp",
  "slider3.jpg",
  "slider4.webp",
  "slider5.webp",
];

export default function Home() {

/* ================= MILESTONE COMPONENT ================= */
const Milestone = ({ year, title, points, align = "left", highlight }) => (
  <div
    data-aos={align === "left" ? "fade-right" : "fade-left"}
    className={`relative md:w-1/2 px-6
      ${align === "left"
        ? "md:pr-12 md:text-right"
        : "md:pl-12 md:text-left md:ml-auto"}`}
  >
    {/* DOT */}
    <div
      className={`hidden md:block absolute top-3
        ${align === "left" ? "right-[-9px]" : "left-[-9px]"}
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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* ================= SLIDER ================= */}
      <section className="bg-[#f5f3ee] py-0 sm:py-0 lg:py-0">
        <div
          className="relative max-w-full mx-auto px-4
                     h-[360px] sm:h-[420px] lg:h-[480px]
                     overflow-hidden "
        >
          {/* Animated Images */}
          {slides.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Bearing Industry"
              className={`absolute inset-0 w-full h-full object-cover
                          transition-all duration-1000 ease-in-out
                          ${index === current
                  ? "opacity-100 scale-110"
                  : "opacity-0 scale-100"}`}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#091b32]/60 pointer-events-none z-10"></div>

          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2
                       z-30
                       bg-black/40 text-white
                       w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12
                       rounded-full
                       text-lg sm:text-xl
                       flex items-center justify-center
                       transition hover:bg-sky-500 hover:scale-110"
          >
            ‹
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2
                       z-30
                       bg-black/40 text-white
                       w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12
                       rounded-full
                       text-lg sm:text-xl
                       flex items-center justify-center
                       transition hover:bg-sky-500 hover:scale-110"
          >
            ›
          </button>

          {/* TEXT */}
          <div
            className="absolute inset-0 flex items-center justify-center
                       z-20 text-center px-4"
            data-aos="fade-up"
          >
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                         font-bold text-white
                         transition-all duration-700
                         hover:scale-105"
            >
              Precision Bearing <span className="text-sky-400">Manufacturing</span>
            </h1>
          </div>
        </div>
      </section>

  {/* ================= HOW WE WORK ================= */}
      <section className="bg-[#f5f3ee] py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* TEXT CONTENT */}
          <div data-aos="fade-right">
            <h4 className="text-sm font-semibold tracking-wider text-[#091b32] mb-2">
              ABOUT US
            </h4>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl
                     font-bold text-[#0c2546] mb-5">
              How We Work
            </h2>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg
                    font-medium leading-relaxed">
              We follow a structured and quality-driven manufacturing process.
              From raw material selection to final inspection, every step is
              carefully planned and monitored. Our experienced team and modern
              CNC infrastructure enable us to deliver precision bearing and
              machining components that meet strict industrial standards.
            </p>
          </div>

          {/* IMAGE */}
          <div
            data-aos="fade-left"
            className="flex justify-center md:justify-end"
          >
            <div
              className="w-full
               max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
               h-56 sm:h-64 md:h-72 lg:h-80
               rounded-lg shadow-lg
               overflow-hidden"
            >
              <img
                src="work.jpg"
                alt="How We Work"
                className="w-full h-full object-cover
                 transition-transform duration-700 ease-out
                 hover:scale-110"
              />
            </div>
          </div>

        </div>
      </section>

     {/* ================= OUR CAPABILITIES ================= */}
      <section className="bg-[#f5f3ee] py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <h2
            className="text-center text-2xl sm:text-3xl font-bold
                 text-[#0c2546] mb-10"
            data-aos="fade-up"
          >
            Our Capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "CNC Turning",
                img: "cnc-turning.jpg",
                desc: "High-precision turning for shafts and bearing rings."
              },
              {
                title: "CNC Milling",
                img: "cnc-milling.webp",
                desc: "Accurate milling for complex geometries."
              },
              {
                title: "Bearing Components",
                img: "bearing.jpg",
                desc: "Manufacturing of inner and outer bearing rings."
              },
              {
                title: "Precision Grinding",
                img: "precisions.webp",
                desc: "Micron-level finishing and tight tolerances."
              }
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="bg-[#0c2546]
                     border border-[#1e3358]
                     rounded-lg"
              >
                {/* IMAGE WRAPPER (controls zoom) */}
                <div className="overflow-hidden rounded-t-lg h-44">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover
                         transition-transform duration-700 ease-out
                         hover:scale-110"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="text-[#dbeafe] font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#9fb3c8] text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
{/* ✅ ================= OUR MILESTONES (FIXED POSITION) ================= */}
      <section className="bg-[#f5f3ee] py-16 px-4">
        <h2
            className="text-center text-2xl sm:text-3xl font-bold
                 text-[#0c2546] mb-10"
            data-aos="fade-up"
          >
            Our Milestones
          </h2>

        <div className="relative max-w-7xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 h-full
                          w-0.5 bg-sky-400/30 -translate-x-1/2" />

          <div className="space-y-12">
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

   {/* ================= OUR PRODUCTS ================= */}

      <section className="bg-[#f5f3ee] py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <h2
            className="text-center text-2xl sm:text-3xl font-bold
                 text-[#0c2546] mb-10"
            data-aos="fade-up"
          >
            Our Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Gear",
                img: "product1.JPG",
                desc: "Precision-machined inner and outer bearing rings."
              },
              {
                title: "Hydrolic piston",
                img: "expertise.jpg",
                desc: "High-strength CNC parts for automotive applications."
              },
              {
                title: "Wheel",
                img: "product5.JPG",
                desc: "Custom CNC machined components with tight tolerances."
              },
              {
                title: "Automobile Parts",
                img: "product4.JPG",
                desc: "Final polishing and grinding for superior surface finish."
              }
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="bg-[#0c2546]
                     border border-[#1e3358]
                     rounded-lg"
              >
                {/* IMAGE WRAPPER WITH ZOOM */}
                <div className="overflow-hidden rounded-t-lg h-44">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover
                         transition-transform duration-700 ease-out
                         hover:scale-110"
                  />
                </div>

                {/* TEXT CONTENT */}
                <div className="p-4">
                  <h3 className="text-[#dbeafe] font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#9fb3c8] text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}