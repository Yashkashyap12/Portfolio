'use client';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Lottie from 'lottie-react';
import Robo from '../../../Robo.json';

gsap.registerPlugin(useGSAP);

const Hero = () => {
  useGSAP(() => {
    gsap.from('#robo', {
      x: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-10 py-12 md:min-h-[35rem]">
      
      {/* Left Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bruno-ace-sc-regular leading-tight dark:text-white">
          Yash <br />
          <span className="text-[#8b29dc]">Kashyap</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300">
          Creative Full Stack Developer crafting sleek, responsive web experiences using React, Tailwind CSS, and .NET. Passionate about building impactful digital solutions that blend performance and design.
        </p>
        <button className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-300 to-purple-500 text-black font-semibold border border-purple-400 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:from-purple-500 hover:to-purple-700 hover:text-white bruno-ace-sc-regular tracking-wide dark:text-white">
          View Projects
        </button>
      </div>

      {/* Right Section */}
      <div
        id="robo"
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <Lottie animationData={Robo} className="w-full max-w-[24rem] sm:max-w-[28rem] md:max-w-[32rem] h-auto" />
      </div>
    </div>
  );
};

export default Hero;
