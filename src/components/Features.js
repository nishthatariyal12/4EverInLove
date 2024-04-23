import React from "react";
import { IMAGES_URL } from "../utils/constants";
function Features() {
  return (
    <>
      <div className="py-20 bg-[#fff]">
        <div className=" lg:ml-[16%] lg:flex lg:flex-row flex-col justify-between">
          <div className="xl:w-[34%] lg:w-[50%] w-[100%] lg:pt-20 pt-8 px-[20px] py-[10px] lg:px-0 lg:py-0">
            <h6 className="text-[20px] text-[#C75C6F] font-bold font-dm lg:text-left text-center">
              Our Values
            </h6>
            <h1 className="lg:text-[55px] xl:text-[70px] 2xl:text-[84px] text-[40px] lg:text-left text-center text-[#292930] font-medium font-dm xl:leading-[82px] leading-[initial] py-5 tracking-tight">
              Relationships are at the
              <div className="flex lg:justify-start justify-center ">
                <span className="font-MelodySunday font-light flex items-center lg:text-[120px] text-[90px] leading-[0px] relative">
                  <div className="w-20 h-20 rounded-full bg-[#FFDC60] mt-1 absolute z-20"></div>
                  <span className="relative z-50">core</span>
                </span>
                <span className="ml-[20px]   z-20">of 4IL</span>
              </div>
            </h1>
            <p className="lg:text-[18px] text-[16px] text-[#999FAE] font-poppins font-normal leading-[27px] py-5 lg:text-left text-center">
              And not just the romantic kind. We can’t accomplish really hard
              things alone—so we make great relationships the foundation of our
              teamwork.
            </p>
            <p className="lg:text-[18px] text-[16px] text-[#999FAE] font-poppins font-normal leading-[27px] py-5 lg:text-left text-center">
              We believe these three core values are what it takes to build
              those great relationships.
            </p>
          </div>
          <div className="lg:w-[57%] w-[100%] flex justify-center lg:items-end">
            <img
              src={IMAGES_URL.ourValueImage}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-row flex-col justify-center xl:ml-[8%] xl:mr-0 md:mx-[4%] mx-[2%]  lg:mt-[-25px] ">
          <div className="xl:w-3/12 lg:w-4/12 bg-[#FF97A1] lg:ml-7 lg:ml-4 m-4 flex flex-col justify-between items-center pt-10 rounded-[24px]">
            <div className="lg:w-72 w-56 lg:h-72 h-56 bg-[#FAB8C4] mb-6 rounded-full flex justify-center items-center ">
              <img
                src={IMAGES_URL.convexImage}
                alt="loading..."
                className=" lg:h-[140px] h-[100px] "
              />
            </div>
            <div className="bg-[#fff] lg:mx-3 m-3 py-8 px-5 2xl:px-8 rounded-[24px] h-full lg:h-[258px] md:w-[97%] w-[94%] lg:w-[94%]">
              <h1 className="lg:text-[45px] text-[35px] text-[#DDDDE8] font-dm font-medium leading-[45px]">
                01
              </h1>
              <h3 className="lg:text-[32px] text-[24px] text-[#292930] font-dm font-medium ">
                Authenticity
              </h3>
              <p className="lg:text-[16px] text-[14px] text-[#999FAE] font-poppins font-normal leading-[24px] pt-3 pb-5">
                We share — never hide — our words, actions, and intentions.
              </p>
            </div>
          </div>
          <div className="xl:w-3/12 lg:w-4/12 bg-[#EF8E4B] lg:mx-7 lg:mx-4 m-4 flex flex-col justify-between items-center pt-10 rounded-[24px] ">
            <div className="lg:w-72 w-56 lg:h-72 h-56 bg-[#DE1A31] mb-6 rounded-full flex justify-center items-center ">
              <img
                src={IMAGES_URL.arrowHeartImage}
                alt="loading..."
                className=" lg:h-[180px] ml-[-3px] mt-2 h-[140px] "
              />
            </div>
            <div className="bg-[#fff] lg:mx-3 m-3 py-8 px-5 2xl:px-8 rounded-[24px] lg:h-[258px] md:w-[97%] w-[94%] lg:w-[94%]">
              <h1 className="lg:text-[45px] text-[35px] text-[#DDDDE8] font-dm font-medium leading-[45px]">
                02
              </h1>
              <h3 className="lg:text-[32px] text-[24px] text-[#292930] font-dm font-medium ">
                Courage
              </h3>
              <p className="lg:text-[16px] text-[14px] text-[#999FAE] font-poppins font-normal leading-[24px]  pt-3 pb-5">
                Copy Breakthroughs require a willingness to take risks and
                embrace lofty goals and tough challenges.
              </p>
            </div>
          </div>
          <div className="xl:w-3/12 lg:w-4/12 bg-[#BE89E0] lg:mx-7 lg:mx-4 m-4 flex flex-col justify-between items-center pt-10 rounded-[24px]">
            <div className="lg:w-72 w-56 lg:h-72 h-56 bg-[#FC9090] mb-6 rounded-full flex justify-center items-center ">
              <img
                src={IMAGES_URL.phoneHeartImage}
                alt="loading..."
                className=" lg:h-[180px]  h-[140px]"
              />
            </div>
            <div className="bg-[#fff] lg:mx-3 m-3 py-8 px-5 2xl:px-8 rounded-[24px] lg:h-[258px] md:w-[97%] w-[94%] lg:w-[94%]">
              <h1 className="lg:text-[45px] text-[35px] text-[#DDDDE8] font-dm font-medium leading-[45px]">
                03
              </h1>
              <h3 className="lg:text-[32px] text-[24px] text-[#292930] font-dm font-medium ">
                Empathy
              </h3>
              <p className="lg:text-[16px] text-[14px] text-[#999FAE] font-poppins font-normal leading-[24px]  pt-3 pb-5">
                We’re all humans first. So we deeply consider the perspectives
                of others, listen openly, and speak with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
