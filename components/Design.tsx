'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const Design = () => {
  const leftCurtain = useRef<HTMLDivElement>(null);
  const rightCurtain = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    gsap.to(leftCurtain.current, {
      x: '-100%',
      duration: 1,
      ease: 'power2.inOut',
    });

    gsap.to(rightCurtain.current, {
      x: '100%',
      duration: 1,
      ease: 'power2.inOut',
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* Unveil Image (Background) */}
      <Image
        src="/unveils.png"
        alt="Unveiled Content"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Curtains */}
      <div
        className="absolute inset-0 z-10 flex cursor-pointer"
        onClick={handleClick}
      >
        {/* Left Curtain */}
        <div
          ref={leftCurtain}
          className="w-1/2 h-full relative overflow-hidden"
        >
          <Image
            src="/curtains.png"
            alt="Curtain Left"
            layout="fill"
            objectFit="cover"
            className="object-left"
          />
        </div>

        {/* Right Curtain */}
        <div
          ref={rightCurtain}
          className="w-1/2 h-full relative overflow-hidden"
        >
          <Image
            src="/curtains.png"
            alt="Curtain Right"
            layout="fill"
            objectFit="cover"
            className="object-right"
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
