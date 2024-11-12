import React from 'react'
import HeadSubhead from './head-subhead'
import Image from 'next/image'
import { IoCall } from "react-icons/io5";
import { IoMdPricetags } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const WhyChoose = () => {
  return (
    <div className="max-w-6xl mx-auto xl:px-0 px-6">
        <HeadSubhead name={'We’re here for whatever you need'} subname={'Why choose us ?'} />
        <div className="grid md:grid-cols-2 md:gap-10 sm:gap-8 gap-6 md:my-10 sm:my-6 ">
            <div className="relative  md:h-auto sm:h-96 h-44 w-full">
                <Image src="/assests/03.png" alt="" fill className="object-cover rounded-xl" />
            </div>
            <div className="md:pt-10">
                <div className="flex md:gap-6 sm:gap-4 gap-2">
                    <IoCall className="text-4xl sm:bg-white text-primary-main md:p-2 rounded-lg" />
                    <div>
                        <p className="md:text-2xl sm:text-xl text-base font-semibold">Customer Support</p>
                        <p className="text-[#858587] mt-1.5 md:text-base sm:text-sm text-xs">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
                <div className="flex md:gap-6 sm:gap-4 gap-2 md:my-10 sm:my-6 my-4">
                    <IoMdPricetags className="text-4xl sm:bg-white text-primary-main md:p-2 rounded-lg" />
                    <div>
                        <p className="md:text-2xl sm:text-xl text-base font-semibold">Many Location</p>
                        <p className="text-[#858587] mt-1.5 md:text-base sm:text-sm text-xs">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
                <div className="flex md:gap-6 sm:gap-4 gap-2  md:my-10 sm:my-6 my-4">
                    <FaLocationDot className="text-4xl sm:bg-white text-primary-main md:p-2 rounded-lg" />
                    <div>
                        <p className="md:text-2xl sm:text-xl text-base font-semibold">Best Price Guarantted</p>
                        <p className="text-[#858587] mt-1.5 md:text-base sm:text-sm text-xs">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
                <div className="flex md:gap-6 sm:gap-4 gap-2  md:my-10 sm:my-6">
                    <FaLocationDot className="text-4xl sm:bg-white text-primary-main md:p-2 rounded-lg" />
                    <div>
                        <p className="md:text-2xl sm:text-xl text-base font-semibold">Best Price Guarantted</p>
                        <p className="text-[#858587] mt-1.5 md:text-base sm:text-sm text-xs">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose