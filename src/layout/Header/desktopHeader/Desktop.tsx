'use client'
import React, { useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import SidebarMenu from "@/layout/Sidebar/SidebarMenu";

const Desktop = () => {
  const boxRef = useRef(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    // Slide down container
    gsap.from(boxRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    const element = textRef.current!;
    const text = element.textContent || "";
    element.innerHTML = "";

    // Wrap letters in spans
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.transformOrigin = "center";
      element.appendChild(span);
    });

    // Animate each letter with rotation, skew, scale, and opacity
    gsap.fromTo(
      element.querySelectorAll("span"),
      {
        y: -80,
        rotate: -45,
        skewX: 10,
        scale: 0.8,
        opacity: 0,
      },
      {
        y: 0,
        rotate: 0,
        skewX: 0,
        scale: 1,
        opacity: 1,
        duration: 1.3,
        ease: "back.out(1.7)",
        stagger: 0.06,
      }
    );
  }, []);

  return (
    <header className="md:flex justify-between items-center px-16 py-10 text-white">
      <div ref={boxRef} className="cursor-pointer">
        <span ref={textRef} className="text-5xl text-yellow-200 tracking-[0.1em] font-luckiest">PORTFOLIO</span>
      </div>

      <SidebarMenu />
    </header>
  );
};

export default Desktop;
