import React from "react";
import { team } from "../../data";

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
            <div className="box" key={index}>
              <button className="btn3">{val.list} Listings</button>
              <div className="details">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <i className="fa fa-location-dot"></i>
                <label>{val.address}</label>
                <h4>{val.name}</h4>

                <ul>
                  {val.icon.map((icon, index) => (
                    <li key={index}>{icon}</li>
                  ))}
                </ul>
                <div className="button flex">
                  <button>
                    <i className="fa fa-envelope"></i>
                    Message
                  </button>
                  <button className="btn4">
                    <i className="fa fa-phone-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgents;
