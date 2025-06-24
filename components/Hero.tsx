'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import BottomBar from './Bottombar';
import { gsap } from 'gsap';
import useSound from 'use-sound';

const Hero = () => {
  const bubbleContainer = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [play, { sound }] = useSound('/sounds/sb_laugh.mp3', {
  volume: 0.7,
});


  const handleClick = () => {
  play();
  setTimeout(() => {
    sound?.stop();
  }, 1000);
};

  useEffect(() => {
    const container = bubbleContainer.current;
    const bubbles = container?.children;

    if (bubbles) {
      Array.from(bubbles).forEach((bubble: any) => {
        const duration = gsap.utils.random(8, 30);
        const delay = gsap.utils.random(0, 5);
        const size = gsap.utils.random(15, 60);

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${gsap.utils.random(0, 100)}%`;

        gsap.fromTo(
          bubble,
          {
            y: '100%',
            opacity: 0.6,
          },
          {
            y: '-150%',
            opacity: 0,
            duration,
            delay,
            repeat: -1,
            ease: 'power1.out',
          }
        );
      });
    }

    // Animate text and button
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.2,
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.7,
      }
    );
  }, []);

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-center px-4 md:px-24"
      style={{ backgroundImage: `url(/hero_sponge.png)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Bubbles */}
      <div
        ref={bubbleContainer}
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 bg-white/20 rounded-full backdrop-blur-sm"
          ></span>
        ))}
      </div>

      {/* Hero Content */}
      <div
        ref={textRef}
        className="relative z-20 text-white text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Get the <span className="text-yellow-500">Secrets</span> of Cooking Here
        </h1>
        <h2 className="text-sm md:text-3xl text-white/70 font-semibold drop-shadow">
          Addictive Cooking Is As Easy As ABC
        </h2>
        <button
          ref={buttonRef}
          onClick={handleClick}
          className="bg-yellow-400 hover:bg-pink-400 transition-colors text-white 
                     px-6 py-3 rounded-xl text-base md:text-2xl font-bold shadow-xl
                     backdrop-blur-lg bg-opacity-90"
        >
          Buy Ebook
        </button>
      </div>

      {/* SpongeBob Character */}
      <div className="absolute bottom-0 left-0 p-4 z-20 hidden md:block">
        <Image
          src="/cool_sponge.png"
          alt="SpongeBob"
          width={150}
          height={150}
          className="drop-shadow-2xl"
        />
      </div>

      {/* BottomBar */}
      <BottomBar />
    </div>
  );
};

export default Hero;
