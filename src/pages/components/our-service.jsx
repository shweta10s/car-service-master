import React from 'react'
import HeadSubhead from './head-subhead'
import ServiceCard from './cards/service-card'
import { dummyData } from '@/styles/dummy-data'
import Link from 'next/link'

const OurService = () => {
  return (
    <div className="md:mb-10 md:mt-40 xl:max-w-6xl xl:px-0 px-6 mx-auto">
        <HeadSubhead name={'What we offer'} subname={'Our Services'} />
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-14 sm:gap-10 gap-6 md:my-9 sm:my-6 my-4">
           {
            dummyData.OurService.slice(0,3).map((ele,i) => (
              <div key={i} className="">
               <ServiceCard img={ele.img} name={ele.name} data={ele.data} />  
              </div>
            ))
            }
        </div>
        <div className="flex justify-center">
            <Link href="/our-service" className="text-primary-main border-2 p-2 px-4 rounded border-primary-main">View all Services</Link>
        </div>
    </div>
  )
}

export default OurService