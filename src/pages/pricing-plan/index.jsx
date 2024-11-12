import React from 'react'
import Layout from '../components/layout'
import ServiceHeroSection from '../components/service-hero-section'
import { dummyData } from '@/styles/dummy-data'
import Link from 'next/link'
import { RouteContext } from "@/context/context";
import { useContext } from 'react';

const PricingPlan = () => {
    const { PopupOpen } = useContext(RouteContext);
  return (
    <Layout>
        <ServiceHeroSection name={'Pricing Plan'} subname={'choose the Right for you'} img={"/assests/07.png"} />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-baseline gap-8 my-10 md:mt-20 xl:px-0 px-6">
            <div className="space-y-8">
                {
                    dummyData.PricingPlanData.filter((ele ,i) => i %2 === 0).map((ele,i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-8 h-fit">
                <h2 className="text-center text-red-500 text-2xl font-bold mb-6">
                    {ele.heading}
                </h2>
                <div className="grid md:grid-cols-2 items-start gap-2 text-[#222222] md:text-lg sm:text-base text-sm">
                        {
                            ele.data.map((val, j) => (
                            <li key={j} className="flex items-start">
                                <span className="text-red-500 mr-2">•</span> {val}
                            </li>
                            ))
                        }
                </div>
                <div className="mt-6 text-center">
                    <div onClick={PopupOpen} className="cursor-pointer bg-red-500 text-white py-2 px-8 font-medium rounded-md">
                    Make an Appointment
                    </div>
                </div>
                </div>
                    ))
                }

            </div>
            <div className="space-y-8">
                {
                    dummyData.PricingPlanData.filter((ele ,i) => i %2 !== 0).map((ele,i) => (
            <div key={i} className="bg-white rounded-lg shadow-lg p-8 h-fit">
                <h2 className="text-center text-red-500 text-2xl font-bold mb-6">
                    {ele.heading}
                </h2>
                <div className="grid grid-cols-2 items-start gap-2 text-[#222222] md:text-lg sm:text-base text-sm">
                        {
                            ele.data.map((val, j) => (
                            <li key={j} className="flex items-start">
                                <span className="text-red-500 mr-2">•</span> {val}
                            </li>
                            ))
                        }

                   
                </div>
                <div className="mt-6 text-center">
                    <Link href="/contact-us" className="bg-red-500 text-white py-2 px-8 font-medium rounded-md">
                    Make an Appointment
                    </Link>
                </div>
                </div>

                    ))
                }

            </div>
        </div>
        
    </Layout>
  )
}

export default PricingPlan