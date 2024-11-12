/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ServiceHeroSection = ({name,subname, img}) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 md:h-[40vw] sm:h-[60vw] h-[80vw] text-white overflow-hidden">
  <div className="absolute inset-0">
    <img
      src={img}
      alt="Background Image"
      className="object-cover object-center w-full h-full"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
  <div className="font-medium text-center mt-16">
        <p className="text-primary-main text-xl">{name}</p>
        <p className="text-[#FFFFFF] md:text-6xl sm:text-4xl text-3xl font-semibold">{subname}</p>
    </div>
  </div>
</div>

  )
}

export default ServiceHeroSection