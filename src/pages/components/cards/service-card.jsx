import Image from 'next/image'
import React from 'react'

const ServiceCard = ({img , name , data}) => {
  return (
    <div className="border-[#858587] border-4 md:p-4 sm:p-3 p-2 rounded-xl group">
        <div className="relative md:h-72 sm:h-56 h-44 w-full">
            <Image src={img} alt="" fill className="object-cover rounded-xl" />
            <p className="group-hover:flex hidden text-center bg-black/50 absolute top-0 left-0 h-full w-full text-lg p-4 justify-center items-center transition-transform font-semibold">
            {data}
            </p>
        </div>
        <p className="md:text-xl sm:text-base text-sm font-semibold text-white text-center p-2 md:px-2">{name}</p>
    </div>
  )
}

export default ServiceCard