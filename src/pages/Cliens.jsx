import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Clients() {
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
                style={{ backgroundImage: "url('partner.jpg')" }}
            >
                <div
                    data-aos="zoom-out"
                    className="absolute inset-0 bg-black/60"
                ></div>

                <h1
                    data-aos="zoom-in"
                    className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl
          font-extrabold tracking-wide text-white drop-shadow-lg text-center px-4"
                >
                    Our Valuable <span className="text-blue-400">Partners</span>
                </h1>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                {/* SECTION 1 — INTRO */}
                <section className="py-15" data-aos="fade-up">

                    {/* Heading */}
                    <h2 className="text-center text-2xl md:text-[40px] font-bold text-[#0c2546] mb-8">
                        Trusted by Leading Industries
                    </h2>

                    {/* Paragraph Box */}
                    <p className="max-w-4xl mx-auto text-base md:text-xl text-white 
                bg-[#0c2546] p-6 md:p-8 rounded-2xl leading-relaxed">

                        AeroPrecise is proud to collaborate with leading industrial, engineering,
                        and manufacturing organizations across diverse sectors. Our commitment to
                        precision, reliability, and consistency has earned us long-term partnerships
                        built on mutual trust and shared growth.
                        <br /><br />
                        With every project, we ensure transparent communication, disciplined
                        workflow execution, and strict quality adherence — enabling us to deliver
                        high-performance components that meet global standards. Our clients value
                        our technical expertise, modern infrastructure, and customer-centric
                        approach, making AeroPrecise a preferred machining and tooling partner
                        for companies worldwide.

                    </p>

                </section>



                {/* SECTION 2 — CLIENT LOGOS GRID */}
                <section className="py-10">
                    <h2 className="text-center text-2xl md:text-[40px] font-bold text-[#0c2546] mb-10">
                        Our Clients
                    </h2>

                    <div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            gap-6 md:gap-10 max-w-6xl mx-auto"
                    >
                        {[
                            "jyoti-logo.svg",
                            "Logo-Hydrobenz.png",
                            "Silver-Logo.png",
                            "Fine-Logo.png",
                            "Bhavani-Logo.png",
                        ].map((logo, i) => (
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 80}
                                className="bg-white p-4 rounded-xl shadow-md hover:shadow-2xl
                           transition overflow-hidden group border border-gray-200"
                            >
                                <img
                                    src={logo}
                                    className="w-full h-30 object-contain group-hover:grayscale-0 
                             transition-transform duration-500 group-hover:scale-105"
                                    alt="Client Logo"
                                />
                            </div>
                        ))}
                    </div>
                </section>


                {/* SECTION 3 — PARTNERSHIP MESSAGE */}
                <section className="py-20" data-aos="fade-up">
                    <h3 className="text-center text-xl md:text-[35px] font-bold mb-10 text-[#0c2546]">
                        Built on Trust, Quality & Long-Term Collaboration
                    </h3>
                    <div className="max-w-5xl mx-auto bg-[#0c2546] text-white p-8 md:p-10 rounded-3xl shadow-xl">


                        <p className="text-base md:text-xl leading-relaxed">
                            We believe that strong partnerships are built on transparency, consistent
                            quality, and mutual growth. Each collaboration reflects our commitment to
                            engineering excellence and our ability to deliver tailored solutions across
                            diverse manufacturing requirements.
                        </p>

                        <p className="mt-6 text-base md:text-xl leading-relaxed">
                            With every project, we strive not only to meet client expectations but to
                            exceed them through innovation, precision, and dependable service. Our
                            partners value our dedication to continuous improvement and our ability
                            to adapt to evolving industry standards.
                        </p>

                    </div>
                </section>


                {/* SECTION 4 — OPTIONAL TESTIMONIALS */}
                <section className="py-10" data-aos="fade-up">

                    <h2 className="text-center text-2xl md:text-[40px] font-bold text-[#0c2546] mb-10">
                        What Our Clients Say
                    </h2>

                    {/* SLIDER OUTER WRAPPER */}
                    <div className="relative h-full bg-[#f5f3ee] overflow-hidden max-w-6xl mx-auto py-4 px-4">

                        {/* LEFT Fade Mask */}
                        <div className="pointer-events-none absolute top-0 left-0 h-full w-10 
                    bg-gradient-to-r from-[#f5f3ee] to-transparent z-20"></div>

                        {/* RIGHT Fade Mask */}
                        <div className="pointer-events-none absolute top-0 right-0 h-full w-10 
                    bg-gradient-to-l from-[#f5f3ee] to-transparent z-20"></div>

                        {/* SLIDER TRACK */}
                        <div className="flex animate-slide gap-6">

                            {[
                                {
                                    name: "Bhavani Industries India LLP",
                                    text: "AeroPrecise consistently delivers high-precision machining with exceptional reliability and disciplined service."
                                },
                                {
                                    name: "Hydrobenz",
                                    text: "Their machining accuracy and process transparency make them a trusted supplier for critical engineering components."
                                },
                                {
                                    name: "Silver Pumps and Motors",
                                    text: "Outstanding quality and timely delivery. AeroPrecise understands modern manufacturing needs exceptionally well."
                                },
                                {
                                    name: "Jyoti CNC Automation Limited",
                                    text: "Their quality systems match global benchmarks. A valuable and dependable long-term machining partner."
                                },
                                {
                                    name: "FTI • Fine Thread Form Industries",
                                    text: "AeroPrecise’s engineering capability and consistency have strengthened our production quality significantly."
                                },
                            ]
                                // Duplicate list
                                .concat([
                                    { name: "Bhavani Industries India LLP", text: "AeroPrecise consistently delivers high-precision machining with exceptional reliability and disciplined service." },
                                    { name: "Hydrobenz", text: "Their machining accuracy and process transparency make them a trusted supplier for critical engineering components." },
                                    { name: "Silver Pumps and Motors", text: "Outstanding quality and timely delivery. AeroPrecise understands modern manufacturing needs exceptionally well." },
                                    { name: "Jyoti CNC Automation Limited", text: "Their quality systems match global benchmarks. A valuable and dependable long-term machining partner." },
                                    { name: "FTI • Fine Thread Form Industries", text: "AeroPrecise’s engineering capability and consistency have strengthened our production quality significantly." },
                                ])
                                .map((item, i) => (
                                    <div
                                        key={i}
                                        className="
                                         w-94 min-w-[260px] sm:min-w-[320px] 
                                        rounded-2xl p-6 flex-shrink-0
                                        backdrop-blur-xl bg-[#0c2546]/95
                                    border-white/10 shadow-lg relative
                                        transition-all duration-300 ease-out
                                        hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/30"
                                    >
                                        {/* Left Accent Line */}
                                        <div className="
    absolute left-0 top-0 w-1 h-full rounded-l-xl
     transition-all duration-300
    group-hover: group-hover:shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]
  "></div>

                                        <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
                                            “{item.text}”
                                        </p>

                                        <p className="mt-4 text-white font-bold text-sm md:text-base opacity-90">
                                            — {item.name}
                                        </p>
                                    </div>


                                ))}

                        </div>
                    </div>

                </section>




            </div>
        </div>
    );
}
