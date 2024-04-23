import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContactUsForm from './ContactUsForm'
import ContactUsFooter from "./ContactUsFooter";
import { IMAGES_URL } from "../utils/constants";
import scrollImage from '../images/scroll.png'
import circleImage from '../images/circle.png'
const Banner = () => {
    const location = useLocation();
    const isMainPage = location.pathname === "/";
    const navigate = useNavigate();
    return (
        <div className="banner_img">
            {isMainPage ? (
                <>
                    <div className="hidden lg:block">
                        <img
                            src={IMAGES_URL.bannerImage}
                            alt=""
                            className="absolute right-0 lg:top-[100px] xl:top-[-3px] lg:h-[800px] xl:h-[1100px] 2xl:h-[1400px] homepage-img"
                        />
                    </div>
                    <div className="flex justify-between mx-[4%] md:mx-[6%] lg:mx-[8%] lg:py-16 md:py-10 py-6">
                        <div className="flex">
                            <div className="xl:block hidden">
                                <img
                                    src={IMAGES_URL.transparentImage}
                                    alt=""
                                    className="h-[65px] "
                                />
                            </div>
                            <div className="xl:hidden block md:pt-0 pt-2">
                                <img
                                    src={IMAGES_URL.logoRed}
                                    alt=""
                                    className="md:h-[65px] h-[50px] "
                                />
                            </div>
                        </div>
                        <Link to="/contact">
                            <div className="flex relative">
                                <div className="mt-3 md:mt-0">
                                    <button className="md:px-7 px-3 md:py-5 py-3 bg-[#FAB8C4] text-[#DE1A31] font-medium font-poppins rounded-[20px]">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="mt-36 lg:pl-40 lg:pr-10 mx-[4%] md:mx-[5%] lg:mx-[8%] hidden lg:block">
                        <h1 className="text-[96px] text-[#292930] font-bold leading-[96px] font-dm tracking-tight">
                            Find{" "}
                            <span className="font-MelodySunday font-light absolute ml-[-18px] mt-[44px]">
                                Love
                            </span>{" "}
                            <br />
                            <span className="flex">
                                Like{" "}
                                <div className="w-20 h-2 mt-[75px] ml-2 bg-[#DE1A31]"></div>
                            </span>
                            Never
                            <br />{" "}
                            <span className="flex">
                                Before
                                <div className="w-4 h-4 mt-[68px] ml-2 bg-[#DE1A31] rounded-full"></div>
                            </span>
                        </h1>
                        <p className="text-[18px] text-[#999FAE] font-normal font-poppins py-5">
                            Embark on a Timeless Love Story <br /> Introducing 4everinlove App
                        </p>
                    </div>
                    <div className="mt-36 lg:pl-40 lg:pr-10 mx-[4%] md:mx-[5%] lg:mx-[8%]  lg:hidden">
                        <h1 className="sm:text-[76px] text-[65px]  text-[#292930] font-bold sm:leading-[80px] leading-[70px] font-dm tracking-tight text-center ">
                            <span className="sm:ml-[-40px] ml-[-56px]">Find</span>
                            <span className=" font-MelodySunday font-light absolute ml-[-14px] sm:mt-[34px] mt-[30px]">
                                Love
                            </span>
                            <div className="flex justify-center">
                                <span>Like</span>
                                <div className="w-12 h-[4px] ml-2 sm:mt-[60px] mt-[40px] bg-[#DE1A31]"></div>
                            </div>
                            Never
                            <span className="flex justify-center">
                                Before
                                <div className="w-2 h-2  mt-[58px] ml-1 bg-[#DE1A31] rounded-full"></div>
                            </span>
                        </h1>
                        <p className="text-[15px] text-[#999FAE] font-normal font-poppins py-5 text-center">
                            Embark on a Timeless Love Story <br /> Introducing 4everinlove App
                        </p>
                    </div>
                    <div className="mx-[4%] md:mx-[6%] lg:mx-[8%] lg:flex lg:flex-row lg:justify-start flex flex-col justify-center lg:pl-40 py-4 ">
                        <div className="flex justify-center cursor-pointer">
                            <img
                                src={IMAGES_URL.downloadAppStoreImage}
                                alt="Your Alt Text Here"
                                className="mt-2 lg:w-[220px] lg:h-[65px] md:w-[200px] w-[140px] md:h-[58px] h-[45px]"
                            />
                        </div>
                        <div className="flex justify-center cursor-pointer">
                            <img src={IMAGES_URL.downloadPlayStoreImage} alt="" className="mx-2 mt-2 lg:w-[220px] lg:h-[64px] md:w-[200px] w-[140px] md:h-[58px] h-[45px] rounded-lg " />
                        </div>
                    </div>
                    <div className="mx-[4%] md:mx-[6%] lg:mx-[8%] flex lg:justify-start justify-center lg:pl-40 lg:pt-40 lg:pb-10 py-10  ">
                        <img
                            src={scrollImage}
                            alt=""
                            className="h-8 cursor-pointer"
                        />
                        <h6 className="text-[16px] text-[#999FAE] font-normal px-5 pt-1 ">
                            Scroll to explore
                        </h6>
                    </div>
                    {/* bottom round img */}
                    <div className="mx-[4%] md:mx-[6%] lg:mx-[8%] flex justify-center">
                        <img
                            src={circleImage}
                            alt=""
                            className="relative lg:top-[80px] top-[45px] lg:left-[160px] lg:h-[160px] h-[100px]"
                        />
                    </div>
                </>
            ) : (<><div className="flex justify-between mx-[3%] md:mx-[4%] lg:mx-[8%] lg:py-16 md:py-10 py-6">
                <div className="flex pt-3 ">
                    <div>
                        <img
                            src={IMAGES_URL.contactPageImage}
                            alt=""
                            className="lg:h-[60px] h-[45px] cursor-pointer"
                            onClick={() => {
                                navigate("/");
                            }}
                        />
                    </div>
                </div>
            </div>
                <ContactUsForm />
                <ContactUsFooter /></>)}

        </div>
    );
};

export default Banner;
