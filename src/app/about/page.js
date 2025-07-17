import React from "react";
import Back from "@/components/common/Back";

const page = () => {
  return (
    <>
      <section className="mb-20">
        <Back
          name="About Us"
          title="About Us - Who We Are?"
          cover="/images/about.jpg"
        />

        <div className="container mx-auto flex flex-wrap items-start gap-8 mt-10 px-4">
          <div className="flex-1 min-w-[300px]">
            <div className="text-left">
              <h1 className="text-3xl text-[#2d3954] font-semibold">
                Our Agency Story
              </h1>
              <p className="text-[#72809d] mb-5 leading-8">
                Check out our company story and work process
              </p>
            </div>

            <p className="text-sm mb-5 leading-7 pr-7 max-md:pr-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-sm mb-5 leading-7 pr-7 max-md:pr-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="bg-[#27ae60] text-white py-4 px-8 text-lg font-semibold rounded-full">
              More About Us
            </button>
          </div>

          <div className="flex-1 min-w-[300px] mt-5 md:mt-0">
            <img
              src="/images/immio.jpg"
              alt="About Us"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
