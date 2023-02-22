import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/heroMockup.png";
import Googleplay from "../../assets/googleplay.png";
import Applestore from "../../assets/applestore.png";
import RedArrow from "../../assets/redarrow.png";
import GreenArrow from "../../assets/greenarrow.png";
import BlueArrow from "../../assets/bluearrow.png";
import YellowArrow from "../../assets/yellowarrow.png";
const Hero = () => {
  const box1 = [
    {
      id: 1,
      img: BlueArrow,
      header: "Seamless Transactions",
      paragraph:
        "Transfer funds across the country seamlessly, fast and at zero charges.",
    },
    {
      id: 2,
      img: GreenArrow,
      header: "Savings",
      paragraph:
        "Get your finances in order through ulego savings feature and get as high as 8% on your savings  annually.",
    },
    {
      id: 3,
      img: RedArrow,
      header: "Airtime and Data ",
      paragraph: "Buy Airtime and Data from your network providers ",
    },
  ];
  const box2 = [
    {
      id: 1,
      img: GreenArrow,
      header: "Electricity Bills",
      paragraph:
        "Pay for your prepaid and postpaid electricity bill with ulego.",
    },
    {
      id: 2,
      img: RedArrow,
      header: "Virtual Cards",
      paragraph:
        "Get your virtual cards to perform digital transactions with ulego.",
    },
    {
      id: 3,
      img: YellowArrow,
      header: "Cable Subcriptions",
      paragraph:
        "Pay for your Cable Subscription such as Dstv, Gotv and Startimes and get instant activations.",
    },
  ];

  return (
    <div className="hero">
      <div className=" md:flex ml-[7rem] mr-[2rem] text-primary font-bold">
        <div className="heroText pt-24 w-[50%]">
          <h1 className=" text-[69px] w-[648px] leading-[85px] 2xl:text-9xl ">
            We are the home of finance.
          </h1>
          <p className="font-normal text-[28px] w-70 text-secondary leading-9 w-[576px] py-4">
            Ulego makes a home for your finances, with zero charges perform all
            your transactions swift and securely
          </p>

          <div className="flex gap-4 pt-5">
            <Link to="">
              <img src={Applestore} alt="" />
            </Link>
            <Link to="">
              <img src={Googleplay} alt="" />{" "}
            </Link>
          </div>

          <div className="flex gap-8 text-[28px] font-normal leading-9 pt-24 ">
            <div className=" text-center">
              <h3 className="font-semibold">10,000</h3>
              <p className="text-secondary">Downloads</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold">90%</h1>
              <p className="text-secondary">Committed Users</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold">90%</h1>
              <p className="text-secondary">Active Users</p>
            </div>
          </div>
        </div>
        <div className="heroImage w-[50%]">
          <img src={HeroImg} alt="" className="w-full h-full" />
        </div>
      </div>

      <div className="mt-28 mx-[7rem]">
        <div>
          <h1 className="text-5xl leading-[72px] font-bold">Why Ulego</h1>
          <p className="text-2xl w-[1100px] font-normal leading-9 pt-[24px] font-bold">
            With Ulego, you can make seamless transactions from your mobile app,
            reach your financial savings goal and pay for your utilities; with
            our virtual cards you can make digital transactions.
          </p>
        </div>
        <div className="grid pt-[41px]">
          <div className="flex items-top justify-between mb-10">
            {box1.map((boxes) => (
              <div
                key={boxes.id}
                className="grid ring-2 ring-[#A4A7A7] rounded-lg p-8 w-[100%] justify-center  mr-5"
              >
                <div>
                  <img src={boxes.img} alt="" className="pb-3" />
                </div>
                <div>
                  <h3 className="text-2xl leading-9 font-bold text-[#222222] pb-2">
                    {boxes.header}
                  </h3>
                </div>
                <div>
                  <p className="w-[291px] text-[16px] text-[#222222] leading-6 font-semibold">
                    {boxes.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-top justify-between mb-10">
            {box2.map((boxes) => (
              <div
                key={boxes.id}
                className="grid ring-2 ring-[#A4A7A7] rounded-lg p-8 w-[100%] justify-center  mr-5"
              >
                <div>
                  <img src={boxes.img} alt="" className="pb-3" />
                </div>
                <div>
                  <h3 className="text-2xl leading-9 font-bold text-[#222222] pb-2">
                    {boxes.header}
                  </h3>
                </div>
                <div>
                  <p className="w-[291px] text-[16px] text-[#222222] leading-[24px] font-semibold">
                    {boxes.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
