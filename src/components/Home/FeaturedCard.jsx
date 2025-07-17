import React from "react";
import Image from "next/image";
import { featured } from "../data";
const FeaturedCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] mt-12">
      {featured.map((item, index) => (
        <div
          className="shadow-[0_0_20px_0_rgba(112,121,138,0.18)] rounded-md text-center p-8 cursor-pointer flex flex-col items-center gap-2"
          key={index}
        >
          <Image src={item.imgPath} alt="" width={65} height={65} />
          <h4>{item.name}</h4>
          <label>{item.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
