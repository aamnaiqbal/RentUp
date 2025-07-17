import React from "react";
import { list } from "../data";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const PropertyCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-12">
      {list.map((item, index) => (
        <div
          key={index}
          className="shadow-[0_0_20px_0_rgba(112,121,138,0.18)] rounded-md text-center  cursor-pointer"
        >
          <div>
            <img
              src={item.cover}
              alt=""
              className="w-[100%] h-[100%] object-cover  cursor-pointer"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-center mb-4">
              <span
                className={`px-3 py-1 rounded text-sm font-medium 
       ${
         item.category === "For Sale"
           ? "bg-[#25b5791a] text-[#25b579]"
           : "bg-[#ff98001a] text-[#ff9800]"
       }`}
              >
                {item.category}
              </span>
              <FaHeart color="#bec7d8" />
            </div>
            <h4>{item.name}</h4>
            <div className="text-[#72809d] flex gap-x-2 items-center justify-center">
              <FaLocationDot />
              <p>{item.location}</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-[#e4e8f3] py-2.5 px-8">
            <div>
              <button className="text-white bg-[#27ae60] px-6 py-3 rounded-3xl text-[20px] font-semibold">
                {item.price}
              </button>
              <label htmlFor="" className="text-[#2d3954]">
                /sqft
              </label>
            </div>
            <span>{item.type}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
