/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Layout from '../components/layout'
import ServiceHeroSection from '../components/service-hero-section'
import { dummyData } from '@/styles/dummy-data'

const index = () => {

  return (
    <Layout>
        <ServiceHeroSection img={'/assests/08.png'} name={'Blogs'} subname={'Our News'} />
        <div>
        <div className="max-w-6xl mx-auto py-8 grid gap-4">
            {
                dummyData.OurBlogsdata.map((ele,i) => (
                <div key={i} className=" p-4 mb-4 pt-8 border-t border-t-[#B8B8B8]">
                    <div className="md:flex gap-12 items-center">
                    <img
                        src={ele.img}
                        alt="Coffee beans being processed"
                        className="md:w-60 w-full lg:h-60 md:h-52 sm:h-44 h-40 object-cover rounded-lg mr-4"
                    />
                    <div>
                        <h2 className="lg:text-[2.5rem] md:text-3xl sm:text-2xl text-xl font-medium mb-2">
                       {ele.name}
                        </h2>
                        <div className="my-4 space-y-1">
                            {
                                ele.listData.map((val, j) => (
                                    <li key={j}>{val}</li>

                                ))

                            }
                        </div>
                        <p className="text-gray-400 md:text-xl sm:text-base text-sm">{ele.date}</p>
                    </div>
                    </div>
                </div>

                ))
            }
        </div>

        </div>
    </Layout>
  )
}

export default index