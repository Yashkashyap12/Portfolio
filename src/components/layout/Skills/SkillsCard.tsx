'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ReactLogo from '../../../assets/images/react.png';
import NextLogo from '../../../assets/images/nextjs.png';
import NodeLogo from '../../../assets/images/nodejs.png';
import CSLOGO from '../../../assets/images/csharp.png';
import FramerLogo from '../../../assets/images/framer.png';
import GsapLogo from '../../../assets/images/gsap.png';
import SqlLogo from '../../../assets/images/sql.png';
import CanvaLogo from '../../../assets/images/canva.png';
import MongoLogo from '../../../assets/images/mongo.png';
import GithubLogo from '../../../assets/images/github.png';

const skills = [
  {
    name: 'React',
    img: ReactLogo,
    description:
      'React is a popular JavaScript library used for building fast and interactive user interfaces. It follows a component-based architecture and uses a virtual DOM to optimize UI rendering. Ideal for modern single-page applications.',
  },
  {
    name: 'Next.js',
    img: NextLogo,
    description:
      'Next.js is a React-based framework for building web applications with server-side rendering, static site generation, and API routes. It’s optimized for SEO and performance, making it great for production-grade apps.',
  },
  {
    name: 'Node.js',
    img: NodeLogo,
    description:
      'Node.js is a fast, event-driven runtime built on Chrome’s V8 engine that lets developers run JavaScript on the server. It’s perfect for building scalable, real-time applications like APIs and web services.',
  },
  {
    name: 'C#',
    img: CSLOGO,
    description:
      'C# is a modern, object-oriented programming language developed by Microsoft. It’s widely used for building enterprise-level applications, desktop software, and backend services, especially within the .NET framework.',
  },
  {
    name: 'Framer Motion',
    img: FramerLogo,
    description:
      'Framer Motion is a powerful React animation library used to create smooth, declarative animations and interactions. It’s ideal for building beautiful UI transitions, gestures, and shared layout effects in modern web apps.',
  },
  {
    name: 'GSAP',
    img: GsapLogo,
    description:
      'GSAP (GreenSock Animation Platform) is a high-performance animation library for creating complex, timeline-based animations. It works seamlessly with JavaScript and frameworks like React, and excels at scroll-based and SVG animations.',
  },
  {
    name: 'SQL Server',
    img: SqlLogo,
    description:
      'SQL Server is a relational database management system by Microsoft. It provides a secure and scalable environment for storing and retrieving structured data using T-SQL and supports advanced features like stored procedures and triggers.',
  },
  {
    name: 'Canva',
    img: CanvaLogo,
    description:
      'Canva is an intuitive design tool used for creating presentations, graphics, and marketing materials. It’s great for quick visual content creation without the need for professional design software or experience.',
  },
  {
    name: 'MongoDB',
    img: MongoLogo,
    description:
      'MongoDB is a flexible NoSQL database that stores data in JSON-like documents. It’s ideal for applications needing scalable, high-performance data storage with dynamic schemas, especially in full-stack JavaScript environments.',
  },
  {
    name: 'GitHub',
    img: GithubLogo,
    description:
      'GitHub is a web-based platform for version control and collaboration built on Git. It enables developers to host, manage, and review code, track changes, and collaborate on open-source or private repositories efficiently.',
  },
];

gsap.registerPlugin(ScrollTrigger);

const SkillsCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    const children = Array.from(containerRef.current?.children ?? []);
    const shuffledChildren = gsap.utils.shuffle(children);

    gsap.from(shuffledChildren, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 40%',
        toggleActions: 'play none none none',
        once: true,
      },
      opacity: 0,
      y: gsap.utils.distribute({ base: 80, amount: 50 }),
      scale: 0.9,
      rotate: gsap.utils.distribute({ base: -5, amount: 10 }),
      duration: 1.2,
      ease: 'back.out(1.7)',
      stagger: {
        each: 0.2,
        from: 'random',
      },
      clearProps: 'transform,opacity',
    });
  }, []);

  const handleCardClick = (index: number) => {
    setFlippedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="py-16 px-6 dark:bg-[#0d0d0d] transition-colors duration-500">
      <h2 className="text-4xl font-bold text-center mb-14 text-[#8b29dc] drop-shadow-lg bruno-ace-sc-regular">
        My Skills
      </h2>
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-7xl mx-auto"
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(idx)}
            className="group relative w-full h-80 cursor-pointer"
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedIndex === idx ? 'rotate-y-180' : 'group-hover:rotate-y-180'
              }`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 bg-purple-500/10 dark:bg-white border border-purple-500 dark:border-purple-400 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center backface-hidden">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={180}
                  height={110}
                  className="drop-shadow-md"
                />
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-purple-500/10 dark:bg-white border border-purple-500 dark:border-purple-400 backdrop-blur-md text-black dark:text-black rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] flex flex-col items-center justify-center rotate-y-180 backface-hidden px-4 text-center">
               <span className="text-sm drop-shadow-md text-black dark:text-black">
                  {skill.description}
                </span>
                <span className="text-lg bruno-ace-sc-regular font-bold text-[#8b29dc] mt-4 tracking-wide">
                  {skill.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
