'use client';

import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import clsx from 'clsx';
import Link from 'next/link';
import { MenuItems } from '@/lib/constants';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useGSAP(() => {
    if (open) {
      gsap.from('.menu-item', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.3,
      });
    }
  }, { dependencies: [open] });

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          'text-2xl sm:text-3xl fixed md:top-10 right-5 z-50 p-2 rounded-full shadow-md transition',
          'bg-white text-black hover:bg-gray-100',
          'dark:bg-black dark:text-white dark:hover:bg-gray-800'
        )}
      >
        {open
          ? <IoMdClose className="w-5 h-5 sm:w-6 sm:h-6" />
          : <CiMenuFries className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>

      {/* Sidebar Panel */}
      <div
        className={clsx(
          'fixed top-0 right-0 h-full w-[85%] sm:w-[60%] md:w-[40%]',
          'backdrop-blur-xl bg-white/10 dark:bg-black/20',
          'text-black dark:text-white z-40 shadow-2xl border border-black/10 dark:border-white/20',
          'transition-transform duration-700 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="h-full p-6 flex flex-col justify-between relative">
          {/* Menu Items */}
          <div className="flex items-center justify-center h-full">
            <ul className="space-y-8 sm:space-y-10 md:space-y-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center bruno-ace-sc-regular tracking-wider">
              {MenuItems.map((x, idx) => (
                <li key={idx} className="menu-item">
                  <Link
                    href={x.href}
                    onClick={handleLinkClick}
                    className="transition-all duration-500 text-[#8b29dc] hover:text-[#b378f7] dark:text-white dark:hover:text-[#8b29dc]"
                  >
                    {x.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="text-center text-sm righteous-regular text-black dark:text-white mt-10">
            &copy; {new Date().getFullYear()} YASH KASHYAP
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;