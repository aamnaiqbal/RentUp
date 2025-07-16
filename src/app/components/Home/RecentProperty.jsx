import React from "react";
import { list } from "../data";
import Image from "next/image";

const RecentProperty = () => {
  return (
    <section className="py-20">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-3xl text-[#2d3954] font-semibold">
            Recent Property Listed
          </h1>
          <p className="text-[#72809d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-12">
          {list.map((item) => (
            <div className="shadow-[0_0_20px_0_rgba(112,121,138,0.18)] rounded-md text-center p-8 cursor-pointer">
              <div>
                <Image src={item.cover} height={100} width={100} />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      item.category === "For Sale"
                        ? "bg-[#25b5791a]"
                        : "bg-[#ff98001a]"
                    } ${
                      item.category === "For Sale"
                        ? "text-[#25b579]"
                        : "text-[#ff9800]"
                    }`}
                  >
                    {item.category}
                  </span>
                  <p>heart</p>
                </div>
                <h4>{item.name}</h4>
                <p>{item.location}</p>
              </div>
              <div className="flex items-center justify-between">
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
      </div>
    </section>
  );
};

export default RecentProperty;
