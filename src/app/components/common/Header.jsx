import React from "react";
import Image from "next/image";
import { PiSignOutThin } from "react-icons/pi";
import { list, nav } from "../data";
import Link from "next/link";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div>
        <Image src="/logo.png" alt="logo" width={170} height={100} />
      </div>
      <div>
        <ul className="flex items-center gap-8">
          {nav.map((list, index) => (
            <li key={index}>
              <Link href={list.path}></Link>
              {list.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <h4>
          <span className="bg-[#27ae60] text-white px-2 py-1 rounded-full">
            2
          </span>{" "}
          My List
        </h4>
        <div className="text-white bg-[#27ae60] flex items-center justify-center gap-2 px-4 py-2 rounded-lg ml-4 cursor-pointer">
          <PiSignOutThin />
          <span>Sign In</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
