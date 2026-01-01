import { useEffect, useState } from "react";

export default function ScrollToHero() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = (scrollTop / docHeight) * 100;
      setProgress(scrolled);
      setShow(scrollTop > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("hero");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToHero}
      aria-label="Go to hero section"
      style={{
        background: `
          conic-gradient(
            #38bdf8 ${progress}%,
            rgba(255,255,155,0.15) ${progress}%
          )
        `,
      }}
      className={`
        fixed bottom-6 right-6 z-[9999]
        w-12 h-12 rounded-full cursor-pointer
        flex items-center justify-center
        transition-all duration-300
        ${show ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}
      `}
    >
      {/* Inner Button */}
      <span
        className="
          w-10 h-10 rounded-full
          bg-[#091b32] text-white
          flex items-center justify-center
          text-lg font-semibold
          shadow-md
          hover:bg-gray-800 transition
        "
      >
        ↑
      </span>
    </button>
  );
}
