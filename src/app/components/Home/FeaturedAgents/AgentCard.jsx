import React from "react";
import {
  FaCheckCircle,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const AgentCard = ({ val }) => {
  return (
    <div className="bg-white rounded-[6px] p-8 border border-[rgb(62,28,131,0.1)] hover:shadow-[0_0_20px_0_rgba(112,121,138,0.18)] cursor-pointer transition-all duration-300">
      <button className="bg-[#ff6922] rounded-[50px] text-white py-4 px-8 ">
        {val.list} Listings
      </button>
      <div className="text-center mt-7">
        <div className="w-[90px] h-[90px] mx-auto relative">
          <img
            src={val.cover}
            alt=""
            className="w-[90px] h-[90px] rounded-full"
          />
          <FaCheckCircle
            color="#108be7"
            size={17}
            className="absolute top-[35px] right-[-10px]"
          />
          <div className="absolute top-[-11px] left-[-9px] w-[110px] h-[110px] rounded-full border-2 border-[#edf0f5]"></div>
        </div>
        <div className="flex items-center justify-center mt-3 text-[rgb(45, 57, 84)]">
          <FaLocationDot color="#2d3954" />
          <label>{val.address}</label>
        </div>
        <h4 className="font-semibold mt-3">{val.name}</h4>

        <ul className="inline-block mt-3 ">
          {[
            <FaFacebookF className="mx-auto mt-3" />,
            <FaLinkedin className="mx-auto mt-3" />,
            <FaTwitter className="mx-auto mt-3" />,
            <FaInstagram className="mx-auto mt-3" />,
          ].map((icon, index) => (
            <li
              key={index}
              className="inline-block w-[40px] h-[40px] rounded-full bg-[#f4f5f7] text-[#808080] m-4"
            >
              {icon}
            </li>
          ))}
        </ul>
        <div className="button flex justify-between font-semibold text-white">
          <button className="bg-[#27ae60]  rounded-[5px] py-4 px-8 flex items-center justify-center gap-x-2">
            <FaEnvelope />
            <span>Message</span>
          </button>
          <button className="bg-black rounded-[5px] py-4 px-8">
            <FaPhoneAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
