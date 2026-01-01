import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Infrastructure() {
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
                style={{ backgroundImage: "url('infra-header.jpg')" }}
            >
                <div
                    data-aos="zoom-out"
                    data-aos-duration="1000"
                    className="absolute inset-0 bg-black/60"
                ></div>

                <h1
                    data-aos="zoom-in"
                    className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                    font-extrabold tracking-wide text-white drop-shadow-lg text-center px-4"
                >
                    Our <span className="text-blue-400">Infrastructure</span>
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ======== SECTION 1 — Modern Text Block ========= */}
                <section className="py-10 md:py-5" data-aos="fade-up">

                    <div className="text-center mb-10  md:mb-7">
                        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#0c2546] inline-block relative">
                            World-Class Manufacturing Infrastructure
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 max-w-6xl mx-auto">
                        <div className="space-y-5 border-2 bg-[#0c2546] text-white text-base sm:text-lg md:text-xl leading-relaxed shadow-2xl p-10 rounded-2xl">
                            <div className="flex">
                                <p className="text-3xl">•</p>
                                <p className="pl-5 pt-1 text-lg md:text-xl">Shree Industries is a precision machining company specializing in CNC turning and milling (VMC) services.</p>
                            </div>
                            <div className="flex">
                                <p className="text-3xl">•</p><p className="pl-5 pt-1 text-lg md:text-xl"> We are committed to delivering quality components with precision, maintaining strict timelines, and offering reliable support to our clients across various industries.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-5 bg-[#0c2546] text-white text-xl sm:text-lg md:text-xl leading-relaxed border-2 pl-11 shadow-2xl p-10 rounded-2xl">
                            <p>
                                Our facility includes:
                            </p>
                            <div className="flex"><p className="text-3xl">•</p><p className="pt-1 text-lg md:text-xl ml-5">CNC Turning Centers</p></div>
                            <div className="flex"><p className="text-3xl">•</p><p className="pt-1 text-lg md:text-xl ml-5">VMC ( Vertical Machining Centers )</p></div>
                            <div className="flex"><p className="text-3xl">•</p><p className="pt-1 text-lg md:text-xl ml-5">Proper measuring and inspection equipment</p></div>
                            <div className="flex"><p className="text-3xl">•</p><p className="pt-1 text-lg md:text-xl ml-5">A skilled and experienced technical team</p></div>
                        </div>

                    </div>
                </section>

                {/* ======== SECTION 2 — Image Grid-1 ============== */}
                <section className="py-6 md:py4 px-4 bg-[#f5f3ee]">
                    <div
                        className="
      max-w-7xl mx-auto
      flex flex-col md:flex-row
      gap-6 md:gap-8
      items-center
    "
                    >

                        {/* ================= IMAGE ================= */}
                        <div
                            className="w-full md:w-1/2 flex justify-center"
                            data-aos="fade-right"
                        >
                            <div
                                className="
          w-full
          h-[220px] sm:h-[280px] md:h-[360px]
          rounded-xl shadow-2xl overflow-hidden
          bg-white
        "
                            >
                                <img
                                    src="DX-200.png"
                                    alt="DX 200 CNC Machine"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* ================= SPECIFICATIONS ================= */}
                        <div className="w-full md:w-1/2">

                            {/* ===== MOBILE VIEW : SPEC CARDS ===== */}
                            <div className="md:hidden space-y-4">

                                {[
                                    {
                                        label: "Swing Over Bed",
                                        unit: "mm",
                                        dx4a: "500",
                                        dx5a: "500",
                                    },
                                    {
                                        label: "Standard Turning Diameter",
                                        unit: "mm",
                                        dx4a: "250",
                                        dx5a: "250",
                                    },
                                    {
                                        label: "Max Turning Diameter",
                                        unit: "mm",
                                        dx4a: "320",
                                        dx5a: "365",
                                    },
                                    {
                                        label: "Max Turning Length",
                                        unit: "mm",
                                        dx4a: "400",
                                        dx5a: "500",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-down"
                                        data-aos-delay={index * 100}
                                        className="bg-white rounded-xl shadow-md p-4 border"
                                    >
                                        <h4 className="font-semibold text-[#0c2546] mb-3">
                                            {item.label}
                                        </h4>

                                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                                            <div>
                                                <p className="text-gray-500">DX 200-4A</p>
                                                <p className="font-medium">
                                                    {item.dx4a} {item.unit}
                                                </p>
                                            </div>

                                            <div>
                                                <p className="text-gray-500">DX 200-5A</p>
                                                <p className="font-medium">
                                                    {item.dx5a} {item.unit}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* ===== DESKTOP / TABLET VIEW : TABLE ===== */}
                            <div
                                className="hidden md:block overflow-x-auto shadow-xl rounded-lg"
                                data-aos="fade-left"
                            >
                                <table
                                    className="
            w-full
            border border-[#1e3358]
            bg-white md:h-[360px]
            rounded-lg
            overflow-hidden
            text-center
            text-sm sm:text-base
          "
                                >
                                    <thead className="bg-[#0c2546] text-white">
                                        <tr>
                                            <th className="px-4 py-3 border">Specification</th>
                                            <th className="px-4 py-3 border">Unit</th>
                                            <th className="px-4 py-3 border">DX 200-4A</th>
                                            <th className="px-4 py-3 border">DX 200-5A</th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-gray-700">
                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">Swing Over Bed</td>
                                            <td className="px-4 py-3 border">mm</td>
                                            <td className="px-4 py-3 border">500</td>
                                            <td className="px-4 py-3 border">500</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">
                                                Standard Turning Diameter
                                            </td>
                                            <td className="px-4 py-3 border">mm</td>
                                            <td className="px-4 py-3 border">250</td>
                                            <td className="px-4 py-3 border">250</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">
                                                Max Turning Diameter
                                            </td>
                                            <td className="px-4 py-3 border">mm</td>
                                            <td className="px-4 py-3 border">320</td>
                                            <td className="px-4 py-3 border">365</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">
                                                Max Turning Length
                                            </td>
                                            <td className="px-4 py-3 border">mm</td>
                                            <td className="px-4 py-3 border">400</td>
                                            <td className="px-4 py-3 border">500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ======== SECTION 3 — Image Grid-2 ============== */}
                <section className="py-6 md:py-4 px-4 bg-[#f5f3ee]">
                    <div
                        className="
      max-w-7xl mx-auto
      flex flex-col md:flex-row
      gap-6 md:gap-8
      items-center
    "
                    >

                        {/* ================= IMAGE ================= */}
                        <div
                            className="
        w-full md:w-1/2
        flex justify-center
        order-1 md:order-2
      "
                            data-aos="fade-right"
                        >
                            <div
                                className="
          w-full
          h-[220px] sm:h-[280px] md:h-[360px]
          rounded-xl shadow-2xl overflow-hidden
          bg-white
        "
                            >
                                <img
                                    src="Dx-250.png"
                                    alt="DX 200 CNC Machine"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* ================= SPECIFICATIONS ================= */}
                        <div
                            className="
        w-full md:w-1/2
        order-2 md:order-1
      "
                        >

                            {/* ===== MOBILE VIEW : SPEC CARDS ===== */}
                            <div className="md:hidden space-y-4">

                                {[
                                    {
                                        label: "Swing Over Bed",
                                        unit: "mm",
                                        dx4a: "500",
                                    },
                                    {
                                        label: "Standard Turning Diameter",
                                        unit: "mm",
                                        dx4a: "300",
                                    },
                                    {
                                        label: "Max Turning Diameter",
                                        unit: "mm",
                                        dx4a: "490",
                                    },
                                    {
                                        label: "Max Turning Length",
                                        unit: "mm",
                                        dx4a: "500",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-down"
                                        data-aos-delay={index * 100}
                                        className="bg-white rounded-xl shadow-md p-4 border"
                                    >
                                        <h4 className="font-semibold text-[#0c2546] mb-3">
                                            {item.label}
                                        </h4>

                                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                                            <div className="w-50 flex justify-between">
                                                <p className=" text-gray-500">DX 250</p>
                                                <p className="font-medium">
                                                    {item.dx4a} {item.unit}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* ===== DESKTOP / TABLET VIEW : TABLE ===== */}
                            <div
                                className="hidden md:block overflow-x-auto shadow-xl rounded-lg"
                                data-aos="fade-left"
                            >
                                <table
                                    className="
            w-full
            border border-[#1e3358]
            bg-white md:h-[360px]
            rounded-lg
            overflow-hidden
            text-center
            text-sm sm:text-base
          "
                                >
                                    <thead className="bg-[#0c2546] text-white">
                                        <tr>
                                            <th className="px-4 py-3 border">Specification</th>
                                            <th className="px-4 py-3 border">Unit</th>
                                            <th className="px-4 py-3 border">DX 250</th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-gray-700">
                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">Swing Over Bed</td>
                                            <td className="px-4 py-3 border">mm</td>
                                            <td className="px-4 py-3 border">500</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">
                                                Standard Turning Diameter
                                            </td>
                                            <td className="px-4 py-3 border">mm</td>
                                            <td className="px-4 py-3 border">300</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">
                                                Max Turning Diameter
                                            </td>
                                            <td className="px-4 py-3 border">mm</td>
                                            <td className="px-4 py-3 border">490</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">
                                                Max Turning Length
                                            </td>
                                            <td className="px-4 py-3 border">mm</td>
                                            <td className="px-4 py-3 border">500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ======== SECTION 4 — Image Grid-3 ============== */}
                <section className="py-6 md:py-4 px-4 bg-[#f5f3ee]">
                    <div
                        className="
      max-w-7xl mx-auto
      flex flex-col md:flex-row
      gap-6 md:gap-8
      items-center
    "
                    >

                        {/* ================= IMAGE ================= */}
                        <div
                            className="
        w-full md:w-1/2
        flex justify-center
        order-1 md:order-1
      "
                            data-aos="fade-right"
                        >
                            <div
                                className="
          w-full
          h-[220px] sm:h-[280px] md:h-[360px]
          rounded-xl shadow-2xl overflow-hidden
          bg-white
        "
                            >
                                <img
                                    src="VMC2.png"
                                    alt="VMC Machine"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* ================= SPECIFICATIONS ================= */}
                        <div
                            className="
        w-full md:w-1/2
        order-2 md:order-2
      "
                        >

                            {/* ===== MOBILE VIEW : SPEC CARDS ===== */}
                            <div className="md:hidden space-y-4">

                                {[
                                    {
                                        label: "X Axis Travel",
                                        sae: "20.0 in",
                                        metric: "508 mm",
                                    },
                                    {
                                        label: "Y Axis Travel",
                                        sae: "16.0 in",
                                        metric: "406 mm",
                                    },
                                    {
                                        label: "Z Axis Travel",
                                        sae: "20.0 in",
                                        metric: "508 mm",
                                    },
                                    {
                                        label: "Spindle Nose to Table (Max)",
                                        sae: "24.0 in",
                                        metric: "610 mm",
                                    },
                                    {
                                        label: "Spindle Nose to Table (Min)",
                                        sae: "4.0 in",
                                        metric: "102 mm",
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-down"
                                        data-aos-delay={index * 100}
                                        className="bg-white rounded-xl shadow-md p-4 border"
                                    >
                                        <h4 className="font-semibold text-[#0c2546] mb-3">
                                            {item.label}
                                        </h4>

                                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                                            <div>
                                                <p className="text-gray-500">S.A.E</p>
                                                <p className="font-medium">{item.sae}</p>
                                            </div>

                                            <div>
                                                <p className="text-gray-500">Metric</p>
                                                <p className="font-medium">{item.metric}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            {/* ===== DESKTOP / TABLET VIEW : TABLE ===== */}
                            <div
                                className="hidden md:block overflow-x-auto shadow-xl rounded-lg"
                                data-aos="fade-left"
                            >
                                <table
                                    className="
            w-full
            border border-[#1e3358]
            bg-white md:h-[360px]
            rounded-lg
            overflow-hidden
            text-center
            text-sm sm:text-base
          "
                                >
                                    <thead className="bg-[#0c2546] text-white">
                                        <tr>
                                            <th className="px-4 py-3 border">Travels</th>
                                            <th className="px-4 py-3 border">S.A.E</th>
                                            <th className="px-4 py-3 border">Metric</th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-gray-700">
                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">X Axis</td>
                                            <td className="px-4 py-3 border">20.0 in</td>
                                            <td className="px-4 py-3 border">508 mm</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">Y Axis</td>
                                            <td className="px-4 py-3 border">16.0 in</td>
                                            <td className="px-4 py-3 border">406 mm</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">Z Axis</td>
                                            <td className="px-4 py-3 border">20.0 in</td>
                                            <td className="px-4 py-3 border">508 mm</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">
                                                Spindle Nose To Table (Max)
                                            </td>
                                            <td className="px-4 py-3 border">24.0 in</td>
                                            <td className="px-4 py-3 border">610 mm</td>
                                        </tr>

                                        <tr className="even:bg-gray-50">
                                            <td className="px-4 py-3 border font-medium">
                                                Spindle Nose To Table (Min)
                                            </td>
                                            <td className="px-4 py-3 border">4.0 in</td>
                                            <td className="px-4 py-3 border">102 mm</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </section>

                {/* ======== SECTION 5 — Professional Block ============= */}
                <section className="py-5 md:py-4" data-aos="fade-up">

                    <div className="text-center mb-8 md:mb-7">
                        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#0c2546] inline-block">
                            Strength Behind Our Excellence
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-7 max-w-7xl mx-auto">

                        {/* LEFT COLUMN */}
                        <div className="space-y-4 md:space-y-5">

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
                        <div className="space-y-4 md:space-y-5">

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
