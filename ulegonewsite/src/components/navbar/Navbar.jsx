import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ulegologo.png";
import dropdownarrow from "../../assets/dropdownarrow.svg";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [setNav, isSetNav] = useState(false);
  const ToggleNav = () => {
    isSetNav(!setNav);
  };
  return (
    <div>
      <div className="navbar shadow-lg">
        <div className="logoNav flex items-center justify-between ml-[3rem] mr-[4.5rem] h-[6rem]">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav hidden lg:flex">
            <ul className="flex gap-14">
              <Link to="our-product">
                <li className="text-2xl primary flex items-center  gap-3 font-normal">
                  {" "}
                  <span className="border-b-4 border-primary border- rounded-[3.7px]">
                    Our Product
                  </span>
                  <span>
                    <img src={dropdownarrow} alt="" />
                  </span>
                </li>
              </Link>
              <Link to="about-us">
                <li className=" text-2xl text-primary flex items-center gap-3 font-normal">
                  <span className="">About Us</span>{" "}
                  <span>
                    <img src={dropdownarrow} alt="" />
                  </span>
                </li>
              </Link>
              <Link to="support">
                <li className=" text-2xl text-primary flex items-center gap-3 font-normal">
                  <span className="">Support</span>{" "}
                  <span>
                    <img src={dropdownarrow} alt="" />
                  </span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="getUlego  hidden lg:flex bg-primary py-[18px] px-16 text-white font-semibold text-2xl">
            <Link to="get-ulego mr-28">
              <button>Get Ulego</button>
            </Link>
          </div>
          <div className="grid lg:hidden">
            <GiHamburgerMenu className="text-primary mr-14" onClick={ToggleNav} size={40} />
          </div>
        </div>
      </div>
      <div
        className={
          !setNav
            ? "hidden"
            : "grid  justify-center absolute w-[50vw] h-[100vh] bg-primary z-[500]"
        }
      >
        <ul className=" items-center mt-20">
          <li className=" text-2xl text-white mb-5">
            <Link to="our-product">
              <span className="">Our Product</span>
              {/* <span>
                <img className="text-white" src={dropdownarrow} alt="" />
              </span> */}
            </Link>
          </li>

          <li className=" text-2xl text-white mb-5 ">
            <Link to="about-us">
              <span className="">About Us</span>{" "}
              {/* <span>
                <img src={dropdownarrow} alt="" />
              </span> */}
            </Link>
          </li>

          <li className=" text-2xl text-white mb-5">
            <Link to="support">
              <span className="">Support</span>
              <span>
                <img src={dropdownarrow} alt="" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
