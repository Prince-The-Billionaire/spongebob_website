'use client';

import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-yellow-100 via-blue-100 to-pink-100 px-6 py-12 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-4 justify-center md:justify-start">
          <Image
            src="/spongebob_logo.png"
            alt="logo"
            width={50}
            height={50}
          />
          <span className="text-yellow-500 font-bold text-xl drop-shadow">
            SpongeReads
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center space-y-2 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-yellow-500">Home</a>
          <a href="#about" className="hover:text-yellow-500">About</a>
          <a href="#contact" className="hover:text-yellow-500">Contact</a>
          <a href="#ebook" className="hover:text-yellow-500">Get E-book</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-6 text-yellow-500 text-2xl">
          <a href="#"><FaInstagram className="hover:text-pink-500 transition" /></a>
          <a href="#"><FaTwitter className="hover:text-blue-400 transition" /></a>
          <a href="#"><FaYoutube className="hover:text-red-500 transition" /></a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/30 mt-10 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} SpongeReads — All rights reserved.  
      </div>
    </footer>
  );
};

export default Footer;
