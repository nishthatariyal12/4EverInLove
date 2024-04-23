import React from "react";
import { IMAGES_URL } from "../utils/constants";

function Features2() {
  return (
    <>
      <div className=" mx-[4%] md:mx-[4%] lg:mx-[5%] my-5">
        <div className="flex lg:flex-row flex-col justify-between metaverse_img  ">
          <div className="xl:w-[50%] lg:w-[53%] w-[100%] flex flex-col justify-center xl:pl-32 lg:pl-20 pl-0 md:pt-32 pt-16 lg:pt-0">
            <h1 className="xl:text-[78px] md:text-[48px] text-[40px] font-medium text-[#292930] font-dm xl:leading-[65px] lg:leading-[55px] leading-[50px] tracking-tighter lg:text-left text-center px-5 lg:px-0">
              Live-like
              <br className="lg:block hidden" />
              Interaction in
              <div className="flex lg:justify-start justify-center">
                <span>the</span>
                <span className="font-MelodySunday font-light xl:ml-[32px] lg:ml-[29px] ml-[18px] xl:text-[90px] lg:text-[75px] md:text-[60px] text-[45px] lg:mt-2  z-10">
                  metaverse.
                </span>
              </div>
            </h1>
            <p className="text-[16px] font-normal text-[#292930] leading-[24px] font-poppins xl:py-10 lg:py-5 lg:text-left text-center px-5 lg:px-0 py-3" />
            With 4IL you can now chat and interact with your{" "}
            <br className="lg:block hidden" />
            partner in real time in the metaverse! Ride, chat,
            <br className="lg:block hidden" />
            dance &amp; watch movies with them.
            <p className="text-[16px] font-normal text-[#292930] leading-[24px] font-poppins lg:text-left text-center px-5 lg:px-0 py-3">
              Use the 4IL App to test in real-time.
            </p>
            <div className="xl:py-10 lg:py-4 flex  md:flex-row flex-col items-center lg:justify-start justify-center">
              <div>
                <img
                  src={IMAGES_URL.downloadAppStoreImage}
                  alt=""
                  className=" xl:h-[55px] xl:w-[200px] md:w-[160px] w-[130px] md:h-[55px] h-[40px] cursor-pointer"
                />
              </div>
              <div className="md:ml-4">
                <img
                  src={IMAGES_URL.downloadPlayStoreImage}
                  alt=""
                  className="xl:h-[55px] xl:w-[200px] md:w-[160px] w-[130px] md:h-[55px] h-[40px] cursor-pointer rounded-lg md:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-[46%] w-[100%]  flex justify-center pl-20 lg:pl-0 pt-2 ">
            <img src={IMAGES_URL.metaBubble} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="bg-[#fff] mx-[4%] md:mx-[4%] lg:mx-[5%] relative">
        <div className="absolute 2xl:pt-[90px] xl:pt-[73px] lg:pt-[35px] md:pt-[40px] sm:pt-[35px] pt-[25px] z-10 w-full flex flex-col items-center ">
          <h1 className="2xl:text-[80px] xl:text-[60px] md:text-[45px] sm:text-[30px] text-[23px]  xl:leading-[80px] lg:leading-[50px] md:leading-[40px] leading-[30px] font-dm font-medium text-[#fff] text-center">
            What are you waiting for?
          </h1>
          <div>
            <h6
              className="lg:text-[18px] md:text-[16px] text-[14px] font-normal text-[#fff] font-poppins 2xl:pt-4 xl:pt-2  lg:pt-2
 md:pt-4 sm:pt-2 pt-1 text-center"
            >
              Download the app now
            </h6>
            <div className="flex xl:mt-4 lg:mt-3 mt-1">
              <div className="cursor-pointer">
                <img
                  src={IMAGES_URL.downloadAppStoreImage}
                  alt=""
                  className="xl:h-[55px] lg:h-[55px] xl:w-[200px] lg:w-[170px] md:w-[130px] sm:w-[110px] w-[95px]  md:h-[35px] sm:h-[28px] h-[23px] "
                />
              </div>
              <div className="cursor-pointer lg:ml-4 ml-2 ">
                <img
                  src={IMAGES_URL.downloadPlayStoreImage}
                  alt=""
                  className="xl:h-[55px] lg:h-[55px] xl:w-[200px]  lg:w-[170px] md:w-[130px] sm:w-[110px] w-[95px]  md:h-[35px] sm:h-[28px] h-[23px] rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex justify-center  rounded-[50px]">
            <div className="w-[800px] absolute mt-[500px] ml-[400px] rounded-[50px] responsive-screen">
              <div className="image-fader">
                <img
                  src={IMAGES_URL.screen4Image}
                  alt=""
                  className="h-[760px] w-[364px] ml-6  mt-8 px-[0.5rem] rounded-[50px]"
                />
                <img
                  src={IMAGES_URL.screen2image}
                  alt=""
                  className="h-[760px] w-[364px] ml-6  mt-8 px-[0.5rem] rounded-[50px]"
                />
                <img
                  src={IMAGES_URL.screen5Image}
                  alt=""
                  className="h-[760px] w-[364px] ml-6  mt-8 px-[0.5rem] rounded-[50px]"
                />
                <img
                  src={IMAGES_URL.screen1Image}
                  alt=""
                  className="h-[760px] w-[364px] ml-6 mt-8 px-[0.5rem] rounded-[50px]"
                />
              </div>
              <img
                src={IMAGES_URL.phoneMedia}
                alt=""
                className=""
              />
            </div>
          </div>
          <img
            src={IMAGES_URL.appNewImage}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Features2;
