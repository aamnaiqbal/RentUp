import React from "react";
import { price } from "../../data/Data";

const PriceCard = () => {
  return (
    <>
      <div className="content flex mtop">
        {price.map((item, index) => (
          <div className="box shadow" key={index}>
            <div className="topbtn">
              <button className="btn3">{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
              <span>$</span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val;
                return (
                  <li>
                    <label
                      style={{
                        background:
                          change === "color" ? "#dc35451f" : "#27ae601f",
                        color: change === "color" ? "#dc3848" : "#27ae60",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                );
              })}
            </ul>
            <button
              className="btn5"
              style={{
                background: item.plan === "Standard" ? "#27ae60" : "#fff",
                color: item.plan === "Standard" ? "#fff" : "#27ae60",
              }}
            >
              Start {item.plan}
            </button>
          </div>
        ))}
      </div>
    </>
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
