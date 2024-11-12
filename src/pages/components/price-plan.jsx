import React , { useContext } from 'react'
import HeadSubhead from './head-subhead'
import Link from 'next/link'
import { TiTick } from "react-icons/ti";
import { RouteContext } from '@/context/context';

const PricePlan = () => {
  const { PopupOpen } = useContext(RouteContext);
  
  return (
      <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
          <HeadSubhead name={'Pricing Plan'} subname={'choose the Right for you'} />
        <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 xl:gap-10 lg:space-y-0 xl:px-0 px-2 md:mt-20">

          <div className="flex flex-col p-4 mx-auto max-w-lg text-start text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-white dark:text-[#222222]">
            <h3 className="md:mb-4 sm:mb-2 md:text-2xl text-xl font-semibold">Major Service(Silver)</h3>
            <p className="font-normal text-[#858587] md:text-lg sm:text-base text-sm dark:text-gray-400">
            Comprehensive Care for Your Vehicle’s Essential Needs
            </p>
            <div className="flex items-baseline sm:my-2 my-1">
              {/* <span className="mr-2 md:text-5xl sm:text-4xl text-3xl font-extrabold">$29</span>
              <span className="text-gray-500 dark:text-gray-400 md:text-base text-sm">/month</span> */}
            </div>
            <p className="md:text-lg sm:text-base text-sm font-bold">What’s included</p>
            {/* List */}
            <ul role="list" className="md:mb-8 sm:mb-6 mb-4 md:space-y-4 sm:space-y-2 text-left">
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
           
                <TiTick className="text-primary-main" />
                <span>Injectors cleaning and testing</span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <TiTick className="text-primary-main" />
                <span>Engine oil and filter</span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <TiTick className="text-primary-main" />
                <span>
                Gear oil and filter
                </span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <TiTick className="text-primary-main" />
                <span>
                Maf sensor cleaning
                </span>
              </li>
            </ul>
            <div
              onClick={PopupOpen}
              
              className="text-white cursor-pointer bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xs md:px-5 sm:px-3 px-2 md:py-2.5 py-1.5 text-center dark:text-white  dark:focus:ring-primary-900 bg-primary-main md:text-sm"
            >
            Make an Appointment
            </div>
          </div>
          <div className="relative">
            <div className="md:absolute bottom-10 flex flex-col p-4 mx-auto max-w-lg text-start text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-primary-main dark:text-white ">
                <h3 className="md:mb-4 sm:mb-2 md:text-2xl text-xl font-semibold">Major Service(Gold)</h3>
                <p className="font-normal text-[#858587] md:text-lg sm:text-base text-sm dark:text-gray-400">
                Comprehensive Major Service for Superior Vehicle Care and Efficiency
                </p>
                <div className="flex items-baseline sm:my-2 my-1">
                {/* <span className="mr-2 md:text-5xl sm:text-4xl text-3xl font-extrabold">$29</span>
                <span className="text-gray-500 dark:text-gray-400 md:text-base text-sm">/month</span> */}
                </div>
                <p className="md:text-lg sm:text-base text-sm font-bold">What’s included</p>
                {/* List */}
                <ul role="list" className="md:mb-8 sm:mb-6 mb-4 md:space-y-4 sm:space-y-2 text-left">
                <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs text-white">
                    {/* Icon */}
                    <TiTick className="" />
                    <span>A/C filter cleaning or change</span>
                </li>
                <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                    {/* Icon */}
                    <TiTick className="" />
                    <span>A/C gas top-up</span>
                </li>
                <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                    {/* Icon */}
                    <TiTick className="" />
                    <span>
                    Plugs change
                    </span>
                </li>
                <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                    {/* Icon */}
                    <TiTick className="" />
                    <span>
                    Belt change
                    </span>
                </li>
                </ul>
                <div
                onClick={PopupOpen}
                className="cursor-pointer text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xs md:px-5 sm:px-3 px-2 md:py-2.5 py-1.5 text-center dark:text-primary-main  dark:focus:ring-primary-900 bg-white md:text-sm"
                >
                Make an Appointment
                </div>
            </div>

          </div>
          <div className="flex flex-col p-4 mx-auto max-w-lg text-start text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-white dark:text-[#222222]">
            <h3 className="md:mb-4 sm:mb-2 md:text-2xl text-xl font-semibold">Major Service(Diamond)</h3>
            <p className="font-normal text-[#858587] md:text-lg sm:text-base text-sm dark:text-gray-400">
            Comprehensive, Top-Tier Maintenance for Peak Vehicle performance
            </p>
            <div className="flex items-baseline sm:my-2 my-1">
              {/* <span className="mr-2 md:text-5xl sm:text-4xl text-3xl font-extrabold">$29</span>
              <span className="text-gray-500 dark:text-gray-400 md:text-base text-sm">/month</span> */}
            </div>
            <p className="md:text-lg sm:text-base text-sm font-bold">What’s included</p>
            {/* List */}
            <ul role="list" className="md:mb-8 sm:mb-6 mb-4 md:space-y-4 sm:space-y-2 text-left">
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <TiTick className="text-primary-main" />
                <span>Injectors cleaning and testing</span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <TiTick className="text-primary-main" />
                <span>Maf sensor cleaning</span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <TiTick className="text-primary-main" />
                <span>
                A/C gas top-up
                </span>
              </li>
              <li className="flex items-center md:space-x-3 space-x-1 md:text-base sm:text-sm text-xs">
                {/* Icon */}
                <TiTick className="text-primary-main" />
                <span>
                Plugs change
                </span>
              </li>
            </ul>
            <div
                onClick={PopupOpen}
              className="text-white cursor-pointer bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-xs md:px-5 sm:px-3 px-2 md:py-2.5 py-1.5 text-center dark:text-white  dark:focus:ring-primary-900 bg-primary-main md:text-sm"
            >
            Make an Appointment
            </div>
          </div>
        </div>
      </div>
  )
}

export default PricePlan