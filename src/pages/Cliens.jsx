import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
    Car, Sliders, Cog, Droplet, Gauge, Bolt
} from "lucide-react";


export default function Clients() {
    useEffect(() => {
        AOS.init({ duration: 900, easing: "ease-out", once: true });
    }, []);
    const industries = [
        {
            title: "Automotive Industry",
            image: "Automotive.webp",
            icon: <Car size={40} />, // 🚗 Automotive (perfect match)
        },
        {
            title: "Valve & Flow Control Manufacturers",
            image: "Valve.webp",
            icon: <Sliders size={40} />, // 🎛️ Flow / Control systems
        },
        {
            title: "Machine Tool Manufacturers",
            image: "Manufacturers.webp",
            icon: <Cog size={40} />, // ⚙️ Machines / Tools
        },
        {
            title: "Hydraulic Equipment Manufacturers",
            image: "Hydroulic.jpg",
            icon: <Droplet size={40} />, // 💧 Hydraulics / Fluid power
        },
        {
            title: "Pump Manufacturers",
            image: "Pump.webp",
            icon: <Gauge size={40} />, // 📈 Pressure / Flow / Pumps
        },
        {
            title: "Fasteners & Precision Component Manufacturers",
            image: "Fasteners.jpg",
            icon: <Bolt size={40} />, // 🔩 Fasteners / Precision parts
        },
    ];


    return (
        <div id="hero" className="bg-[#f5f3ee] text-[#1a1a1a] overflow-x-hidden">

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
                    className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-extrabold tracking-wide text-white drop-shadow-lg text-center px-4"
                >
                    Industries We <span className="text-blue-400">Serve</span>
                </h1>
            </div>
            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
                {/* SECTION 1 — INTRO */}
                <section className="mt-6 md:mt-5" data-aos="fade-up">

                    {/* Heading */}
                    <h2 className="text-center text-xl md:text-[40px] font-bold text-[#0c2546] mb-4 md:mb-8">
                        Trusted by Leading Industries
                    </h2>

                    {/* Paragraph Box */}
                    <p className="max-w-8xl mx-auto text-lg md:text-xl text-white 
                bg-[#0c2546] p-6 md:p-8 rounded-2xl leading-relaxed">

                        <div className="flex"><p className="text-xl md:text-3xl">•</p><p className="ml-3 md:mt-1">Shree industries is proud to collaborate with leading industrial, engineering,
                            and manufacturing organizations across diverse sectors.</p></div>
                        <br /><div className="flex"><p className="text-xl md:text-3xl">•</p><p className="ml-3  md:mt-1">Our commitment to precision, reliability, and consistency has earned us long-term partnerships
                            built on mutual trust and shared growth.</p></div>
                        <br />
                        <div className="flex"><p className="text-xl md:text-3xl">•</p><p className="ml-3 md:mt-1">With every project, we ensure transparent communication, disciplined
                            workflow execution, and strict quality adherence — enabling us to deliver
                            high-performance components that meet global standards.</p></div>
                    </p>

                </section>
                {/* SECTION 2 — CLIENT LOGOS GRID */}
                <section className="w-full py-4 md:pb-6 mt-4 md:mt-8 bg-white shadow-2xl rounded-2xl">
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Heading */}
                        <div className="text-center mb-4 md:mb-7">
                            <h2 className="text-xl md:text-3xl sm:text-4xl font-bold text-[#091b32]">
                                Industries We Serve
                            </h2>
                            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                                Delivering precision-engineered solutions across diverse industries
                            </p>
                        </div>
                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                            {industries.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group h-[160px] md:h-[260px] rounded-xl border border-gray-200 shadow-lg overflow-hidden cursor-pointer bg-white"
                                >
                                    {/* Hover Image (behind title) */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    {/* Dark overlay ONLY on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-500" />
                                    {/* Title + Icon (ALWAYS visible) */}
                                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-[#091b32] group-hover:text-white transition duration-500 hover:scale-110 transition-transform
">
                                        <div className="mb-3">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg md:text-2xl font-semibold tracking-wide text-center">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Second row centering */}
                        <style>
                            {`
                                @media (min-width: 1024px) {
                                .grid > div:nth-child(4) {
                                    grid-column: 1;
                                }
                                .grid > div:nth-child(5) {
                                    grid-column: 2;
                                }
                                }
                            `}
                        </style>

                    </div>
                </section>
                {/* SECTION 3 — PARTNERSHIP MESSAGE */}
                <section className="py-7 md:py-10" data-aos="fade-up">
                    <h3 className="text-center text-lg md:text-[35px] font-bold mb-5 text-[#0c2546]">
                        Built on Trust, Quality & Long-Term Collaboration
                    </h3>
                    <div className="max-w-8xl mx-auto bg-[#0c2546] text-white p-8 md:p-10 rounded-3xl shadow-xl">
                        <div className="flex"><p className="text-xl md:text-3xl">•</p>
                            <p className="ml-3 md:mt-1 text-lg md:text-xl leading-relaxed">
                                We believe that strong partnerships are built on transparency, consistent
                                quality, and mutual growth. Each collaboration reflects our commitment to
                                engineering excellence and our ability to deliver tailored solutions across
                                diverse manufacturing requirements.
                            </p>
                        </div><br/>
                        <div className="flex"><p className="text-xl md:text-3xl">•</p>
                            <p className="ml-3 md:mt-1 text-lg md:text-xl leading-relaxed">
                                With every project, we strive not only to meet client expectations but to
                                exceed them through innovation, precision, and dependable service.
                            </p>
                        </div>

                        </div>
                </section>
                {/* SECTION 4 — OPTIONAL TESTIMONIALS */}
                <section className="rounded-2xl shadow-xl py-4 bg-white mb-6 md:mb-8" data-aos="fade-up">

                    <h2 className="text-center text-xl md:text-[40px] font-bold text-[#0c2546] mb-2">
                        What Our Clients Say
                    </h2>

                    {/* SLIDER OUTER WRAPPER */}
                    <div className="relative h-full bg-white overflow-hidden max-w-6xl mx-auto py-4 px-4">

                        {/* LEFT Fade Mask */}
                        <div className="pointer-events-none absolute top-0 left-0 h-full w-10 
                    bg-gradient-to-r from-white to-transparent z-20"></div>

                        {/* RIGHT Fade Mask */}
                        <div className="pointer-events-none absolute top-0 right-0 h-full w-10 
                    bg-gradient-to-l from-white to-transparent z-20"></div>

                        {/* SLIDER TRACK */}
                        <div className="flex animate-slide gap-3 md:gap-6">

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
                                         w-40 md:w-94 min-w-[260px] sm:min-w-[320px] 
                                        rounded-2xl p-4 md:p-6 flex-shrink-0
                                        backdrop-blur-xl bg-[#0c2546]/95
                                    border-white/10 shadow-lg relative
                                        transition-all duration-300 ease-out
                                        hover:-translate-y-3"
                                    >
                                        {/* Left Accent Line */}
                                        <div className="
    absolute left-0 top-0 w-1 h-full rounded-l-xl
     transition-all duration-300
    group-hover: group-hover:shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]
  "></div>

                                        <p className="text-white font-semibold text-sm md:text-lg leading-relaxed">
                                            “{item.text}”
                                        </p>

                                        <p className="mt-4 text-white font-bold text-sm md:text-lg opacity-90">
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
