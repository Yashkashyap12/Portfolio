'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Crafting blazing-fast websites using React, Next.js & Tailwind.',
  },
  {
    title: 'UI/UX Perfection',
    description: 'Pixel-perfect designs brought to life with smooth animations.',
  },
  {
    title: 'SEO Optimization',
    description: 'Clean, semantic code and strategies to boost search rankings.',
  },
  {
    title: 'CMS & Integration',
    description: 'Flexible content management with headless CMS and APIs.',
  },
];

const Service = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50, rotateX: -10 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      },
      '-=0.5'
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 px-6"
    >
      <h2 className="text-center text-5xl font-bold mb-16 text-[#8b29dc] bruno-ace-sc-regular drop-shadow-lg">
        Services I Deliver
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="bg-purple-400/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-purple-400/30 transition-all transform hover:-translate-y-2 hover:scale-[1.02] duration-300"
          >
            <h3 className="text-2xl font-bold mb-3 text-[#8b29dc] bruno-ace-sc-regular">
              {service.title}
            </h3>
            <p className="text-[#8b29dc] dark:text-white text-lg">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
