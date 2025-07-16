import React from "react";
import { location } from "../data";
const Explore_Location = () => {
  return (
    <section className="py-20">
      <div className="max-w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-3xl text-[#2d3954] font-semibold">
            Explore By Location
          </h1>
          <p className="text-[#72809d]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[30px] mt-12">
          {location.map((item, index) => (
            <div className="relative" key={index}>
              <img
                src={item.cover}
                alt=""
                className="w-[100%]  cursor-pointer rounded-[5px]"
              />
              <div className="absolute top-0 left-0 flex items-center justify-center flex-col h-[250px] w-full text-white z-[222]">
                <h5>{item.name}</h5>
                <p>
                  <label>{item.Villas}</label>
                  <label>{item.Offices}</label>
                  <label>{item.Apartments}</label>
                </p>

                {/* Simulating ::after with an extra div */}
                <div className="absolute top-0 left-0 w-[340px] h-[210px] bg-[rgb(15,28,47,0.3)] z-[-1] m-[20px] rounded-[5px]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore_Location;

/* 

.location h5 {
  font-size: 18px;
  font-weight: 500;
}
.location label {
  color: #fff;
  margin-right: 20px;
  opacity: 0.8;
}
@media screen and (max-width: 800px) {
  .location .overlay::after {
    width: 280px;
    height: 170px;
  }
}

  import React from "react"
import Heading from "../../common/Heading"
import { team } from "../../data/Data"
import "./team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button>
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team

.team .box {
  background: #ffffff;
  border-radius: 6px;
  border: 1px solid rgb(62 28 131 / 10%);
  padding: 2rem;
  transition: 0.5s;
}
.team .box:hover {
  box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
  cursor: pointer;
}
.team .details {
  text-align: center;
  margin-top: 30px;
}
.team .img {
  width: 90px;
  height: 90px;
  margin: auto;
  position: relative;
}
.team img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.team .img i {
  color: #108be7;
  font-size: 17px;
  position: absolute;
  top: 35px;
  right: -10px;
}
.team .img::after {
  content: "";
  position: absolute;
  top: -15px;
  left: -15px;
  width: 110px;
  height: 110px;
  border: 5px solid #edf0f5;
  border-radius: 50%;
}
.team label {
  display: inline-block;
  margin-top: 20px;
}
.team i {
  color: grey;
  margin-right: 5px;
}
.team ul {
  display: inline-block;
  margin-top: 10px;
}
.team ul li {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  align-items: center;
  background-color: #f4f5f7;
  border-radius: 50%;
  margin: 5px;
}
.team .button {
  margin-top: 20px;
}
.team .button i {
  color: white;
  font-size: 20px;
}


import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedin ,  FaTwitter, FaInstagram, FaCheckCircle  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
*/
