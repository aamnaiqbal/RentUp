import React from "react";
import Back from "@/components/common/Back";
const page = () => {
  return (
    <section className="mb-10">
      <Back
        name="Contact Us"
        title="Get Helps & Friendly Support"
        cover="/images/pricing.jpg"
      />
      <div className="max-w-[80%] mx-auto px-4 mt-10">
        <form className="p-8 shadow-md">
          <h4 className="text-lg font-medium mb-6 w-full md:w-auto">
            Fillup The Form
          </h4>
          <div className="flex flex-col md:flex-row mb-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-1/2 mr-0 md:mr-2 mb-5 md:mb-0 rounded border border-black/10 bg-transparent outline-none p-[10px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full md:w-1/2 mr-0 md:mr-2 mb-5 md:mb-0 rounded border border-black/10 bg-transparent outline-none p-[10px]"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full mb-5 rounded border border-black/10 bg-transparent outline-none p-[10px]"
          />
          <textarea
            rows="10"
            className="w-full mb-5 rounded border border-black/10 bg-transparent outline-none p-[10px]"
            placeholder="Message"
          ></textarea>
          <button className="bg-[#27ae60] text-white px-8 py-4 rounded hover:bg-blue-800 transition-all">
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
