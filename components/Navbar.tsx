'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:max-w-7xl 
                 bg-white/10 backdrop-blur-xl border border-white/20 
                 flex items-center justify-between px-6 py-3 rounded-2xl 
                 shadow-xl z-70"
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src="/spongebob_logo.png" alt="logo" width={45} height={45} />
        <span className="text-yellow-300 text-xl font-bold">SpongeReads</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6 text-black text-sm font-medium">
          <li><a href="#home" className="hover:text-yellow-300 transition">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
          <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
          <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
        </ul>
        <button className="ml-4 bg-yellow-400 hover:bg-pink-400 transition-colors text-white font-semibold px-5 py-2 rounded-xl text-sm shadow-md">
          Get Free Ebook
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-yellow-300 text-2xl focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white/20 backdrop-blur-xl border-t border-white/10 rounded-b-2xl p-5 shadow-md z-40">
          <ul className="flex flex-col space-y-4 text-black text-base font-medium">
            <li><a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">About</a></li>
            <li><a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Services</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Contact</a></li>
            <li>
              <button className="w-full bg-yellow-400 hover:bg-pink-400 transition-colors text-white font-semibold px-4 py-2 rounded-xl text-sm shadow-md">
                Get Free Ebook
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
