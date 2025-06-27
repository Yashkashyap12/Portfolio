"use client";
import { MenuItems } from "@/lib/constants";
import gsap from "gsap";
import { BiLogoGithub, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaHandPointLeft } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useGSAP } from "@gsap/react";

const SidebarMenu = () => {
    const boxRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu);

    const socialIcons = socialRef.current?.querySelectorAll("a");

    useGSAP(() => {
        const items = boxRef.current?.querySelectorAll("ul");

        if (!items || items.length === 0) return;
        if (!items || !socialIcons) return;


        const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 1 } });

        if (menu) {
            tl.fromTo(
                items,
                { opacity: 0, y: -80, scale: 0.8, },
                { opacity: 1, y: 0, scale: 1, stagger: 0.1, },
                0
            );
            tl.fromTo(
                socialIcons,
                { opacity: 0, scale: 0.2 },
                { opacity: 1, scale: 1, stagger: 0.1 },
                "-=0.5"
            );
        } else {
            tl.to(
                items,
                { opacity: 0, y: -80, scale: 0.5, stagger: 0.1, ease: "back.in(1)", duration: 0.5 },
                0
            );
            tl.to(
                socialIcons,
                { opacity: 0, scale: 0.2, stagger: 0.1, ease: "back.in(1)", duration: 0.4 },
                "-=0.3"
            );
        }

    }, [menu]);

    return (
        <>
            <span>
                {menu ? (
                    <div
                        className="text-5xl cursor-pointer z-50 fixed top-12 right-5 text-yellow-200 transition-all duration-500 ease-in"
                        onClick={toggleMenu}
                    >
                        <IoClose />
                    </div>
                ) : (
                    <div
                        className="text-6xl cursor-pointer z-50 fixed top-12 right-30 text-yellow-200 transition-all duration-500 ease-in"
                        onClick={toggleMenu}
                    >
                        <IoIosMenu />
                    </div>
                )}
            </span>
            <div onClick={toggleMenu} />
            <div
                className={`fixed top-0 right-0 h-full w-80 transform transition-transform duration-1200 ${menu ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div
                    ref={boxRef}
                    className="mt-45 ml-12 space-y-15 text-4xl font-luckiest text-white"
                >
                    {MenuItems.map(({ id, name, link, icon }) => (
                        <ul key={id}>
                            <li>
                                <Link
                                    href={link}
                                    className="flex items-center gap-5 group transition-colors duration-300 text-yellow-200"
                                >
                                    <span className="transition-transform duration-300 hover:-translate-x-2">
                                        {React.createElement(icon)}
                                    </span>

                                    {name}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
                <div className="flex gap-8 justify-center mt-20" ref={socialRef}>
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <BiLogoGithub className="text-[50px] text-yellow-200 transition-transform duration-300 hover:-translate-y-1" />
                    </Link>
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <BiLogoInstagram className="text-[50px] text-yellow-200 transition-transform duration-300 hover:-translate-y-1" />
                    </Link>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <BiLogoWhatsapp className="text-[50px] text-yellow-200 transition-transform duration-300 hover:-translate-y-1" />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SidebarMenu;
