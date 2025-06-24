'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { scale: 0.8, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center bg-white relative px-4"
    >
      {/* Bubbles in the background */}
      <div className="absolute inset-0 bg-[url('/bubbles.svg')] bg-repeat opacity-10 pointer-events-none"></div>

      {/* Contact Card */}
      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-md bg-grey-100 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/30 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-yellow-500 text-center drop-shadow">
          Contact SpongeChef
        </h2>
        <p className="text-center text-sm text-gray-700 mb-4">
          Got a recipe idea or question? Drop us a message below!
        </p>

        <form className="space-y-4 text-black">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-xl border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-xl border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-2 rounded-xl border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 hover:bg-pink-400 transition-colors text-white font-bold py-2 px-6 rounded-xl w-full shadow-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
