import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Brain, ChevronLeft, ChevronRight, Package, Ruler, Search, Settings } from "lucide-react";


/* ================= SLIDER IMAGES (BEARING / INDUSTRIAL) ================= */
const slides = [
  "slider6.jpg",
  "slider2.webp",
  "slider3.jpg",
  "slider4.webp",
  "slider5.webp",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  function ImageSlider({ images, title }) {
    // create loop illusion
    const extendedImages = [
      images[images.length - 1],
      ...images,
      images[0],
    ];

    const [current, setCurrent] = useState(1);
    const [transition, setTransition] = useState(true);

    const next = () => setCurrent((prev) => prev + 1);
    const prev = () => setCurrent((prev) => prev - 1);

    // handle loop reset (no jump visible)
    useEffect(() => {
      if (current === extendedImages.length - 1) {
        setTimeout(() => {
          setTransition(false);
          setCurrent(1);
        }, 500);
      }

      if (current === 0) {
        setTimeout(() => {
          setTransition(false);
          setCurrent(extendedImages.length - 2);
        }, 500);
      }
    }, [current]);

    useEffect(() => {
      if (!transition) {
        requestAnimationFrame(() => setTransition(true));
      }
    }, [transition]);

    return (
      <div className="relative overflow-hidden h-44 bg-white rounded-t-lg">

        {/* SLIDER TRACK */}
        <div
          className={`flex h-full ${transition ? "transition-transform duration-500 ease-out" : ""
            }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedImages.map((img, i) => (
            <div
              key={i}
              className="w-full h-full flex-shrink-0
              flex items-center justify-center bg-white"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>

        {/* LEFT BUTTON */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2
          bg-[#091b32]/80 text-white p-1.5 rounded-full"
        >
          <ChevronLeft size={18} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2
          bg-[#091b32]/80 text-white p-1.5 rounded-full"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    );
  }
  return (
    <>
      {/* ================= SLIDER ================= */}
      <section id="hero" className="bg-[#f5f3ee] py-0 sm:py-0 lg:py-0">
        <div
          className="relative max-w-full mx-auto px-4
                     h-[40vh] sm:h-[420px] lg:h-[60vh]
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
              className="text-2xl sm:text-3xl max-sm:text-3xl md:text-4xl lg:text-5xl
                         font-bold text-white
                         transition-all duration-700
                         hover:scale-105"
            >
              Precision Bearing <span className="text-sky-400">Manufacturing</span>
            </h1>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US ================= */}
      <section className="bg-[#f5f3ee] py-8 md:py-16 px-4">
        <div
          className="max-w-6xl mx-auto
    grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]
    gap-10 items-center"
        >

          {/* TEXT CONTENT */}
          <div data-aos="fade-right">
            {/* <h2 className="text-sm font-semibold tracking-wider text-[#091b32] mb-2">
              ABOUT US
            </h2> */}

            <h2 className="text-2xl sm:text-3xl lg:text-4xl
        font-bold text-[#0c2546] mb-5">
              About Us
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg
        font-medium leading-relaxed">
              At <span className="text-[#0c2546] font-bold">Shree Industries</span>, we believe precision is not just a
              process - it is a promise. Backed by skilled engineers,
              advanced equipment, and a commitment to excellence,
              we strive to be <span className="text-[#0c2546] font-bold">your trusted partner in precision work.</span>
            </p>
          </div>

          {/* IMAGE */}
          <div
            data-aos="fade-left"
            className="flex justify-center md:justify-end"
          >
            <div
              className="relative w-full
        max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
        h-56 sm:h-64 md:h-72 lg:h-80
        rounded-lg shadow-lg
        overflow-visible"
            >
              {/* Fixed Text */}
              <span
                className="absolute top-4 left-4 z-10
          text-white text-sm sm:text-base lg:text-lg
          font-semibold tracking-wide
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              >
                Structured & Quality-Driven Process
              </span>

              <img
                src="work.jpg"
                alt="How We Work"
                className="relative z-0 w-full h-full object-cover
          transition-transform duration-700 ease-out
          hover:scale-110"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= HOW WE WORK FOR YOU ================= */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl
        font-bold text-[#0c2546]">
              How We Work For You
            </h2>
          </div>

          {/* Steps Grid */}

          {/* STEP 1 , 2 , 3 */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-0 justify-evenly">
            <div className="text-center px-4" data-aos="fade-up">
              <Search className="mx-auto mb-4 border w-24 h-24 p-4 bg-[#0c2546] rounded-full text-white" />
              <h3 className="text-lg font-semibold text-[#0c2546] mb-2">
                Requirement Analysis
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We study your drawings, tolerances, and application needs to
                fully understand your project.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="text-center px-4" data-aos="fade-up">
              <Brain className="mx-auto mb-4 border w-24 h-24 p-4 bg-[#0c2546] rounded-full text-white" />

              <h3 className="text-lg font-semibold text-[#0c2546] mb-2">
                Engineering & Process Planning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team designs machining processes and prepares the most
                efficient workflow.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="text-center px-4" data-aos="fade-up">
              <Settings className="mx-auto mb-4 border w-24 h-24 p-4 bg-[#0c2546] rounded-full text-white" />

              <h3 className="text-lg font-semibold text-[#0c2546] mb-2">
                CNC Precision Machining
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                High-accuracy CNC machines manufacture components with
                tight tolerances.
              </p>
            </div>
          </div>

          {/* STEP 4 & 5*/}
          <div className="flex flex-col sm:flex-row mt-12 sm:mt-20 gap-10 sm:gap-0 justify-evenly">
            <div className="text-center px-4" data-aos="fade-up">
              <Ruler className="mx-auto mb-4 border w-24 h-24 p-4 bg-[#0c2546] rounded-full text-white" />

              <h3 className="text-lg font-semibold text-[#0c2546] mb-2">
                CMM Inspection & Quality Check
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each part is verified in our CMM lab for accuracy and
                compliance.
              </p>
            </div>

            {/* STEP 5 */}
            <div className="text-center px-4 sm:col-span-2 lg:col-span-1">
              <Package className="mx-auto mb-4 border w-24 h-24 p-4 bg-[#0c2546] rounded-full text-white" />
              <h3 className="text-lg font-semibold text-[#0c2546] mb-2">
                Packaging & On-Time Delivery
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Components are safely packed and delivered on schedule.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= ENGINEERING WORK ================= */}
      <section className="bg-[#f5f3ee] py-10 md:py-16 px-4">
        <div
          className="max-w-6xl mx-auto
    grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]
    gap-10 items-center"
        >

          {/* IMAGE */}
          <div
            data-aos="fade-right"
            className="flex justify-center md:justify-start
             order-2 md:order-1"
          >
            <div
              className="relative w-full
  max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
  h-56 sm:h-64 md:h-72 lg:h-80
  rounded-lg shadow-lg
  overflow-hidden"
            >
              {/* Fixed Text on Image */}
              <span
                className="absolute top-4 left-4 z-10
    text-white text-sm sm:text-base lg:text-lg
    font-semibold tracking-wide
    drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              >
                Complete Solution of Engineering Work
              </span>

              <img
                src="Work2.jpg"
                alt="Engineering Work"
                className="relative z-0 w-full h-full object-cover
    transition-transform duration-700 ease-out
    hover:scale-110"
              />
            </div>

          </div>

          {/* TEXT CONTENT */}
          <div
            data-aos="fade-left"
            className="order-1 md:order-2"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl
        font-bold text-[#0c2546] mb-5">
              Engineering Work
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

        </div>
      </section>
      {/* ================= QUALITY MANAGEMENT ================= */}
      <section className="bg-[#f5f3ee] py-2 md:py-16 px-4">
        <div
          className="max-w-6xl mx-auto
    grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]
    gap-10 items-center"
        >

          {/* TEXT CONTENT */}
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl
        font-bold text-[#0c2546] mb-5">
              Precision Inspection with CMM Machine
              {/* Working With Stringent Quality Management Practices */}
            </h2>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg
        font-medium leading-relaxed">
              Quality is at the core of our manufacturing philosophy. We follow
              stringent quality management practices at every stage of production.
              Advanced inspection systems and standardized procedures ensure
              dimensional accuracy, consistency, and compliance with international
              quality standards for all engineered components.
            </p>
          </div>

          {/* IMAGE */}
          <div
            data-aos="fade-left"
            className="flex justify-center md:justify-end"
          >
            <div
              className="relative w-full
        max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
        h-56 sm:h-64 md:h-72 lg:h-80
        rounded-lg shadow-lg
        overflow-hidden"
            >
              {/* Fixed Text on Image */}
              <span
                className="absolute top-4 left-4 z-10
          text-white text-sm sm:text-base lg:text-lg
          font-semibold tracking-wide
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
              >
                Working With Stringent Quality Management Practices
              </span>

              <img
                src="Cmm.jpg"
                alt="CMM Machine Inspection"
                className="relative z-0 w-full h-full object-cover
          transition-transform duration-700 ease-out
          hover:scale-110"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= OUR CAPABILITIES ================= */}
      <section className="bg-[#f5f3ee] py-12 sm:py-16 px-4">
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
                img: "DX-200.png",
                desc: "High-precision turned components for accurate fit and finish."
              },
              {
                title: "CNC Milling",
                img: "VMC.png",
                desc: "Complex geometries machined with unmatched accuracy."
              },
              {
                title: "Forging Work",
                img: "bearing.jpg",
                desc: "Strong, durable parts shaped for maximum performance."
              },
              {
                title: "Casting Work",
                img: "precisions.webp",
                desc: "Reliable, high-quality components formed with precision."
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

      {/* ================= OUR EXPERTISE ================= */}
      <section className="bg-[#f5f3ee] py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto">

          <h2
            className="text-center text-2xl sm:text-3xl font-bold
        text-[#0c2546] mb-10"
            data-aos="fade-up"
          >
            Our Expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              {
                title: "Gear",
                images: ["Product1-2.png", "product1.JPG", "Product1-1.png"],
                desc: "Built with accuracy, durability, and consistent performance in every tooth."
              },
              {
                title: "Hydrolic Parts",
                images: ["Product2.jpg", "Product2-2.jpg", "Product2-1.jpg"],
                desc: "Ensuring consistent pressure handling and superior hydraulic efficiency."

              },
              {
                title: "Nylon Material Parts",
                images: ["Product3-2.png", "Product3-1.png", "Product3.png"],
                desc: "High-quality nylon components engineered for strength, flexibility, and wear resistance ",

              },
              {
                title: "Automotive Components",
                images: ["infra16.JPG", "Product4-1.JPG", "Product4-2.png"],
                desc: "Designed for long life, perfect fit, and consistent performance on the road."
              },
              {
                title: "Machine Tools & Industrial Components",
                images: ["Product5-3.png", "Product5-2.png", "Product5-1.png"],
                desc: "Reliable machine tools and industrial components for modern manufacturing."
              },
              {
                title: "Hardware Product",
                images: ["infra24.JPG", "infra12.jpg", "Product6-2.jpg"],
                desc: "Designed for consistent performance in heavy-duty applications."
              }
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                className="bg-[#0c2546]
            border border-[#1e3358]
            rounded-lg overflow-hidden"
              >
                {/* IMAGE SLIDER */}
                <ImageSlider images={item.images} title={item.title} />

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

