'use client';
import React from 'react';
import gsap from 'gsap';
import Sidebar from '../Sidebar';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

gsap.registerPlugin(useGSAP);

const Navbar = () => {
    useGSAP(() => {
        gsap.from('#logo', {
            opacity: 0,
            y: 100,
            scale: 0.8,
            rotateY: 30,
            duration: 1.8,
            ease: 'power3.out',
        });
    });

    return (
        <div className="w-full px-4 sm:px-6 lg:px-10 py-10 flex items-center justify-between">
            <div
                id="logo"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold bruno-ace-sc-regular tracking-wide text-[#5f1a97]"
            >
                <Link href="/">PORTFOL!O</Link>
            </div>
            <Sidebar />
        </div>
    );
};

export default Navbar;
