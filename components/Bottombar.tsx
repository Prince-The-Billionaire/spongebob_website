'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaHome, FaSearch, FaStar, FaUser } from 'react-icons/fa';

const BottomBar = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );
  }, []);

  return (
    <div
      ref={barRef}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md 
                 bg-white/10 backdrop-blur-lg border border-white/20 
                 rounded-2xl shadow-md px-4 py-3 flex justify-around items-center
                 z-50"
    >
      <NavButton Icon={FaHome} label="Home" />
      <NavButton Icon={FaSearch} label="Search" />
      <NavButton Icon={FaStar} label="Favorites" />
      <NavButton Icon={FaUser} label="Profile" />
    </div>
  );
};

const NavButton = ({ Icon, label }: { Icon: any; label: string }) => {
  return (
    <button
      className="flex flex-col items-center text-yellow-300 hover:text-pink-300 
                 transition-all duration-300"
    >
      <Icon className="text-xl mb-1" />
      <span className="text-[10px]">{label}</span>
    </button>
  );
};

export default BottomBar;
