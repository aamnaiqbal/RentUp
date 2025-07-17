import React from "react";
import { team } from "../../data";
import AgentCard from "./AgentCard";

const FeaturedAgents = () => {
  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-3xl text-[#2d3954] font-semibold">
            Our Featured Agents
          </h1>
          <p className="text-[#72809d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-[30px]">
          {team.map((val, index) => (
            <AgentCard key={index} val={val} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;
