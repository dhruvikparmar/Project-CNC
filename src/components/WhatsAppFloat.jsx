export default function WhatsAppFloat() {
  const phone = "919737548285"; // ← change to your WhatsApp number
  const message = "Hello Shree Industries, I would like to know more.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="
        fixed bottom-6 left-6 z-[9999]
        w-12 h-12 rounded-full
        bg-green-500 text-white
        flex items-center justify-center
        shadow-lg cursor-pointer
        hover:bg-green-600
        transition-all duration-300
        hover:scale-110
      "
    >
      {/* WhatsApp Icon (SVG) */}
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M19.11 17.64c-.28-.14-1.64-.81-1.9-.9-.26-.1-.45-.14-.64.14-.19.28-.74.9-.9 1.08-.17.19-.33.21-.61.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.4-1.66-1.56-1.94-.17-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47.09-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.46-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.28-1 1-1 2.44 0 1.44 1.03 2.83 1.18 3.02.14.19 2.02 3.09 4.9 4.33.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.19-.54-.33z" />
        <path d="M16 2.67C8.63 2.67 2.67 8.63 2.67 16c0 2.7.8 5.2 2.17 7.3L3 29l5.84-1.53A13.27 13.27 0 0 0 16 29.33c7.37 0 13.33-5.96 13.33-13.33S23.37 2.67 16 2.67zm0 24.13c-2.37 0-4.58-.7-6.44-1.9l-.46-.29-3.47.91.93-3.38-.3-.48A10.62 10.62 0 0 1 5.33 16C5.33 10.1 10.1 5.33 16 5.33S26.67 10.1 26.67 16 21.9 26.8 16 26.8z" />
      </svg>
    </button>
  );
}
