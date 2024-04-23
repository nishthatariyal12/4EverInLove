import React from "react";
import { IMAGES_URL } from "../utils/constants";
import scrollImage from "../images/scroll.png";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="py-10 mx-[4%] md:mx-[7%] lg:mx-[14%]">
        <div className="flex flex-wrap lg:flex-row justify-between lg:justify-center py-10"></div>
        <div className=" pt-8 border-t-2 ">
          <div className=" ">
            <img
              src={IMAGES_URL.redTransparentImage}
              alt=""
              className="md:h-[65px] h-[45px]"
            />
          </div>
          <ul className="flex flex-wrap md:flex-row flex-col justify-start pt-4 pb-3">
            <li
              className="text-[14px] font-normal font-dm text-[#999FAE] cursor-pointer md:pr-3 pr-0"
              onClick={() => {
                navigate("/privacy-policy");
              }}
            >
              Privacy Policy
            </li>
            <ul className="flex items-center">
              <li className="hidden md:block md:border-l h-[20px] "></li>
            </ul>
            <li
              className="text-[14px] font-normal font-dm text-[#999FAE] cursor-pointer md:px-3 px-0"
              onClick={() => {
                navigate("/terms-and-conditions");
              }}
            >
              Terms and Conditions
            </li>
            <ul className="flex items-center">
              <li className="hidden md:block md:border-l border-l h-[20px] "></li>
            </ul>
            <li
              className="text-[14px] font-normal font-dm text-[#999FAE] cursor-pointer md:px-3 px-0 "
              onClick={() => {
                navigate("/faq");
              }}
            >
              FAQs
            </li>
            <ul className="flex items-center">
              <li className="hidden md:block md:border-l border-l h-[20px] "></li>
            </ul>
            <li
              className="text-[14px] font-normal font-dm text-[#999FAE] cursor-pointer md:px-3 px-0 "
              onClick={() => {
                navigate("/refund-and-cancellation");
              }}
            >
              Refund and Cancellation
            </li>
          </ul>
          <div className="lg:flex justify-between">
            <h3 className="text-[14px] text-[#999FAE] font-medium font-dm">
              © 2023, M S MATRIMONY PRIVATE LIMITED
            </h3>
            <div
              className="flex pt-4 lg:pt-0"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={scrollImage}
                alt=""
                className="h-[24px] mr-3 cursor-pointer"
              />
              <h6 className="text-[14px] text-[#999FAE] font-medium font-dm cursor-pointer">
                Back to top
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
