import React from "react";
import yellowCircle from '../images/yellowCircle.png'
import redCircle from '../images/redCircle.png'
import { IMAGES_URL } from "../utils/constants";
import ReactPlayer from "react-player";
function AboutUs() {
  return (
    <>
      <div className="bg-[#27272E] pt-20 ">
        <h1 className="mx-[4%] md:mx-[6%] lg:mx-[8%] text-[#fff] lg:text-[56px] text-[35px] font-medium font-dm leading-[56px] lg:text-left text-center">
          Why 4IL?
        </h1>
        <div className="mx-[4%] md:mx-[6%] lg:mx-[8%]  flex flex-col lg:flex-row justify-between">
          <h3 className="lg:w-[45%] text-[#fff] lg:text-[24px] text-[18px] font-medium font-dm lg:leading-[34px] leading-[25px] py-3 lg:text-left text-center">
            21st CENTURY CUPID STUDIO REIMAGINING HOW TO HELP MORE PEOPLE FIND
            THEIR PERSON
          </h3>
          <div className="lg:w-[50%]  ">
            <p className="text-[#fff] lg:text-[18px] text-[15px] font-medium font-dm leading-[20px] py-5 lg:text-left text-center">
              At 4everinlove, we are a small but passionate team of curious
              individuals committed to understanding what makes a successfull
              match. Our mission is to help you find your true soulmate by
              identifying core values and bringing the best people together to
              create something extraordinary - authentic and lasting
              connections. With our technologically advanced approach and
              dedication to meaningful relationships, we aim to be the
              21st-century cupid studio, reimagining how people find their
              perfect match. Trust in 4everinlove to unite hearts and create a
              love story that stands the test of time.
            </p>
          </div>
        </div>
        <div className=" mx-[4%] md:mx-[6%] lg:mx-[8%] mt-20">
          <div className="video-container flex items-center justify-center" style={{width: '100% !important', height: '100% !important'}}>
            <ReactPlayer
              url={IMAGES_URL.videoURL}
              controls={false}
              loop
              playing
              playsinline={true}
              muted={true}
              className="video-container"
            />
          </div>
        </div>
        <div className="mx-[4%] md:mx-[6%] lg:mx-[8%] flex justify-center py-8">
          <img src={yellowCircle} alt="" className="h-[40px]" />
        </div>
        <div className="mx-[4%] md:mx-[6%] lg:mx-[8%] flex justify-end">
          <img src={redCircle} alt="" className="mr-32 relative top-[40px] h-[70px]" />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
