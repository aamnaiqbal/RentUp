import React from "react";
import { location } from "../data";
const Explore_Location = () => {
  return (
    <section className="py-20">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-3xl text-[#2d3954] font-semibold">
            Explore By Location
          </h1>
          <p className="text-[#72809d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-12">
          {location.map((item, index) => (
            <div className="relative" key={index}>
              <img
                src={item.cover}
                alt=""
                className="w-[100%]  cursor-pointer rounded-[5px]"
              />
              <div className="absolute top-0 left-0 flex items-center justify-center flex-col h-[250px] w-full text-white z-[222]">
                <h5>{item.name}</h5>
                <p>
                  <label>{item.Villas}</label>
                  <label>{item.Offices}</label>
                  <label>{item.Apartments}</label>
                </p>

                {/* Simulating ::after with an extra div */}
                <div className="absolute top-0 left-0 w-[340px] h-[210px] bg-[rgb(15,28,47,0.3)] z-[-1] m-[20px] rounded-[5px]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore_Location;
