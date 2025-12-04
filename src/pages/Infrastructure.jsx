import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Infrastructure() {
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
                style={{ backgroundImage: "url('infra-header.jpg')" }}
            >
                <div
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    className="absolute inset-0 bg-black/60"
                ></div>

                <h1
                    data-aos="zoom-in"
                    className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                    font-extrabold tracking-wide text-white drop-shadow-lg text-center px-4"
                >
                    Our <span className="text-blue-400">Infrastructure</span>
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ============================
                    SECTION 1 — Modern Text Block
                ============================= */}
                <section className="py-20" data-aos="fade-up">

                    <div className="text-center mb-14">
                        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#0c2546] inline-block relative">
                            World-Class Manufacturing Infrastructure
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-6 max-w-6xl mx-auto">

                        <div className="space-y-5 border-2 bg-[#0c2546] text-white text-base sm:text-lg md:text-xl leading-relaxed shadow-2xl p-10 rounded-3xl">
                            <p>
                                AeroPrecise is equipped with a next-generation manufacturing ecosystem
                                designed to support high-precision engineering and CNC machining requirements.
                            </p>
                            <p>
                                Our facility integrates intelligent workflow planning, real-time monitoring,
                                and calibrated quality tools to ensure complete accuracy at every stage.
                            </p>
                        </div>

                        <div className="space-y-5 bg-[#0c2546] text-white text-base sm:text-lg md:text-xl leading-relaxed border-2 pl-11 shadow-2xl p-10 rounded-3xl">
                            <p>
                                From advanced DX200 CNC systems to dedicated inspection zones, we operate with
                                globally aligned standards that support reliable and repeatable productivity.
                            </p>
                            <p>
                                Every process is engineered for efficiency — reducing lead time, improving
                                consistency, and delivering precise results to industrial clients.
                            </p>
                        </div>

                    </div>
                </section>

                {/* ============================
                    SECTION 2 — Image Grid
                ============================= */}
                <section className="py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

                    {[
                        "infra4.jpg",
                        "infra6.jpg",
                        "infra20.JPG",
                        "infra25.jpg",
                        "infra18.JPG",
                        "infra26.jpg",
                        "infra23.JPG",
                        "infra19.JPG",
                        "infra29.jpg",
                        "infra21.JPG",
                        "infra5.jpg",
                        "infra27.JPG",
                    ].map((src, index) => (
                        <div
                            key={index}

                            className="rounded-xl shadow-2xl overflow-hidden w-full 
                                       h-[210px] sm:h-[260px] md:h-[300px] lg:h-[300px]"
                        >
                            <img
                                src={src}
                                className="w-full h-full object-cover 
                                           transition-transform duration-700 ease-out hover:scale-110"
                                alt={`Infrastructure ${index + 1}`}
                            />
                        </div>
                    ))}

                </section>

                {/* ============================
                    SECTION 3 — Professional Block
                ============================= */}
                <section className="py-20" data-aos="fade-up">

                    <div className="text-center mb-14">
                        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#0c2546] inline-block">
                            Strength Behind Our Excellence
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

                        {/* LEFT COLUMN */}
                        <div className="space-y-10">

                            {/* Item 1 */}
                            <div
                                className="bg-[#0c2546] flex items-start gap-5 shadow-2xl p-5 rounded-3xl"
                                data-aos="fade-right"
                            >
                                <div className="bg-white min-w-[55px] min-h-[55px] flex items-center justify-center 
                        text-2xl font-bold rounded-xl shadow-md">
                                    ✔
                                </div>

                                <p className="text-white  text-lg md:text-xl leading-relaxed">
                                    Specialized CNC turning centers, vibration-isolated foundations, and
                                    automated lubrication systems ensure maximum machining stability.
                                </p>
                            </div>

                            {/* Item 2 */}
                            <div
                                className="bg-[#0c2546] flex items-start gap-5 shadow-2xl p-5 rounded-3xl"
                                data-aos="fade-right"
                                data-aos-delay="100"
                            >
                                <div className="bg-white min-w-[55px] min-h-[55px] flex items-center justify-center 
                       text-blue-700 text-2xl font-bold rounded-xl shadow-md">
                                    ✔
                                </div>

                                <p className="text-white text-lg md:text-xl leading-relaxed">
                                    High-precision measuring equipment and controlled inspection zones ensure
                                    every component meets global quality standards.
                                </p>
                            </div>

                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="space-y-10">

                            {/* Item 3 */}
                            <div
                                className="bg-[#0c2546] flex items-start gap-5 shadow-2xl p-5 rounded-3xl"
                                data-aos="fade-left"
                            >
                                <div className="min-w-[55px] min-h-[55px] flex items-center justify-center 
                      bg-white text-blue-700 text-2xl font-bold rounded-xl shadow-md">
                                    ✔
                                </div>

                                <p className="text-white text-lg md:text-xl leading-relaxed">
                                    A stable, optimized production environment enables microscopic accuracy
                                    while maintaining superior operational efficiency.
                                </p>
                            </div>

                            {/* Item 4 */}
                            <div
                                className="bg-[#0c2546] flex items-start gap-5 shadow-2xl p-5 rounded-3xl"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                <div className="min-w-[55px] min-h-[55px] flex items-center justify-center 
                                bg-white text-blue-700 text-2xl font-bold rounded-xl shadow-md">
                                    ✔
                                </div>

                                <p className=" text-white text-lg md:text-xl leading-relaxed">
                                    Continuous upgrades, advanced tooling systems, and a skilled workforce
                                    help us meet global industry demands consistently.
                                </p>
                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </div>
    );
}
