import React from "react";
import { Link } from "react-router-dom";
import PhoneView from "../../assets/phoneview.png";
import GetUlegoButton from "../../assets/button.png";


const UlegoPhoneView = () => {
  return (
    <div className="ulegophoneview mt-20  mx-[7rem]">
      <div>
        <h1 className="text-primary text-5xl leading-[72px] font-bold">Get Started with Ulego</h1>
        <p className="text-2xl w-[1100px] font-normal leading-9 pt-[24px] font-bold">Few steps and you will be on board with ulego</p>
      </div>

      <div className="phoneview text-center">
        <div className="step1 my-[53px] text-[#0056F3] font-semibold">
          <h1>Step 1</h1>
        </div>

        <div >
          <img src={PhoneView} alt="" className="mx-auto"/>
        </div>

        <div className="createAccount text-[#0056F3] font-semibold my-[50px]">
          <h1>Create Account</h1>
        </div>

        <div>
          <Link to="get-ulego">
            <img src={GetUlegoButton} alt="" className="mx-auto"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UlegoPhoneView;
