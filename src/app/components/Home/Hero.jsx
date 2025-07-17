import React from "react";
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <section
        className="bg-cover bg-center h-[90vh] w-full"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className="container mx-auto px-4 pt-[15%] md:pt-[15%] sm:pt-[30%]">
          <div className="text-center text-white">
            <h1 className="text-6xl  font-semibold">Search Your Next Home</h1>
            <p className="opacity-80">
              Find new & featured property located in your local city.
            </p>
          </div>

          <form className="bg-white rounded-[5px] mt-[15%] lg:[30%] px-5 flex flex-wrap md:flex-nowrap shadow-md">
            {/* City/Street */}
            <div className="p-[15px] w-full md:w-auto border-l-0 md:border-l border-gray-300/20">
              <span className="text-sm text-gray-500">City/Street</span>
              <input
                type="text"
                placeholder="Location"
                className="w-full mt-1 p-[10px] border border-gray-300/20 rounded-[5px] placeholder:text-black placeholder:text-[17px]"
              />
            </div>

            {/* Property Type */}
            <div className="p-[15px] w-full md:w-auto border-l-0 md:border-l border-gray-300/20">
              <span className="text-sm text-gray-500">Property Type</span>
              <input
                type="text"
                placeholder="Property Type"
                className="w-full mt-1 p-[10px] border border-gray-300/20 rounded-[5px] placeholder:text-black placeholder:text-[17px]"
              />
            </div>

            {/* Price Range */}
            <div className="p-[15px] w-full md:w-auto border-l-0 md:border-l border-gray-300/20">
              <span className="text-sm text-gray-500">Price Range</span>
              <input
                type="text"
                placeholder="Price Range"
                className="w-full mt-1 p-[10px] border border-gray-300/20 rounded-[5px] placeholder:text-black placeholder:text-[17px]"
              />
            </div>

            {/* Advance Filter Box */}
            <div className="p-[15px] w-full md:w-auto border-l-0 md:border-l border-gray-300/20 flex items-center justify-between">
              <h4 className="font-medium">Advance Filter</h4>
              {/* Search Button */}
              <button
                type="submit"
                className="bg-[#27ae60] text-white px-5 py-4 rounded-r md:rounded md:ml-4 mt-4 md:mt-0 hover:bg-[#1e944d] cursor-pointer transition"
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
