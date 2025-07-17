import React from "react";
import { featured } from "../data";
import Image from "next/image";
import FeaturedCard from "./FeaturedCard";
const Featured = () => {
  return (
    <section className="bg-[#f7f9fc] py-20">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mx-auto lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl text-[#2d3954] font-semibold">
            Featured Property Types
          </h1>
          <p className="text-[#72809d]">Find All Type of Property.</p>
        </div>
        <FeaturedCard />
      </div>
    </section>
  );
};

export default Featured;
