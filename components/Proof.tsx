'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaUserFriends, FaStar, FaFireAlt } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconType } from 'react-icons';

gsap.registerPlugin(ScrollTrigger);

const Proof = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const yellowCircleRef = useRef<HTMLDivElement>(null);
  const largePattyRef = useRef<HTMLImageElement>(null);
  const smallPattyRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate yellow circle
    gsap.fromTo(
      yellowCircleRef.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    // Animate large patty
    gsap.fromTo(
      largePattyRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );

    // Floating small patty
    gsap.to(smallPattyRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      duration: 2,
    });

    // Fade-in text from bottom
    gsap.from(textRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 90%',
      },
    });

    // Fade-in cards from bottom with stagger
    // gsap.from(cardsRef.current?.children, {
    //   y: 40,
    //   opacity: 0,
    //   duration: 1,
    //   ease: 'power2.out',
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: cardsRef.current,
    //     start: 'top 95%',
    //   },
    // });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center text-black bg-white px-6 py-20 space-y-12 md:space-y-0 md:space-x-12"
    >
      {/* Text and Cards */}
      <div ref={textRef} className="max-w-xl relative text-center md:text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-yellow-500 drop-shadow">
          Why Plankton Has Always Been Trying To Steal Our Secret
        </h1>
        <Image src={'/mrplankton.png'} alt='mr plankton' width={150} height={150} className='absolute -top-1 -left-18'/>
        <p className="text-lg text-gray-700">
          Turns out the secret isn&apos;t only the recipe — it&apos;s a skill issue too.
        </p>

        {/* Info Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Card
            Icon={FaUserFriends}
            title="200M+ Served"
            description="Across the 7 seas"
          />
          <Card
            Icon={FaStar}
            title="4.7 Rating"
            description="On Bikini Reads"
          />
          <Card
            Icon={FaFireAlt}
            title="200+ Active"
            description="Members sizzling daily"
          />
        </div>
      </div>

      {/* Patty Visual */}
      <div
        ref={yellowCircleRef}
        className="bg-yellow-400 size-[20rem] sm:size-[25rem] md:size-[30rem] relative rounded-full flex items-center justify-center"
      >
        <Image
          ref={smallPattyRef}
          src={'/k_patty.png'}
          alt="k_patty"
          width={100}
          height={100}
          className="absolute -top-8 left-10 z-10"
        />
        <Image
          ref={largePattyRef}
          src={'/patty.png'}
          alt="patty"
          width={500}
          height={500}
          className="max-w-full"
        />
      </div>
    </div>
  );
};

export default Proof;

// Card Component
const Card = ({
  Icon,
  title,
  description,
}: {
  Icon: IconType;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-start space-x-4 bg-yellow-100 p-4 rounded-xl shadow hover:shadow-lg transition">
      <div className="text-pink-500 text-3xl">
        <Icon />
      </div>
      <div>
        <h3 className="text-lg font-bold text-yellow-700">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
