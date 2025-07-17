import React from "react";

import PropertyCard from "./PropertyCard";

const RecentProperty = () => {
  return (
    <section className="py-20">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mx-auto lg:w-[60%]">
          <h1 className="text-2xl md:text-3xl text-[#2d3954] font-semibold">
            Recent Property Listed
          </h1>
          <p className="text-[#72809d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <PropertyCard />
      </div>
    </section>
  );
};

export default RecentProperty;
