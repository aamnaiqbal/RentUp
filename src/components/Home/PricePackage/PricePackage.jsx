import React from "react";
import PriceCard from "./PriceCard";

const PricePackage = () => {
  return (
    <section className="py-20 text-center">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center mx-auto lg:w-[60%]">
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#2d3954]">
            Select Your Package
          </h1>
          <p className="text-[#72809d]">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores
          </p>
        </div>
        <PriceCard />
      </div>
    </section>
  );
};

export default PricePackage;
