import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Quality() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out", once: true });
  }, []);

  return (
    <div className="bg-[#f5f3ee] text-[#1a1a1a] overflow-x-hidden">

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
          className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
          font-extrabold tracking-wide text-white drop-shadow-lg text-center px-4"
        >
          Quality <span className="text-blue-400">Assurance</span>
        </h1>
      </div>


      {/* MAIN WRAPPER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        {/* SECTION 1 — INTRO */}
        <section className="py-20" data-aos="fade-up">
          <h2 className="text-center text-3xl md:text-[38px] font-bold text-[#0c2546] mb-8">
            Our Commitment to Quality
          </h2>

          <p className="max-w-4xl  mx-auto bg-[#0c2546] text-white p-8 rounded-3xl text-lg md:text-xl text-gray-700 leading-relaxed">
            Quality is the foundation of AeroPrecise. Every component we manufacture
            goes through a highly controlled quality workflow that ensures precision,
            repeatability, and consistency. Our state-of-the-art inspection tools and
            trained engineers uphold global industrial standards in accuracy and performance.
          </p>
        </section>


        {/* SECTION 2 — TWO COLUMN IMAGE + TEXT */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGE */}
            <div
              data-aos="fade-right"
              className="rounded-3xl overflow-hidden shadow-xl h-[270px] sm:h-[320px] md:h-[380px]"
            >
              <img
                src="quality1.jpg"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* RIGHT TEXT */}
            <div data-aos="fade-left">
              <h3 className="text-2xl text-center md:text-3xl font-bold  text-[#0c2546] mb-8">
                Precision is Engineered, Not Assumed
              </h3>

              <p className="text-lg md:text-xl bg-[#0c2546] text-white text-gray-700 leading-relaxed p-8 shadow-2xl rounded-3xl">
                Our quality department operates with a zero-compromise mindset.
                With temperature-controlled inspection environments, calibrated instruments,
                and structured documentation, every part undergoes validation before moving
                to the next stage.
              </p>
            </div>

          </div>
        </section>


        {/* SECTION 3 — QC PROCESS (Left Title + Right Steps) */}
        <section className="py-16" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-10 lg:grid-cols-2 max-w-6xl mx-auto">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center" data-aos="fade-right">
              <h2 className="text-2xl md:text-[30px] text-center font-bold text-[#0c2546] mb-4">
                Our Quality Control Process
              </h2>

              <p className="text-lg md:text-xl bg-[#0c2546] 
     p-6 text-white rounded-2xl leading-relaxed">

                At AeroPrecise, our quality control process is engineered with a systematic and
                multi-stage approach to ensure every component meets the highest levels of
                accuracy, stability, and performance.
                <br /><br />
                Our trained inspectors perform continuous in-process verification using calibrated
                measuring instruments, ensuring that deviations are identified and corrected
                instantly.<br /><br /> Each finished component undergoes a thorough final inspection where
                dimensional accuracy, surface finish, and functional tolerances are validated.

              </p>

            </div>

            {/* RIGHT LIST */}
            <div className="space-y-4 items-center pt-4.5" data-aos="fade-left">
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
                  className="flex items-center gap-3 p-2 rounded-xl bg-white 
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



        {/* SECTION 4 — IMAGE GRID */}
        {/* <section className="py-16">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-700 mb-12">
            Quality Inspection Environment
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "certificate1.jpg",
              "certificate2.jpg",
              "certificate3.jpg",
              "certificate4.jpg",
              "certificate5.jpg",
              "certificate6.jpg",
              "certificate7.jpg",
              "certificate8.jpg",
            ].map((src, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className="rounded-xl shadow-xl overflow-hidden h-[220px] sm:h-[260px] md:h-[300px]"
              >
                <img
                  src={src}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                  alt="Quality Lab"
                />
              </div>
            ))}

          </div>
        </section> */}

        {/* SECTION 5 — TEAM */}
        <section className="py-10" data-aos="fade-up">

          <h2 className="text-center text-2xl md:text-[30px] font-bold text-[#0c2546] mb-8">
            Skilled & Dedicated Quality Team
          </h2>

          <p className="text-lg max-w-4xl mx-auto text-base md:text-xl text-white 
                bg-[#0c2546] p-6 md:p-8 rounded-2xl leading-relaxed">

            Our quality team consists of highly trained engineers and inspectors who bring
            years of technical expertise into every evaluation. They follow a structured
            approach that includes real-time monitoring, process documentation, and
            corrective-action systems to eliminate any variation during machining.
            <br /><br />
            Through continuous training programs, updated inspection techniques, and
            exposure to the latest industrial standards, our team ensures that each component
            meets global benchmarks of accuracy and performance. Their commitment to
            precision, discipline, and responsibility forms the backbone of AeroPrecise’s
            trusted quality assurance system.

          </p>

        </section>


      </div>
    </div>
  );
}