import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const galleryImages = [
  "product4.JPG", "infra11.jpg", "Product4-1.JPG",
  "infra7.jpg", "Product2-1.jpg", "Product2-2.jpg",
  "product1.JPG", "Product1-1.png", "infra16.JPG",
  "infra14.JPG", "infra1.jpg", "Product4-2.png",
  "Product5-3.png", "infra12.jpg", "Product5-1.png", "infra24.JPG",
];

export default function Gallery() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <div
        data-aos="fade-zoom-in"
        data-aos-offset="0"
        data-aos-easing="ease-in-out"
        data-aos-duration="900"
        id="hero"
        className="min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] 
              bg-center bg-cover flex items-center justify-center relative"
        style={{ backgroundImage: "url('Gallery.png')" }}
      >
        {/* Overlay */}
        <div
          data-aos="fade"
          data-aos-duration="800"
          className="absolute inset-0 bg-black/60"
        ></div>

        {/* Title */}
        <h1
          data-aos="zoom-in"
          data-aos-duration="900"
          className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                 font-extrabold tracking-wide text-white drop-shadow-lg 
                 text-center px-4"
        >
          Manufacturing <span className="text-blue-400">Gallery</span>
        </h1>
      </div>
      {/* GALLERY SECTION */}
      <section className="w-full py-4 md:py-7 sm:py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* HYDROBENZ STYLE GRID */}
          <div
            className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3
          auto-rows-[220px] sm:auto-rows-[240px] lg:auto-rows-[260px]
          gap-4"
          >
            {galleryImages.map((img, index) => {
              const isMiddleColumn = index % 3 === 1;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={(index % 6) * 100}
                  data-aos-duration="600"
                  data-aos-once="true"
                  className={`relative rounded-2xl shadow-xl border border-gray-200 overflow-hidden 
                ${isMiddleColumn ? "md:row-span-2" : ""}`}
                >
                  <img
                    src={`/${img}`}
                    alt={`Gallery ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full md:w-full md:h-full object-cover 
                           transition-transform duration-500 hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
