import React from "react";
import { price } from "../../data";

const PriceCard = () => {
  return (
    <div className="text-center">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 mt-8">
        {price.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[48%] lg:w-[31.5%] p-[30px] rounded-[10px] shadow-[0_0_20px_0_rgba(112,121,138,0.18)] bg-white mb-12 relative"
          >
            {/* Top button: hide on 1st & 3rd box */}
            {index !== 0 && index !== 2 && (
              <div className="mb-5">
                <button className="bg-[#ff6922] text-white py-4 px-8 rounded-full text-sm cursor-pointer font-semibold">
                  {item.best}
                </button>
              </div>
            )}

            <h3 className="text-[22px] font-semibold mb-2">{item.plan}</h3>
            <h1 className="text-[60px] font-bold">
              <span className="text-[30px] font-medium align-top">$</span>
              {item.price}
            </h1>
            <p className="text-gray-500 mt-2">{item.ptext}</p>

            <ul className="mt-[40px]">
              {item.list.map((val, i) => {
                const { icon, text, change } = val;
                const isDanger = change === "color";
                return (
                  <li key={i} className="flex items-center mb-5">
                    <label
                      className={`w-[30px] h-[30px] leading-[30px] text-center rounded-full mr-5 text-sm font-medium`}
                      style={{
                        background: isDanger ? "#dc35451f" : "#27ae601f",
                        color: isDanger ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p className="text-sm">{text}</p>
                  </li>
                );
              })}
            </ul>

            <button
              className={`w-full py-3 px-8 md:py-5 md:px-10 font-semibold border-[3px] lg:border-[5px] border-[#27ae601f] text-lg lg:text-xl font-normal rounded-full  transition-all duration-300 ${
                item.plan === "Standard"
                  ? "bg-[#27ae60] text-white"
                  : "bg-white text-[#27ae60] border-green-600"
              }`}
            >
              Start {item.plan}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;

/* 
.price {
  text-align: center;
}
.price .content .box {
  width: 31.5%;
  padding: 30px;
  border-radius: 10px;
}
.price button {
  margin-bottom: 20px;
}
.price .box:nth-child(1) .topbtn button,
.price .box:nth-child(3) .topbtn button {
  display: none;
}
.price h3 {
  font-size: 22px;
}
.price h1 {
  font-size: 60px;
}
.price h1 span {
  font-size: 30px;
  font-weight: 500;
}
.price ul {
  margin-top: 40px;
}
.price ul li {
  display: flex;
  margin-bottom: 20px;
}
.price label {
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 50%;
  margin-right: 20px;
}

.price .btn5 {
  width: 100%;
}
@media screen and (max-width: 800px) {
  .price .content {
    flex-direction: column;
  }

  .price .content .box {
    width: 100%;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 50px;
  }
}
*/
