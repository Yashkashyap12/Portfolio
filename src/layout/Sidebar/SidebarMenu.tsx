"use client";
import { MenuItems } from "@/lib/constants";
import gsap from "gsap";
import { BiLogoGithub, BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SidebarMenu = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu);

    return (
        <>
            <span>
                {menu ? (
                    <div
                        className="text-6xl cursor-pointer z-50 fixed top-15 right-48 text-amber-500 transition-all duration-500 ease-in"
                        onClick={toggleMenu}
                    >
                        <IoClose />
                    </div>
                ) : (
                    <div
                        className="text-6xl cursor-pointer z-50 fixed top-15 right-48 text-amber-500 transition-all duration-500 ease-in"
                        onClick={toggleMenu}
                    >
                        <IoIosMenu />
                    </div>
                )}
            </span>
            <div
                className={`fixed top-full right-0 h-50 w-full rounded-tl-[450px] rounded-tr-[450px] transform bg-amber-500 transition-transform duration-1200 ${menu ? "-translate-y-full" : "-translate-y-0"
                    }`}
            >
                <div
                    className="items-center space-x-35 justify-center mt-20 flex text-4xl font-luckiest text-white"
                >
                    {MenuItems.map(({ id, name, link, icon }) => (
                        <ul key={id}>
                            <li>
                                <Link
                                    href={link}
                                    className="flex items-center group hover:-translate-y-1 transition-transform duration-300 text-white"
                                >
                                    {name}
                                </Link>
                            </li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SidebarMenu;