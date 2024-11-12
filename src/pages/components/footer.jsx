/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoCall } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#333] ">
    <footer className="md:h-[428px] w-full shrink-0 relative flex md:justify-between justify-center md:pl-[135px] md:pr-[90px] max-md:grid grid-cols-2 xl:px-0 px-4 max-w-7xl mx-auto">
      <div className="part1 pt-[26px] max-md:col-span-2 max-md:grid max-md:justify-items-center">
        <div className="flex items-center mb-4">
          <img
            src="/assests/logo.png"
            alt="BestAutoRepair Logo"
            className="h-14 w-auto object-contain"
          />
        </div>
        <p className="md:w-[283px] md:mt-[40px] mt-4 text-[#FFF] md:text-[24px] sm:text-xl text-lg font-[500] leading-[32px] capitalize	">
          We manage your car renewal - convenience door to door service.
        </p>
      </div>
      <div className="part2 flex flex-col gap-[24px] pt-[26px]">
        <h1 className="md:w-[131px] md:text-[24px] sm:text-xl text-lg font-[600] leading-[130%] text-[#FFF]">
          Menu
        </h1>
        <div className="menu flex flex-col gap-[16px]">
          <h3 className="md:text-[21px] sm:text-lg text-sm font-[400] md:leading-[150%] text-[#FFF] self-stretch">
            Home
          </h3>
          <h3 className="md:text-[21px] sm:text-lg text-sm font-[400] md:leading-[150%] text-[#FFF] self-stretch">
            Our Services
          </h3>
          <h3 className="md:text-[21px] sm:text-lg text-sm font-[400] md:leading-[150%] text-[#FFF] self-stretch">
            Pricing
          </h3>
          <h3 className="md:text-[21px] sm:text-lg text-sm font-[400] md:leading-[150%] text-[#FFF] self-stretch">
            Blog
          </h3>
          <h3 className="md:text-[21px] sm:text-lg text-sm font-[400] md:leading-[150%] text-[#FFF] self-stretch">
            About us
          </h3>
          <h3 className="md:text-[21px] sm:text-lg text-sm font-[400] md:leading-[150%] text-[#FFF] self-stretch">
            Contact us
          </h3>
        </div>
      </div>
      <div className="part3 flex flex-col gap-[24px] pt-[26px]">
        <h1 className="w-[197px] md:text-[24px] sm:text-xl text-lg font-[600] leading-[130%] text-[#FFF]">
          Connect with us
        </h1>
        <div className="contact flex flex-col gap-[24px] items-start">
          <div className="phone flex md:gap-[23px] gap-2">
            <IoCall className="mt-1 text-primary-main" />
            <div className="md:w-[349px]">
              <p className="font-[400] md:text-[21px] sm:text-lg text-sm text-[#FFF] md:leading-[150%]">
                055 1199 065
              </p>
              <p className="font-[400] md:text-[21px] sm:text-lg text-sm text-[#FFF] md:leading-[150%]">
                +971 522336618
              </p>
            </div>
          </div>
          <div className="email flex  md:gap-[23px] gap-2">
            <FiMail className="mt-1 text-primary-main" />
            <p className="md:w-[349px] font-[400] md:text-[21px] sm:text-lg text-sm text-[#FFF] md:leading-[150%]">
              Albayadhgmc@gmail.com
            </p>
          </div>
          <div className="address flex  md:gap-[23px] gap-2">
            <FaLocationDot className="mt-1 text-primary-main" />
            <p className="md:w-[349px] font-[400] md:text-[21px] sm:text-lg text-sm text-[#FFF] md:leading-[150%]">
              Al bayadh garage New industrial <br /> area 2 - Ajman-UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
      <div className="text-[#FFF] font-[400] md:text-[16px] text-sm text-center bg-primary-main w-full md:p-4 sm:p-3 p-2 mt-4">
        © Copyright 2024. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer;
