"use client";
import React from "react";
import SidebarMenu from "@/layout/Sidebar/SidebarMenu";

const Desktop = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 py-6 mt-10 text-white">
        <div className="cursor-pointer text-center md:text-left">
          <span className="text-4xl sm:text-5xl text-amber-500 tracking-[0.1em] font-luckiest">
            PORTFOLIO
          </span>
        </div>
        <SidebarMenu />
      </header>
    </div>
  );
};

export default Desktop;
