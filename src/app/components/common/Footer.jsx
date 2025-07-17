import React from "react";
import { footer } from "@/app/components/data";

const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="bg-[#27ae60] py-10 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-[40px] font-semibold">
                Do You Have Questions ?
              </h1>
              <p className="mt-2">
                We'll help you to grow your career and growth.
              </p>
            </div>
            <button className="bg-white text-[#27ae60] font-semibold px-8 py-3 rounded-full hover:bg-green-100 transition">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1d2636] text-white py-[50px]">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[6fr_2fr_2fr_1fr] gap-5">
          {/* Logo Box */}
          <div className="space-y-4">
            <div className="logo space-y-3">
              <img src="/logo-light.png" alt="logo" className="w-[150px]" />
              <h2 className="font-medium">Do You Need Help With Anything?</h2>
              <p className="text-gray-400">
                Receive updates, hot deals, tutorials, discounts sent straight
                in your inbox every month
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="bg-white text-black w-full p-[17px] rounded-[5px]"
                />
                <button className="bg-[#27ae60] text-white px-5 rounded-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footer.map((val, i) => (
            <div key={i} className="space-y-3">
              <h3 className="font-medium mb-[30px]">{val.title}</h3>
              <ul className="space-y-5">
                {val.text.map((items, index) => (
                  <li key={index} className="text-gray-400">
                    {items.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>

      {/* Legal Section */}
      <div className="text-center py-5 bg-[#1d2636] text-white text-opacity-50 border-t border-white border-opacity-10">
        <span>© 2025 RentUP. Designed By Aamna Iqbal.</span>
      </div>
    </>
  );
};

export default Footer;
