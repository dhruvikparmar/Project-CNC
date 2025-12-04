import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-out", once: true });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(number)) {
      toast.error("Phone number must be exactly 10 digits!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      from_number: number,
      message: message,
      to_email: "dhruvikparamar1008@gmail.com",
      to_name: "Dhruvik",
    };

    emailjs
      .send(
        "service_wwch9r6",
        "template_95zuvyz",
        templateParams,
        "znF3bh2AKQD6MZ8Os"
      )
      .then(() => {
        toast.success("Message sent successfully 🎉", {
          position: "top-right",
          autoClose: 3000,
        });

        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      })
      .catch(() => {
        toast.error("Failed to send message ❌", {
          position: "top-right",
          autoClose: 2000,
        });
      });
  };

  return (
    <section id="contact" className="bg-[#f5f3ee]">

      {/* Toastify */}
      <ToastContainer theme="light" />

      {/* ===== HERO SECTION ===== */}
      <div
        data-aos="fade-zoom-in"
        className="relative w-full 
        min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] lg:h-[400px]
        flex items-center justify-center overflow-hidden"
      >
        <img
          src="/contact2.jpg"
          alt="Contact Us"
          className="absolute inset-0 w-full h-full 
          object-cover object-center"
        />

        {/* Dark overlay */}
        <div data-aos="zoom-out" className="absolute inset-0 bg-black/60"></div>

        {/* Title */}
        <h1
          data-aos="zoom-in"
          className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-bold text-white px-4 text-center"
        >
          Contact <span className="text-sky-400">Us</span>
        </h1>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="px-4 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT INFO PANEL */}
          <div
            data-aos="fade-right"
            className="bg-[#0c2546] border border-[#1e3358]
            rounded-xl p-6 sm:p-8 shadow-xl h-fit"
          >
            <h2 className="text-2xl font-bold text-[#dbeafe] mb-4">
              Get In Touch
            </h2>

            <p className="text-[#9fb3c8] mb-6">
              Whether you need CNC machining, custom engineering solutions,
              or support for industrial projects — we ensure quick
              communication and professional assistance.
            </p>

            <p className="text-[#9fb3c8] mb-8">
              Contact us for inquiries, quotations, collaboration,
              or technical advice tailored to your project.
            </p>

            <div className="space-y-4 text-[#dbeafe] text-sm">
              <p>📍 Rajkot, Gujarat, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉ info@zenithcnc.com</p>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <form
            data-aos="fade-left"
            onSubmit={sendEmail}
            className="bg-[#0c2546] border border-[#1e3358]
            rounded-xl p-6 sm:p-8 shadow-2xl space-y-4"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Full Name" value={name} onChange={(e) => setName(e.target.value)} type="text" />
              <Input label="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>

            <Input
              label="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
              type="tel"
              maxLength="10"
            />

            <div>
              <label className="block text-[#dbeafe] text-sm mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                placeholder="Describe your CNC requirement..."
                className="w-full rounded-md bg-[#091b32]
                border border-[#1e3358]
                px-3 py-2 text-[#dbeafe]
                focus:outline-none focus:ring-2
                focus:ring-sky-400 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-400 text-[#091b32]
              py-2.5 rounded-md font-semibold
              hover:bg-sky-300 transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

/* INPUT COMPONENT */
const Input = ({ label, value, onChange, type, maxLength }) => (
  <div>
    <label className="block text-[#dbeafe] text-sm mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      placeholder={label}
      required
      className="w-full rounded-md bg-[#091b32]
      border border-[#1e3358]
      px-3 py-2 text-[#dbeafe]
      placeholder-[#9fb3c8]
      focus:outline-none focus:ring-2
      focus:ring-sky-400 transition"
    />
  </div>
);
