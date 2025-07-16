import React from "react";
import { awards } from "../data";
import { FaTrophy, FaBriefcase, FaLightbulb, FaHeart } from "react-icons/fa";

const Award = () => {
  return (
    <>
      <section className="bg-[#122947] py-20 text-center">
        <div className="max-w-[80%] mx-auto">
          <div className="text-center">
            <p className="text-[#27ae60]">Our Awards</p>
            <h1 className="text-3xl text-white font-normal">
              Over 1,24,000+ Happy User Bieng With Us Still They Love Our
              Services
            </h1>
          </div>

          <div className="grid grid-cols-4 gap-[30px] mt-12">
            {awards.map((val, index) => (
              <div key={index}>
                <div className="w-[100px] h-[100px] leading-[100px] mx-auto mt-[50px] bg-[rgba(255,255,255,0.1)]  text-[32px] text-white rounded-[4%_50%] flex items-center justify-center mb-4">
                  <span className="">{val.icon}</span>
                </div>
                <h1 className="text-5xl text-white mb-4">{val.num}</h1>
                <p className="text-[#808080]">{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
