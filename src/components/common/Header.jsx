"use client";

import React, { useState } from "react";
import { nav } from "../data";
import { FaTimes, FaBars } from "react-icons/fa";
import { PiSignOutThin } from "react-icons/pi";
import Link from "next/link";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header className="bg-white h-[10vh] shadow-[0_5px_30px_rgba(0,22,84,0.1)] sticky top-0 z-[99999]">
        <div className="container mx-auto flex items-center justify-between px-4 py-[15px]">
          {/* Logo */}
          <div className="logo">
            <img
              src="./logo.png"
              alt="logo"
              className="w-[170px] mt-0 md:mt-0"
            />
          </div>

          {/* Navigation */}
          <div className="nav">
            <ul
              className={`${
                navList
                  ? "absolute top-[10vh] left-0 w-full bg-[#27ae60] p-5 flex flex-col"
                  : "hidden lg:flex"
              } gap-2 lg:gap-3 xl:gap-6 font-medium transition-all duration-300`}
            >
              {nav.map((list, index) => (
                <li key={index}>
                  <Link
                    href={list.path}
                    className={`ml-[30px] transition duration-500 hover:text-[#27ae60] ${
                      navList ? "text-white mb-[20px] ml-0 inline-block" : ""
                    }`}
                  >
                    {list.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Buttons */}
          <div className="button hidden lg:flex items-center gap-4">
            <h4 className="font-medium mr-[20px] flex items-center">
              <span className="px-[6px] bg-[#27ae60] rounded-full text-white text-sm mr-[4px] font-normal">
                2
              </span>{" "}
              My List
            </h4>
            <div className="text-white bg-[#27ae60] flex items-center justify-center gap-2 px-4 py-2 rounded-lg ml-4 cursor-pointer">
              <PiSignOutThin className="font-bold" />
              <span>Sign In</span>
            </div>
          </div>

          {/* Toggle Button for Mobile */}
          <div className="toggle lg:hidden">
            <button
              onClick={() => setNavList(!navList)}
              className="mt-[20px] text-xl"
            >
              {navList ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
