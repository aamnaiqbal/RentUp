import React from "react";
const Back = ({ name, title, cover }) => {
  return (
    <div className="relative h-[40vh] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#112848a0] z-[-1]" />

      {/* Background Image */}
      <img
        src={cover}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
      />

      {/* Content Container */}
      <div className="text-white py-[120px] px-4 max-w-[80%] mx-auto relative z-10">
        <span className="block text-base mb-2">{name}</span>
        <h1 className="text-2xl lg:text-[40px] font-medium">{title}</h1>
      </div>
    </div>
  );
};

export default Back;
