'use client';

import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import PortfolioImg from '../../../assets/images/portfolioimg.png'
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#about-trigger',
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });

        tl.from('#image-one', {
            y: 100,
            opacity: 0,
            duration: 1.4,
            ease: 'power3.out',
        }).from(
            '#text-2',
            {
                y: -100,
                opacity: 0,
                duration: 1.4,
                ease: 'power3.out',
            },
            '<' // Parallel animation
        );
    }, []);

    return (
        <section id="about-trigger" className="w-full px-4 sm:px-8 md:px-16 sm:py-12">
            <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Image Section */}
                <div
                    id="image-one"
                    className="w-full md:w-1/2 flex justify-center items-center relative"
                >
                    <div className="relative w-full max-w-lg sm:max-w-xl">
                        <Image
                            src={PortfolioImg}
                            alt="portfolio"
                            className="w-full h-auto"
                        />
                    </div>
                </div>


                {/* Text Section */}
                <div
                    id="text-2"
                    className="w-full md:w-1/2 text-center md:text-left mb-3"
                >
                    <p className="text-lg sm:text-xl leading-relaxed text-black">
                        I’m a passionate full-stack developer with experience in building scalable web applications using{' '}
                        <strong className="text-[#8b29dc]">React</strong>,{' '}
                        <strong className="text-[#8b29dc]">Next.js</strong>,{' '}
                        <strong className="text-[#8b29dc]">TypeScript</strong>,{' '}
                        <strong className="text-[#8b29dc]">Node.js</strong>, and{' '}
                        <strong className="text-[#8b29dc]">.NET</strong>. With a strong foundation in both front-end and back-end technologies, I enjoy crafting seamless user experiences and writing clean, efficient code. I also have solid expertise in{' '}
                        <strong className="text-[#8b29dc]">MySQL</strong>, enabling me to design and manage robust databases. I’m always eager to learn, adapt to new challenges, and contribute to impactful projects.
                    </p>

                    {/* Download CV Button */}
                    <div className="mb-2 flex justify-center md:justify-start">
                        <a
                            href="/YashKashyap.pdf" // don't include `/public`
                            target="_blank"
                            rel="noopener noreferrer"
                            download // optional: add this if you want to force download
                            className="mt-8 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-300 to-purple-500 text-black font-semibold border border-purple-400 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:from-purple-500 hover:to-purple-700 hover:text-white bruno-ace-sc-regular tracking-wide"
                        >
                            View / Download CV
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
