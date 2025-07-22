'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import Contact from "../components/contact.json";

const ContactSection = () => {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.2 }
    );
  }, []);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for reaching out. We’ll get back to you soon.",
        });
        e.target.reset();
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to send your message. Please try again later.",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Animation */}
        <div className="flex justify-center order-2 md:order-1">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden">
            <Lottie
              animationData={Contact}
              className="w-full h-auto max-h-[36rem]"
            />
          </div>
        </div>

        {/* Right Contact Form */}
        <div
          ref={formRef}
          className="bg-white/10 dark:bg-[#8b29dc] backdrop-blur-lg rounded-2xl shadow-xl p-6 sm:p-8 text-black dark:text-black order-1 md:order-2 w-full max-w-md mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#8b29dc] dark:text-white bruno-ace-sc-regular">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Hidden Fields */}
            <input type="hidden" name="access_key" value="7f21cfaa-7320-4103-88d1-d1beea2488ac" />

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border dark:border-white border-[#8b29dc]/30 rounded-xl px-4 pt-6 pb-2 text-black dark:text-white placeholder-transparent peer bg-transparent"
              />
              <label htmlFor="name" className="absolute left-4 top-2 text-sm text-black/60 dark:text-white peer-placeholder-shown:top-5 peer-placeholder-shown:text-base transition-all">
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border dark:border-white border-[#8b29dc]/30 rounded-xl px-4 pt-6 pb-2 text-black dark:text-white placeholder-transparent peer bg-transparent"
              />
              <label htmlFor="email" className="absolute left-4 top-2 text-sm text-black/60 dark:text-white peer-placeholder-shown:top-5 peer-placeholder-shown:text-base transition-all">
                Your Email
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone"
                pattern="[0-9]{10,15}"
                title="Please enter a valid phone number"
                required
                className="w-full border dark:border-white border-[#8b29dc]/30 rounded-xl px-4 pt-6 pb-2 text-black dark:text-white placeholder-transparent peer bg-transparent"
              />
              <label htmlFor="phone" className="absolute left-4 top-2 text-sm text-black/60 dark:text-white peer-placeholder-shown:top-5 peer-placeholder-shown:text-base transition-all">
                Your Phone Number
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full border dark:border-white border-[#8b29dc]/30 rounded-xl px-4 pt-6 pb-2 text-black dark:text-white placeholder-transparent peer bg-transparent"
              ></textarea>
              <label htmlFor="message" className="absolute left-4 top-2 text-sm text-black/60 dark:text-white peer-placeholder-shown:top-5 peer-placeholder-shown:text-base transition-all">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-purple-300 to-purple-500 text-black font-semibold border border-purple-400 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:from-purple-500 hover:to-purple-700 hover:text-white bruno-ace-sc-regular tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
