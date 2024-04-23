import React from 'react'
import phoneImage from '../images/phone.png';
import addressImage from '../images/address.png';
import emailImage from '../images/email.png';
function ContactUsFooter() {
    return (
        <div className="border-t">
            <div className="flex flex-col lg:flex-row justify-between py-10 mx-[3%] md:mx-[4%] lg:mx-[8%]">
                <div className="w-full lg:w-[30%] flex flex-col items-center">
                    <img src={phoneImage} alt="" className="h-[45px] " />
                    <h4 className=" font-poppins text-[14px] py-2 text-center">
                        <b>Phone:</b>
                        <br /> +91-9811210004</h4>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col items-center ">
                    <img src={addressImage} alt="" className="h-[45px] " />
                    <h4 className="font-poppins text-[14px] py-2 text-center">
                        <b>Address:</b>
                        <br />MS MATRIMONY PRIVATE LIMITED E-53, BARSATI FLOOR, ROAD NO.1 F-BLOCK. GREATER KAILASH ENCLAVE I BEHIND HANS RAJ GUPTA MARG, NEW DELHI, 110048</h4>
                </div>
                <div className="w-full lg:w-[30%] flex flex-col items-center">
                    <img src={emailImage} alt="" className="h-[45px] " /><h4 className="font-poppins text-[14px] py-2 text-center"><b>Email:</b><br /> contact@4everinlove.com</h4></div></div></div>
    )
}

export default ContactUsFooter