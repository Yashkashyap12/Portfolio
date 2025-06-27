'use client'
import { animation } from '@/utils/animations'
import React, { useEffect } from 'react'

const Preloader = () => {
    useEffect(() => {
        animation();
        const timeout = setTimeout(() => {
            document.getElementById("preloader")?.classList.add("hidden");
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div id="preloader">
            <div id='banner-1' className='min-h-screen  z-10 fixed top-0 left-0 w-1/4  bg-black'></div>
            <div id='banner-2' className='min-h-screen  z-10 fixed top-0 left-1/4 w-1/4  bg-black'></div>
            <div id='banner-3' className='min-h-screen  z-10 fixed top-0 left-2/4 w-1/4  bg-black'></div>
            <div id='banner-4' className='min-h-screen  z-10 fixed top-0 left-3/4 w-1/4  bg-black'></div>
        </div>
    )
}

export default Preloader;
