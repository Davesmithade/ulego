import { Link } from "react-router-dom";
import React from "react";
import Googleplay from "../../assets/googleplay.png";
import Applestore from "../../assets/applestore.png";
import FooterLogo from "../../assets/footerlogo.png";
import Facebook from "../../assets/facebookicon.svg";
import Twitter from "../../assets/twittericon.svg";
import Instagram from "../../assets/instagramicon.svg";

const Footer = () => {
  return (
    <div className="footer bg-[#072E33] text-white mt-14">
      <div className="topfooter  flex h-[70vh] pl-20 pr-44">
        <div className="logo pr-8 mt-20">
          <img src={FooterLogo} alt="" />
        </div>

        <div className="footerLinks flex gap-32 justify-center items-center text-[16px]">
          <div className="whyulego">
            <ul>
              <li className="pb-10 font-semibold">Why Ulego</li>
              <li className="pb-7 ">Send And Receive Money</li>
              <li className="pb-7 ">Save And Invest</li>
              <li className="pb-16 ">Pay Utilities And Bills</li>
            </ul>
          </div>
          <div className="company">
            <ul>
              <li className="pb-10 font-semibold">Company</li>
              <li className="pb-7 ">Blog</li>
              <li className="pb-7 ">Press</li>
              <li className="pb-7 ">Join Our Team</li>
              <li className="pb-7 ">About Us</li>
            </ul>
          </div>
          <div className="support">
            <ul>
              <li className="pb-10 font-semibold">Support</li>
              <li className="pb-7 ">Get Help</li>
              <li className="pb-7 ">FAQ'S</li>
              <li className="pb-7 ">Security</li>
              <li className="pb-7 ">Contact Us</li>
            </ul>
          </div>
          <div className="transparency">
            <ul>
              <li className="pb-10 font-semibold">Transparency</li>
              <li className="pb-7 ">Terms & Conditions</li>
              <li className="pb-7 ">Privacy Policy</li>
              <li className="pb-7 ">Information Security Policy</li>
              <li className="pb-7 ">Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottomfooter flex pb-8 ml-40 items-center">
        <div className="btns flex pt-5 mr-40">
          <Link to="">
            <img src={Applestore} alt="" className="w-[70%]" />
          </Link>
          <Link to="">
            <img src={Googleplay} alt="" className="w-[70%]" />
          </Link>
        </div>
        <div className="socials flex text-2xl leading-9">
          <h1 className="mr-14">Follow Us:</h1>
          <img src={Facebook} alt=""  className="pr-4"/>
         <img src={Twitter} alt=""  className="pr-4" />
          <img src={Instagram} alt=""  className="pr-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
