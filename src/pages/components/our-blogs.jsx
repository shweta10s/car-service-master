import React from 'react'
import HeadSubhead from './head-subhead'
import Image from 'next/image'
import { dummyData } from '@/styles/dummy-data'

const OurBlogs = () => {
    const arr = [
        {
            name:''
        },
        {
            name:''
        },
        {
            name:''
        },
        {
            name:''
        },
    ]
  return (
    <div className='max-w-7xl mx-auto'>
        
      <HeadSubhead name={'Our Blog'} subname={"What’s New?"} />
      <div className="grid md:grid-cols-2 gap-4 my-10 xl:px-0 px-6">
        {
            dummyData.OurBlogsdata.slice(0,4).map((ele,i) => (
                <div key={i} className="grid md:grid-cols-2 md:gap-6 sm:gap-4 gap-2 items-center">
                    <div className="relative md:h-48 sm:h-32 h-28  w-full ">
                        <Image src={ele.img} alt="No Preview" fill className="" />
                    </div>
                    <div>
                        <p className="md:text-2xl sm:text-xl text-base font-bold">{ele.name}</p>
                        {
                            ele.listData.map((val,j) => (
                                <li key={j} className="text-[#858587] mt-1 text-xs">{val}</li>
                                
                            ))
                        }
                    </div>
                </div>

            ))
        }
      </div>

    </div>
  )
}

export default OurBlogs