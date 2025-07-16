import React from "react";
import { featured } from "../data";
import Image from "next/image";
const Featured = () => {
  return (
    <section className="bg-[#f7f9fc] py-20">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-3xl text-[#2d3954] font-semibold">
            Featured Property Types
          </h1>
          <p className="text-[#72809d]">Find All Type of Property.</p>
        </div>
        <div className="grid grid-cols-5 gap-[30px] mt-12">
          {featured.map((item, index) => (
            <div
              className="shadow-[0_0_20px_0_rgba(112,121,138,0.18)] rounded-md text-center p-8 cursor-pointer flex flex-col items-center gap-2"
              key={index}
            >
              <Image src={item.imgPath} alt="" width={65} height={65} />
              <h4>{item.name}</h4>
              <label>{item.total}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
